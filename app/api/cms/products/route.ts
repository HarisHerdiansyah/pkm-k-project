import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';
import { errorHandler, formDataToObject } from '@/lib/utils';
import { deleteMultipleObjects, uploadObject } from '@/services/storage';
import { ERROR, SUCCESS } from '@/lib/constants';
import { db } from '@/lib/prisma';

export async function POST(req: Request) {
  const formData = await req.formData();
  if (!formData) {
    return errorHandler({ message: 'Data empty', status: ERROR.BAD_REQUEST });
  }

  const objectData = formDataToObject(formData);

  const fileArray = (
    Array.isArray(objectData.productImage)
      ? objectData.productImage
      : [objectData.productImage]
  ).map((file: any) => {
    const identifier = uuidv4();
    return {
      bucket: process.env.R2_BUCKET_NAME as string,
      key: `products/${identifier}.${file.name.split('.')[1]}`,
      body: file,
      type: file.type,
    };
  });

  try {
    const uploadedObjects = fileArray.map((file: any) => uploadObject(file));
    await Promise.all(uploadedObjects);

    await db.$transaction(async (tx) => {
      const { itemName, price, description, marketplaceLink } = objectData;
      const product = await tx.products.create({
        data: {
          item_name: itemName as string,
          price: parseFloat(price as string),
          description: description as string,
        },
      });

      const idProduct = product.product_id;
      await tx.productLinks.createMany({
        data: [
          {
            product_id: idProduct,
            link: (marketplaceLink as string).split('=')[1],
          },
        ],
      });

      const productImages = fileArray.map((file) => ({
        product_id: idProduct,
        image_id: file.key.substring(
          file.key.indexOf('/') + 1,
          file.key.indexOf('.'),
        ),
        image_link: file.key,
      }));

      await tx.productImage.createMany({
        data: productImages,
      });
    });

    return NextResponse.json(
      {
        message: 'New Product Created',
      },
      { status: SUCCESS.MUTATION },
    );
  } catch (e) {
    console.error('Error POST /api/cms/products', e);

    if (e instanceof Prisma.PrismaClientValidationError) {
      await deleteMultipleObjects(
        process.env.R2_BUCKET_NAME as string,
        fileArray.map((file) => ({ Key: file.key })),
      );

      return errorHandler({
        message: 'Prisma Client Validation Error',
        status: ERROR.INTERNAL_SERVER_ERROR,
      });
    }

    return errorHandler({
      message: 'Internal Server Error',
      status: ERROR.INTERNAL_SERVER_ERROR,
    });
  }
}

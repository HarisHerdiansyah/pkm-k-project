import { errorHandler } from '@/lib/utils';
import { ERROR, SUCCESS } from '@/lib/constants';
import { db } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    await db.$transaction(async (tx) => {
      await tx.productImage.deleteMany({
        where: { product_id: id },
      });

      await tx.productLinks.deleteMany({
        where: { product_id: id },
      });

      await tx.products.delete({
        where: { product_id: id },
      });
    });
    revalidatePath('/cms/products');
    return NextResponse.json(
      {
        message: 'Product deleted successfully',
      },
      { status: SUCCESS.MUTATION },
    );
  } catch (e) {
    console.error('Error DELETE /api/cms/products', e);

    return errorHandler({
      message: 'Internal Server Error',
      status: ERROR.INTERNAL_SERVER_ERROR,
    });
  }
}

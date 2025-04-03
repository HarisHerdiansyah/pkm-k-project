'use client';

import { useImmer } from 'use-immer';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ImageInput from './ImageInput';
import FieldInput from './FieldInput';
import { insertProduct } from '@/services/products';

export type ProductImagePayload = {
  key: string;
  fileData: File;
  preview: string;
  name: string;
};

export type ProductPayload = {
  itemName: string;
  price: number;
  description: string;
  marketplaceLink: Record<string, string>;
  productImage: ProductImagePayload[];
};

export default function ProductForm() {
  const router = useRouter();
  const [productPayload, setProductPayload] = useImmer<ProductPayload>({
    itemName: '',
    price: 0.0,
    description: '',
    marketplaceLink: {},
    productImage: [],
  });

  const onSubmit = async () => {
    const payload = new FormData();
    payload.append('itemName', productPayload.itemName);
    payload.append('price', productPayload.price.toString());
    payload.append('description', productPayload.description);

    const links = Object.entries(productPayload.marketplaceLink);
    for (const [k, v] of links) {
      payload.append('marketplaceLink', `${k}=${v}`);
    }

    const images = productPayload.productImage.map((img) => img.fileData);
    images.forEach((image) => payload.append('productImage', image));

    const response = await insertProduct(payload);
    if (response?.ok) router.replace('/cms/products');
  };

  return (
    <>
      <FieldInput product={productPayload} setProduct={setProductPayload} />
      <ImageInput product={productPayload} setProduct={setProductPayload} />
      <div className='flex items-center justify-between mt-10'>
        <Button
          variant='destructive'
          onClick={() => router.replace('/cms/products')}
        >
          Go Back
        </Button>
        <Button className='bg-green-600 hover:bg-green-700' onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

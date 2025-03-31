'use client';

import { useImmer } from 'use-immer';
import { Button } from '@/components/ui/button';
import ImageInput from './ImageInput';
import FieldInput from './FieldInput';

export type MarketplaceLink = {
  shopeeLink: string;
  whatsappLink: string;
  gmailLink: string;
};

export type ProductImagePayload = {
  id: string;
  fileData: File;
  preview: string;
  name: string;
};

export type ProductPayload = {
  itemName: string;
  price: number;
  description: string;
  marketplaceLink: MarketplaceLink;
  productImage: ProductImagePayload[];
};

export default function ProductForm() {
  const [productPayload, setProductPayload] = useImmer<ProductPayload>({
    itemName: '',
    price: 0.0,
    description: '',
    marketplaceLink: {
      shopeeLink: '',
      whatsappLink: '',
      gmailLink: '',
    },
    productImage: [],
  });

  const onSubmit = () => {
    const payload = new FormData();
    payload.append('itemName', productPayload.itemName);
    payload.append('price', productPayload.price.toString());
    payload.append('description', productPayload.description);

    const links = Object.values(productPayload.marketplaceLink);
    links.forEach((link) => payload.append('marketplaceLink', link));

    const images = productPayload.productImage.map((img) => {
      return img.fileData;
    });
    images.forEach((image) => payload.append('productImage', image));
  };

  return (
    <>
      <FieldInput product={productPayload} setProduct={setProductPayload} />
      <ImageInput product={productPayload} setProduct={setProductPayload} />
      <div className='flex items-center justify-between mt-10'>
        <Button variant='destructive'>Go Back</Button>
        <Button className='bg-green-600 hover:bg-green-700' onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

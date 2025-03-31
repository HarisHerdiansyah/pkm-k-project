import Image from 'next/image';
import { ChangeEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Updater } from 'use-immer';
import { MarketplaceLink, ProductPayload } from './ProductForm';

export default function FieldInput({
  product,
  setProduct,
}: {
  product: ProductPayload;
  setProduct: Updater<ProductPayload>;
}) {
  const onFieldInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setProduct((draft) => {
      if (e.target.name && e.target.id.includes('marketplace')) {
        const key = e.target.name as keyof MarketplaceLink;
        draft.marketplaceLink[key] = e.target.value;
      } else {
        draft[e.target.id as keyof ProductPayload] = e.target.value as never;
      }
    });
  };

  return (
    <div id='field-input' className='my-5'>
      <h3 className='text-lg mb-2'>Field Input</h3>
      <div className='grid grid-cols-2 gap-y-4 gap-x-6'>
        <div id='form-control'>
          <Label htmlFor='itemName' className='block mb-2'>
            Item Name:
          </Label>
          <Input
            id='itemName'
            type='text'
            autoComplete='off'
            value={product.itemName}
            onChange={onFieldInputChange}
          />
        </div>
        <div id='form-control'>
          <Label htmlFor='price' className='block mb-2'>
            Price:
          </Label>
          <Input
            id='price'
            type='number'
            autoComplete='off'
            value={product.price}
            onChange={onFieldInputChange}
          />
        </div>
        <div id='form-control'>
          <Label htmlFor='description' className='block mb-2'>
            Description:
          </Label>
          <Textarea
            id='description'
            rows={5}
            value={product.description}
            onChange={onFieldInputChange}
          />
        </div>
        <div id='form-control' className='space-y-3.5'>
          <p>Marketplace Link:</p>
          <div className='flex gap-x-3'>
            <Image src='/svg/shopee.svg' alt='Shopee' width={28} height={28} />
            <Input
              id='marketplaceLink'
              name='shopeeLink'
              type='text'
              autoComplete='off'
              value={product.marketplaceLink.shopeeLink}
              onChange={onFieldInputChange}
            />
          </div>
          <div className='flex gap-x-2'>
            <Image
              src='/svg/whatsapp.svg'
              alt='WhatsApp'
              width={32}
              height={32}
            />
            <Input
              id='marketplaceLink'
              name='whatsappLink'
              type='text'
              autoComplete='off'
              value={product.marketplaceLink.whatsappLink}
              onChange={onFieldInputChange}
            />
          </div>
          <div className='flex gap-x-3'>
            <Image src='/svg/gmail.svg' alt='Gmail' width={26} height={32} />
            <Input
              id='marketplaceLink'
              name='gmailLink'
              type='text'
              autoComplete='off'
              value={product.marketplaceLink.gmailLink}
              onChange={onFieldInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

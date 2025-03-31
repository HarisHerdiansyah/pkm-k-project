import Image from 'next/image';
import { TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MarketplacePopover } from '@/components/products';
import { toIDR } from '@/lib/utils';

const products = [
  {
    id: '0481e38e-e2d1-4254-a0ce-4e1687b12939',
    price: toIDR(180000),
    name: 'Acrophobia Fragrance',
    bgPath: '/png/products/Acrophobia.png',
  },
  {
    id: '5d5d17ce-0265-4e36-867e-9941dc76967b',
    price: toIDR(160000),
    name: 'Claustrophobia Fragrance',
    bgPath: '/png/products/Claustrophobia.png',
  },
  {
    id: 'a3e187f2-4764-414a-8638-fe3e88c452fe',
    price: toIDR(175000),
    name: 'Phasmophobia Fragrance',
    bgPath: '/png/products/Phasmophobia.png',
  },
  {
    id: '9caaca67-99f4-4fb7-8b37-82ca6b4aa1f8',
    price: toIDR(320000),
    name: 'Thalassophobia Fragrance',
    bgPath: '/png/products/Thalassophobia.png',
  },
  {
    id: '9cafca67-09f4-1fb7-8a37-82ca6h4ah1q8',
    price: toIDR(360000),
    name: 'Trypophobia Fragrance',
    bgPath: '/png/products/Trypophobia.png',
  },
];

export default function FragranceContent() {
  return (
    <TabsContent
      value='fragrance'
      className='flex gap-8 flex-wrap justify-center'
    >
      {products.map((prod) => (
        <Card key={prod.id} className='max-w-[300px] h-fit rounded'>
          <CardHeader>
            <Image width={250} height={200} src={prod.bgPath} alt={prod.name} />
          </CardHeader>
          <CardContent>
            <CardTitle>{prod.name}</CardTitle>
            <CardDescription className='mt-2'>
              A unique blend of natural essences for your daily wellness routine
            </CardDescription>
          </CardContent>
          <CardFooter className='flex justify-between items-center'>
            <span className='text-base font-bold'>{prod.price}</span>
            {/* <CircleEllipsis size={32} className="hover:cursor-pointer" /> */}
            <MarketplacePopover />
          </CardFooter>
        </Card>
      ))}
    </TabsContent>
  );
}

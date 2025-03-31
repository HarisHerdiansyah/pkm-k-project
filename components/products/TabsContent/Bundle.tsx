import { ArrowRight } from 'lucide-react';
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

export default function BundleContent() {
  return (
    <TabsContent
      value='bundle'
      className='flex flex-wrap justify-center md:justify-start gap-8'
    >
      <Card className='max-w-[300px] h-fit rounded'>
        <CardHeader>
          <div className='w-[250px] h-[200px] bg-slate-300'></div>
        </CardHeader>
        <CardContent>
          <CardTitle>Essential Fragrance 1</CardTitle>
          <CardDescription className='mt-2'>
            Complete therapy package with essential oils and wellness products
          </CardDescription>
          <ul className='mt-4 space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <ArrowRight className='w-4 h-4' />
              Essential Oils Set
            </li>
            <li className='flex items-center gap-2'>
              <ArrowRight className='w-4 h-4' />
              Aromatherapy Diffuser
            </li>
            <li className='flex items-center gap-2'>
              <ArrowRight className='w-4 h-4' />
              Wellness Guide
            </li>
          </ul>
        </CardContent>
        <CardFooter className='flex justify-between items-center'>
          <span className='text-lg font-bold'>Rp180.000</span>
          <MarketplacePopover />
        </CardFooter>
      </Card>
    </TabsContent>
  );
}

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bundle, Fragrance, Subscription } from '@/components/products';

export default function page() {
  return (
    <>
      <Tabs defaultValue='fragrance' className='space-y-8'>
        <TabsList className='grid w-full grid-cols-3 max-w-[600px]'>
          <TabsTrigger
            value='fragrance'
            className='data-[state=active]:bg-theme1 cursor-pointer'
          >
            Fragrance
          </TabsTrigger>
          <TabsTrigger
            value='bundle'
            className='data-[state=active]:bg-theme3 cursor-pointer'
          >
            Bundle
          </TabsTrigger>
          <TabsTrigger
            value='subscription'
            className='data-[state=active]:bg-theme2 cursor-pointer'
          >
            Subscription
          </TabsTrigger>
        </TabsList>
        <Fragrance />
        <Bundle />
        <Subscription />
      </Tabs>
    </>
  );
}

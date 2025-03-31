import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toIDR } from '@/lib/utils';
import clsx from 'clsx';

const subs = [
  {
    id: '0481e38e-e2d1-4254-a0ce-4e1687b12939',
    price: toIDR(300000),
    name: 'Bronze',
    duration: 1,
  },
  {
    id: '5d5d17ce-0265-4e36-867e-9941dc76967b',
    price: toIDR(750000),
    name: 'Silver',
    duration: 3,
  },
  {
    id: 'a3e187f2-4764-414a-8638-fe3e88c452fe',
    price: toIDR(1600000),
    name: 'Gold',
    duration: 6,
  },
];
export default function SubscriptionContent() {
  return (
    <TabsContent
      value='subscription'
      className='flex gap-5 justify-around flex-wrap'
    >
      {subs.map((sub) => (
        <Card key={sub.id} className='w-fit'>
          <CardHeader>
            <CardTitle className='md:text-xl'>{sub.name} Plan</CardTitle>
            <CardDescription>Monthly Subscription</CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-xl md:text-2xl font-bold mb-4'>
              {sub.price}/{sub.duration}-{sub.duration > 1 ? 'months' : 'month'}
            </p>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-2'>
                <ArrowRight className='w-4 h-4' />
                Monthly Fragrance Delivery
              </li>
              <li className='flex items-center gap-2'>
                <ArrowRight className='w-4 h-4' />
                Wellness Consultation
              </li>
              <li className='flex items-center gap-2'>
                <ArrowRight className='w-4 h-4' />
                Priority Support
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className={clsx('w-full', {
                'bg-amber-400 text-black hover:bg-amber-500':
                  sub.duration === 6,
                'bg-zinc-600 hover:bg-zinc-700': sub.duration === 3,
                'bg-amber-600 hover:bg-amber-700': sub.duration === 1,
              })}
            >
              Subscribe Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </TabsContent>
  );
}

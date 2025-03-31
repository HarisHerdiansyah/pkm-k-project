'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CircleEllipsis } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function MarketplacePopover() {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger className='relative'>
        <CircleEllipsis size={32} />
      </PopoverTrigger>
      <PopoverContent align='end' className='w-[200px]' side='top'>
        <ul className='space-y-4'>
          <li
            className='cursor-pointer flex items-center gap-x-1'
            onClick={() => router.push('/')}
          >
            <Image src='/svg/shopee.svg' alt='Shopee' width={28} height={28} />
            Shopee
          </li>
          <li
            className='cursor-pointer flex items-center'
            onClick={() => router.push('/')}
          >
            <Image
              src='/svg/whatsapp.svg'
              alt='WhatsApp'
              width={32}
              height={32}
            />
            WhatsApp
          </li>
          <li
            className='cursor-pointer flex items-center gap-x-1'
            onClick={() => router.push('/')}
          >
            <Image src='/svg/gmail.svg' alt='Shopee' width={26} height={26} />
            Gmail
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

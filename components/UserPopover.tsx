'use client';

import { useRouter } from 'next/navigation';
import { CircleUserRound, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function UserPopover() {
  const router = useRouter();

  return (
    <Popover>
      <PopoverTrigger className='relative cursor-pointer'>
        <CircleUserRound size={36} />
      </PopoverTrigger>
      <PopoverContent align='end' className='w-[200px]'>
        <ul className='space-y-4'>
          <li
            className='cursor-pointer flex gap-1.5'
            onClick={() => router.push('/profile')}
          >
            <CircleUserRound />
            Profile
          </li>
          <li
            className='cursor-pointer flex gap-1.5 text-red-500'
            onClick={() => signOut()}
          >
            <LogOut />
            Logout
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

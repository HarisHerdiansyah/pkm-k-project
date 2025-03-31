import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';

export default function SheetSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden cursor-pointer' asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent side='right' className='w-[250px] bg-[url(/pastel-bg.jpg)]'>
        <SheetHeader>
          <SheetTitle className=''>
            <Image
              src='/logo.png'
              alt='Logo Mufiko'
              className='mx-auto mb-4'
              width={92}
              height={69}
            />
          </SheetTitle>
        </SheetHeader>
        <nav className='flex flex-col space-y-4 mt-8'>
          <Link href='/products' className='hover:underline'>
            Products
          </Link>
          <Link href='/profile' className='hover:underline'>
            Profile
          </Link>
          <Link href='/'>
            <button className='cursor-pointer rounded-xl bg-primary-foreground px-6 sm:px-8 py-2 sm:py-2.5 text-black transition-colors'>
              Logout
            </button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

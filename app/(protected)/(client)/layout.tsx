import { SheetSidebar } from '@/components/home';
import UserPopover from '@/components/UserPopover';
import Link from 'next/link';
import Image from 'next/image';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className='flex items-center justify-between bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-4 font-baskerville'>
        <Link href='/home'>
          <Image
            src='/logo/logo.png'
            alt='Logo Mufiko'
            width={92}
            height={69}
          />
        </Link>
        <aside className='hidden md:flex items-center space-x-8'>
          <Link href='/products' className='hover:underline'>
            Products
          </Link>
          <UserPopover />
        </aside>
        <SheetSidebar />
      </nav>
      <div className='h-1 w-full bg-gradient-six'></div>
      <div className='py-8 px-4 sm:px-8 md:px-12 lg:px-16 font-baskerville'>
        {children}
      </div>
    </>
  );
}

'use client';

import Link from 'next/link';
import {
  Boxes,
  LayoutPanelLeft,
  Newspaper,
  Settings,
  UsersRound,
  Video,
  LogOut,
  ScanBarcode,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const menuItem = [
  {
    key: '2773df49-52a5-42e4-abec-c89c6fdfbab0',
    href: '/cms/dashboard',
    icon: LayoutPanelLeft,
    label: 'Dashboard',
  },
  {
    key: '791e1a79-28fd-4358-982a-e40d77d6e655',
    href: '/cms/products',
    icon: Boxes,
    label: 'Products',
  },
  {
    key: '509a1f22-b1f8-4fe8-aedf-5320709fa627',
    href: '/cms/transactions',
    icon: ScanBarcode,
    label: 'Transactions',
  },
  {
    key: 'bae59008-3d8e-4661-b654-b10df93514e1',
    href: '/cms/customer',
    icon: UsersRound,
    label: 'Customer',
  },
  {
    key: '9cf6666a-8dd8-45fe-9eeb-3f6d89c46e90',
    href: '/cms/vr-content',
    icon: Video,
    label: 'VR Content',
  },
  {
    key: 'df3284d5-7bf3-4dd1-bbf3-4da05ffdd5a9',
    href: '/cms/articles',
    icon: Newspaper,
    label: 'Articles',
  },
  {
    key: '11a7f99c-8fb4-4997-812a-383cb3cd005a',
    href: '/cms/settings',
    icon: Settings,
    label: 'Settings',
  },
];

export default function SidebarLayout() {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible='icon'>
      {state === 'expanded' && (
        <SidebarHeader
          className='text-center text-2xl font-semibold'
          style={{
            backgroundImage: 'url(/background/pastel-bg.jpg)',
          }}
        >
          <Image
            src='/logo/logo.png'
            alt='Logo Mufiko'
            className='mx-auto mb-4'
            width={92}
            height={69}
          />
        </SidebarHeader>
      )}
      <SidebarContent
        className='px-2'
        style={{
          backgroundImage: 'url(/background/pastel-bg.jpg)',
        }}
      >
        <SidebarMenu>
          {menuItem.map((item) => (
            <SidebarMenuItem className='rounded-md' key={item.key}>
              <SidebarMenuButton asChild>
                <Link href={item.href}>
                  <item.icon />
                  {item.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className='rounded-md'>
            <SidebarMenuButton
              className='bg-red-500 cursor-pointer hover:bg-red-600 hover:text-white text-white'
              onClick={() => signOut()}
              asChild
            >
              <span>
                <LogOut /> Logout
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

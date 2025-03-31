import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarLayout, BreadcrumbCMS } from '@/components/cms';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <main className='p-8 w-full'>
        <BreadcrumbCMS />
        <section className='my-5'>{children}</section>
      </main>
    </SidebarProvider>
  );
}

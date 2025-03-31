import AFrameProvider from '@/components/AFrameProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AFrameProvider>{children}</AFrameProvider>;
}

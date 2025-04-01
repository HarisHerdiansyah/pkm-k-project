import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PKM K Project',
  description: 'Program Kreativitas Mahasiswa "MindScent"',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

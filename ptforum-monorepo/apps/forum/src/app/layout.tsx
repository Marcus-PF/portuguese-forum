// apps/forum/src/app/layout.tsx
import '@ptforum/ui/global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portuguese Forum',
  description: 'A community platform for the Portuguese community in South Africa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-secondary'>{children}</body>
    </html>
  );
}

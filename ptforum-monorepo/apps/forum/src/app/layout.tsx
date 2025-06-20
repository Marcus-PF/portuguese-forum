// apps/forum/src/app/layout.tsx
import './global.css';

export const metadata = {
  title: 'Portuguese Forum',
  description: 'A community platform for the Portuguese community in South Africa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

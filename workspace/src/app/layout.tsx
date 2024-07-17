import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// biome-ignore lint/style/useNamingConvention: <explanation>
const inter = Inter({ subsets: ['latin'] });

// biome-ignore lint/style/useNamingConvention: <explanation>
export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  // biome-ignore lint/style/useNamingConvention: <explanation>
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

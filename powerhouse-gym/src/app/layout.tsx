import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Powerhouse Gym | Nidasoshi Gate',
  description: 'Train hard at Nidasoshi premier fitness facility under Coach Vinay Patil.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
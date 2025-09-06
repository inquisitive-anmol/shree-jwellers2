import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shree Ganesh Jewellers - Premium Gold & Diamond Jewelry | Raipur',
  description: 'Discover exquisite gold and diamond jewelry at Shree Ganesh Jewellers, Raipur. Traditional craftsmanship meets modern elegance. Shop rings, necklaces, earrings & more.',
  keywords: 'jewelry, gold, diamond, Raipur, traditional jewelry, wedding jewelry, gold jewelry, Shree Ganesh Jewellers',
  authors: [{ name: 'Shree Ganesh Jewellers' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Shree Ganesh Jewellers - Premium Jewelry Collection',
    description: 'Exquisite gold and diamond jewelry crafted with tradition and excellence',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="h-full w-full font-body bg-cream-gradient text-brown antialiased">
        <main className="h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
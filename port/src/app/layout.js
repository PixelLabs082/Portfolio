import { Figtree, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/fx/MotionProvider';
import SmoothScroll from '@/components/fx/SmoothScroll';
import Scene from '@/components/fx/Scene';
import Cursor from '@/components/fx/Cursor';
import ThemeScrollbar from '@/components/fx/ThemeScrollbar';
import { site } from '@/data/site';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
  adjustFontFallback: false,
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: 'Software developer for founders and small teams. Applications and websites, delivered on the date we agree.',
  icons: {
    icon: [{ url: '/icon', type: 'image/png' }],
    apple: [{ url: '/apple-icon', type: 'image/png' }],
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: 'Software developer for founders and small teams. Available for freelance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: 'Software developer for founders and small teams. Available for freelance.',
  },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full bg-bg font-sans text-fg antialiased`}>
        <MotionProvider>
          <SmoothScroll />
          <Scene />
          <Cursor />
          <ThemeScrollbar />
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

import { Figtree, Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MotionProvider from '@/components/fx/MotionProvider';
import SmoothScroll from '@/components/fx/SmoothScroll';
import Scene from '@/components/fx/Scene';
import Cursor from '@/components/fx/Cursor';
import { site } from '@/data/site';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-figtree' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: 'Full-stack developer building production-ready websites and web apps for founders and small teams.',
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${inter.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        <MotionProvider>
          <SmoothScroll />
          <Scene />
          <Cursor />
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

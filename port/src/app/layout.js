import { Inter, Syne } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { site } from '@/data/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const syne = Syne({ subsets: ['latin'], weight: '700', variable: '--font-syne' });

export const metadata = {
  title: `${site.name} — ${site.role}`,
  description: 'Full-stack developer building production-ready websites and web apps for founders and small teams.',
};

export const viewport = {
  themeColor: '#0b0b0b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} data-theme="dark" suppressHydrationWarning>
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

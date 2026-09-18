'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from '@/lib/icons';
import Clock from '@/components/fx/Clock';
import Magnetic from '@/components/fx/Magnetic';
import { SocialLink } from '@/components/ui/SocialLinks';
import { site } from '@/data/site';
import { riseEase } from '@/lib/motion';
import { btnPrimary, iconBtn } from '@/lib/ui';

function Header() {
  const [theme, setTheme] = useState('dark');
  const [themeReady, setThemeReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
    setThemeReady(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="pointer-events-none relative z-[3] flex items-center justify-between gap-4 px-4 py-3.5 sm:px-7 sm:py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="brand-mark pointer-events-auto relative z-[4] text-[1.05rem] font-medium tracking-tight"
        >
          {site.brand.replace('_', '')}
          <span>_</span>
        </a>

        <nav className={`pointer-events-auto hidden items-center gap-7 lg:flex ${menuOpen ? 'lg:hidden' : ''}`} aria-label="Primary">
          {site.nav.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-fg"
            >
              <span className="text-[11px] text-green">0{index + 1} /</span>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="pointer-events-auto relative z-[4] flex items-center gap-2.5 sm:gap-4">
          <a
            className="hidden text-[12px] font-medium uppercase tracking-[0.14em] text-muted transition-colors duration-300 hover:text-fg xl:inline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
          <Clock />
          <button
            type="button"
            className={iconBtn}
            onClick={() => {
              const next = theme === 'dark' ? 'light' : 'dark';
              setTheme(next);
              document.documentElement.setAttribute('data-theme', next);
              window.localStorage.setItem('theme', next);
            }}
            aria-label={!themeReady || theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {!themeReady || theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            className={`inline-flex h-[42px] min-w-[5.6rem] items-center justify-center rounded-[50px] px-4 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
              menuOpen
                ? 'bg-accent text-ink'
                : 'border border-line bg-glass text-fg backdrop-blur-md hover:border-fg'
            }`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-gradient pointer-events-auto fixed inset-0 z-[1] flex flex-col justify-between px-6 pt-[108px] pb-10 sm:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: riseEase }}
          >
            <nav className="menu-nav flex flex-col gap-1">
              {site.nav.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="menu-link flex items-baseline gap-4 text-[clamp(3rem,10vw,7rem)] leading-[0.92] font-medium tracking-[-0.055em] text-fg transition-opacity duration-300"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.07 * index, ease: riseEase }}
                >
                  <span className="text-[0.85rem] text-green">0{index + 1} /</span>
                  {link.name}
                </motion.a>
              ))}
            </nav>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <Magnetic>
                <a className={btnPrimary} href="#contact" onClick={closeMenu}>
                  start a project
                </a>
              </Magnetic>
              <div className="flex flex-wrap gap-x-5 gap-y-3 text-[12px] uppercase tracking-[0.14em] text-muted">
                {site.socials.map((link) => (
                  <SocialLink
                    key={link.name}
                    name={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="hover:text-fg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;

'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Moon, Sun } from '@/lib/icons';
import Clock from '@/components/fx/Clock';
import Magnetic from '@/components/fx/Magnetic';
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-4 sm:px-7 sm:py-5">
      <nav className="pointer-events-auto relative z-[2] hidden items-center gap-8 lg:flex" aria-label="Primary">
        {site.nav.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:text-fg"
          >
            <span className="text-[11px]">0{index + 1} /</span>
            {link.name}
          </a>
        ))}
      </nav>

      <div className="pointer-events-auto relative z-[2] ml-auto flex items-center gap-3 sm:gap-5">
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
          className="inline-flex h-[44px] min-w-[5.4rem] items-center justify-center rounded-[50px] border border-line bg-glass px-4 text-[12px] font-medium uppercase tracking-[0.14em] text-fg backdrop-blur-md transition-colors duration-300 hover:border-fg"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-[1] flex flex-col justify-between bg-bg/96 px-7 pt-[110px] pb-10 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: riseEase }}
          >
            <nav className="flex flex-col gap-1">
              {site.nav.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex gap-4 text-[clamp(2.6rem,9vw,6rem)] leading-none font-medium tracking-[-0.05em] text-fg"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.06 * index, ease: riseEase }}
                >
                  <span className="mt-3 text-[0.85rem] text-muted">0{index + 1} /</span>
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
              <div className="flex flex-wrap gap-5 text-[12px] uppercase tracking-[0.14em] text-muted">
                {site.socials.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noreferrer"
                    onClick={closeMenu}
                    className="transition-colors hover:text-fg"
                  >
                    {link.name}
                  </a>
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

'use client';

import { motion } from 'motion/react';
import Magnetic from '@/components/fx/Magnetic';
import { SceneModes } from '@/components/fx/Scene';
import { site } from '@/data/site';
import { riseEase } from '@/lib/motion';
import { btnPrimary, container } from '@/lib/ui';

function Hero() {
  return (
    <section id="home" className="relative z-[1] flex min-h-[100svh] items-end overflow-hidden pt-28 pb-24 sm:items-center">
      <div className={`${container} grid w-full items-end gap-10 lg:grid-cols-[minmax(0,0.86fr)_1.14fr] lg:items-center`}>
        <div className="max-w-[40rem]">
          <motion.h1
            className="brand-mark font-medium text-[clamp(4.5rem,16vw,12.5rem)] leading-[0.85] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: riseEase }}
          >
            {site.brand.replace('_', '')}
            <span>_</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-[34ch] text-[18px] leading-7 text-muted"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: riseEase }}
          >
            {site.hero.body}
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.16, ease: riseEase }}
          >
            <p className="inline-flex items-center gap-2 text-[15px] text-fg">
              <span className="pulse-dot h-2 w-2 rounded-full bg-green" />
              {site.hero.eyebrow}
            </p>
            <Magnetic>
              <a className={btnPrimary} href={site.hero.primaryCta.href}>
                {site.hero.primaryCta.label}
              </a>
            </Magnetic>
          </motion.div>
        </div>
        <div className="hidden min-h-[28rem] lg:block" aria-hidden="true" />
      </div>

      <motion.div
        className="absolute bottom-8 left-4 z-[2] sm:left-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <SceneModes />
      </motion.div>
      <p className="absolute right-4 bottom-8 text-[13px] text-muted sm:right-7">© 2026</p>
    </section>
  );
}

export default Hero;

'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Magnetic from '@/components/fx/Magnetic';
import { ChevronLeft, ChevronRight } from '@/lib/icons';
import { site } from '@/data/site';
import { fade } from '@/lib/motion';
import { btnPrimary, container, section } from '@/lib/ui';

function Services() {
  const [index, setIndex] = useState(0);
  const service = site.services[index];

  const prev = () => setIndex((value) => (value === 0 ? site.services.length - 1 : value - 1));
  const next = () => setIndex((value) => (value + 1) % site.services.length);

  return (
    <section id="services" className={section}>
      <div className={container}>
        <div className="grid min-h-[28rem] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <AnimatePresence mode="wait">
            <motion.h2
              key={service.number}
              className="mb-0 text-[clamp(3.6rem,10vw,8rem)] leading-[0.86] font-medium tracking-[-0.05em]"
              {...fade}
            >
              {service.title}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div key={`${service.number}-copy`} {...fade}>
              <p className="max-w-[42ch] text-[18px] leading-7 text-muted">{service.description}</p>
              <ul className="mt-8 flex list-none flex-col gap-3 p-0 text-[16px] text-muted">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span>{'//'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Magnetic className="mt-10">
                <a className={btnPrimary} href="#contact">
                  start a project
                </a>
              </Magnetic>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <p className="text-[12px] uppercase tracking-[0.16em] text-muted">
            {service.number} / 0{site.services.length}
          </p>
          <div className="flex gap-2">
            <button type="button" className="rail-btn" onClick={prev} aria-label="Previous service">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="rail-btn" onClick={next} aria-label="Next service">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

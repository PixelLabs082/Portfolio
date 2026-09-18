'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Reveal from '@/components/fx/Reveal';
import { ChevronLeft, ChevronRight } from '@/lib/icons';
import { site } from '@/data/site';
import { riseEase } from '@/lib/motion';
import { container, displayHeading, section } from '@/lib/ui';

function Process() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((value) => (value === 0 ? site.process.length - 1 : value - 1));
  const next = () => setIndex((value) => (value + 1) % site.process.length);

  return (
    <section id="process" className={section}>
      <div className={container}>
        <Reveal>
          <h2 className={`${displayHeading} mb-12 md:mb-16`}>The Process</h2>
        </Reveal>
      </div>

      <div className="overflow-hidden pl-4 sm:pl-7">
        <motion.div
          className="flex gap-6"
          animate={{ x: `calc(-${index} * (min(86vw, 46rem) + 1.5rem))` }}
          transition={{ duration: 0.75, ease: riseEase }}
        >
          {site.process.map((step) => (
            <article
              key={step.number}
              className="grid min-h-[24rem] w-[min(86vw,46rem)] shrink-0 grid-rows-[auto_1fr_auto] rounded-[40px] border border-line bg-card/60 p-8 backdrop-blur-sm md:p-12"
            >
              <h3 className="max-w-[16ch] text-[clamp(1.8rem,4vw,3.1rem)] leading-[1.05] font-medium tracking-[-0.045em]">
                {step.title}
              </h3>
              <p className="self-end text-[clamp(4.5rem,12vw,8.5rem)] leading-none font-medium tracking-[-0.07em] text-muted">
                {step.number}
              </p>
              <p className="mt-6 max-w-[42ch] text-[18px] leading-7 text-muted">{step.body}</p>
            </article>
          ))}
        </motion.div>
      </div>

      <div className={`${container} mt-8 flex gap-2`}>
        <button type="button" className="rail-btn" onClick={prev} aria-label="Previous step">
          <ChevronLeft size={18} />
        </button>
        <button type="button" className="rail-btn" onClick={next} aria-label="Next step">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default Process;

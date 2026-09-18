'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Magnetic from '@/components/fx/Magnetic';
import { site } from '@/data/site';
import { btnPrimary } from '@/lib/ui';

function ServiceSlide({ service, index, count, progress }) {
  const x = useTransform(
    progress,
    index === 0 ? [0, 1] : [(index - 1) / (count - 1), index / (count - 1)],
    index === 0 ? ['0%', '0%'] : ['100%', '0%'],
  );

  return (
    <motion.article
      className="absolute inset-0 will-change-transform"
      style={{ x, zIndex: index + 1 }}
    >
      <div className="flex h-full min-h-0 flex-col justify-between rounded-[1.75rem] border border-line bg-card p-7 shadow-[-24px_0_48px_rgb(0_0_0_/_0.45)] sm:p-10 md:p-12">
        <div>
          {index === 0 && (
            <p className="mb-6 text-[12px] uppercase tracking-[0.16em] text-muted">Services</p>
          )}
          <p className="text-[13px] uppercase tracking-[0.16em] text-muted">
            {service.number} / {String(count).padStart(2, '0')}
          </p>
          <h2 className="mt-5 text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.88] font-medium tracking-[-0.05em]">
            {service.title}
          </h2>
          <p className="mt-6 max-w-[42ch] text-[18px] leading-7 text-muted">{service.description}</p>
        </div>
        <div>
          <ul className="flex list-none flex-col gap-2.5 p-0 text-[16px] text-muted">
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
        </div>
      </div>
    </motion.article>
  );
}

function Services() {
  const ref = useRef(null);
  const count = site.services.length;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="services" ref={ref} className="relative z-[1]" style={{ height: `${count * 100}vh` }}>
      <div className="service-hscroll sticky top-0 h-svh overflow-hidden">
        {site.services.map((service, index) => (
          <ServiceSlide
            key={service.number}
            service={service}
            index={index}
            count={count}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;

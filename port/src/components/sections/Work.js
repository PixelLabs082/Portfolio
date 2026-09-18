'use client';

import Rail from '@/components/fx/Rail';
import Reveal from '@/components/fx/Reveal';
import { site } from '@/data/site';
import { tag } from '@/lib/ui';

function Work() {
  return (
    <section id="work" className="relative z-[1] scroll-mt-[104px] py-[clamp(3rem,8vw,6rem)]">
      <div className="marquee mb-12">
        <div className="marquee-track font-medium text-[clamp(3.4rem,9vw,8rem)] leading-none tracking-[-0.05em]">
          <span className="px-8">Selected Work — Selected Work — Selected Work — </span>
          <span className="px-8">Selected Work — Selected Work — Selected Work — </span>
        </div>
      </div>

      <div className="pl-4 sm:pl-7">
        <Reveal>
          <Rail>
            {site.projects.map((project, index) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
                className="spot-card flex w-[min(86vw,28.5rem)] shrink-0 snap-start flex-col overflow-hidden"
              >
                <div className="mb-5 overflow-hidden rounded-[1.5rem]">
                  <div className="work-visual min-h-[19rem]" style={{ '--tone': `${18 + index * 8}%` }} />
                </div>
                <h3 className="brand-mark mb-3 text-[32px] leading-none font-medium tracking-[-0.04em]">
                  {project.title}
                  <span>_</span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  <span className={tag}>Industry</span>
                  <span className={tag}>{project.industry}</span>
                  <span className={tag}>Services</span>
                  {project.services.map((item) => (
                    <span className={tag} key={item}>{item}</span>
                  ))}
                  <span className={tag}>{project.year}</span>
                </div>
              </a>
            ))}
          </Rail>
        </Reveal>
      </div>
    </section>
  );
}

export default Work;

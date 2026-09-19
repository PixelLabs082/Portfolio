import Count from '@/components/fx/Count';
import Reveal from '@/components/fx/Reveal';
import { site } from '@/data/site';
import { container, displayHeading, section } from '@/lib/ui';

function About() {
  return (
    <section id="about" className={section}>
      <div className={`${container} mb-16 grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16`}>
        <Reveal>
          <h2 className={`${displayHeading} mb-0`}>{site.about.heading}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-[40ch] text-[22px] leading-8 font-medium tracking-[-0.03em] text-fg sm:text-[26px] sm:leading-9">
            {site.about.lead}
          </p>
          <p className="mt-6 max-w-[46ch] text-[16px] leading-7 text-muted sm:text-[18px]">{site.about.body}</p>
        </Reveal>
      </div>

      <div className={`${container} mb-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-10`}>
        {site.about.points.map((point, index) => (
          <article key={point.title}>
            <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-green">0{index + 1} /</p>
            <h3 className="mb-3 text-[20px] font-medium tracking-[-0.03em] sm:text-[22px]">{point.title}</h3>
            <p className="max-w-[32ch] text-[15px] leading-7 text-muted sm:text-[16px]">{point.text}</p>
          </article>
        ))}
      </div>

      <div className={`${container} mb-16`}>
        <h3 className="mb-2 text-[24px] font-medium tracking-[-0.04em]">Work Experience</h3>
        {site.experience.map((job) => (
          <article
            key={job.role}
            className="grid items-baseline gap-3 border-t border-line py-6 last:border-b md:grid-cols-[1fr_auto]"
          >
            <h4 className="text-[18px] font-medium tracking-[-0.03em] wrap-break-word sm:text-[22px]">{job.role}</h4>
            <p className="text-[0.92rem] text-muted">{job.period}</p>
          </article>
        ))}
      </div>

      <div className="marquee mb-16">
        <div className="marquee-track text-[clamp(2.4rem,6vw,5rem)] leading-none font-medium tracking-[-0.04em] text-muted">
          <span className="px-8">{site.ticker}</span>
          <span className="px-8">{site.ticker}</span>
        </div>
      </div>

      <div className={`${container} grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8`}>
        {site.stats.map((stat) => (
          <article key={stat.kicker}>
            <p className="mb-6 text-[0.86rem] text-muted">
              {'//'} {stat.kicker}
            </p>
            <strong className="mb-4 block font-display text-[clamp(4rem,8vw,6.5rem)] leading-none tracking-[-0.07em]">
              <Count value={stat.value} />
            </strong>
            <p className="max-w-[28ch] text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;

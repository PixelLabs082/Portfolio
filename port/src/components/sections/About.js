import Count from '@/components/fx/Count';
import Reveal from '@/components/fx/Reveal';
import { site } from '@/data/site';
import { btnSecondary, container, displayHeading, section } from '@/lib/ui';

function About() {
  return (
    <section id="about" className={section}>
      <div className={`${container} mb-16 grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20`}>
        <Reveal>
          <h2 className={`${displayHeading} mb-0`}>{site.about.heading}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-[46ch] text-[18px] leading-7 text-muted">{site.about.body}</p>
          <a className={`${btnSecondary} mt-8`} href={site.resume} download>
            download resume
          </a>
        </Reveal>
      </div>

      <div className={`${container} mb-16`}>
        <h3 className="mb-2 text-[24px] font-medium tracking-[-0.04em]">Work Experience</h3>
        {site.experience.map((job) => (
          <article
            key={job.role}
            className="grid items-baseline gap-3 border-t border-line py-6 last:border-b md:grid-cols-[1fr_auto]"
          >
            <h4 className="text-[22px] font-medium tracking-[-0.03em]">{job.role}</h4>
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
            <p className="mb-6 text-[0.86rem] text-muted">{'//'} {stat.kicker}</p>
            <strong className="mb-4 block font-display text-[clamp(4rem,8vw,6.5rem)] leading-none tracking-[-0.07em]">
              <Count value={stat.value} />
            </strong>
            <p className="max-w-[18ch] text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;

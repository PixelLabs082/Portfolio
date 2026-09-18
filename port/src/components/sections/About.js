import { site } from '@/data/site';
import { btnSecondary, container, section, sectionHeading, sectionLabel } from '@/lib/ui';

function About() {
  return (
    <section id="about" className={section}>
      <div className={container}>
        <div className={sectionLabel}>
          <span className="text-fg">04 /</span> About
        </div>
        <div className="mb-14 grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <h2 className={sectionHeading}>{site.about.heading}</h2>
          <div>
            {site.about.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 text-muted">{paragraph}</p>
            ))}
            <a className={`${btnSecondary} mt-2`} href={site.resume} download>
              Download resume
            </a>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {site.stats.map((stat) => (
            <article key={stat.label} className="rounded-3xl border border-line bg-card p-7">
              <strong className="mb-2 block font-display text-5xl">{stat.value}</strong>
              <p className="font-semibold">{stat.label}</p>
            </article>
          ))}
        </div>

        <div>
          <h3 className="mb-2 font-display text-[1.4rem] font-bold tracking-[-0.04em]">Work so far</h3>
          {site.experience.map((job) => (
            <article
              key={job.company}
              className="grid gap-5 border-t border-line py-7 last:border-b md:grid-cols-[220px_1fr]"
            >
              <p className="text-muted">{job.period}</p>
              <div>
                <h4 className="mb-1.5 font-display text-[1.3rem] font-bold tracking-[-0.04em]">{job.role}</h4>
                <p className="text-muted">{job.company} · {job.location}</p>
                <p className="text-muted">{job.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {site.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex rounded-full border border-line bg-card px-3 py-2 text-[0.85rem] text-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

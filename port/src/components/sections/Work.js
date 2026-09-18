import { ArrowUpRight } from '@/lib/icons';
import { site } from '@/data/site';
import { btnSecondary, container, section, sectionHead, sectionHeading, sectionLabel, sectionLead, tag } from '@/lib/ui';

function Work() {
  return (
    <section id="work" className={section}>
      <div className={container}>
        <div className={sectionHead}>
          <div>
            <div className={sectionLabel}>
              <span className="text-fg">01 /</span> Work
            </div>
            <h2 className={sectionHeading}>Selected work</h2>
            <p className={sectionLead}>
              Real builds — commerce, realtime, and the kind of product work clients actually hire for.
            </p>
          </div>
          <a className={btnSecondary} href="https://github.com/SANDY655" target="_blank" rel="noreferrer">
            Browse GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {site.featuredProjects.map((project) => (
            <a
              key={project.title}
              className="flex flex-col rounded-[28px] border border-line bg-card p-6 hover:border-line-strong"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="mb-2.5 flex justify-between text-[0.82rem] text-muted">
                <p>{project.category}</p>
                <ArrowUpRight size={18} />
              </div>
              <h3 className="mb-2.5 font-display text-[1.8rem] font-bold tracking-[-0.04em]">{project.title}</h3>
              <p className="text-muted">{project.problem}</p>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className={tag} key={item}>{item}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 border-t border-line">
          {site.moreProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-[22px] text-fg md:grid-cols-[1.4fr_1fr_auto]"
            >
              <span className="hover:underline hover:underline-offset-4">{project.title}</span>
              <em className="hidden font-normal not-italic text-muted md:block">{project.category}</em>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;

import { site } from '@/data/site';
import { container, section, sectionHead, sectionHeading, sectionLabel, sectionLead } from '@/lib/ui';

function Process() {
  return (
    <section id="process" className={section}>
      <div className={container}>
        <div className={sectionHead}>
          <div>
            <div className={sectionLabel}>
              <span className="text-fg">03 /</span> Process
            </div>
            <h2 className={sectionHeading}>How a project actually runs</h2>
            <p className={sectionLead}>
              Scope first, a working preview next, then a launch you can keep.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {site.process.map((step) => (
            <article key={step.number} className="min-h-[240px] rounded-[28px] border border-line bg-card p-8">
              <p className="mb-12 font-display text-[1.1rem] text-muted">{step.number}</p>
              <h3 className="mb-3.5 font-display text-[1.7rem] font-bold tracking-[-0.04em]">{step.title}</h3>
              <p className="text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;

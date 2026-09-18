import { site } from '@/data/site';
import { container, section, sectionHead, sectionHeading, sectionLabel, sectionLead } from '@/lib/ui';

function Services() {
  return (
    <section id="services" className={section}>
      <div className={container}>
        <div className={sectionHead}>
          <div>
            <div className={sectionLabel}>
              <span className="text-fg">02 /</span> Services
            </div>
            <h2 className={sectionHeading}>What I can take off your plate</h2>
            <p className={sectionLead}>
              Hire me for a site, a product slice, or the work of finishing something that has to ship.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {site.services.map((service) => (
            <article
              key={service.number}
              className="grid items-start gap-3 border-t border-line py-9 last:border-b md:grid-cols-[90px_1fr] md:gap-7"
            >
              <p className="font-display text-[1.4rem] text-muted">{service.number}</p>
              <div>
                <h3 className="mb-3 font-display text-[2rem] font-bold tracking-[-0.04em]">{service.title}</h3>
                <p className="max-w-[58ch] text-muted">{service.description}</p>
                <ul className="mt-[18px] flex list-none flex-wrap gap-x-[18px] gap-y-2.5 p-0 text-[0.88rem] text-muted">
                  {service.items.map((item) => (
                    <li key={item}>{'//'} {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

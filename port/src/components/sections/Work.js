import { site } from '@/data/site';

function Work() {
  return (
    <section id="work" className="relative z-[1]">
      <div className="marquee py-10">
        <div className="marquee-track font-medium text-[clamp(3.4rem,9vw,8rem)] leading-none tracking-[-0.05em]">
          <span className="px-8">{site.workMarquee}</span>
          <span className="px-8">{site.workMarquee}</span>
        </div>
      </div>

      {site.projects.map((project, index) => (
        <article
          key={project.title}
          className="stack-card"
          style={{ zIndex: index + 1 }}
        >
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            data-cursor="view"
            className="spot-card flex h-full w-full flex-col"
          >
            <div className="flex shrink-0 items-start justify-between gap-6 pt-24 pb-5 sm:pt-28">
              <h3 className="brand-mark text-[clamp(2rem,5vw,3.6rem)] leading-none font-medium tracking-[-0.05em]">
                {project.title}
                <span>_</span>
              </h3>
              <div className="flex flex-col items-end gap-1 pt-1 text-right text-[13px] leading-tight text-fg sm:text-[15px]">
                <span>{project.region}</span>
                <span>{project.industry}</span>
                {project.services.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem]">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </a>
        </article>
      ))}
    </section>
  );
}

export default Work;

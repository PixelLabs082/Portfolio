import { site } from '@/data/site';

function Work() {
  return (
    <section id="work" className="relative z-1">
      <div className="marquee py-10">
        <div className="marquee-track font-medium text-[clamp(3.4rem,9vw,8rem)] leading-none tracking-tighter">
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
            <div className="flex shrink-0 flex-col items-start justify-between gap-4 pt-20 pb-4 sm:flex-row sm:gap-6 sm:pt-28 sm:pb-5">
              <div className="min-w-0">
                <h3 className="brand-mark text-[clamp(1.7rem,6vw,3.6rem)] leading-none font-medium tracking-tighter">
                  {project.title}
                </h3>
                {project.summary ? (
                  <p className="mt-3 line-clamp-3 max-w-[38ch] text-[14px] leading-6 text-muted sm:mt-4 sm:text-[15px]">{project.summary}</p>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[12px] leading-tight text-fg sm:flex-col sm:items-end sm:gap-1 sm:pt-1 sm:text-right sm:text-[15px]">
                <span>{project.region}</span>
                <span>{project.industry}</span>
                {project.services.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-3xl sm:rounded-[1.75rem]">
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

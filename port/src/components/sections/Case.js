import { site } from '@/data/site';
import { container, displayHeading, section } from '@/lib/ui';

function Case() {
  const study = site.caseStudy;

  return (
    <section id="case" className={section}>
      <div className={`${container} grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20`}>
        <div>
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.16em] text-muted">Selected case</p>
          <h2 className={`${displayHeading} mb-0`}>{study.title}</h2>
          <p className="mt-5 text-muted">{study.role}</p>
          <a className="mt-6 inline-block text-fg underline-offset-4 hover:underline" href={study.href} target="_blank" rel="noreferrer">
            View live site
          </a>
        </div>
        <div className="grid gap-8">
          <article>
            <p className="mb-2 text-[12px] uppercase tracking-[0.16em] text-muted">Problem</p>
            <p className="max-w-[46ch] text-[16px] leading-7 text-muted sm:text-[18px]">{study.problem}</p>
          </article>
          <article>
            <p className="mb-2 text-[12px] uppercase tracking-[0.16em] text-muted">What I did</p>
            <p className="max-w-[46ch] text-[16px] leading-7 text-muted sm:text-[18px]">{study.work}</p>
          </article>
          <article>
            <p className="mb-2 text-[12px] uppercase tracking-[0.16em] text-muted">Result</p>
            <p className="max-w-[46ch] text-[16px] leading-7 text-muted sm:text-[18px]">{study.result}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Case;

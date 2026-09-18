import { site } from '@/data/site';
import { btnPrimary, btnSecondary, container, pill } from '@/lib/ui';

function Hero() {
  return (
    <section id="home" className="flex min-h-screen scroll-mt-[104px] items-center py-20 pt-[140px]">
      <div className={container}>
        <div className={pill}>
          <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-green)_22%,transparent)]" />
          {site.hero.eyebrow}
        </div>
        <h1 className="my-7 max-w-[14ch] font-display text-[clamp(3rem,6.4vw,5.4rem)] font-bold leading-[1.05] tracking-[-0.04em]">
          {site.hero.title}
        </h1>
        <p className="max-w-[46ch] text-[1.08rem] text-muted">{site.hero.body}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className={btnPrimary} href={site.hero.primaryCta.href}>
            {site.hero.primaryCta.label}
          </a>
          <a className={btnSecondary} href={site.hero.secondaryCta.href}>
            {site.hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { site } from '@/data/site';
import { container } from '@/lib/ui';

function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line py-16">
      <div className={`${container} grid grid-cols-2 gap-10 md:grid-cols-4`}>
        <div>
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.16em] text-fg">{site.location}</p>
          <p className="brand-mark text-[22px] font-medium tracking-tight">
            {site.brand.replace('_', '')}
            <span>_</span>
          </p>
        </div>
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.16em] text-fg">Sitemap</p>
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className="mb-2 block text-muted transition-colors hover:text-fg">
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.16em] text-fg">Socials</p>
          {site.socials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="mb-2 block text-muted transition-colors hover:text-fg"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="col-span-2 md:col-span-1 md:text-right">
          <p className="mb-3 text-muted">© {site.name.split(' ')[0]}'s personal portfolio</p>
          <a href="#home" className="text-muted transition-colors hover:text-fg">
            Back to Home
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

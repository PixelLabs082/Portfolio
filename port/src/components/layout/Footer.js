import { site } from '@/data/site';
import { container } from '@/lib/ui';

function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line py-10 pt-[72px]">
      <div className={`${container} grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]`}>
        <div>
          <p className="mb-2.5 font-display text-[1.6rem]">{site.brand}</p>
          <p className="text-muted">{site.location}</p>
        </div>
        <div>
          <p className="mb-3.5 text-[0.75rem] uppercase tracking-[0.14em] text-fg">Sitemap</p>
          {site.nav.map((link) => (
            <a key={link.href} href={link.href} className="mb-2 block text-muted hover:text-fg">
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <p className="mb-3.5 text-[0.75rem] uppercase tracking-[0.14em] text-fg">Socials</p>
          {site.socials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="mb-2 block text-muted hover:text-fg"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="col-span-2 text-left md:col-span-1 md:text-right">
          <p className="mb-2 text-muted">© 2026 {site.name}</p>
          <a href="#home" className="text-muted hover:text-fg">Back to top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

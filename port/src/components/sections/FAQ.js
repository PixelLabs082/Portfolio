import { site } from '@/data/site';
import { container, section, sectionHeading, sectionLabel, sectionLead } from '@/lib/ui';

function FAQ() {
  return (
    <section id="faq" className={section}>
      <div className={`${container} grid gap-12 md:grid-cols-[0.8fr_1.2fr]`}>
        <div>
          <div className={sectionLabel}>
            <span className="text-fg">05 /</span> FAQ
          </div>
          <h2 className={sectionHeading}>Questions before we start</h2>
          <p className={sectionLead}>
            Straight answers so you can decide if this is a fit. If it isn’t, I’ll say so.
          </p>
        </div>
        <div>
          {site.faq.map((item, index) => (
            <details key={item.question} className="group border-t border-line last:border-b" open={index === 0}>
              <summary className="grid cursor-pointer list-none grid-cols-[42px_1fr] items-center gap-3 py-[22px] font-display text-[1.15rem] text-fg [&::-webkit-details-marker]:hidden">
                <span className="text-[0.85rem] text-muted">0{index + 1}</span>
                {item.question}
              </summary>
              <p className="max-w-[62ch] pb-[22px] pl-[54px] text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

'use client';

import { useState } from 'react';
import { ArrowUpRight } from '@/lib/icons';
import { site } from '@/data/site';
import { btnPrimary, container, section, sectionHeading, sectionLabel, sectionLead } from '@/lib/ui';

const emptyForm = {
  name: '',
  email: '',
  interest: site.contact.interests[0],
  budget: site.contact.budgets[0],
  details: '',
};

const fieldClass = 'flex flex-col gap-2 text-[0.82rem] text-muted';
const inputClass =
  'w-full border-0 border-b border-line-strong bg-transparent py-2.5 text-base text-fg outline-none';

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = `Project inquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Interest: ${form.interest}`,
      `Budget: ${form.budget}`,
      '',
      form.details,
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className={section}>
      <div className={`${container} grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]`}>
        <div>
          <div className={sectionLabel}>
            <span className="text-fg">06 /</span> Contact
          </div>
          <h2 className={sectionHeading}>{site.contact.heading}</h2>
          <p className={sectionLead}>{site.contact.body}</p>
          <a
            className="mt-7 inline-flex items-center gap-2.5 border-b border-line-strong pb-2 text-[1.05rem]"
            href={`mailto:${site.email}`}
          >
            say hello — {site.email}
            <ArrowUpRight size={18} />
          </a>
        </div>

        <form
          className="grid grid-cols-1 gap-4 rounded-[28px] border border-line bg-card p-7 md:grid-cols-2"
          onSubmit={onSubmit}
        >
          <label className={fieldClass}>
            Name*
            <input className={inputClass} name="name" value={form.name} onChange={onChange} required autoComplete="name" />
          </label>
          <label className={fieldClass}>
            Email*
            <input className={inputClass} type="email" name="email" value={form.email} onChange={onChange} required autoComplete="email" />
          </label>
          <label className={fieldClass}>
            You are interested in
            <select className={inputClass} name="interest" value={form.interest} onChange={onChange}>
              {site.contact.interests.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className={fieldClass}>
            Budget in USD
            <select className={inputClass} name="budget" value={form.budget} onChange={onChange}>
              {site.contact.budgets.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className={`${fieldClass} md:col-span-2`}>
            Project details*
            <textarea className={`${inputClass} resize-y`} name="details" rows="5" value={form.details} onChange={onChange} required />
          </label>
          <button className={`${btnPrimary} md:col-span-2`} type="submit">
            Send message
          </button>
          {sent && (
            <p className="text-[0.9rem] text-muted md:col-span-2">
              Your email client should open with the message ready. If it doesn’t, write to {site.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

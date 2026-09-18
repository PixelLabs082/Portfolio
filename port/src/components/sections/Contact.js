'use client';

import { useState } from 'react';
import Magnetic from '@/components/fx/Magnetic';
import { site } from '@/data/site';
import { btnPrimary, container, displayHeading, section } from '@/lib/ui';

const emptyForm = {
  name: '',
  email: '',
  interest: site.contact.interests[0],
  budget: site.contact.budgets[0],
  details: '',
};

const fieldClass = 'flex flex-col gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-muted';
const inputClass =
  'w-full border-0 border-b border-line-strong bg-transparent py-3 text-base tracking-normal text-fg outline-none transition-colors focus:border-fg';

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
      <div className={`${container} grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20`}>
        <div>
          <h2 className={`${displayHeading} mb-8`}>
            {site.contact.heading[0]}
            <br />
            {site.contact.heading[1]}
          </h2>
          <a className="inline-flex items-center gap-2 text-[1.05rem] text-muted transition-colors hover:text-fg" href={`mailto:${site.email}`}>
            say hello - {site.email}
          </a>
        </div>

        <form className="grid grid-cols-1 gap-7 md:grid-cols-2" onSubmit={onSubmit}>
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
            <textarea className={`${inputClass} min-h-24 resize-y`} name="details" rows="4" value={form.details} onChange={onChange} required />
          </label>
          <Magnetic className="md:col-span-2">
            <button className={btnPrimary} type="submit">
              Submit Message
            </button>
          </Magnetic>
          {sent && (
            <p className="text-[0.9rem] normal-case tracking-normal text-muted md:col-span-2">
              Your email client should open with the message ready. If it doesn’t, write to {site.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

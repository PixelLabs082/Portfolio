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
  'w-full min-h-12 border-0 border-b border-line-strong bg-transparent py-3 text-base tracking-normal text-fg outline-none transition-colors focus:border-fg';

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          interest: form.interest,
          budget: form.budget,
          message: form.details,
          _subject: `Project inquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Send failed');
      setForm(emptyForm);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
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
          <p className="mb-6 max-w-[36ch] text-[18px] leading-7 text-muted">{site.contact.body}</p>
          <div className="grid gap-3 text-[1.05rem]">
            <a className="break-all text-muted transition-colors hover:text-fg" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="text-muted transition-colors hover:text-fg" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="text-muted transition-colors hover:text-fg" href={site.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
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
            Budget
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
            <button className={btnPrimary} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit Message'}
            </button>
          </Magnetic>
          {status === 'sent' && (
            <p className="text-[0.9rem] normal-case tracking-normal text-muted md:col-span-2">
              Message sent. If this is the first inquiry from this site, confirm the FormSubmit email once, then new messages land in the inbox.
            </p>
          )}
          {status === 'error' && (
            <p className="text-[0.9rem] normal-case tracking-normal text-muted md:col-span-2">
              The form could not send. Write directly to {site.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

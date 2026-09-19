'use client';

import { useState } from 'react';
import Magnetic from '@/components/fx/Magnetic';
import { site } from '@/data/site';
import { btnPrimary, container, displayHeading, section } from '@/lib/ui';

const countryCodes = [
  { code: '+91', country: 'IN', label: '+91 (India)' },
  { code: '+44', country: 'UK', label: '+44 (UK)' },
  { code: '+1', country: 'US', label: '+1 (US / CA)' },
  { code: '+61', country: 'AU', label: '+61 (Australia)' },
  { code: '+49', country: 'DE', label: '+49 (Germany)' },
  { code: '+33', country: 'FR', label: '+33 (France)' },
  { code: '+971', country: 'AE', label: '+971 (UAE)' },
  { code: '+65', country: 'SG', label: '+65 (Singapore)' },
  { code: '+81', country: 'JP', label: '+81 (Japan)' },
];

const emptyForm = {
  name: '',
  email: '',
  countryCode: '+91',
  phone: '',
  details: '',
};

const fieldClass = 'flex flex-col gap-2 text-[0.78rem] uppercase tracking-[0.12em] text-muted';
const inputClass =
  'w-full min-h-12 border-0 border-b border-line-strong bg-transparent py-3 text-base tracking-normal text-fg outline-none transition-colors focus:border-fg';

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === 'phone') {
      // Strip any character that is not a digit (0-9)
      const sanitized = value.replace(/[^0-9]/g, '');
      setForm((prev) => ({ ...prev, phone: sanitized }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const onPhoneKeyDown = (e) => {
    // Allow navigation, deletion, selection, and copy-paste shortcuts
    if (
      ['Backspace', 'Tab', 'Enter', 'Delete', 'Escape', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key) ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }
    // Block any key that is not a digit 0-9
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s'.-]+$/;
    if (!form.name.trim() || form.name.trim().length < 2 || !nameRegex.test(form.name.trim())) {
      newErrors.name = 'Please enter a valid full name (letters only, min 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    const phoneDigits = form.phone.trim();
    if (!phoneDigits) {
      newErrors.phone = 'Mobile number is required (numbers only, no letters or symbols).';
    } else if (!/^[0-9]+$/.test(phoneDigits)) {
      newErrors.phone = 'Only numbers are allowed. No letters or symbols.';
    } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
      newErrors.phone = 'Mobile number must be between 7 and 15 digits (numbers only).';
    }
    if (!form.details.trim() || form.details.trim().length < 20) {
      newErrors.details = `Project details must be at least 20 characters (${form.details.trim().length}/20).`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    const fullPhone = `${form.countryCode} ${form.phone.trim()}`;

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: fullPhone,
          message: form.details.trim(),
          _cc: 'ashwinram28102005@gmail.com,pixellabs082@gmail.com',
          _subject: `New Freelance Project Inquiry from ${form.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) throw new Error('Send failed');
      setForm(emptyForm);
      setErrors({});
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

        <form className="grid grid-cols-1 gap-7 md:grid-cols-2" onSubmit={onSubmit} noValidate>
          {/* Name Field */}
          <label className={fieldClass}>
            Name*
            <input
              className={`${inputClass} ${errors.name ? 'border-red-500' : ''}`}
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
              placeholder="Your full name"
            />
            {errors.name && <span className="text-[12px] normal-case text-red-400">{errors.name}</span>}
          </label>

          {/* Email Field */}
          <label className={fieldClass}>
            Email*
            <input
              className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
              placeholder="your@email.com"
            />
            {errors.email && <span className="text-[12px] normal-case text-red-400">{errors.email}</span>}
          </label>

          {/* Mobile Number Field with Country Code */}
          <div className={`${fieldClass} md:col-span-2`}>
            <span>Mobile Number*</span>
            <div className="flex gap-3">
              <select
                name="countryCode"
                value={form.countryCode}
                onChange={onChange}
                className="w-36 min-h-12 border-0 border-b border-line-strong bg-transparent py-3 text-base font-mono tracking-normal text-fg outline-none transition-colors focus:border-fg"
              >
                {countryCodes.map((item) => (
                  <option key={item.code} value={item.code} className="bg-bg text-fg">
                    {item.label}
                  </option>
                ))}
              </select>
              <input
                className={`${inputClass} flex-1 ${errors.phone ? 'border-red-500' : ''}`}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                onKeyDown={onPhoneKeyDown}
                maxLength={15}
                required
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="tel"
                placeholder="9876543210"
              />
            </div>
            {errors.phone && <span className="text-[12px] normal-case text-red-400">{errors.phone}</span>}
          </div>

          {/* Project Details Field */}
          <label className={`${fieldClass} md:col-span-2`}>
            Project Details*
            <textarea
              className={`${inputClass} min-h-28 resize-y ${errors.details ? 'border-red-500' : ''}`}
              name="details"
              rows="4"
              value={form.details}
              onChange={onChange}
              required
              minLength={20}
              placeholder="Describe your project goals, scope, and timeline (at least 20 characters)..."
            />
            {errors.details && <span className="text-[12px] normal-case text-red-400">{errors.details}</span>}
          </label>

          <Magnetic className="md:col-span-2">
            <button className={btnPrimary} type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Submit Message'}
            </button>
          </Magnetic>

          {status === 'sent' && (
            <p className="text-[0.9rem] normal-case tracking-normal text-green md:col-span-2">
              Message sent successfully! I will reply to your inquiry within 24 hours.
            </p>
          )}
          {status === 'error' && (
            <p className="text-[0.9rem] normal-case tracking-normal text-red-400 md:col-span-2">
              The form could not send. Write directly to {site.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;

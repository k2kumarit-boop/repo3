import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Cloud & Infrastructure',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const categories = [
    'Cloud & Infrastructure (AWS/GCP)',
    'Automation & Scripting (PowerShell/Bash/Python)',
    'Desktop & Systems Optimization',
    'Full-Stack Software Engineering',
    'Career Opportunity / Full-Time Role'
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:;Kumar;;;
FN:Kumar
TITLE:Software & Cloud Infrastructure Engineer
EMAIL;TYPE=INTERNET;TYPE=HOME:${PERSONAL_INFO.email}
URL:${PERSONAL_INFO.github}
NOTE:Desktop Support Engineer with focus on automation, system optimization, AWS, and GCP.
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Kumar-Systems-Engineer.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Please provide at least 15 characters describing your inquiry.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save message locally
    try {
      const existing = JSON.parse(localStorage.getItem('kumar_portfolio_inquiries') || '[]');
      existing.push({
        ...formData,
        date: new Date().toISOString()
      });
      localStorage.setItem('kumar_portfolio_inquiries', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `[${formData.category}] ${formData.subject || 'Portfolio Inquiry'}`
  )}&body=${encodeURIComponent(
    `Hi Kumar,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}\n`
  )}`;

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Outreach & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              06. Direct Channels & Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance]">
              Let's Discuss Cloud Infrastructure & Systems Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you need to automate a stubborn desktop fleet workflow, audit cross-cloud infrastructure costs on AWS/GCP, or discuss full-time engineering opportunities—I look forward to connecting.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors"
                >
                  {copiedEmail ? 'Copied!' : 'Copy Email'}
                </button>
              </div>

              {/* GitHub Profile Card */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between hover:border-slate-700 hover:bg-slate-900 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-white group-hover:text-cyan-400 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      GitHub Profile
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors font-mono">
                      github.com/kumar-it
                    </div>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors">
                  →
                </span>
              </a>

              {/* Download vCard */}
              <button
                onClick={handleDownloadVCard}
                className="w-full p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-center justify-between hover:border-slate-700 hover:bg-slate-900 transition-all text-left"
              >
                <div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Contact Card
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Download Kumar's vCard (.vcf)
                  </div>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
              {submitted ? (
                <div className="space-y-6 text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                      Message Prepared for Kumar
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding{' '}
                      <strong className="text-cyan-400">{formData.category}</strong> has been drafted.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs font-mono space-y-1 text-slate-300">
                    <div><span className="text-slate-500">To:</span> {PERSONAL_INFO.email}</div>
                    <div><span className="text-slate-500">Subject:</span> [{formData.category}] {formData.subject}</div>
                    <div className="pt-2 text-slate-400 line-clamp-3">{formData.message}</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <a
                      href={mailtoUrl}
                      className="px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-400/20"
                    >
                      Open in Your Email Client
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          category: 'Cloud & Infrastructure',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="px-5 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-400">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 block">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Category Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c} className="bg-slate-950 text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Systems Automation & Cloud Infrastructure Opportunity"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.subject ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-rose-400">{formErrors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Message & Requirements <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your environment, engineering objectives, or role..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-950 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-400/20"
                  >
                    Send Inquiry to Kumar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  AlertCircle,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useClipboard } from '../utils/useClipboard';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Engineering Opportunity',
    message: '',
    botcheck: '',
  });

  const { copiedKey, copy: copyToClipboard } = useClipboard();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'invalid_email'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot honeypot check: if bot filled this hidden field, silently reject
    if (formData.botcheck) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus('invalid_email');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ae9eb31a-1130-42e4-8434-798846b5f35c';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Data Engineering Opportunity',
          message: '',
          botcheck: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Background glow wrapped to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14 max-w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Currently open to Data Engineering trainee/internship roles, junior engineering opportunities, and technical collaboration on big data pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start w-full max-w-full">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6 min-w-0 max-w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-xl shadow-slate-950/40 backdrop-blur-xl max-w-full">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal mb-6 leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
              </p>

              <div className="space-y-4 max-w-full">
                {/* Email Item */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center justify-between group max-w-full min-w-0">
                  <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-400 font-normal">Email Address</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy email"
                  >
                    {copiedKey === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center justify-between group max-w-full min-w-0">
                  <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-400 font-normal">Phone &amp; WhatsApp</div>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-medium text-white hover:text-emerald-300 transition-colors truncate block"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy phone"
                  >
                    {copiedKey === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/60 flex items-center gap-3 max-w-full min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-400 font-normal">Location</div>
                    <div className="text-sm font-medium text-white truncate">{personalInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links Cards */}
              <div className="mt-6 pt-6 border-t border-slate-800/60">
                <div className="text-xs text-slate-400 mb-3 font-medium">Professional Profiles:</div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-between text-xs font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>GitHub</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-between text-xs font-medium transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 min-w-0 max-w-full">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-xl shadow-slate-950/40 backdrop-blur-xl max-w-full">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 font-normal mb-6 leading-relaxed">
                Have an inquiry or project proposal? Send a direct message and I will reply promptly.
              </p>

              {/* Status Alerts */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    Message sent successfully! I will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    Something went wrong. Please try again or email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="underline text-white hover:text-rose-200">
                      {personalInfo.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              {submitStatus === 'invalid_email' && (
                <div className="mb-6 p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-300 flex items-center gap-3 animate-in fade-in duration-300">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <p className="text-xs sm:text-sm font-medium leading-relaxed">
                    Please provide a valid email address so I can reply to your inquiry.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for anti-bot spam protection */}
                <input
                  type="text"
                  name="botcheck"
                  value={formData.botcheck}
                  onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  style={{ display: 'none' }}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        if (submitStatus !== 'idle') setSubmitStatus('idle');
                        setFormData({ ...formData, name: e.target.value });
                      }}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-slate-300 font-medium">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        if (submitStatus !== 'idle') setSubmitStatus('idle');
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-medium">
                    Inquiry Type / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => {
                      if (submitStatus !== 'idle') setSubmitStatus('idle');
                      setFormData({ ...formData, subject: e.target.value });
                    }}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800/80 rounded-xl text-xs text-white focus:outline-none focus:border-slate-700 transition-colors cursor-pointer"
                  >
                    <option value="Data Engineering Opportunity">Data Engineering Role / Internship</option>
                    <option value="Project Collaboration">ETL Pipeline / DB Project Collaboration</option>
                    <option value="Competitive Programming ICPC">ICPC / Algorithmic Discussion</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-medium">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      if (submitStatus !== 'idle') setSubmitStatus('idle');
                      setFormData({ ...formData, message: e.target.value });
                    }}
                    placeholder="Hi Zakaria, I came across your portfolio and would like to connect regarding an engineering opportunity..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-cyan-500/10"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

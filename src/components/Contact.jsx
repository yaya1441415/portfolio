import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your Formspree endpoint or EmailJS setup
    await new Promise(r => setTimeout(r, 1200));
    setStatus('done');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's work<br />together</h2>
            <p className="contact-desc">
              I'm actively seeking software engineering internships and new grad roles.
              Whether you have a project, an opportunity, or just want to connect — I'd love to hear from you.
            </p>
            <div className="contact-info">
              <a href="mailto:yahayr42442@gmail.com" className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                </div>
                <span>yahayr42442@gmail.com</span>
              </a>
              <a href="https://github.com/yaya1441415" target="_blank" rel="noreferrer" className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </div>
                <span>github.com/yaya1441415</span>
              </a>
              <a href="https://www.linkedin.com/in/yahya-ouchchen-4aaa58221/" target="_blank" rel="noreferrer" className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <span>linkedin.com/in/yahya-ouchchen</span>
              </a>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span>Seattle, WA</span>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              {status === 'done' ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                  <button type="button" onClick={() => setStatus('idle')} className="form-btn">
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message" required rows={5}
                      placeholder="Tell me about the opportunity or project..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="form-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <span className="spinner"></span>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

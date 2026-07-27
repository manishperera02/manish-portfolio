import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { trackContactSubmit, trackSocialClick } from '../utils/analytics';

const GithubIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'manishsjc12@gmail.com',
    href: 'mailto:manishsjc12@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+94 77 433 8308',
    href: 'tel:+94774338308',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    value: 'No. 194, Udakanampella, Pugoda',
    href: 'https://maps.google.com/?q=Pugoda,Sri+Lanka',
  },
];

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  {
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/manishperera02',
    label: 'GitHub',
  },
  {
    icon: <LinkedinIcon size={20} />,
    href: 'https://www.linkedin.com/in/manish-perera-869457251/',
    label: 'LinkedIn',
  },
  {
    icon: <FacebookIcon size={20} />,
    href: 'https://www.facebook.com/manish.perera.52',
    label: 'Facebook',
  },
  {
    icon: <InstagramIcon size={20} />,
    href: 'https://www.instagram.com/manna.a12/',
    label: 'Instagram',
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    trackContactSubmit('Portfolio Contact Form');

    const mailtoLink = `mailto:manishsjc12@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and conversations. Let's
            discuss how we can build something exceptional together.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* ── Left: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: '700',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}
            >
              Let's start a conversation
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                lineHeight: '1.75',
                fontSize: '0.97rem',
              }}
            >
              Whether you have a project in mind, a question about my work, or
              just want to connect — my inbox is always open. I'll respond within
              24 hours.
            </p>

            {/* Contact Details */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(item.label, item.href)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.1rem',
                    background: '#fff',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.boxShadow =
                      '0 4px 16px rgba(79,70,229,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      padding: '0.65rem',
                      background: 'rgba(79,70,229,0.08)',
                      borderRadius: '10px',
                      border: '1px solid rgba(79,70,229,0.15)',
                      color: 'var(--accent-primary)',
                      flexShrink: 0,
                      display: 'flex',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.78rem',
                        fontWeight: '500',
                        marginBottom: '0.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        color: 'var(--text-primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  marginBottom: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Connect Online
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    onClick={() => trackSocialClick(s.label, s.href)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1rem',
                      background: '#fff',
                      border: '1.5px solid var(--glass-border)',
                      borderRadius: '10px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--accent-primary)';
                      e.currentTarget.style.background =
                        'rgba(79,70,229,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        'var(--glass-border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = '#fff';
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-panel"
            style={{ padding: 'clamp(1.5rem, 4vw, 2.25rem)' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 1rem' }}
              >
                <div
                  style={{
                    color: '#059669',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <CheckCircle size={52} strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    marginBottom: '0.65rem',
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-outline"
                  style={{ marginTop: '2rem' }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                onSubmit={handleSubmit}
              >
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginBottom: '0.25rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Send a Message
                </h3>

                {/* Name + Email row */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                    gap: '1.1rem',
                  }}
                >
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Project inquiry, collaboration…"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="form-input"
                    placeholder="Tell me about your project or idea…"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                >
                  <Send size={17} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

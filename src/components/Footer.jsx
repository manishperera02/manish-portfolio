import { MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackSocialClick } from '../utils/analytics';

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

const footerLinks = [
  { name: 'Home',            href: '/' },
  { name: 'Projects',        href: '/projects' },
  { name: 'Skills',          href: '/skills' },
  { name: 'Achievements',    href: '/blog' },
  { name: 'Certifications',  href: '/certifications' },
  { name: 'Education',       href: '/education' },
  { name: 'Experience',      href: '/experience' },
  { name: 'Contact',         href: '/contact' },
];

const socialLinks = [
  { icon: <GithubIcon size={16} />,     href: 'https://github.com/manishperera02',                      label: 'GitHub' },
  { icon: <LinkedinIcon size={16} />,    href: 'https://www.linkedin.com/in/manish-perera-869457251/',   label: 'LinkedIn' },
  { icon: <MessageCircle size={16} />, href: 'https://twitter.com',                                    label: 'Twitter' },
  { icon: <Mail size={16} />,          href: 'mailto:manishsjc12@gmail.com',                           label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#fff',
        borderTop: '1px solid var(--glass-border)',
        padding: '2.5rem 0 1.75rem',
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '240px' }}>
            <Link
              to="/"
              className="gradient-text"
              style={{
                fontSize: '1.5rem',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                display: 'inline-block',
                marginBottom: '0.5rem',
              }}
            >
              MP.
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: '1.65' }}>
              Software Developer & Final Year CS Student based in Colombo, Sri Lanka.
            </p>
          </div>

          {/* Nav grid */}
          <nav
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, auto))',
              gap: '0.5rem 2rem',
            }}
          >
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
            © {year} Manish Perera. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '0.45rem' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                onClick={() => trackSocialClick(s.label, s.href)}
                style={{
                  width: '32px', height: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-secondary)',
                  border: '1.5px solid var(--glass-border)',
                  borderRadius: '8px',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.background = 'rgba(79,70,229,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

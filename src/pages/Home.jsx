import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Code, Brain, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackResumeDownload, trackSocialClick } from '../utils/analytics';

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

const stats = [
  { value: '7',   label: 'Projects Built' },
  { value: '13+', label: 'Achievements' },
  { value: '2',   label: 'Certifications' },
];

const focusAreas = [
  {
    icon: <Code size={22} />,
    title: 'Software Development',
    desc: 'Crafting responsive user interfaces, robust APIs, and web platforms using React, Node.js, and Java.',
    accent: '#4F46E5',
    bg: 'rgba(79,70,229,0.06)',
    border: 'rgba(79,70,229,0.15)',
  },
  {
    icon: <Brain size={22} />,
    title: 'Explainable AI & ML',
    desc: 'Building prediction systems like ChurnLens with SHAP explainability models and probability calibration.',
    accent: '#7C3AED',
    bg: 'rgba(124,58,237,0.06)',
    border: 'rgba(124,58,237,0.15)',
  },
  {
    icon: <Heart size={22} />,
    title: 'Leadership & Volunteering',
    desc: 'Serving as Leo District Vice President, Finance Committee Member, Sports Council President, and managing community impact projects.',
    accent: '#059669',
    bg: 'rgba(5,150,105,0.06)',
    border: 'rgba(5,150,105,0.15)',
  },
];

const Home = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3.5rem 0' }}>
      <div className="container">
        {/* Hero Row */}
        <div className="home-grid" style={{ marginBottom: '4rem' }}>
          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(8,145,178,0.08)',
                border: '1px solid rgba(8,145,178,0.22)',
                borderRadius: '99px',
                color: '#0891B2',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                letterSpacing: '0.01em',
              }}
            >
              <span
                style={{
                  width: '7px', height: '7px',
                  borderRadius: '50%',
                  background: '#0891B2',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              Open to Opportunities
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                fontWeight: '800',
                lineHeight: '1.1',
                letterSpacing: '-0.035em',
                marginBottom: '0.9rem',
                color: 'var(--text-primary)',
              }}
            >
              Hi, I'm{' '}
              <span className="gradient-text">Manish Perera</span>
            </h1>

            {/* Role */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                color: 'var(--accent-primary)',
                marginBottom: '1.1rem',
                letterSpacing: '-0.01em',
              }}
            >
              Software Developer & Final Year CS Student
            </p>

            {/* Bio */}
            <p
              style={{
                fontSize: 'clamp(0.92rem, 2vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '2rem',
                maxWidth: '520px',
              }}
            >
              BSc (Hons) Computer Science student at IIT, affiliated with the
              University of Westminster, UK. I build impactful web applications
              and ML-powered platforms — from explainable AI dashboards to
              emergency response systems. Passionate about clean code,
              community leadership, and the beautiful game.
            </p>

            {/* Stats */}
            <div className="stats-row">
              {stats.map((s, i) => (
                <div key={s.label} className="stat-item">
                  <p className="stat-value">{s.value}</p>
                  <p className="stat-label">{s.label}</p>
                  {i < stats.length - 1 && <div className="stat-divider" />}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '0.9rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <a
                href="/Manish_Perera_CV.pdf"
                download
                className="btn btn-primary"
                onClick={() => trackResumeDownload('Manish_Perera_CV.pdf')}
              >
                <Download size={16} />
                Download CV
              </a>
              <Link to="/projects" className="btn btn-outline">
                View My Work
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Avatar Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="avatar-container"
          >
            {/* Decorative blobs */}
            <div
              style={{
                position: 'absolute',
                width: '260px', height: '260px',
                borderRadius: '50%',
                background: 'rgba(79,70,229,0.07)',
                filter: 'blur(60px)',
                top: '5%', left: '5%',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '180px', height: '180px',
                borderRadius: '50%',
                background: 'rgba(124,58,237,0.06)',
                filter: 'blur(50px)',
                bottom: '5%', right: '5%',
                zIndex: 0,
              }}
            />

            {/* Card */}
            <div
              className="glass-panel avatar-card"
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                alignItems: 'center',
                padding: '1.1rem',
                borderRadius: '22px',
                width: '100%',
                maxWidth: '290px',
              }}
            >
              {/* Photo */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--bg-secondary)',
                }}
              >
                <img
                  src="/profile.jpeg"
                  alt="Manish Perera"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                  onError={(e) => {
                    e.target.src =
                      'https://ui-avatars.com/api/?name=Manish+Perera&size=300&background=4F46E5&color=fff&bold=true';
                  }}
                />
              </div>

              {/* Identity */}
              <div style={{ textAlign: 'center', width: '100%' }}>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    marginBottom: '0.2rem',
                  }}
                >
                  Manish Perera
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.9rem',
                  }}
                >
                  BSc CS · IIT / Westminster UK
                </p>

                {/* Social Links */}
                <div
                  style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
                >
                  {[
                    { icon: <GithubIcon size={15} />,   href: 'https://github.com/manishperera02',                    label: 'GitHub' },
                    { icon: <LinkedinIcon size={15} />, href: 'https://www.linkedin.com/in/manish-perera-869457251/', label: 'LinkedIn' },
                    { icon: <Mail size={15} />,       href: 'mailto:manishsjc12@gmail.com',                        label: 'Email' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      title={s.label}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick(s.label, s.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px', height: '32px',
                        borderRadius: '8px',
                        border: '1.5px solid var(--glass-border)',
                        color: 'var(--text-secondary)',
                        background: 'var(--bg-secondary)',
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
          </motion.div>
        </div>

        {/* ── Focus Areas Grid (Premium Section) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '1.5rem', textAlign: 'center' }}>
            What I Focus On
          </h2>
          <div className="focus-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  borderRadius: '16px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  border: '1px solid var(--glass-border)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 30px ${area.bg}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: area.bg,
                    border: `1px solid ${area.border}`,
                    color: area.accent,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {area.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {area.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.55' }}>
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive home layout styles */}
      <style>{`
        .home-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .stats-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--glass-border);
          position: relative;
        }

        .stat-item { position: relative; }
        .stat-value {
          font-size: clamp(1.5rem, 3vw, 1.9rem);
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          font-weight: 500;
        }
        .stat-divider {
          position: absolute;
          right: -1rem;
          top: 0; bottom: 0;
          width: 1px;
          background: var(--glass-border);
        }

        .avatar-container {
          display: flex;
          justify-content: center;
          position: relative;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .home-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .home-grid > div:first-child { order: 2; }
          .home-grid > div:last-child  { order: 1; }

          .stats-row { justify-content: center; }
          .avatar-container { justify-content: center; }

          h1, .section-subtitle, p {
            max-width: 100% !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .stats-row { gap: 1.25rem; }
          .stat-value { font-size: 1.5rem; }
          .avatar-card { max-width: 260px !important; }
        }
      `}</style>
    </section>
  );
};

export default Home;

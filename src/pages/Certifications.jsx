import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Calendar } from 'lucide-react';

const certs = [
  {
    id: 1,
    name: 'Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure',
    issuer: 'LinkedIn',
    date: 'Mar 2025',
    tag: 'Microsoft Azure & Machine Learning',
    link: '#',
    color: '#0891B2',
    bg: 'rgba(8,145,178,0.07)',
    border: 'rgba(8,145,178,0.18)',
    issuerLogo: '🟦',
    description:
      'Covered core Azure AI workloads including machine learning pipelines, cognitive services, and responsible AI principles on the Microsoft Azure platform.',
  },
  {
    id: 2,
    name: 'API Development and Postman Hands-on Learning',
    issuer: 'Fidenz Academy',
    date: 'Nov 2023',
    tag: 'API Development',
    link: '#',
    color: '#D97706',
    bg: 'rgba(217,119,6,0.07)',
    border: 'rgba(217,119,6,0.18)',
    issuerLogo: '🟧',
    description:
      'Actively participated in a hands-on Knowledge Sharing Session on API Development and Postman conducted by Fidenz Academy, covering REST API design, testing, and documentation.',
  },
];

const Certifications = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Licenses & Certifications</h2>
          <p className="section-subtitle">
            Industry-recognised credentials and training programmes that validate
            my technical skills across cloud, AI, and software development.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-panel cert-card"
            >
              {/* ── Header row ── */}
              <div className="cert-header">
                {/* Icon */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    flexShrink: 0,
                    borderRadius: '12px',
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    color: cert.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={26} />
                </div>

                {/* Title + meta */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: 'clamp(0.97rem, 2.2vw, 1.15rem)',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.4',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {cert.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: cert.color,
                      marginBottom: '0.2rem',
                    }}
                  >
                    {cert.issuer}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.82rem',
                    }}
                  >
                    <Calendar size={12} />
                    <span>Issued {cert.date}</span>
                  </div>
                </div>

                {/* Date badge – desktop */}
                <span
                  className="cert-date-badge"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    padding: '0.28rem 0.8rem',
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    borderRadius: '99px',
                    color: cert.color,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {cert.date}
                </span>
              </div>

              {/* ── Description ── */}
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: '1.7',
                  margin: '1rem 0',
                }}
              >
                {cert.description}
              </p>

              {/* ── Footer ── */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--glass-border)',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                {/* Tag pill */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    padding: '0.25rem 0.7rem',
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    borderRadius: '6px',
                    color: cert.color,
                  }}
                >
                  <ShieldCheck size={12} />
                  {cert.tag}
                </span>

                {/* Credential link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    color: cert.color,
                    textDecoration: 'none',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '8px',
                    background: cert.bg,
                    border: `1px solid ${cert.border}`,
                    transition: 'opacity 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Show credential <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-card {
          padding: clamp(1.25rem, 3vw, 1.85rem);
          display: flex;
          flex-direction: column;
        }
        .cert-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .cert-date-badge {
          display: inline-block;
        }
        @media (max-width: 520px) {
          .cert-date-badge { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Certifications;

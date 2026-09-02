import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'BSc (Hons) Computer Science with Industrial Experience',
    institution: 'Informatics Institute of Technology affiliated with University of Westminster, UK',
    period: 'Sep 2022 – Sep 2026',
    location: 'Colombo, Sri Lanka',
    description:
      'Graduated with Upper Second Class Honours in Computer Science with Industrial Experience from Informatics Institute of Technology (IIT), affiliated with the University of Westminster, UK. Gained a strong foundation in software engineering, data structures, algorithms, and modern computing principles.',
    highlights: [
      'University of Westminster, UK',
      'Upper Second Class Honours',
      'Industrial Experience',
      'Software Engineering',
    ],
  },
  {
    id: 2,
    degree: 'Foundation Certificate in Higher Education',
    institution: 'Informatics Institute of Technology, Colombo – Sri Lanka',
    period: '2021 – 2022',
    location: 'Colombo, Sri Lanka',
    description:
      'Completed a one-year foundation programme at IIT, building core competencies in mathematics, computing fundamentals, and academic writing as a pathway into the undergraduate degree.',
    highlights: [
      'Computing Fundamentals',
      'Mathematics',
      'Academic Writing',
      'Foundation Year',
    ],
  },
  {
    id: 3,
    degree: 'St. Joseph\'s College, Colombo 10',
    institution: 'G.C.E. Advanced Level – Mathematics Stream (2021) · G.C.E. Ordinary Level (2018)',
    period: '2008 – 2022',
    location: 'Colombo, Sri Lanka',
    description:
      'Completed both G.C.E. Ordinary Level and Advanced Level examinations at St. Joseph\'s College, one of Sri Lanka\'s leading national schools. Specialised in the Mathematics stream at A/L, laying a strong analytical and scientific foundation.',
    highlights: [
      'Mathematics Stream',
      'G.C.E. A/L – 2021',
      'G.C.E. O/L – 2018',
      'National School',
    ],
  },
];


const Education = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Education</h2>
          <p className="section-subtitle">
            A structured academic foundation underpinning my engineering philosophy
            and approach to complex problem solving.
          </p>
        </motion.div>

        <div className="timeline-container">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                {/* Header */}
                <div className="edu-header">
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <GraduationCap size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                      <h3
                        style={{
                          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                          fontWeight: '700',
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          lineHeight: '1.3',
                        }}
                      >
                        {edu.degree}
                      </h3>
                    </div>
                    <p
                      style={{
                        color: 'var(--accent-secondary)',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>

                  <div className="edu-meta">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.85rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </div>
                    <span
                      style={{
                        background: 'rgba(79,70,229,0.07)',
                        border: '1px solid rgba(79,70,229,0.18)',
                        borderRadius: '6px',
                        padding: '0.2rem 0.65rem',
                        fontSize: '0.78rem',
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      <MapPin size={12} style={{ flexShrink: 0 }} />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.75',
                    fontSize: '0.9rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {edu.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {edu.highlights.map((h) => (
                    <span key={h} className="badge">
                      <BookOpen size={11} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .edu-meta {
          text-align: right;
          flex-shrink: 0;
        }

        @media (max-width: 600px) {
          .edu-header { flex-direction: column; }
          .edu-meta { text-align: left; }
        }
      `}</style>
    </section>
  );
};

export default Education;

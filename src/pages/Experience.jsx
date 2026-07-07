import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar, Award, MapPin } from 'lucide-react';
import { useState } from 'react';

/* ── All extracurricular activity photos for the top ribbon ── */
const ribbonImages = [
  '/WhatsApp Image 2026-07-07 at 00.12.30.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.31 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.31 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.31.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.32 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.32 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.32 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.32.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.33 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.33 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.33.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.34 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.34 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.34 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.34.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.35 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.35 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.35.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.36 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.36 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.36 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.36.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.37 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.12.37.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.00 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.00 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.00.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.01 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.01 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.01.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.02 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.02 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.02 (3).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.02.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.03 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.03 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.03.jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.04 (1).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.04 (2).jpeg',
  '/WhatsApp Image 2026-07-07 at 00.19.04.jpeg',
];

const row1 = ribbonImages.slice(0, Math.ceil(ribbonImages.length / 2));
const row2 = ribbonImages.slice(Math.ceil(ribbonImages.length / 2)).reverse();

/* ── Professional Qualifications Data ── */
const professionalQualifications = [
  {
    id: 1,
    role: 'IT Intern',
    company: 'Hutchison Telecommunications Lanka (Pvt.) Ltd.',
    period: 'Nov 2024 – Oct 2025',
    bullets: [
      'Engineered SQL optimizations to improve data retrieval speeds across internal platforms.',
      'Conducted system and IT security assessments to identify risks and ensure data safety compliance.',
      'Prepared detailed KPI reports to support data-driven decision-making.',
      'Provided robust enterprise infrastructure support within a fast-paced telecommunications environment.'
    ]
  },
  {
    id: 2,
    role: 'Web Developer and Designer',
    company: 'CodeBy4 (Startup)',
    period: 'Nov 2024 – Nov 2025',
    bullets: [
      'Designed and developed interactive web interfaces and responsive components.',
      'Collaborated closely with startup founders to convert user requirements into pixel-perfect features.',
      'Optimised front-end rendering performance for modern browser environments.'
    ]
  },
  {
    id: 3,
    role: 'Web Developer and Designer',
    company: 'Zentro Media (Startup)',
    period: 'Jan 2023 – Nov 2024',
    bullets: [
      'Crafted high-fidelity mockups and turned them into responsive HTML/CSS/JS components.',
      'Maintained consistent UI systems across customer dashboards and landing pages.',
      'Handled website optimization, SEO alignment, and cross-browser validation.'
    ]
  }
];

/* ── Leadership & Volunteer Experience Data ── */
const leadershipExperience = [
  {
    id: 19,
    role: 'Leo Lion Member',
    org: 'Lions Club of Colombo 04',
    period: 'Present',
    category: 'Leo'
  },
  {
    id: 1,
    role: 'District Vice President',
    org: 'Leo District 306 D1',
    period: 'Jul 2026 – Present',
    category: 'Leo'
  },
  {
    id: 2,
    role: 'Finance Committee Member',
    org: 'Leo Multiple District 306, Sri Lanka & Maldives',
    period: 'Jul 2026 – Present',
    category: 'Leo'
  },
  {
    id: 17,
    role: 'Multiple District Assistant Treasurer',
    org: 'Leo Multiple District 306, Sri Lanka & Maldives',
    period: 'Jul 2025 – Jun 2026',
    category: 'Leo'
  },
  {
    id: 18,
    role: 'District Chief Council Coordinator',
    org: 'Leo District 306D1',
    period: 'Jul 2025 – Jun 2026',
    category: 'Leo'
  },
  {
    id: 3,
    role: 'President',
    org: 'Sports Council of IIT',
    period: '2026 – Present',
    category: 'IIT'
  },
  {
    id: 4,
    role: 'Program Coordinator',
    org: 'Archdiocesan Catholic Youth Federation',
    period: '2025 – Present',
    category: 'Youth & Church'
  },
  {
    id: 5,
    role: 'President',
    org: 'Gurubewila Deanery Catholic Youth Federation',
    period: '2025 – Present',
    category: 'Youth & Church'
  },
  {
    id: 6,
    role: 'President',
    org: 'Tharala Holy Cross Youth Friendship Foundation',
    period: '2025 – Present',
    category: 'Youth & Church'
  },
  {
    id: 7,
    role: 'Parish Youth Representative',
    org: 'Gurubewila Deanery Catholic Youth Federation',
    period: '2023 – Present',
    category: 'Youth & Church'
  },
  {
    id: 8,
    role: 'Deanery Youth Representative',
    org: 'Archdiocesan Catholic Youth Federation',
    period: '2023 – Present',
    category: 'Youth & Church'
  },
  {
    id: 9,
    role: 'District Treasurer',
    org: 'Leo District 306A1',
    period: '2024 – 2025',
    category: 'Leo'
  },
  {
    id: 10,
    role: 'President',
    org: 'Leo Club of IIT',
    period: '2023 – 2024',
    category: 'Leo'
  },
  {
    id: 11,
    role: 'Sports Director',
    org: 'Students Union of IIT',
    period: '2023 – 2024',
    category: 'IIT'
  },
  {
    id: 12,
    role: 'House Sports Captain',
    org: 'IIT Sports Meet 2023',
    period: '2023',
    category: 'IIT'
  },
  {
    id: 13,
    role: 'Member of the Organizing Committee',
    org: 'IIT Vehicle Parade',
    period: '2023',
    category: 'IIT'
  },
  {
    id: 14,
    role: 'Vice Captain',
    org: 'College Futsal team & Gampaha Youth FC Football team',
    period: '2022 – 2023',
    category: 'Sports & Band'
  },
  {
    id: 15,
    role: 'Western Band Leader',
    org: 'Tharala Holy Cross Church',
    period: '2018 – 2020',
    category: 'Sports & Band'
  },
  {
    id: 16,
    role: 'Treasurer',
    org: 'Science Society, SVP Society & ICT Society of St. Joseph’s College',
    period: '2020',
    category: 'Sports & Band'
  }
];

const categories = ['All', 'Leo', 'IIT', 'Youth & Church', 'Sports & Band'];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredLeadership = activeTab === 'All' 
    ? leadershipExperience 
    : leadershipExperience.filter(item => item.category === activeTab);

  return (
    <section className="section">
      {/* ── Infinite Photo Ribbon ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="ribbon-wrapper"
      >
        <div className="ribbon-track ribbon-track--left">
          <div className="ribbon-inner">
            {[...row1, ...row1].map((src, i) => (
              <div key={i} className="ribbon-slide">
                <img src={src} alt={`Activity ${i + 1}`} className="ribbon-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="ribbon-track ribbon-track--right">
          <div className="ribbon-inner">
            {[...row2, ...row2].map((src, i) => (
              <div key={i} className="ribbon-slide">
                <img src={src} alt={`Activity ${i + 1}`} className="ribbon-img" />
              </div>
            ))}
          </div>
        </div>

        <div className="ribbon-fade ribbon-fade--left" />
        <div className="ribbon-fade ribbon-fade--right" />
      </motion.div>

      <div className="container">
        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="section-title gradient-text">Professional Experience</h2>
          <p className="section-subtitle">
            A comprehensive record of my professional technical roles, community leadership, 
            and organizational contributions.
          </p>
        </motion.div>

        {/* ── Professional Qualifications Section (First) ── */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
            <Briefcase size={22} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Professional Qualifications
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {professionalQualifications.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + idx * 0.1, duration: 0.5 }}
                className="glass-panel"
                style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', position: 'relative' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {job.role}
                    </h4>
                    <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--accent-primary)' }}>
                      {job.company}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <Calendar size={13} />
                    <span style={{ fontWeight: '500' }}>{job.period}</span>
                  </div>
                </div>

                <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {job.bullets.map((bullet, bidx) => (
                    <li key={bidx} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Leadership & Volunteer Experience Section (Second) ── */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
            <Users size={22} style={{ color: 'var(--accent-secondary)' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Leadership & Voluntary Experience
            </h3>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: '1.75rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Leadership List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {filteredLeadership.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="glass-panel leadership-row"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', width: '100%' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                      opacity: 0.6,
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.15rem' }}>
                      {item.role}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      {item.org}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem', flexShrink: 0 }}>
                    <span className="badge" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                      {item.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Ribbon wrapper ── */
        .ribbon-wrapper {
          position: relative;
          overflow: hidden;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 1.5rem 0;
          background: linear-gradient(
            135deg,
            rgba(79, 70, 229, 0.04) 0%,
            rgba(124, 58, 237, 0.04) 100%
          );
          border-bottom: 1px solid var(--glass-border);
        }

        /* ── Each scrolling track ── */
        .ribbon-track {
          overflow: hidden;
          width: 100%;
        }

        .ribbon-inner {
          display: flex;
          gap: 10px;
          width: max-content;
        }

        /* Directions */
        .ribbon-track--left  .ribbon-inner { animation: scrollLeft  40s linear infinite; }
        .ribbon-track--right .ribbon-inner { animation: scrollRight 40s linear infinite; }

        /* Pause on hover */
        .ribbon-wrapper:hover .ribbon-inner { animation-play-state: paused; }

        /* ── Individual slide ── */
        .ribbon-slide {
          flex-shrink: 0;
          width: 200px;
          height: 130px;
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid rgba(79, 70, 229, 0.12);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }

        .ribbon-slide:hover {
          transform: scale(1.06) translateY(-4px);
          box-shadow: 0 12px 32px rgba(79, 70, 229, 0.2);
          border-color: rgba(79, 70, 229, 0.45);
          z-index: 2;
        }

        .ribbon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .ribbon-slide:hover .ribbon-img {
          transform: scale(1.08);
        }

        /* ── Edge fade overlays ── */
        .ribbon-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 3;
        }
        .ribbon-fade--left {
          left: 0;
          background: linear-gradient(to right, var(--bg-primary, #f8fafc) 0%, transparent 100%);
        }
        .ribbon-fade--right {
          right: 0;
          background: linear-gradient(to left, var(--bg-primary, #f8fafc) 0%, transparent 100%);
        }

        /* ── Keyframe animations ── */
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* ── Leadership Rows ── */
        .leadership-row {
          padding: 0.9rem 1.4rem;
          display: flex;
          align-items: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .leadership-row:hover {
          transform: translateX(4px);
          box-shadow: 0 6px 24px rgba(79,70,229,0.08);
        }
      `}</style>
    </section>
  );
};

export default Experience;

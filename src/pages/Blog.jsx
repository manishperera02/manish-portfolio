import { motion } from 'framer-motion';
import { Trophy, Star, Award, BookOpen, Users, Globe } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Most Outstanding Club President – 1st Runners Up 2023/2024',
    org: 'Leo District 306A1',
    category: 'Leadership',
    icon: <Trophy size={20} />,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
  },
  {
    id: 2,
    title: 'Most Outstanding Club Immediate Past President – 1st Runners Up 2024/2025',
    org: 'Leo District 306A1',
    category: 'Leadership',
    icon: <Trophy size={20} />,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
  },
  {
    id: 3,
    title: 'Most Popular Leo – Winner 2024/2025',
    org: 'Leo District 306 A1',
    category: 'Leadership',
    icon: <Star size={20} />,
    color: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.2)',
  },
  {
    id: 4,
    title: 'Josephian Colours for Sports – Football 2019',
    org: 'College Colours Day – 2024',
    category: 'Sports',
    icon: <Award size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 5,
    title: 'Gampaha District Club Runners-Up',
    org: 'Gampaha District Football Club Championship – 2021',
    category: 'Sports',
    icon: <Trophy size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 6,
    title: 'NSBM USports Champions',
    org: 'NSBM Inter-Uni Football Championship – 2023',
    category: 'Sports',
    icon: <Trophy size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 7,
    title: 'All Island Schools Football Champions',
    org: '2016, 2017, 2018 & 2020',
    category: 'Sports',
    icon: <Trophy size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 8,
    title: 'All-Island Schools Best Goalkeeper',
    org: 'All Island Inter Schools Football Championship – 2016',
    category: 'Sports',
    icon: <Star size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 9,
    title: 'Certificate of Merit for Sports – Football',
    org: 'College Colours Night – 2016',
    category: 'Sports',
    icon: <Award size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 10,
    title: 'Champions – 26th Annual Joe-Pete Soccer Encounter',
    org: '2016',
    category: 'Sports',
    icon: <Trophy size={20} />,
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.2)',
  },
  {
    id: 11,
    title: 'Completed Primary Young Learners 1 Term 2 Course',
    org: 'British Council',
    category: 'Academic',
    icon: <BookOpen size={20} />,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
  },
  {
    id: 12,
    title: 'Honors in All Island Graded Examination – Spoken English (2008, 2009, 2010, 2011)',
    org: 'Institute of Western Music & Speech',
    category: 'Academic',
    icon: <Award size={20} />,
    color: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.2)',
  },
  {
    id: 13,
    title: 'Completed the Leadership Development Course',
    org: 'Lions Club of Padukka – Siyanepura',
    category: 'Leadership',
    icon: <Users size={20} />,
    color: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.2)',
  },
];

const categories = ['All', 'Leadership', 'Sports', 'Academic'];

const categoryColors = {
  Leadership: { color: '#D97706', bg: 'rgba(217,119,6,0.1)', border: 'rgba(217,119,6,0.25)' },
  Sports:     { color: '#059669', bg: 'rgba(5,150,105,0.1)',  border: 'rgba(5,150,105,0.25)' },
  Academic:   { color: '#2563EB', bg: 'rgba(37,99,235,0.1)', border: 'rgba(37,99,235,0.25)' },
};

import { useState } from 'react';

const Achievements = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? achievements : achievements.filter(a => a.category === active);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Achievements</h2>
          <p className="section-subtitle">
            A collection of awards, honours, and milestones spanning leadership,
            sports, and academic excellence.
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          {[
            { label: 'Total Achievements', value: achievements.length, color: '#4F46E5' },
            { label: 'Leadership Awards',  value: achievements.filter(a => a.category === 'Leadership').length, color: '#D97706' },
            { label: 'Sports Titles',      value: achievements.filter(a => a.category === 'Sports').length,     color: '#059669' },
            { label: 'Academic Honours',   value: achievements.filter(a => a.category === 'Academic').length,   color: '#2563EB' },
          ].map(s => (
            <div
              key={s.label}
              className="glass-panel"
              style={{ padding: '1rem 1.5rem', flex: '1 1 140px', minWidth: '120px' }}
            >
              <p style={{ fontSize: '1.8rem', fontWeight: '800', color: s.color, letterSpacing: '-0.04em', lineHeight: 1 }}>
                {s.value}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500', marginTop: '0.2rem' }}>
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <div className="filter-tabs" style={{ marginBottom: '1.75rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievement cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {filtered.map((item, i) => {
            const catStyle = categoryColors[item.category];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="glass-panel achievement-row"
              >
                {/* Left accent bar */}
                <div
                  style={{
                    width: '4px',
                    borderRadius: '4px',
                    background: item.color,
                    flexShrink: 0,
                    alignSelf: 'stretch',
                    opacity: 0.7,
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3
                    style={{
                      fontSize: 'clamp(0.88rem, 2vw, 1rem)',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      lineHeight: '1.4',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                    {item.org}
                  </p>
                </div>

                {/* Category pill */}
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: '0.72rem',
                    fontWeight: '700',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '99px',
                    background: catStyle.bg,
                    border: `1px solid ${catStyle.border}`,
                    color: catStyle.color,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .achievement-row {
          padding: 0.85rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .achievement-row:hover {
          transform: translateX(4px);
          box-shadow: 0 6px 24px rgba(79,70,229,0.1);
        }
      `}</style>
    </section>
  );
};

export default Achievements;

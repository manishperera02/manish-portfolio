import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, Server, Code, Monitor } from 'lucide-react';
import { trackProjectClick } from '../utils/analytics';

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

const projectsData = [
  {
    id: 1,
    title: 'ChurnLens – Explainable Customer Churn Prediction',
    year: '2025 – 2026',
    description:
      'Final Year Project — an explainable customer churn prediction web platform helping organisations identify high-risk customers and support targeted retention decisions. Features multi-file data ingestion, churn prediction, probability calibration, SHAP-based reason generation, threshold evaluation, and Top-K customer export through an interactive dashboard.',
    tech: ['React', 'FastAPI', 'Python', 'scikit-learn', 'LightGBM', 'SHAP', 'Pandas'],
    category: 'ML / AI',
    link: 'https://www.churnlens.tech',
    github: null,
    icon: <Code size={22} style={{ color: 'var(--accent-primary)' }} />,
  },
  {
    id: 2,
    title: 'SOS Flood Rescue',
    year: '2025',
    description:
      'An SOS reporting and response web platform built during the Ditwah Cyclone, enabling rapid assistance coordination and successfully raising over LKR 500,000 within one week.',
    tech: ['Web Platform', 'Emergency Response'],
    category: 'Web App',
    link: 'https://www.etickets.leoiit.org',
    github: null,
    icon: <Monitor size={22} style={{ color: '#0891B2' }} />,
  },
  {
    id: 3,
    title: 'E-Waste Management Web Application',
    year: '2024',
    description:
      'A Software Development Group Project at Informatics Institute of Technology — a full-featured web application for managing electronic waste, handling collection requests, and tracking e-waste processing workflows.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'Web App',
    link: null,
    github: null,
    icon: <Layers size={22} style={{ color: '#7C3AED' }} />,
  },
  {
    id: 4,
    title: 'Shopping Management System',
    year: '2024',
    description:
      'A coursework project at IIT — a shopping management system where users can add, update, and delete products from a shopping cart, and calculate the final total with discounts. The GUI was implemented using Java Swing.',
    tech: ['Java', 'Java Swing', 'OOP'],
    category: 'Java',
    link: null,
    github: null,
    icon: <Server size={22} style={{ color: '#D97706' }} />,
  },
  {
    id: 5,
    title: 'Theatre Booking System',
    year: '2023',
    description:
      'A Java-based theatre booking system to manage and control the seats that have been sold and the seats still available for a movie theatre, with a structured seat map and booking state management.',
    tech: ['Java', 'OOP'],
    category: 'Java',
    link: null,
    github: null,
    icon: <Server size={22} style={{ color: '#2563EB' }} />,
  },
  {
    id: 6,
    title: 'Innovative Solutions Group Project',
    year: '2022',
    description:
      'Successfully completed designing an Innovative Solutions Group Project at IIT for E-Waste Management, delivering a working prototype that demonstrated the end-to-end solution concept.',
    tech: ['Prototyping', 'Group Project', 'Design'],
    category: 'Web App',
    link: null,
    github: null,
    icon: <Layers size={22} style={{ color: '#0891B2' }} />,
  },
  {
    id: 7,
    title: 'University Grading System',
    year: '2022',
    description:
      'A Python-based university grading system where students are graded and can check whether they passed, were referred, or failed a module. The project includes lists, text file handling, and dictionaries.',
    tech: ['Python', 'File Handling'],
    category: 'Python',
    link: null,
    github: null,
    icon: <Code size={22} style={{ color: '#7C3AED' }} />,
  },
];

const categories = ['All', 'Web App', 'ML / AI', 'Java', 'Python'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A curated showcase of engineering achievements, focusing on
            performance, scalability, and polished user experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.35 }}
                className="glass-panel project-card"
              >
                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.1rem',
                  }}
                >
                  <div
                    style={{
                      padding: '0.65rem',
                      background: 'rgba(79,70,229,0.06)',
                      borderRadius: '10px',
                      border: '1px solid var(--glass-border)',
                      display: 'inline-flex',
                    }}
                  >
                    {project.icon}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="badge">{project.category}</span>
                    {project.year && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          padding: '0.2rem 0.55rem',
                          background: 'rgba(79,70,229,0.06)',
                          border: '1px solid rgba(79,70,229,0.15)',
                          borderRadius: '6px',
                          color: 'var(--text-muted)',
                          fontWeight: '600',
                        }}
                      >
                        {project.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title + Description */}
                <div style={{ marginBottom: '1rem' }}>
                  <h3
                    style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                      fontWeight: '700',
                      letterSpacing: '-0.02em',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: '1.65',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.4rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.72rem',
                        padding: '0.25rem 0.65rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '6px',
                        color: 'var(--text-secondary)',
                        fontWeight: '600',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                {(project.github || project.link) && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--glass-border)',
                      flexWrap: 'wrap',
                      marginTop: 'auto',
                    }}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={() => trackProjectClick(project.title, 'github', project.github)}
                      >
                        <GithubIcon size={16} /> Source Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={() => trackProjectClick(project.title, 'demo', project.link)}
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .project-card {
          padding: clamp(1.25rem, 3vw, 2rem);
          display: flex;
          flex-direction: column;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }
        .project-link:hover { color: var(--accent-primary); }
      `}</style>
    </section>
  );
};

export default Projects;

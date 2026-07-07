import { motion } from 'framer-motion';
import { Code2, Paintbrush, Heart, Layers, Database, Wrench, BrainCircuit } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code2 size={20} />,
    accentColor: '#4F46E5',
    bg: 'rgba(79,70,229,0.08)',
    border: 'rgba(79,70,229,0.18)',
    items: [
      'HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'PHP', 'SQL', 'Snowflake',
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Layers size={20} />,
    accentColor: '#2563EB',
    bg: 'rgba(37,99,235,0.08)',
    border: 'rgba(37,99,235,0.18)',
    items: [
      'React', 'Node.js', 'FastAPI', 'Express.js',
      'Pandas', 'scikit-learn', 'LightGBM', 'SHAP',
      'Flutter Flow', 'WordPress',
    ],
  },
  {
    category: 'Databases & Data',
    icon: <Database size={20} />,
    accentColor: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.18)',
    items: [
      'MySQL', 'PostgreSQL', 'SQLite', 'Firebase',
      'RESTful APIs', 'JSON', 'CSV / Excel Data',
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    accentColor: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.18)',
    items: [
      'Git', 'GitHub', 'VS Code', 'IntelliJ IDEA',
      'Postman', 'Figma', 'Canva', 'Jupyter Notebook',
      'Google Colab', 'Vercel',
    ],
  },
  {
    category: 'ML & Data Science',
    icon: <BrainCircuit size={20} />,
    accentColor: '#7C3AED',
    bg: 'rgba(124,58,237,0.08)',
    border: 'rgba(124,58,237,0.18)',
    items: [
      'Machine Learning', 'Data Preprocessing', 'Feature Engineering',
      'Model Evaluation', 'SHAP Explainability',
      'Probability Calibration', 'Customer Churn Analysis',
    ],
  },
  {
    category: 'Soft Skills',
    icon: <Heart size={20} />,
    accentColor: '#0891B2',
    bg: 'rgba(8,145,178,0.08)',
    border: 'rgba(8,145,178,0.18)',
    items: [
      'Creativity', 'Leadership', 'Team Work', 'Problem Solving',
      'Communication', 'Time Management', 'Interpersonal Skills', 'Adaptability',
    ],
  },
];

const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title gradient-text">Skills</h2>
          <p className="section-subtitle">
            A snapshot of my technical, creative, and interpersonal capabilities
            built through coursework, projects, and real-world experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-3">
          {skillsData.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.12, duration: 0.5 }}
              className="glass-panel"
              style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  marginBottom: '1.4rem',
                }}
              >
                <div
                  style={{
                    padding: '0.55rem',
                    background: group.bg,
                    borderRadius: '9px',
                    color: group.accentColor,
                    border: `1px solid ${group.border}`,
                    display: 'flex',
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {group.items.map((skill, ii) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: gi * 0.12 + ii * 0.04, duration: 0.3 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.38rem 0.9rem',
                      borderRadius: '999px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      background: group.bg,
                      border: `1px solid ${group.border}`,
                      color: group.accentColor,
                      cursor: 'default',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    whileHover={{
                      scale: 1.07,
                      boxShadow: `0 4px 16px ${group.bg}`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

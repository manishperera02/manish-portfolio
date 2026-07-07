import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home',           path: '/' },
  { name: 'Projects',       path: '/projects' },
  { name: 'Skills',         path: '/skills' },
  { name: 'Achievements',    path: '/blog' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Education',      path: '/education' },
  { name: 'Experience',     path: '/experience' },
  { name: 'Contact',        path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: 'var(--nav-h)',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
      >
        {/* Logo */}
        <NavLink
          to="/"
          className="gradient-text"
          style={{ fontSize: '1.55rem', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          MP.
        </NavLink>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.name} style={{ position: 'relative' }}>
                  <NavLink
                    to={link.path}
                    style={{
                      display: 'inline-block',
                      padding: '0.45rem 0.9rem',
                      fontSize: '0.875rem',
                      fontWeight: active ? '600' : '500',
                      color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      borderRadius: '8px',
                      position: 'relative',
                      zIndex: 2,
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.name}
                  </NavLink>
                  {active && (
                    <motion.div
                      layoutId="navPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(79,70,229,0.08)',
                        borderRadius: '8px',
                        zIndex: 1,
                      }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href="/Manish_Perera_CV.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.9rem',
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#fff',
              background: 'var(--accent-primary)',
              borderRadius: '8px',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <Download size={13} /> Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: '1.5px solid var(--glass-border)',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '0.45rem',
            lineHeight: 0,
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: 'absolute',
              top: 'calc(var(--nav-h) + 8px)',
              left: '1rem',
              right: '1rem',
              background: '#fff',
              border: '1px solid var(--glass-border)',
              borderRadius: '14px',
              padding: '0.75rem',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
            }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '0.7rem 1rem',
                    borderRadius: '9px',
                    fontSize: '0.925rem',
                    fontWeight: active ? '600' : '500',
                    color: active ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    background: active ? 'rgba(79,70,229,0.07)' : 'transparent',
                    transition: 'background 0.15s ease, color 0.15s ease',
                  }}
                >
                  {link.name}
                </NavLink>
              );
            })}
            <a
              href="/Manish_Perera_CV.pdf"
              download
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                padding: '0.7rem 1rem',
                borderRadius: '9px',
                fontSize: '0.925rem',
                fontWeight: '700',
                color: '#fff',
                background: 'var(--accent-primary)',
                marginTop: '0.4rem',
                textAlign: 'center',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <Download size={15} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>


      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import Certifications from './pages/Certifications';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import PageWrapper from './components/PageWrapper';

function AppContent() {
  const location = useLocation();

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
            <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
            <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { AboutPage } from './components/AboutPage';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetails } from './components/ProjectDetails';
import { ConnectPage } from './components/ConnectPage';
import { Footer } from './components/Footer';
import { BackgroundAnimation } from './components/BackgroundAnimation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <Router>
      <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
        <BackgroundAnimation />

        <main className="relative">
          <Routes>
            {/* Main Portfolio Page */}
            <Route
              path="/"
              element={
                <>
                  <div id="home">
                    <Home onNavigate={setActiveSection} />
                  </div>
                  <div id="experience">
                    <Experience />
                  </div>
                  <div id="projects">
                    <Projects />
                  </div>
                  <Footer />
                  <Navigation
                    activeSection={activeSection}
                    onNavigate={setActiveSection}
                  />
                </>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Connect Page */}
            <Route path="/connect" element={<ConnectPage />} />

            {/* Project Details Page */}
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
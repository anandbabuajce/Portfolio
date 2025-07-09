import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotToggle from './components/ChatbotToggle';

import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import SkillsProjectsPage from './pages/SkillsProjectPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navigation */}
        <Navbar />

        {/* Page Content */}
        <main>
          <Routes>
            <Route path="/" element={<HeroPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills-projects" element={<SkillsProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Chatbot Icon */}
        <ChatbotToggle />
      </div>
    </Router>
  );
}

export default App;

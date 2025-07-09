import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../assets/profile.png';
import './HeroPage.css';

const HeroPage = () => {
  return (
    <section className="hero-page">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Anand Babu</h1>
          <h3>Full-Stack Developer | Computer Science Student</h3>
          <p>Passionate about leveraging technology to solve real-world challenges, I am a Computer Science student with a keen interest in full-stack development and impactful innovation. I developed SkillBridge, a web platform that connects daily wage workers with employers, and gained hands-on industry experience during my internship at Infospica. With strong problem-solving skills, leadership experience, and a drive to learn, I strive to build solutions that create meaningful change.</p>
          <a href="/AnandResume.pdf" className="btn" download>Download Resume</a>
          <div className="hero-icons">
            <a href="https://github.com/anandbabuajce"><FaGithub /></a>
            <a href="https://linkedin.com/in/anand-babu-ajce"><FaLinkedin /></a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Anand Babu" />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
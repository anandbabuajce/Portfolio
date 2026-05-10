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

          <h3>Computer Science Engineering Graduate</h3>

            <p>
            Computer Science Engineering graduate with experience in developing web 
            applications and AI-based projects using ReactJS, Python, and modern 
            development tools. Worked on projects including SkillBridge, VENOMSHIELD Kerala, 
            and a Traffic Sign Recognition System using YOLOv11 and ResNet. Interested in 
            full-stack development, problem-solving, and continuously improving technical skills 
            through practical learning and teamwork.
            </p>

          <a href="/AnandResume.pdf" className="btn" download>
            Download Resume
          </a>

          <div className="hero-icons">
            <a href="https://github.com/anandbabuajce">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/anand-babu-ajce">
              <FaLinkedin />
            </a>
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
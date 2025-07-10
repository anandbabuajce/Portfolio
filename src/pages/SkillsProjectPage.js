import React, { useState } from 'react';
import './SkillsProjectPage.css';

const SkillsProjectsPage = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const coreSkills = [
    { name: 'ReactJS', level: 90 },
    { name: 'C', level: 90 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'Java', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'MySQL', level: 80 },
    { name: 'Spring Boot', level: 70 },
  ];

  const allSkills = [
    'ReactJS', 'HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot', 'MySQL', 'MongoDB','Spring Web','Spring Data JPA','Spring Security','Lombok','Spring Boot DevTools',
    'Leadership', 'Teamwork', 'Communication', 'Adaptability', 'Time Management'
  ];

  return (
    <section className="skills-projects-page">
      <h1 className="skills-title">SKILLS</h1>

      <div className="skills-container">
        {/* Left Column */}
        <div className="skills-left">
          {coreSkills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <h2>{skill.name}</h2>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="skills-right">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="show-button"
          >
            {showAllSkills ? 'Hide All Skills' : 'Show All Skills'}
          </button>

          {showAllSkills && (
            <div className="additional-skills">
              {allSkills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="projects-section">
        <h2>PROJECTS</h2>

        <div className="project-card">
          <h3>Vox-Helexia</h3>
          <p>An e-commerce platform for sports items built with ReactJS and Spring Boot. Features scalable UI and secure backend integration.</p>
          <a href="https://react-js-git-main-anand-babus-projects-52f07f70.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <h3>ShopLogo</h3>
          <p>An e-commerce platform for shopping built with ReactJS and Spring Boot. Features user-friendly design and secure backend integration.</p>
          <a href="https://ecommerce-git-main-anand-babus-projects-52f07f70.vercel.app/" target="_blank" rel="noreferrer">View Project</a>
        </div>

        <div className="project-card">
          <h3>SkillBridge</h3>
          <p>A web platform that connects daily wage workers with employers. Built with HTML, CSS, JavaScript, Python Flask, and MongoDB.</p>
          <a href="https://github.com/anandbabuajce/SkillBridge" target="_blank" rel="noreferrer">View Project</a>
        </div>

        
      </div>
    </section>
  );
};

export default SkillsProjectsPage;

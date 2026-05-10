import React, { useState } from 'react';
import './SkillsProjectPage.css';

const SkillsProjectsPage = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillCategories = {
    Languages: ['C', 'Python', 'Java', 'JavaScript'],

    Frontend: ['ReactJS', 'HTML', 'CSS'],

    Backend: ['Spring Boot'],

    Database: ['MySQL', 'MongoDB'],

    'AI / ML': ['YOLOv11', 'ResNet', 'Deep Learning'],

    Tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],

    'Soft Skills': [
      'Problem Solving',
      'Analytical Thinking',
      'Team Collaboration',
      'Adaptability'
    ]
  };

  return (
    <section className="skills-projects-page">
      <h1 className="skills-title">SKILLS</h1>

      <div className="skills-container">

        <button
          onClick={() => setShowAllSkills(!showAllSkills)}
          className="show-button"
        >
          {showAllSkills ? 'Hide Skills' : 'Show Skills'}
        </button>

        {showAllSkills && (
          <div className="skills-categories">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div className="skill-category" key={category}>
                <h3>{category}</h3>

                <div className="skill-list">
                  {skills.map((skill, index) => (
                    <span className="skill-item" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="projects-section">
  <h2>PROJECTS</h2>

  <div className="project-card">
    <h3>VENOMSHIELD-KERALA</h3>

    <p>
      A location-based web application developed to help users find nearby 
      hospitals in Kerala with available anti-venom stock. Built using 
      ReactJS and Spring Boot with features such as district-based filtering 
      and proximity-based hospital search.
    </p>

    <a
      href="https://github.com/anandbabuajce/Venomshield-Kerala"
      target="_blank"
      rel="noreferrer"
    >
      View Project
    </a>
  </div>

  <div className="project-card">
    <h3>SkillBridge</h3>

    <p>
      A web platform designed to connect daily wage workers with employers. 
      Developed using HTML, CSS, JavaScript, Flask, and MongoDB with features 
      for worker listings and job posting.
    </p>

    <a
      href="https://github.com/anandbabuajce/SkillBridge"
      target="_blank"
      rel="noreferrer"
    >
      View Project
    </a>
  </div>

  <div className="project-card">
    <h3>Traffic Sign Recognition & Driver Alert System</h3>

    <p>
      A real-time traffic sign detection and driver alert system developed 
      using YOLOv11, ResNet, Python, and OpenCV for Indian road conditions. 
      The project focuses on traffic sign detection and classification from video input.
    </p>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noreferrer"
    >
      View Project
    </a>
  </div>
      </div>
    </section>
  );
};

export default SkillsProjectsPage;
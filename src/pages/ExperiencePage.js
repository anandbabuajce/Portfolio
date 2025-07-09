import React from 'react';
import './ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <section className="experience-page">
      <div className="experience-grid">
        <div className="experience-block">
          <h2>Experience</h2>
          <ul>
            <li>Full Stack Development Intern – Infospica</li>
            <li>NSS Road Safety Flagship Coordinator</li>
            <li>Designed and Developed SkillBridge</li>
          </ul>
        </div>

        <div className="education-block">
          <h2>Education</h2>
          <ul>
            <li>B.Tech in Computer Science – Amal Jyothi College of Engineering (CGPA: 9.17)</li>
            <li>Plus Two – Sreyas Public School (CGPA: 9.8)</li>
            <li>SSLC – Sreyas Public School (CGPA: 10)</li>
          </ul>
        </div>

        <div className="achievements-block">
          <h2>Achievements</h2>
          <ul>
            <li>Manager’s Honours Award – Semesters 1 to 4</li>
            <li>Participation in NACORE 2025</li>
            <li>SAP Hackfest 2024</li>
            <li>Successfully developed SkillBridge</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;

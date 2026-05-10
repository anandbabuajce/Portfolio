import React from 'react';
import './ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <section className="experience-page">
      <div className="experience-grid">

        <div className="experience-block">
          <h2>Experience</h2>

          <ul>
            <li>
              <strong>Full Stack Development Intern – Infospica</strong><br />
              Assisted in frontend development using ReactJS and supported backend operations with Spring Boot.
            </li>

            <li>
              <strong>Road Safety Coordinator – NSS</strong><br />
              Coordinated road safety awareness activities and collaborated in team-based community programs.
            </li>
          </ul>
        </div>

        <div className="education-block">
          <h2>Education</h2>

          <ul>
            <li>
              <strong>B.Tech in Computer Science and Engineering</strong><br />
              Amal Jyothi College of Engineering – CGPA: 9.07
            </li>

            <li>
              <strong>Senior Secondary Education (CBSE)</strong><br />
              Sreyas Public School, Ponkunnam – 93.6%
            </li>

            <li>
              <strong>Higher Secondary Education (CBSE)</strong><br />
              Sreyas Public School, Ponkunnam – 96.5%
            </li>
          </ul>
        </div>

        <div className="achievements-block">
          <h2>Achievements</h2>

          <ul>
            <li>
              Manager’s Honours Award for academic excellence (Semesters 1–4)
            </li>

            <li>
              Research paper accepted for presentation at IEEE RECCAP 2026
            </li>
          </ul>
        </div>

        <div className="certifications-block">
          <h2>Certifications</h2>

          <ul>
            <li>
              Oracle Database Programming with SQL – Oracle
            </li>

            <li>
              Oracle Java Foundation & Programming using Java – Oracle, Infosys
            </li>

            <li>
              Database Management Systems – NPTEL (Certificate of Merit)
            </li>

            <li>
              Professional Skilling Program – AICTE IDEA LAB
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ExperiencePage;
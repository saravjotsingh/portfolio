import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills<span className="dot">.</span></h1>
      <div className="skills-content">
        <div className="skills-category">
          <h2>Languages</h2>
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Technologies</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Jquery</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Elasticsearch</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>OS</h2>
          <ul>
            <li>Linux</li>
            <li>MacOs</li>
            <li>Jquery</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Soft Skills</h2>
          <ul>
            <li>Effective communication</li>
            <li>Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
        <div className="skills-category">
          <h2>Cloud</h2>
          <ul>
            <li>AWS</li>
          </ul>
        </div>
        </div>
    </div>
  );
}

export default Skills;

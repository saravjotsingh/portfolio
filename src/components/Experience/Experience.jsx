import React, { useState } from 'react';
import './Experience.css';

const experienceData = {
  Freelance: [
    {
      title: 'Backend Developer',
      duration: 'January 2024 - Present',
      responsibilities: [
        'Designed a dynamic leaderboard system for real-time event rewards, boosting user interaction by 60%.',
        'Implemented AWS CodeBuild in the Project to automate the build process, ensuring efficient and consistent code compilation.',
        'Constructed and maintained TypeScript-based applications, leveraging strong typing to improve code reliability and facilitate seamless refactoring.'
      ]
    }
  ],
  Searchunify: [
    {
      title: 'Software Developer',
      duration: 'May 2020 - April 2023',
      responsibilities: [
        'Engineered a multi-tenant authentication service for cross-application user authentication.',
        'Implemented Docker Compose in 15+ projects to orchestrate multi-container environments, achieving up to 30% better resource efficiency and reduced system downtime.',
        'Improved the data retrieval rate by 30% by developing a database architecture and schema design in SQL and NoSQL databases',
        'Increased client satisfaction by 60% through daily interaction and effective communication with 10+ clients.',
        'Engineered Redis caching layer, reducing API response times by 50% and scaling to handle 100,000 daily transactions'
      ]
    },
    {
      title: 'Associate Software Engineer',
      duration: 'January 2019 - May 2020',
      responsibilities: [
        'Managed User Interface creation and debugging, reducing support tickets by 14%',
        'Developed design frames into webpages using HTML5, JavaScript, jQuery, and React.js',
        'Created an administrative dashboard for monitoring user subscription plans and resource usage',
        'Executed 100+ unit tests validating UI functionality, backend processes, and database integration'
      ]
    }
  ],
  // Add other companies similarly...
};

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState('Freelance');

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience<span className="dot">.</span></h1>
      <div className="experience-content">
        <div className="companies">
          <ul className="company-list">
            {Object.keys(experienceData).map((company) => (
              <li
                key={company}
                className={`company-item ${selectedCompany === company ? 'active' : ''}`}
                onClick={() => handleCompanyClick(company)}
              >
                {company}
              </li>
            ))}
          </ul>
        </div>
        <div className="job-details">
          {experienceData[selectedCompany].map((role, index) => (
            <div key={index}>
              <h2 className="job-title">{role.title}</h2>
              <p className="job-duration">{role.duration}</p>
              <ul className="job-responsibilities">
                {role.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

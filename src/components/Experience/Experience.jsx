import React, { useState } from 'react';
import './Experience.css';

const experienceData = {
  Freelance: [
    {
      title: 'Backend Developer',
      duration: 'January 2024 - Present',
      responsibilities: [
        'Deployed multiple Docker containers on ECS, with routing efficiently managed through ELB and Target Groups.',
        'Integrated third-party services such as Stripe for payment processing and Twilio for SMS notifications.',
        'Engineered a scalable chat application using NestJS and Socket.io, ensuring efficient, low-latency communication between users for both one-on-one and group chats.',
        'Implemented AWS SQS to handle background task processing, leading to 20% throughput improvement by offloading and decoupling tasks from the main process.',
        'Built a dynamic leaderboard system with TypeScript, and MySQL, increasing user interaction by 30% through real-time event updates.'
      ]
    }
  ],
  Searchunify: [
    {
      title: 'Software Developer',
      duration: 'January 2021 - April 2023',
      responsibilities: [
        "Migrated a monolithic application to microservices, reducing deployment times by around 50% and improving stability.",
        "Built multi-tenant authentication services using OAuth2 and JWT for unified access control for all services.",
        "Achieved superior application performance by utilizing Node.js in the backend and enabling a non-blocking, event-driven architecture.",
        "Used AWS Lambda to resize images and generate thumbnails, storing them in S3 and utilizing CloudFront for efficient caching and delivery.",
        "Boosted data retrieval rate by 15% with optimized SQL (MySQL & PostgreSQL) and NoSQL(MongoDB) database architecture.",
        "Designed a pub-sub message queue using Kafka to facilitate data transfer between microservices.",
      ]
    },
    {
      title: 'Associate Software Engineer',
      duration: 'August 2019 - December 2020',
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express for various clients.",
        "Implemented Python scripts for data preprocessing with tokenization, stemming, and lemmatization.",
        "Engineered Redis caching, decreasing API response times and scaling to 50k daily transactions.",
        "Executed 100+ unit tests using Mocha, validating functionality, backend processes, and database integration.",
        "Engaged in Agile development practices, participating in sprint planning and delivering tasks within set deadlines",
        
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

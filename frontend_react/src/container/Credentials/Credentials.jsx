import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import credentials from '../../data/credentials';
import './Credentials.scss';

const { achievements, certifications, education } = credentials;

const Credentials = () => {
  return (
    <>
      <h2 className="head-text">
        Achievements &amp; <span>Credentials</span>
      </h2>

      <div className="app__credentials-container">

        <div className="app__credentials-row">
          <h3 className="app__credentials-label">Achievement</h3>
          <div className="app__credentials-cards">
            {achievements.map((a) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__credentials-card app__credentials-card--achievement"
                key={a.title}
              >
                <div className="app__credentials-card-header">
                  <h4 className="bold-text">{a.title}</h4>
                  <span className="app__credentials-year">{a.year}</span>
                </div>
                <p className="p-text">{a.org}</p>
                <p className="p-text app__credentials-desc">{a.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="app__credentials-row">
          <h3 className="app__credentials-label">Certifications</h3>
          <div className="app__credentials-cards">
            {certifications.map((c) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__credentials-card"
                key={c.title}
              >
                <div className="app__credentials-card-header">
                  <h4 className="bold-text">{c.title}</h4>
                  <span className="app__credentials-year">{c.year}</span>
                </div>
                <p className="p-text">{c.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="app__credentials-row">
          <h3 className="app__credentials-label">Education</h3>
          <div className="app__credentials-cards">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__credentials-card"
            >
              <div className="app__credentials-card-header">
                <h4 className="bold-text">{education.degree}</h4>
                <span className="app__credentials-year">{education.years}</span>
              </div>
              <p className="p-text">{education.institution}</p>
              <p className="p-text app__credentials-grade">{education.grade}</p>

              <div className="app__credentials-publication">
                <p className="app__credentials-pub-label">Publication</p>
                <p className="p-text">{education.publication.title}</p>
                <p className="p-text app__credentials-pub-venue">
                  {education.publication.venue}
                </p>
                <a
                  href={`https://doi.org/${education.publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app__credentials-doi"
                >
                  DOI: {education.publication.doi}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Credentials, 'app__credentials'),
  'achievements',
  'app__whitebg'
);

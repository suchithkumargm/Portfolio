import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { skills, experiences } from '../../data';
import './Skills.scss';

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(({ name, bgColor, icon, Icon, color }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={name}
            >
              <div className="app__flex" style={{ backgroundColor: bgColor }}>
                {icon ? (
                  <img src={icon} alt={name} />
                ) : (
                  <Icon role="img" aria-label={name} style={{ color }} />
                )}
              </div>
              <p className="p-text">{name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.length > 0 ? (
            experiences.map((experience) => (
              <motion.div className="app__skills-exp-item" key={experience.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <motion.div
                      key={work.name}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-exp-empty'
            >
              <h1 className='bold-text'>I'm an aspiring developer hungry for opportunities to grow. Looking for <span className=''>referrals</span> to kickstart my journey!</h1>
              <a href='https://www.linkedin.com/in/suchithkumargm' target='_blank' rel='noopener noreferrer'>
                <button type="button" className="p-text" >Refer</button>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'experience',
  'app__whitebg'
);

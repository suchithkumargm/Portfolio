import React from 'react';
import { motion } from 'framer-motion';
import { SiSpringboot, SiAmazonaws } from 'react-icons/si';
import { HiArrowDown } from 'react-icons/hi';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// TODO: make these yours.
const NAME = 'Suchith Kumar';
const ROLE = 'Software Engineer';
const COMPANY = { name: 'IG Group', url: 'https://www.ig.com/en' };

const skillCircles = [
  { label: 'Java', src: images.java },
  { label: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  { label: 'AWS', Icon: SiAmazonaws, color: '#FF9900' },
  { label: 'React', src: images.react },
];

const container = {
  whileInView: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const riseUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Header = () => (
  <motion.div
    className="app__header app__flex"
    variants={container}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
  >
    <motion.h1 className="app__header-name" variants={riseUp}>
      I&apos;m {NAME}
    </motion.h1>

    <motion.p className="app__header-role" variants={riseUp}>
      {ROLE} @{' '}
      <a
        className="app__header-company"
        href={COMPANY.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {COMPANY.name}
      </a>
    </motion.p>

    <motion.a href="#about" className="app__header-cta" variants={riseUp}>
      Learn more about me <HiArrowDown aria-hidden="true" />
    </motion.a>

    <motion.div className="app__header-circles" variants={riseUp}>
      {skillCircles.map(({ label, src, Icon, color }) => (
        <div className="circle-cmp app__flex" key={label} title={label}>
          {src ? (
            <img src={src} alt={label} />
          ) : (
            <Icon role="img" aria-label={label} style={{ color }} />
          )}
        </div>
      ))}
    </motion.div>
  </motion.div>
);

export default AppWrap(Header, 'home');

import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { abouts } from '../../data';

const SUMMARY =
  'Software Engineer with 2 years of experience designing, developing and supporting scalable full-stack applications and backend services in high-regulation financial environments. I take end-to-end ownership of what I build, working in cross-functional Agile teams.';

const About = () => {
	return (
		<>
			<h2 className='head-text'>Passionate About <span>Programming</span>,<br />Driven by <span>Results.</span></h2>

			<p className='p-text app__about-summary'>{SUMMARY}</p>

			<div className='app__profiles'>
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ y: -6 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className='app__profile-item'
						key={about.title + index}
					>
						<h2 className='bold-text'>{about.title}</h2>
						<p className='p-text'>{about.description}</p>
					</motion.div>
				))}
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg'
);

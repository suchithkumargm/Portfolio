import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { works } from '../../data';
import './Work.scss';

const Work = () => {
	return (
		<>
			<h2 className="head-text">My <span>Projects</span></h2>

			<motion.div
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{works.map((work) => (
					<div className="app__work-item" key={work.title}>
						<div className="app__work-content">
							<div className="app__work-header">
								<h4 className="bold-text">{work.title}</h4>
								<p className="app__work-context">{work.context}</p>
							</div>

							<div className="app__work-body">
								<ul className="app__work-highlights">
									{work.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>

								<div className="app__work-tech">
									{work.tech.map((item) => (
										<span key={item}>{item}</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, 'app__works'),
	'work',
	'app__primarybg'
);

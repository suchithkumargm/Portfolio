import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<a href='https://github.com/suchithkumargm' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
					<FiGithub />
				</a>
			</div>
			<div>
				<a href='https://www.linkedin.com/in/suchithkumargm' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a href='https://leetcode.com/u/suchithkumargm' target='_blank' rel='noopener noreferrer' aria-label='LeetCode'>
					<SiLeetcode />
				</a>
			</div>
		</div>
	)
}

export default SocialMedia

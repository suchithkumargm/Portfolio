import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

// single source of truth — also used by the Footer's mobile row
export const socialLinks = [
	{ label: 'GitHub', url: 'https://github.com/suchithkumargm', Icon: FiGithub },
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/suchithkumargm', Icon: FaLinkedinIn },
	{ label: 'LeetCode', url: 'https://leetcode.com/u/suchithkumargm', Icon: SiLeetcode },
];

const SocialMedia = () => {
	return (
		<div className='app__social'>
			{socialLinks.map(({ label, url, Icon }) => (
				<div key={label}>
					<a href={url} target='_blank' rel='noopener noreferrer' aria-label={label}>
						<Icon />
					</a>
				</div>
			))}
		</div>
	)
}

export default SocialMedia

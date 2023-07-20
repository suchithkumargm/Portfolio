import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const SocialMedia = () => {
	return (
		<div className='app__social'>
			<div>
				<a href='https://github.com/suchithkumargm' target='_blank' rel='noopener noreferrer'>
					<FiGithub />
				</a>
			</div>
			<div>
				<a href='https://www.linkedin.com/in/suchithkumargm' target='_blank' rel='noopener noreferrer'>
					<FaLinkedinIn />
				</a>
			</div>
			<div>
				<a href='https://www.instagram.com/suchith_kumar_gm' target='_blank' rel='noopener noreferrer'>
					<BsInstagram />
				</a>
			</div>
		</div>
	)
}

export default SocialMedia

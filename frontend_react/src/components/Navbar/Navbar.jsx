import React from 'react';

import './Navbar.scss';
import { images } from '../../constants';

const links = ['home', 'about', 'work', 'experience', 'achievements', 'contact'];

const Navbar = () => {
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<a href='#home' aria-label='Back to top'>
					<img src={images.logo} alt='logo' />
				</a>
			</div>
			<ul className='app__navbar-links'>
				{links.map((item) => (
					<li className='app__flex p-text' key={`link-${item}`}>
						{/* to create a dot above the hovered element */}
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar;

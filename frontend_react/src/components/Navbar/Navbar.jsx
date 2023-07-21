import React, { useState ,useEffect} from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [isBlogPage,setIsBlogPage]=useState(false);

	useEffect(() => {
		console.log('Location changed:', location.pathname);
		if(location.pathname==='/blogs' || location.pathname==='/blogs/:name'){
			setIsBlogPage(true);
		}
	  }, [location.pathname]);

	  const handleNavigation = (item) => {
		if (!isBlogPage) {
		  // If it's not a blog page, navigate to the corresponding route using the hash symbol
		  console.log(item);
		  navigate(`#${item}`);
		} else {
		  // If it's a blog page, navigate to the root route '/'
		  navigate('/');
		}
	  };

	const [toggle, setToggle] = useState(false);
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={images.logo} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				{['home', 'about', 'work', 'skills', 'contact'].map((item) => (
					<li className='app__flex p-text' key={`link-${item}`}>
						{/* to create a dot above the hovered element */}
						<div />
						<a href={`#${item}`} onClick={() => handleNavigation(item)}>{item}</a> 
					</li>
				))}
				<li className='app__flex p-text'><div /><a onClick={() =>navigate('/blogs')}>
				blogs</a></li>
			</ul>

			{/*for implementing hamburger menu for mobile devices */}
			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{['home', 'about', 'work', 'skills', 'contact'].map((item) => (
								<li key={item}>
									{/* <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a> */}
									<a href={`#${item}`} onClick={() => {
										handleNavigation(item)
									setToggle(false)
									}}>{item}</a>
								</li>
							))}
							<li><a onClick={() => {
								navigate('/blogs')
								setToggle(false)
							}}>
								blogs</a></li>
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	)
}

export default Navbar;
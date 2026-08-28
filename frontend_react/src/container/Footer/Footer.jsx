import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const CONTACT_EMAIL = 'suchithkumargm@gmail.com';

const Footer = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Opens the visitor's mail client with the message pre-filled. No backend needed.
	const handleSubmit = () => {
		const subject = encodeURIComponent(`Portfolio enquiry from ${formData.username || 'someone'}`);
		const body = encodeURIComponent(
			`Name: ${formData.username}\nEmail: ${formData.email}\n\n${formData.message}`,
		);

		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
		setIsFormSubmitted(true);
	};

	return (
		<>
			<h2 className="head-text">Contact Me</h2>

			<div className="app__footer-cards">
				<div className="app__footer-card ">
					<img src={images.email} alt="email" />
					<a href={`mailto:${CONTACT_EMAIL}`} className="p-text">{CONTACT_EMAIL}</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+91 9108733565" className="p-text">+91 9108733565</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
					</div>
					<div className="app__flex">
						<input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name='message'
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">
						Thank you for getting in touch!
					</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__whitebg',
);
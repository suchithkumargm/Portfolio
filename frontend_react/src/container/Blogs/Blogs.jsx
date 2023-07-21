import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'

import { urlFor, client } from '../../client';
import './Blogs.scss';

const Blogs = () => {
	const navigate = useNavigate();
	const handleViewBlog = (projectName) => {
		navigate(`/blogs/${projectName}`);
	};

	const [blog, setBlog] = useState([]);

	useEffect(() => {
		const query = '*[_type == "blogs"]';

		client.fetch(query).then((data) => {
			setBlog(data);
		});
	}, []);

	return (
		<>
			<div className='app__blog'>
				<div className='app__blogs-empty'></div>

				<h2 className="head-text">My Project Blogs</h2>

				{blog.map((item) => (
					<div className="d-flex align-items-center justify-content-center">
						<div className="col-md-8">
							<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative  bg-white app__blog-card">
								<div className="col p-4 d-flex flex-column position-static">
									<h2 className="mb-0 ">{item.projectName}</h2>
									<p className="card-text mb-auto">{item.description}</p>
									<button onClick={() => handleViewBlog(item.projectName)}>View Blog</button>
								</div>
								<div className="col-auto d-none d-lg-block">
									<img src={urlFor(item.mainImgUrl)} />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Blogs

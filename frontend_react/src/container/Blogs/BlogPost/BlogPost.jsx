import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../../client';
import { useParams } from 'react-router-dom';

import './BlogPost.scss';

const BlogPost = () => {
	const { projectName } = useParams();

	const [blogData, setBlogData] = useState({});

	useEffect(() => {
		if (projectName) {
			const query = `*[_type == "blogs" && projectName == "${projectName}"][0]`;

			client.fetch(query).then((data) => {
				setBlogData(data);
			});
		}
	}, [projectName]);

	return (
		<>
		<div className='app__blogs-empty'></div>
			{Object.keys(blogData).length > 0 && (

				<div className='container'>
					<h1 className='head-text'>{blogData.projectName}</h1>
					<div className='app__blogPost-links'>
						<a href={`${blogData.blogPost[0].website}`} target='_blank'>Visit Website</a>
						<a href={`${blogData.blogPost[0].github}`} target='_blank' rel='noreferrer'>
							GitHub code
						</a>
					</div>
					<div className="col-md-12 blog-main">

						<div className="blog-post">
							<div className='features'>
								<h2 className="blog-post-title">Introduction</h2>
								<p >{blogData.blogPost[0].introduction}</p>
							</div>
							<hr />

							<div className='features'>
								<h2 className='blog-post-title'>Features and Functionality</h2>
								<div className='app__blog-list'>
									<ul>
										{blogData.blogPost[0].features.map((feature, index) => (
											<li key={`feature-${index}`}>{feature}</li>
										))}
									</ul>
								</div>
							</div>

							<hr />

							<div className='technologies'>
								<h2 className='blog-post-title'>Technologies</h2>
								<div className='app__blog-list'>
									<ul>
										{blogData.blogPost[0].technologies.map((technology, index) => (
											<li key={`technology-${index}`}>{technology}</li>
										))}
									</ul>
								</div>
							</div>

							<hr />

							<div className='screenshots'>
								<h2 className='blog-post-title'>Screenshots</h2>
								{blogData.blogPost[0].screenshots.map((screenshot, index) => (
									<div key={`screenshot-${index}`}>
										<div className='text-center'>
											<img src={urlFor(screenshot.image).url()} alt={screenshot.description} className='img'/>
										</div>
										<p>{screenshot.description}</p>
									</div>
								))}
							</div>

							<hr />
							<div className='conclusion'>
								<h3 className='blog-post-title'>Conclusion</h3>
								<p >{blogData.blogPost[0].conclusion}</p>
							</div>
						</div>

					</div>
				</div>
			)}
		</>
	);
};

export default BlogPost;

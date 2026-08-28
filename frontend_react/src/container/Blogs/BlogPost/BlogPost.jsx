import React from 'react';
import { useParams } from 'react-router-dom';

import { blogs } from '../../../data';
import './BlogPost.scss';

const BlogPost = () => {
	const { projectName } = useParams();

	const blogData = blogs.find((item) => item.projectName === projectName);
	const post = blogData?.blogPost?.[0];

	if (!post) {
		return (
			<>
				<div className='app__blogs-empty'></div>
				<div className='container'>
					<h1 className='head-text'>Post not found</h1>
				</div>
			</>
		);
	}

	return (
		<>
			<div className='app__blogs-empty'></div>
			<div className='container'>
				<h1 className='head-text'>{blogData.projectName}</h1>
				<div className='app__blogPost-links'>
					<a href={post.website} target='_blank' rel='noreferrer'>Visit Website</a>
					<a href={post.github} target='_blank' rel='noreferrer'>GitHub code</a>
				</div>
				<div className="col-md-12 blog-main">

					<div className="blog-post">
						<div className='features'>
							<h2 className="blog-post-title">Introduction</h2>
							<p>{post.introduction}</p>
						</div>
						<hr />

						<div className='features'>
							<h2 className='blog-post-title'>Features and Functionality</h2>
							<div className='app__blog-list'>
								<ul>
									{(post.features ?? []).map((feature, index) => (
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
									{(post.technologies ?? []).map((technology, index) => (
										<li key={`technology-${index}`}>{technology}</li>
									))}
								</ul>
							</div>
						</div>

						<hr />

						<div className='screenshots'>
							<h2 className='blog-post-title'>Screenshots</h2>
							{(post.screenshots ?? []).map((screenshot, index) => (
								<div key={`screenshot-${index}`}>
									<div className='text-center'>
										<img src={screenshot.image} alt={screenshot.description} className='img' />
									</div>
									<p>{screenshot.description}</p>
								</div>
							))}
						</div>

						<hr />
						<div className='conclusion'>
							<h3 className='blog-post-title'>Conclusion</h3>
							<p>{post.conclusion}</p>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default BlogPost;

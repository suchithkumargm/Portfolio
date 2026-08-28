import placeholder from '../assets/about02.png';

// `projectName` is used as the URL slug: /blogs/<projectName>. Keep it URL-safe.
// Set this to [] if you don't want any blog posts yet.
const blogs = [
  {
    projectName: 'example-project',
    description: 'Short teaser shown on the blog list page.',
    mainImgUrl: placeholder,
    blogPost: [
      {
        website: 'https://example.com',
        github: 'https://github.com/suchithkumargm',
        introduction: 'What the project is and why you built it.',
        features: ['First feature', 'Second feature', 'Third feature'],
        technologies: ['React', 'Node.js', 'MongoDB'],
        screenshots: [
          { image: placeholder, description: 'Caption for this screenshot.' },
        ],
        conclusion: 'What you learned and what you would do differently.',
      },
    ],
  },
];

export default blogs;

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('home route renders sections from local data files', () => {
  render(<App />);
  expect(screen.getByText(/Passionate About/i)).toBeInTheDocument();
  expect(screen.getByText('Backend Development')).toBeInTheDocument();  // about.js
  expect(screen.getByText('Project One')).toBeInTheDocument();          // works.js
  expect(screen.getByText('JavaScript')).toBeInTheDocument();           // skills.js
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();    // experiences.js -> the previously-dead timeline
  expect(screen.getByText('Contact Me')).toBeInTheDocument();
});

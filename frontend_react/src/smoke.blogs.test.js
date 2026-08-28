import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Blogs from './container/Blogs/Blogs';
import BlogPost from './container/Blogs/BlogPost/BlogPost';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:projectName" element={<BlogPost />} />
      </Routes>
    </MemoryRouter>,
  );

test('/blogs lists posts from data file', () => {
  renderAt('/blogs');
  expect(screen.getByText('My Project Blogs')).toBeInTheDocument();
  expect(screen.getByText('example-project')).toBeInTheDocument();
});

test('/blogs/:projectName renders a post', () => {
  renderAt('/blogs/example-project');
  expect(screen.getByText('Introduction')).toBeInTheDocument();
  expect(screen.getByText('First feature')).toBeInTheDocument();
});

test('unknown slug shows a not-found state instead of crashing', () => {
  renderAt('/blogs/does-not-exist');
  expect(screen.getByText('Post not found')).toBeInTheDocument();
});

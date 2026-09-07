import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

test('home route renders sections from local data files', () => {
  render(<App />);
  expect(screen.getByText(/Passionate About/i)).toBeInTheDocument();
  expect(screen.getByText('Backend Engineering')).toBeInTheDocument();   // about.js
  expect(screen.getByText('Project One')).toBeInTheDocument();          // works.js
  expect(screen.getByText('Your Company')).toBeInTheDocument();         // experiences.js -> the previously-dead timeline
  expect(screen.getByText('Contact Me')).toBeInTheDocument();

  // About is text-only — no placeholder illustrations
  expect(document.querySelectorAll('.app__profile-item img')).toHaveLength(0);
});

test('hero shows four skill circles and no photo of a person', () => {
  const { container } = render(<App />);
  const hero = within(container.querySelector('#home'));

  // the stock profile photo is gone
  expect(hero.queryByAltText('profile_bg')).not.toBeInTheDocument();
  expect(hero.queryByAltText('profile_circle')).not.toBeInTheDocument();

  // <img> logos expose alt text; react-icons SVGs expose aria-label
  expect(hero.getByAltText('Java')).toBeInTheDocument();
  expect(hero.getByLabelText('Spring Boot')).toBeInTheDocument();
  expect(hero.getByLabelText('AWS')).toBeInTheDocument();
  expect(hero.getByAltText('React')).toBeInTheDocument();
  expect(hero.queryByAltText('Node.js')).not.toBeInTheDocument();
  expect(hero.queryByLabelText(/Data structures/i)).not.toBeInTheDocument();

  // full name, as plain text rather than a card
  expect(hero.getByRole('heading', { name: /Suchith Kumar/ })).toBeInTheDocument();
  expect(document.querySelector('.badge-cmp')).toBeNull();
  expect(document.querySelector('.tag-cmp')).toBeNull();

  // plain role line replaced the pills; greeting is gone
  expect(container.querySelectorAll('#home .app__header-tag')).toHaveLength(0);
  expect(hero.queryByText(/Hello, World/i)).not.toBeInTheDocument();
  expect(hero.getByText(/Software Engineer/)).toBeInTheDocument();
  expect(hero.getByRole('link', { name: 'IG Group' })).toHaveAttribute('href', 'https://www.ig.com/en');
  expect(hero.getByRole('link', { name: /Learn more about me/i })).toHaveAttribute('href', '#about');

  expect(container.querySelectorAll('#home .circle-cmp')).toHaveLength(4);
});

test('navbar logo links back to the top', () => {
  render(<App />);
  const logoLink = screen.getByRole('link', { name: 'Back to top' });
  expect(logoLink).toHaveAttribute('href', '#home');
  expect(within(logoLink).getByAltText('logo')).toBeInTheDocument();
});

test('navbar shows all links directly — no hamburger menu', () => {
  const { container } = render(<App />);
  const nav = within(container.querySelector('.app__navbar'));

  ['home', 'about', 'work', 'skills', 'contact'].forEach((item) => {
    expect(nav.getByRole('link', { name: item })).toHaveAttribute('href', `#${item}`);
  });

  // the toggle drawer is gone entirely
  expect(container.querySelector('.app__navbar-menu')).toBeNull();
});

test('social rail links to GitHub, LinkedIn and LeetCode — not Instagram', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: 'LeetCode' })[0]).toHaveAttribute(
    'href', 'https://leetcode.com/u/suchithkumargm',
  );
  expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'LinkedIn' })[0]).toBeInTheDocument();
  expect(document.querySelector('a[href*="instagram"]')).toBeNull();

  // every section's rail carries all three
  const rails = document.querySelectorAll('.app__social');
  expect(rails.length).toBeGreaterThan(0);
  rails.forEach((rail) => {
    expect(rail.querySelector('a[href*="leetcode"]')).not.toBeNull();
  });

  // and the contact section repeats them for phones, where the rail is hidden
  const footerRow = document.querySelector('.app__footer-social');
  expect(footerRow.querySelector('a[href*="leetcode"]')).not.toBeNull();
  expect(footerRow.querySelectorAll('a')).toHaveLength(3);
});

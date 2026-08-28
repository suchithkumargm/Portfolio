import '@testing-library/jest-dom';

// framer-motion's whileInView uses IntersectionObserver, which jsdom does not implement.
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
}
global.IntersectionObserver = IntersectionObserver;
window.IntersectionObserver = IntersectionObserver;

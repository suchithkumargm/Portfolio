import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { About, Footer, Header, Skills, Work, Blogs, BlogPost } from './container';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Work />
              <Skills />
              <Footer />
            </>
          } />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:projectName" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

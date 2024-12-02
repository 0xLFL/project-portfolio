import React from 'react';
import About from '../About/index';
import Education from '../Education/index';
import Header from '../Header/index';
import Home from '../Home/index';
import Projects from '../Projects/index';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className='home-page-body-container'>
        <Home />
        <Projects />
        <Education />
        <About />
      </div>
    </div>
  )
}

export default HomePage
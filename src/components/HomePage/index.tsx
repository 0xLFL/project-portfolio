import { Config } from '@/app/[route]/page';
import React from 'react';
import About from '../About/index';
import Education from '../Education/index';
import Header from '../Header/index';
import Home from '../Home/index';
import Projects from '../Projects/index';

const HomePage = ({ config }: { config: Config }) => {
  return (
    <div>
      <Header />
      <div className='home-page-body-container hide-scrollbar'>
        <Home config={config}/>
        <Projects config={config}/>
        <Education config={config}/>
        <About config={config}/>
      </div>
    </div>
  )
}

export default HomePage
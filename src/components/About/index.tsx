import { Config } from '@/app/[route]/page';
import React from 'react';
import './styles.css'

const About = ({ config }: { config: Config }) => {
  return (
    <div id='about-container' className='home-container'>
      <h1 className='h1 home-title'>
        About Me
      </h1>
      <div></div>
    </div>
  )
}

export default About;
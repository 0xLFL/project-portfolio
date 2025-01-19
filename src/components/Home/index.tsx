import { Config } from '@/app/[route]/page';
import React from 'react';
import './styles.css'

const Home = ({ config }: { config: Config }) => {
  if (!config) {
    return (<div></div>);
  }

  const {
    welcomeMessageLarge,
    welecomeMessageSmall,
  } = config;
  return (
    <div id='home-container' className='home-container'>
      <div className='home-text-container'>
        <h1 className='h1 home-title'>
          {welcomeMessageLarge}
        </h1>
        <h2 className='h2 home-description'>
          {welecomeMessageSmall}
        </h2>
      </div>
    </div>
  )
}

export default Home;

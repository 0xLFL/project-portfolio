import { Config } from '@/app/[route]/page';
import React from 'react';
import Project from '../Project/index';
import './styles.css';

const Line = () => (<div className='project-div-line'></div>)

const Projects = ({ config }: { config: Config }) => {
  if (!config) {
    return (<div></div>)
  }
  const {
    projects,
    github,
  } = config;

  return (
    <div id='projects-container' className='home-container project'>
      <h1 className='h1 home-title'>
        My Projects
      </h1>
      <div className='projects-wrapper'>
        <Line />
        {
          projects.map(({
            name,
            repo,
            img,
            description,
            example
          },
          index,
          ) => (
            <React.Fragment key={index}>
              <Project
                name={name}
                repo={`https://github.com/${github}/${repo}`}
                img={img}
                description={description}
                example={example}
              />
              <Line />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;
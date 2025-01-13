"use client";
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const Project = ({
  name,
  description,
  repo,
  img,
  example,
}: {
  name: string,
  description: string,
  repo: string,
  img: string,
  example: string,
}) => (
  <div className='project-contianer'>
    <img className='project-img' src={img} />
    <div className='project-info-wrapper'>
      <div className='project-info-container name'>
        <h2 className='project-text title'>{name}</h2>
        <p className='project-text description'>{description}</p>
      </div>
      <div className='project-info-container apart'>
        <Link className='project-text link' href={example}>See Demo <FaArrowRight /></Link>
        <Link className='project-text link' href={`https://github.com/${process.env.GIT_HUB_USERNAME}/${repo}`}>See Repository <FaArrowRight /></Link>
      </div>
    </div>
  </div>
)

const Line = () => (<div className='project-div-line'></div>)

const Projects = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const [blockHeight, setBlockHeight] = useState(1);
  const blockRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects: any[] = [{
    name: 'Project one',
    description: 'This is the description for project one',
    repo: 'project-portfolio',
    img: 'https://symphonious-selkie-ebdd8f.netlify.app/EXOSOC_Logo.JPEG',
    example: 'https://github.com/0xLFL',
  }, {
    name: 'Project two',
    description: 'This is the description for project two',
    repo: 'project-portfolio',
    img: 'https://symphonious-selkie-ebdd8f.netlify.app/EXOSOC_Logo.JPEG',
    example: 'https://github.com/0xLFL',
  }, {
    name: 'Project three',
    description: 'This is the description for project three',
    repo: 'project-portfolio',
    img: 'https://symphonious-selkie-ebdd8f.netlify.app/EXOSOC_Logo.JPEG',
    example: 'https://github.com/0xLFL',
  }, {
    name: 'Project four',
    description: 'This is the description for project four',
    repo: 'project-portfolio',
    img: 'https://symphonious-selkie-ebdd8f.netlify.app/EXOSOC_Logo.JPEG',
    example: 'https://github.com/0xLFL',
  }];

  const checkVisibility = (elementRef: React.RefObject<HTMLDivElement>): boolean => {
    const rect = elementRef.current?.getBoundingClientRect();
    if (rect) {
      // Check if the element is within the viewport
      console.log({top: rect.top, left: rect.left, bottom: rect.bottom, right: rect.right, height: window.innerHeight, width: window.innerWidth})
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    }

    return false;
  };

  useEffect(() => {
    console.log('####', blockRef.current, blockRef.current?.clientHeight)
    if (blockRef.current) {
      setBlockHeight(blockRef.current.clientHeight);
      console.log(blockHeight);
    }
  }, [blockRef]);

  useEffect(() => {
    console.log(scrollValue)
  }, [scrollValue])

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const blockHeight = blockRef.current?.clientHeight || 0;
      if (
        !(event.deltaY < 0 && scrollValue === 0) &&
        !(event.deltaY > 0 && scrollValue === blockHeight)
      ) {
        event.preventDefault();

        setScrollValue((prevValue) => {
          console.log('!!!!', prevValue, event.deltaY)
          const newValue = prevValue + event.deltaY;
          console.log(newValue < 0, blockHeight, newValue > blockHeight)
          
          if (newValue < 0) {
            return 0;
          } else if (blockHeight && newValue > blockHeight) {
            return blockHeight;
          } else {
            return newValue
          };
        });
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [])

  return (
    <div ref={containerRef} style={{ height: '80vh', overflow: 'hidden' }} id='projects-container' className='home-container project'>
      <h1 className='h1 home-title'>
        My Projects
      </h1>
      <div ref={blockRef} className='projects-wrapper'>
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
                repo={repo}
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
import React from 'react';
import '../Projects/styles.css';
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
        <Link className='project-text link' href={repo}>See Repository <FaArrowRight /></Link>
      </div>
    </div>
  </div>
)

export default Project;
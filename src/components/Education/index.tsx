import { Config } from '@/app/[route]/page';
import React from 'react';
import './styles.css'

const Education = ({ config }: { config: Config }) => {
  if (!config) {
    return (<div></div>)
  }
  const {
    notableCourses,
    educationDescription
  } = config;

  return (
    <div id='education-container' className='home-container'>
      <div className='education-wrapper'>
        <h1 className='h1 home-title'>
          My Education
        </h1>
        <div className='education-details-container'>
          {/* Education description */}
          <p>
            {educationDescription}
          </p>
          
          <div className='notable-course-container'>
            {/* Notable Courses */}
            <h2>Notable Courses</h2>
            {
              notableCourses.map(({ name, mark, grade, discription }, index) => {
                return (
                  <div key={index}>
                    {/* Course name */}
                    <h4>{name}{grade ? ` - ${grade}` : ''}</h4>
                    
                    {/* Mark */}
                    { mark &&
                      <h5>Mark: {mark}</h5>
                    }

                    { /* Discription */ }
                    <p>{discription}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
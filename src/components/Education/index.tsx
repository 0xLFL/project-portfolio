import React from 'react';
import './styles.css'

const Education = () => {
  return (
    <div id='education-container' className='home-container'>
      <h1 className='h1 home-title'>
        My Education
      </h1>
      <div>
        {/* Education description */}
        <p>My education, i studyed at nregs, graduating in efsbsrt of fsgbndth</p>
        
        {/* Notable Courses */}
        <h3>Notable Courses</h3>

        <div>
          {/* Course name */}
          <h4>Course Name</h4>

          {/* Mark */}
          <h5>Mark: {75}</h5>

          { /* Discription */ }
          <p>This is the description of the course in covered this, this and than</p>
        </div>
      </div>
    </div>
  )
}

export default Education;
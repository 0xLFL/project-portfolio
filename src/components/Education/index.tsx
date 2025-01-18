import React from 'react';
import './styles.css'

const Education = () => {
  const notableCourses = [{
    name: 'COMP6080 Web Front-End Programming',
    mark: null,
    grade: 'High Distinction',
    discription: 'This course takes students from basic static HTML and css websites, through to using ReactJs to create dynamic websites'
  }, {
    name: 'COMP2521 Data Structures and Algorithms',
    mark: null,
    grade: 'Credit',
    discription: 'This course provides an introduction to the structure, analysis and usage of a range of fundamental data types and the core algorithms that operate on them.'
  }, {
    name: 'COMP2511 Object-Oriented Design & Programming',
    mark: null,
    grade: 'Credit',
    discription: 'The course introduces students to Object-Oriented Programming and explores how OOP attempts to solve the problem of good software design. Software design patterns are also taught in this course.'
  }, {
    name: 'COMP1511 Programing Fundamentals',
    mark: null,
    grade: 'High Distinction',
    discription: 'This course is an introductory course to the basics of computer programming and Computer Science.'
  }]

  return (
    <div id='education-container' className='home-container'>
      <h1 className='h1 home-title'>
        My Education
      </h1>
      <div>
        {/* Education description */}
        <p>
          I studied a Bachelor of Computer Science at the University of New South Wales.
          I begun my studies in february 2021, initialy studying electrical engineering
          before picking up computer science as a double degree and later dropping down to
          just study computer science. Through my degree i have learnt propper git tequies,
          software design pattens, agile programing (Jira) and sql database design as well
          as various type of test such as black box, unit, end to end and compent testing.
        </p>
        
        <div>
        {/* Notable Courses */}
        <h3>Notable Courses</h3>
          {
            notableCourses.map(({ name, mark, grade, discription }, index) => {
              return (
                <div key={index}>
                  {/* Course name */}
                  <h4><b>{name}</b>{grade ? ` - ${grade}` : ''}</h4>
                  
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
  )
}

export default Education;
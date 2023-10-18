
import React from 'react'

const Header = ({name}) => {
  return (
    <h3>{name}</h3>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return(
    <h4>Total of {total} exercises</h4>
  ) 
}

const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course





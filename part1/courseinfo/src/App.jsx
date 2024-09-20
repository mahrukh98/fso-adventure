const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1> 
    </div>
  )
}

const Part = ({part, exercise}) => {
  return (
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  )
} 
const Content = ({part1, part2, part3}) => {
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part3.exercises}/>
    </div>
  )
}

const Total = ({part1, part2, part3}) => {
  return (
    <div>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // objects for each part
  const part1 = {name: 'Fundamentals of React' , exercises: 10}
  const part2 = {name: 'Using props to pass data' , exercises: 7}
  const part3 = {name: 'State of a component', exercises: 14}
  
  return (
    <div>
      <Header course={course} />
      <Content part1 = {part1} part2 ={part2} part3 = {part3} />
      <Total part1 = {part1} part2 ={part2} part3 = {part3}/>
    </div>
  )
}

export default App
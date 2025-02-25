import { useState } from "react";
// import Header from "./Header";
// import Content from "./Content"
// import Total from "./Total"

const App = () => {

  // const course = {
  //   name: 'Half Stack application development',
  //   parts: [
  //      { name: "Fundamentals of React", exercises: 10},
  //      { name: "Using props to pass data", exercises: 7},
  //      { name: "State of a component", exercises: 14}
  //    ]
  // }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const handleGood = () => {
    return setGood(good + 1)
  }
  const handleNeutral = () => {
    return setNeutral(neutral + 1)
  }
  const handleBad = () => {
    return setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
        <div>

        <h2>statistics</h2>
        <p>{good}</p>
        <p>{neutral}</p>
        <p>{bad}</p>
        </div>
        
      </div>

      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </div>
  );
};

export default App;

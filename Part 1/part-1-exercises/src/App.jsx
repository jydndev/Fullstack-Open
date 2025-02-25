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
  
  const all = good + neutral + bad;

  const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
  const positivePercentage = all === 0 ? 0 : (good / all) * 100;
  
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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positivie {positivePercentage}</p>
        </div>
        
      </div>

      {/* <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </div>
  );
};

export default App;

import { useState } from "react";
// import Display from "./Display";
// import Button from "./Button";

const History = ({allClicks}) => {
if (allClicks.length === 0) {
  return (
    <div> press button to start</div>
  )
}

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}




const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft+ right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
     <p>total {total}</p>
     <History allClicks={allClicks} />
    </div>
  )
}

export default App;

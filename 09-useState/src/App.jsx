import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(0)

  function increaseNum(){
    console.log("Increasing");
    setNum(num+1)
  }
  function decreaseNum(){
    console.log("Decreasing");
    setNum(num-1)
  }
  function jumpBy5(){
    console.log("Increasing by 5");
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpBy5}>Increase 5</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Ukeshwar',age:20})

  const btnClicked = () =>{
    const newNum = {...num} // destructure
    newNum.user ='Shresh'
    newNum.age = 21
    setNum(newNum)
  }

  const [arr, setarr] = useState([10,20,30])

  const changeArr = () =>{
    const newArr = [...arr]
    newArr.pop()
    newArr.push(40)
    setarr(newArr)
  }

  return ( 
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      <h1>Array is {arr}</h1>
      <button onClick={changeArr}>Click</button>
    </div>
  )
}

export default App

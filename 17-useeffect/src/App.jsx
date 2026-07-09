import React, { useEffect, useState } from 'react'

const App = () => {
  
  function aIsChanging(){
    console.log("a is changing");
  }
  
  function bIsChnaging(){
    console.log("b is changing");
  }

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(function(){
    aIsChanging()
    bIsChnaging()
    console.log("use effect is running...")
  },[a,b])

  return (
    <div>
      <h1>A: {a}</h1>
      <h1>B: {b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1);
      }}>Change B</button>
    </div>
  )
}

export default App

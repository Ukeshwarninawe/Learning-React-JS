import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // using fetch

  // async function getData(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }
  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const data = await response.json()
  //   console.log(data)
  // }
  
  // using axios

  const [data, setData] = useState([])

  const getData = async () =>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data);
    
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello {elem.author} {idx+1}</h3>
        })}
      </div>
    </div>
  )
}

export default App

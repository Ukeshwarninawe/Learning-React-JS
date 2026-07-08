import React from 'react'

const App = () => {

  // localStorage.setItem('user','Ukeshwar')
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // console.log(user)
  // console.log(age)
  // // localStorage.removeItem('user')

  const user = {
    username:'Ukeshwar',
    age:20,
    city:'Mumbai'
  }

  // console.log(user);

  localStorage.setItem('user',JSON.stringify(user))

  const result = JSON.parse(localStorage.getItem('user'))
  console.log(result)
  console.log(typeof(result))

  return (
    <div>
      App
    </div>
  )
}

export default App

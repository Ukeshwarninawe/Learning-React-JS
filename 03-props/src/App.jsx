import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Arthur Morgan" age={43} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_GJ266LqUdnuynvVMOjeSeklJXaCAC8W9w&s"/>
      <Card user="John Marston" age={39} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xkXm9F180_AT8zkd7BJCwG447v0-bdEp0g&s"/>
      <Card user="Dutch Vander Linde" age={47} img="https://i.redd.it/04x6r6sig7pc1.jpeg"/>
      <Card user="Micah Bell" age={53} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9A5AEIwZmUY_S2jDhWSiTYilIQFJcTGIMA&s"/>
    </div>
  )
}

export default App

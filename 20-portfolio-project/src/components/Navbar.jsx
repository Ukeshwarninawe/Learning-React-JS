import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='nav'>
        <div className='flex justify-center items-center w-full px-4 py-4'>
          <div className='flex justify-between w-full max-w-sm text-sm font-medium'>
            <Link className='transition duration-300 hover:text-white hover:scale-110' to='/'>Home</Link>
            <Link className='transition duration-300 hover:text-white hover:scale-110' to='/about'>About</Link>
            <Link className='transition duration-300 hover:text-white hover:scale-110' to='/skills'>Skills</Link>
            <Link className='transition duration-300 hover:text-white hover:scale-110' to='/project'>Projects</Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar

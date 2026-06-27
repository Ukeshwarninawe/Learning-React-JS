import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-blue-300 text-black '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-5 lg:w-1/2 flex-col items-start p-10'>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

          {/* First Input for Heading */}
          <input 
          type="text" 
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full border-2 rounded outline-none font-medium'
          value = {title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          />

          {/* Detailed Input for Data */}
          <textarea
          type="text" 
          className='px-5 py-2 w-full h-32 border-2 rounded outline-none font-medium'
          placeholder='Write Details'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />

          <button className='bg-white w-full active:bg-gray-500 active:scale-95 text-black px-5 py-2 rounded outline-none font-medium'>Add Note</button>            

      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap flex-start justify-start mt-5 gap-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
            
            return <div key={idx} className="flex justify-between flex-col items-start relative h-82 w-60 bg-cover rounded-xl text-black py-9 pb-5 px-4 bg-[url('Note.png')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className='mt-4 leading-tight font-medium text-sm text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs text-white rounded font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

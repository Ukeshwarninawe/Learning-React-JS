import React from 'react'

const Skills = () => {
  return (
    <div className='min-h-screen text-white px-4 md:px-8 lg:px-16 pt-20 pb-20 relative overflow-hidden'>

      {/* Background Glow Effects */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-20'></div>
      <div className='absolute bottom-20 right-0 w-72 h-72 bg-pink-600 rounded-full blur-[150px] opacity-20'></div>

      <div className='relative z-10 flex flex-col items-center'>

        {/* Page Title */}
        <div className='text-center mb-14'>
          

          <p className='text-gray-400 mt-4 text-lg'>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl'>

          {/* Frontend */}
          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 hover:scale-105 hover:border-purple-400/50 transition-all duration-300'>
            <h2 className='text-3xl font-bold text-purple-400 text-center mb-6'>
              💻 Frontend Development
            </h2>

            <div className='flex flex-wrap justify-center gap-4'>
              <div className='skill'>HTML5</div>
              <div className='skill'>CSS3</div>
              <div className='skill'>JavaScript</div>
              <div className='skill'>ReactJS</div>
              <div className='skill'>Tailwind CSS</div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 hover:scale-105 hover:border-purple-400/50 transition-all duration-300'>
            <h2 className='text-3xl font-bold text-purple-400 text-center mb-6'>
              ⚙️ Programming Languages
            </h2>

            <div className='flex flex-wrap justify-center gap-4'>
              <div className='skill'>Java</div>
              <div className='skill'>JavaScript</div>
              <div className='skill'>C</div>
            </div>
          </div>

          {/* Tools */}
          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 hover:scale-105 hover:border-purple-400/50 transition-all duration-300'>
            <h2 className='text-3xl font-bold text-purple-400 text-center mb-6'>
              🛠️ Tools & Technologies
            </h2>

            <div className='flex flex-wrap justify-center gap-4'>
              <div className='skill'>Git</div>
              <div className='skill'>GitHub</div>
              <div className='skill'>VS Code</div>
              <div className='skill'>Vite</div>
            </div>
          </div>

          {/* Learning */}
          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 hover:scale-105 hover:border-purple-400/50 transition-all duration-300'>
            <h2 className='text-3xl font-bold text-purple-400 text-center mb-6'>
              🚀 Currently Learning
            </h2>

            <div className='flex flex-wrap justify-center gap-4'>
              <div className='skill'>Node.js</div>
              <div className='skill'>Express.js</div>
              <div className='skill'>MongoDB</div>
              <div className='skill'>Advanced DSA</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills
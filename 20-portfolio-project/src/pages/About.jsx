import React from 'react'
import {
  FaUserGraduate,
  FaRocket,
  FaGamepad,
  FaMusic
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiPencilBrush } from "react-icons/gi";
import { BsCpuFill } from "react-icons/bs";

const About = () => {
  return (
    <div className='relative min-h-screen overflow-hidden text-white px-4 md:px-8 lg:px-16 pt-20 pb-20'>

      {/* Background Glow Effects */}
      <div className='absolute top-20 left-0 w-72 h-72 bg-purple-700 rounded-full blur-[150px] opacity-20'></div>
      <div className='absolute bottom-20 right-0 w-72 h-72 bg-pink-600 rounded-full blur-[150px] opacity-20'></div>

      <div className='relative z-10 flex flex-col items-center gap-12'>

        {/* Page Title */}
        <div className='text-center'>
          

          <p className='text-gray-400 mt-4 text-lg'>
            Get to know more about me and my journey
          </p>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 w-full max-w-5xl'>
          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300'>
            <h3 className='text-3xl font-bold text-purple-400'>190+</h3>
            <p className='text-gray-400'>Days Consistent</p>
          </div>

          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300'>
            <h3 className='text-3xl font-bold text-purple-400'>60+</h3>
            <p className='text-gray-400'>DSA Problems</p>
          </div>

          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300'>
            <h3 className='text-3xl font-bold text-purple-400'>5+</h3>
            <p className='text-gray-400'>Projects</p>
          </div>

          <div className='bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300'>
            <h3 className='text-3xl font-bold text-purple-400'>8.6+</h3>
            <p className='text-gray-400'>CGPA</p>
          </div>
        </div>

        {/* Who Am I */}
        <section className='w-full flex flex-col items-center'>
          <h2 className='flex items-center gap-3 text-3xl md:text-5xl font-bold text-purple-400 mb-6'>
            <FaUserGraduate />
            Who Am I?
          </h2>

          <div className='w-[95%] md:w-[85%] lg:w-[75%] bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 md:p-12 text-gray-300 leading-9 text-center hover:scale-[1.02] transition-all duration-300'>
            Hi, I'm <span className='text-purple-400 font-semibold'>Ukeshwar Ninawe</span>,
            an Information Technology undergraduate at YCCE Nagpur and an aspiring Software Engineer.

            <br /><br />

            I am passionate about building web applications, solving programming problems,
            and exploring new technologies. I enjoy transforming ideas into practical solutions
            through clean code and user-friendly designs.

            <br /><br />

            Currently, I am focusing on Full Stack Development, Data Structures & Algorithms,
            and Software Engineering fundamentals to strengthen my skills and prepare myself
            for real-world development challenges.
          </div>
        </section>

        {/* Education */}
        <section className='w-full flex flex-col items-center'>
          <h2 className='flex items-center gap-3 text-3xl md:text-5xl font-bold text-purple-400 mb-6'>
            <MdSchool />
            Education
          </h2>

          <div className='w-[95%] md:w-[70%] lg:w-[45%] bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 text-center hover:scale-[1.02] transition-all duration-300'>
            <h3 className='text-2xl md:text-4xl font-semibold mb-4'>
              Bachelor of Technology
            </h3>

            <p className='text-lg text-gray-300 mb-2'>
              Information Technology
            </p>

            <p className='text-gray-400'>
              YCCE Nagpur • 2024 - 2028
            </p>
          </div>
        </section>

        {/* Career Goal */}
        <section className='w-full flex flex-col items-center'>
          <h2 className='flex items-center gap-3 text-3xl md:text-5xl font-bold text-purple-400 mb-6'>
            <FaRocket />
            Career Goal
          </h2>

          <div className='w-[95%] md:w-[85%] lg:w-[75%] bg-white/5 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 md:p-12 text-gray-300 leading-9 text-center hover:scale-[1.02] transition-all duration-300'>
            My goal is to become a skilled Software Engineer capable of building scalable
            applications and solving challenging problems through technology.

            <br /><br />

            I aim to continuously improve my development skills, contribute to impactful
            products, and grow into a developer who can create meaningful solutions for
            real-world problems.
          </div>
        </section>

        {/* Hobbies */}
        <section className='w-full flex flex-col items-center pb-10'>
          <h2 className='text-3xl md:text-5xl font-bold text-purple-400 mb-6'>
            Hobbies & Interests
          </h2>

          <div className='flex flex-wrap justify-center gap-5 max-w-4xl'>
            <div className='flex items-center gap-2 px-6 py-4 bg-purple-900/30 rounded-full border border-purple-500/30 hover:scale-105 transition duration-300'>
              <FaGamepad />
              Gaming
            </div>

            <div className='flex items-center gap-2 px-6 py-4 bg-purple-900/30 rounded-full border border-purple-500/30 hover:scale-105 transition duration-300'>
              <GiPencilBrush />
              Sketching Portraits
            </div>

            <div className='flex items-center gap-2 px-6 py-4 bg-purple-900/30 rounded-full border border-purple-500/30 hover:scale-105 transition duration-300'>
              <FaMusic />
              Listening Music
            </div>

            <div className='flex items-center gap-2 px-6 py-4 bg-purple-900/30 rounded-full border border-purple-500/30 hover:scale-105 transition duration-300'>
              <BsCpuFill />
              Exploring Technology
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import profile from '../assets/Profile.png'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div className='outer'>

      <div className='part1 blur1'>
        <div className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
           Ukeshwar Ninawe
        </div>

        <TypeAnimation
          sequence={[
            "💻 Aspiring Software Engineer",
            2000,
            "⚛️ Frontend Developer",
            2000,
            "🧩 DSA Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className='text-xl md:text-2xl lg:text-4xl font-semibold mt-4'
        />

        <div className='description mt-6 text-base md:text-lg max-w-xl'>
          I am an Information Technology student passionate about Full Stack Development, DSA, and building scalable web applications...
        </div>
        <div className="mt-4 text-green-400 font-semibold">
          🟢 Open to Internship Opportunities
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">

          <a href="/Ukeshwar_Ninawe_Resume.pdf" download>
            <button className="border border-blue-600 px-12 py-9 rounded-lg hover:bg-white hover:text-black transition duration-300">
              Download Resume
            </button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl md:text-3xl mt-8">
          <a
            href="https://github.com/Ukeshwarninawe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ukeshwarninawe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/u/Ukeshwar_Ninawe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition duration-300"
          >
            <SiLeetcode />
          </a>

          <a
            href="mailto:ukeshwargulabninawe@gmail.com"
            className="hover:scale-125 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>

      <div className='part2'>
        <img
          className='image'
          src={profile}
          alt="Ukeshwar Ninawe"
        />
      </div>

    </div>
  )
}

export default Home
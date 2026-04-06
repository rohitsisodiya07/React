import React from 'react'

const About = ({ about }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>

      <h1 className='text-3xl font-bold text-center mb-10'>About Me</h1>

      <div className='flex justify-center px-4'>

        <div className='bg-gray-800 rounded-2xl shadow-xl p-6 max-w-3xl text-center hover:shadow-2xl transition duration-300'>
          
          {/* Name + Role */}
          <h2 className='text-xl font-bold mb-4 text-cyan-400'>
            {about.name}
          </h2>

          <p className='text-gray-400 mb-4'>{about.role}</p>

          {/* Description (array loop) */}
          {about.description.map((para, index) => (
            <p key={index} className='text-lg leading-relaxed text-gray-300 mb-4'>
              {para}
            </p>
          ))}

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-6">

            <a 
              href={about.social.github} 
              target="_blank"
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              GitHub
            </a>

            <a 
              href={about.social.linkedin} 
              target="_blank"
              className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default About
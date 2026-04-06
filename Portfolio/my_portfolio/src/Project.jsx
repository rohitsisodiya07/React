import React from 'react'

const Project = ({ project }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white'>

      <div className='flex flex-wrap justify-center gap-20 font-sans p-20'> 

        {project.map((item, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-xl w-72 shadow-lg hover:scale-105 transition'
          >
            <h4 className='text-xl font-bold mb-2'>{item.name}</h4>

            <p className='text-sm text-gray-300 mb-3'>
              {item.description}
            </p>

            <a 
              href={item.link} 
              target="_blank"
              className='text-cyan-400 underline text-sm'
            >
              View Project
            </a>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Project
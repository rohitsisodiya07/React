import React from 'react'

const Experience = ({ experience }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>

      <h1 className='text-3xl font-bold text-center mb-10'>Experience</h1>

      <div className='flex flex-wrap justify-center gap-8'>

        {experience.map((item, index) => (
          
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-xl w-96 shadow-lg hover:scale-105 transition duration-300'
          >
            {/* ✅ Correct variable */}
            <h3 className='text-xl font-bold mb-2'>{item.role}</h3>

            <p className='text-cyan-400 mb-2'>{item.company}</p>

            <p className='text-sm text-gray-400 mb-3'>{item.duration}</p>

            {/* ✅ Dynamic points */}
            <ul className='text-sm text-gray-300 space-y-2'>
              {item.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Experience
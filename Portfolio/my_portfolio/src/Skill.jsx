import React from 'react'

const Skill = ({ mySkill }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>

      <h1 className='text-3xl font-bold text-center mb-10'>Skills</h1>

      <div className='flex flex-wrap justify-center gap-8 font-mono'>

        {Object.entries(mySkill).map(([key, value]) => (
          <div
            key={key}
            className='bg-gray-800 p-6 rounded-xl w-72 shadow-lg text-center hover:scale-105 transition duration-300'
          >
            <h4 className='mb-3 font-bold text-lg capitalize'>{key}</h4>
            <p className='text-sm text-gray-300'>{value}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skill
import React from 'react'

const Introduction = ({intro}) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white pt-16'>
    <div className='bg-gray-800 rounded-2xl shadow-xl  p-6 font-sans max-w-3xl mx-auto'>
      
      <p className='text-lg leading-relaxed'>
        I am <span className='text-purple-400 font-semibold'>{intro.name}</span>, {intro.introduction}
      </p>

    </div>
    </div>
  )
}

export default Introduction
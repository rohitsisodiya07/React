import React from 'react'

const Qualification = ({ qualification }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>
      
      <h1 className='text-3xl font-bold text-center mb-10'>Education</h1>

      <div className='flex flex-wrap justify-center gap-8 font-mono'>

        {qualification.map((item, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-xl w-72 shadow-lg text-center hover:scale-105 transition'
          >
            <h4 className='mb-3 font-bold'>
              {item.courseName} ({item.level})
            </h4>

            <p className='text-green-400'>{item.institute}</p>

            {/* Optional */}
            {item.stream && (
              <p className='text-sm'>Stream: {item.stream}</p>
            )}

            {/* Optional (extra line jaise University) */}
            {item.extra && (
              <p className='text-sm'>{item.extra}</p>
            )}

            <p className='text-sm mt-2'>Year: {item.year}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Qualification
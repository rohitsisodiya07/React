import React from 'react'

const Hobbies = ({ hobbies }) => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>

      <h2 className="text-3xl font-bold text-center mb-10">Hobbies</h2>

      <div className='flex flex-wrap justify-center gap-6'>

        {hobbies.map((item, index) => (
          <div
            key={index}
            className='bg-gray-800 p-6 rounded-xl w-80 shadow-lg text-center hover:scale-105 transition duration-300'
          >
            <ul className='text-sm text-gray-300 space-y-3'>
              <li>{item}</li>
            </ul>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Hobbies
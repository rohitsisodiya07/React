import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gray-900 text-white py-10'>

      {/* Heading */}
      <h1 className='text-3xl font-bold text-center mb-10'>Contact Me</h1>

      <div className='flex justify-center'>
        
        <form className='bg-gray-800 p-8 rounded-xl w-96 shadow-lg space-y-4'>

          {/* Name */}
          <input 
            type="text" 
            placeholder="Your Name"
            className='w-full p-2 rounded bg-gray-700 text-white outline-none'
          />

          {/* Email */}
          <input 
            type="email" 
            placeholder="Your Email"
            className='w-full p-2 rounded bg-gray-700 text-white outline-none'
          />

          {/* Message */}
          <textarea 
            placeholder="Your Message"
            rows="4"
            className='w-full p-2 rounded bg-gray-700 text-white outline-none'
          ></textarea>

          {/* Button */}
          <button 
            type="submit"
            className='w-full bg-cyan-500 py-2 rounded-lg font-bold hover:bg-cyan-600 transition'
          >
            Send Message
          </button>

        </form> 
      </div>

    </div>
  )
}

export default Contact
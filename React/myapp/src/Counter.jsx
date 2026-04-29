import React, { useState } from 'react'
import UseCounter from './UseCounter';

const Counter = () => {

    const {count, increment, decrement, multiply, divide, reset} = UseCounter(10)

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-80 text-center border-2 border-gray-500 hover:scale-110 duration-400">

        <h1 className="text-2xl font-bold mb-4">Counter</h1>

        <div className="text-5xl font-bold text-blue-600 mb-6">
          {count}
        </div>

        <div className="grid grid-cols-2 gap-4">

          <button 
            onClick={increment}
            className="bg-green-500 text-white text-2xl py-3 rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>

          <button 
            onClick={decrement}
            className="bg-red-500 text-white text-2xl py-3 rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>

          <button 
            onClick={multiply}
            className="bg-purple-500 text-white text-2xl py-3 rounded-lg hover:bg-purple-600 transition"
          >
            ×
          </button>

          <button 
            onClick={divide}
            className="bg-yellow-500 text-white text-2xl py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            ÷
          </button>

          
          <button 
            onClick={reset}
            className="bg-blue-500 text-white text-2xl py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  )
}

export default Counter;
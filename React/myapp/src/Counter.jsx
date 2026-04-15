import React, { useState } from 'react'

const Counter = () => {

  const initial = 10;
  const [count, setCount] = useState(initial);

  function increment() {
    if (count + 2 > 50) {
      alert("Addition is More Than 50!!");
      setCount(initial);
      return;
    }
    setCount(count + 2);
  }

  function decrement() {
    if (count - 2 < 0) {
      alert("Subtraction is Less Than 0!!");
      setCount(initial);
      return;
    }
    setCount(count - 2);
  }

  function multiply() {
    if (count * 2 > 50) {
      alert("Multiplication is Greater than 50!!");
      setCount(initial);
      return;
    }
    setCount(count * 2);
  }

  function divide() {
    if (count / 2 < 0) {
      alert("Division is Less than 0");
      setCount(initial);
      return;
    }
    setCount(count / 2);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-linear-to-br from-gray-700 to-gray-900">

      <div className="bg-white text-black p-8 rounded-2xl shadow-2xl w-80 text-center">

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

        </div>

      </div>
    </div>
  )
}

export default Counter;
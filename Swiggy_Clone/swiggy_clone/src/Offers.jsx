import React from 'react'

const Offers = () => {
  return (
    <div className='bg-slate-100 min-h-screen font-comic'>
      {/* Heading */}
      <h1 className='text-center pt-12 text-3xl font-bold text-gray-800'>
        Today's Offers
      </h1>

      <div className='bg-orange-300 m-6 text-center p-5 w-225 mx-auto'>
        <p className='text-lg font-bold'>50% OFF</p>
        <p className='text-xs text-gray-700'>on your first order</p>
      </div>

      <div className='bg-orange-300 m-6 text-center p-5 w-225 mx-auto'>
        <p className='text-lg font-bold'>Free Delivery</p>
        <p className='text-xs text-gray-700'>on order above ₹199</p>
      </div>

      <div className='bg-orange-300 m-6 text-center p-5 w-225 mx-auto'>
        <p className='text-lg font-bold'>₹100 Cashback</p>
        <p className='text-xs text-gray-700'>use code SWIGGY100</p>
      </div>

      <div className='bg-orange-300 m-6 text-center p-5 w-225 mx-auto'>
        <p className='text-lg font-bold'> Upto ₹500 Cashback</p>
        <p className='text-xs text-gray-700'>on order above ₹2000</p>
      </div>



    </div>
  )
}

export default Offers
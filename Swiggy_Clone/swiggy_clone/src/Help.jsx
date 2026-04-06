import React from 'react'

const Help = () => {
  return (
    <div className='bg-slate-100 min-h-screen p-6 font-comic'>
      
      <h1 className='text-3xl font-bold text-center mb-10'>
        Help & Support
      </h1>

      <div className='max-w-3xl mx-auto space-y-6'>

        <div className='bg-white p-5 rounded-lg shadow'>
          <h2 className='font-semibold text-lg'>How to place an order?</h2>
          <p className='text-sm text-gray-600 mt-2'>
            Select your favorite food, add it to cart, and proceed to checkout.
          </p>
        </div>

        <div className='bg-white p-5 rounded-lg shadow'>
          <h2 className='font-semibold text-lg'>How to track my order?</h2>
          <p className='text-sm text-gray-600 mt-2'>
            Go to "My Orders" section and track your live order status.
          </p>
        </div>

        <div className='bg-white p-5 rounded-lg shadow'>
          <h2 className='font-semibold text-lg'>What is the refund policy?</h2>
          <p className='text-sm text-gray-600 mt-2'>
            Refunds are processed within 5-7 business days if eligible.
          </p>
        </div>

        <div className='bg-white p-5 rounded-lg shadow'>
          <h2 className='font-semibold text-lg'>How to contact support?</h2>
          <p className='text-sm text-gray-600 mt-2'>
            You can email us at support@foodapp.com or call +91 9876543210.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Help
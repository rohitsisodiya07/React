import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-100 min-h-screen py-10 px-6 font-comic'>

      {/* Heading */}
      <h1 className='text-4xl font-bold text-center text-gray-800 mb-6'>
        About Us
      </h1>

      {/* Intro */}
      <p className='text-center text-gray-600 max-w-2xl mx-auto mb-10'>
        Welcome to our food delivery platform! We aim to bring your favorite meals
        from the best restaurants directly to your doorstep with speed, quality, and convenience.
      </p>

      {/* Sections */}
      <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>

        {/* Mission */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-2'>Our Mission</h2>
          <p className='text-sm text-gray-600'>
            Our mission is to make food ordering simple, fast, and enjoyable.
            We connect people with the best local restaurants and ensure a smooth delivery experience.
          </p>
        </div>

        {/* Vision */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-2'>Our Vision</h2>
          <p className='text-sm text-gray-600'>
            We envision a world where anyone can enjoy their favorite food anytime, anywhere,
            with just a few clicks.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-2'>Why Choose Us?</h2>
          <ul className='text-sm text-gray-600 list-disc pl-5'>
            <li>Fast delivery</li>
            <li>Wide variety of restaurants</li>
            <li>Easy ordering process</li>
            <li>Secure payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-xl font-semibold mb-2'>Contact Us</h2>
          <p className='text-sm text-gray-600'>
            Email: support@foodapp.com <br />
            Phone: +91 9876543210
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
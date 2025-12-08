import React from 'react'

const HomeHeroFour = () => {
  return (
    <div className='h-screen w-screen'>
      <div className='h-[40%] w-full  flex flex-col justify-center items-center'>
        <h1 className='text-black'>★★★★★</h1>
        <h1 className='text-xl text-black items-centre mt-5'>"Globaltripmaster made planning my european trip effortless.   <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I booked flight,trains and hotels all in one place"</h1>
        <div className='flex items-center gap-4'>
          <img src="/images/Photo.jpg" alt="" className='w-16 h-16 object-cover mt-7 rounded-full shadow-lg' />
          <div className='flex flex-col'>
            <h4 className='text-black mt-7 font-bold'>John Doe</h4>
            <h4 className='text-black'>Marketing Manager, XYZ Company</h4>
          </div>
        </div>
      </div>



      <div className='h-[60%] w-full bg-red-200 relative'>
        <img src="/images/CU12.jpg" alt="" className='h-full w-full object-cover brightness-50 ' />

        <div className='absolute inset-0 flex flex-col justify-start gap-6  items-center mt-20 p-15'>
          <h1 className='text-gray-100 text-5xl'>Stay updated on travel deals</h1>
          <h4 className='text-gray-300'>Get exclusive offers and travel tips delivered to your inbox weekly</h4>

          <div className='flex gap-4'>
            <input type="text" placeholder='Enter your email' className='border border-gray-300 rounded-lg p-3 hover:border-orange-200' />
            <button className='border-[1px] rounded-[6px] bg-white text-black p-2 hover:bg-orange-200'>Subscribe Now</button>

          </div>
          <h5 className='text-[12px] text-gray-300'>By subscribing, you agree to our Terms of Service and Privacy Policy</h5>
        </div>
      </div>
    </div>
  )
}

export default HomeHeroFour

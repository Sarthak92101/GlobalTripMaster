import React from 'react'

const HomeHeroTop = () => {
  return (
    <div className='w-screen h-screen relative'>
      <img
        src="/images/CU5.jpg"
        alt="Travel"
        className='h-full w-full object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-6 text-center'>
        <h2 className='text-white text-7xl px-6 py-3'>
          <b>Explore the world with us</b>
        </h2>
        <p className=' bg-opacity-50 text-white px-4 py-2 max-w-xl'>
          Find your next adventure. Search flights, trains, cabs, and hotels all in one place.
        </p>
        <div className=' p-2 flex gap-4'>
          <button className='border-[1px] rounded-[6px] bg-white text-black p-2 hover:bg-blue-200'>Search now</button>
          <button className='border-[1px] rounded-[6px] bg-transparent bg-white text-black p-2 hover:bg-blue-200'>learn more</button>
        </div>
      </div>
    </div>


  )
}

export default HomeHeroTop

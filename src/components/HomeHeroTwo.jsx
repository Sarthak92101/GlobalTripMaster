import React from 'react'
import "remixicon/fonts/remixicon.css";

const HomeHeroTwo = () => {
  return (
    <div className='w-screen bg-gray-300 h-screen'>

      {/* Top Section */}
      <div className='w-full h-[35%] flex flex-col justify-center items-center p-10'>
        <p className='mt-10 text-gray-600'>Services</p>
        <h2 className='text-5xl mt-5 text-gray-600'>Book Your Journey</h2>
        <p className='mt-5 text-xl text-gray-600'>Everything you need to plan your trip</p>
      </div>

      {/* Cards Section */}
      <div className='w-full h-[65%] px-[30px] flex items-center justify-evenly gap-10'>

        {/* CARD */}
        <div className='h-[80%] w-[23%] bg-orange-300 rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

          {/* Text Section */}
          <div className='p-6 text-white space-y-3'>
            <p className='text-sm font-semibold'>Flights</p>

            <h1 className='text-3xl font-bold leading-tight'>
              Fast flights <br /> worldwide
            </h1>

            <p className='text-sm opacity-80'>
              Search and book flights to any <br /> destination
            </p>

            <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
              Book now <i className="ri-arrow-right-s-line text-lg"></i>
            </p>
          </div>

          {/* Image */}
          <img
            src="/images/Flight.jpg"
            className="w-full h-[190px] object-cover"
            alt="flight"
          />
        </div>

        <div className='h-[80%] w-[23%] bg-orange-300 rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

          {/* Text Section */}
          <div className='p-6 text-white space-y-3'>
            <p className='text-sm font-semibold'>Train</p>

            <h1 className='text-3xl font-bold leading-tight'>
              Comfirtable rail <br /> travel
            </h1>

            <p className='text-sm opacity-80'>
              Reserve your seat on a train <br /> across contitnents
            </p>

            <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
              Book now <i className="ri-arrow-right-s-line text-lg"></i>
            </p>
          </div>

          {/* Image */}
          <img
            src="/images/Train.jpg"
            className="w-full h-[190px] object-cover"
            alt="flight"
          />
        </div>

        <div className='h-[80%] w-[23%] bg-orange-300 rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

          {/* Text Section */}
          <div className='p-6 text-white space-y-3'>
            <p className='text-sm font-semibold'>Cabs</p>

            <h1 className='text-3xl font-bold leading-tight'>
              Realiable ground <br /> transport
            </h1>

            <p className='text-sm opacity-80'>
              Get from point A to point B <br /> with ease
            </p>

            <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
              Book now <i className="ri-arrow-right-s-line text-lg"></i>
            </p>
          </div>

          {/* Image */}
          <img
            src="/images/Cabs.jpg"
            className="w-full h-[190px] object-cover"
            alt="flight"
          />
        </div>

        <div className='h-[80%] w-[23%] bg-orange-300 rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

          {/* Text Section */}
          <div className='p-6 text-white space-y-3'>
            <p className='text-sm font-semibold'>Hotels</p>

            <h1 className='text-3xl font-bold leading-tight'>
              Rest your head <br /> anywhere
            </h1>

            <p className='text-sm opacity-80'>
              Find the perfect place to stay <br /> for your trip
            </p>

            <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
              Book now <i className="ri-arrow-right-s-line text-lg"></i>
            </p>
          </div>

          {/* Image */}
          <img
            src="/images/Hotels.jpg"
            className="w-full h-[190px] object-cover"
            alt="flight"
          />
        </div>

      </div>
    </div>
  )
}

export default HomeHeroTwo

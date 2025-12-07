import React from 'react'

const HomeHeroThree = () => {
  return (
    <>
      <div className='w-screen bg-white h-screen'>
        <div className='w-full h-[35%] flex flex-col justify-center items-center p-10'>
          <p className='mt-10 text-gray-600'>Destination</p>
          <h2 className='text-5xl mt-5 text-gray-600'>Where to go next</h2>
          <p className='mt-5 text-xl text-gray-600'>Discover the world's most beautiful Places</p>
        </div>

        <div className='w-full h-[65%] flex justify-evenly  py-10'>
          <div>
            <p className='mt-10 text-gray-600'>Destination</p>
            <h2 className='text-5xl mt-5 text-gray-600'>Popular destination await</h2>
            <p className='mt-5 text-xl text-gray-600 leading-relaxed'>From mountain peaks to sandy shores, find your ideal escape <br />
              Each destination offers something unique for the traveler
              seeking new horizons.
            </p>
          </div>
          <img src="/images/CU7.jpg" alt="" className='w-[30%] object-cover rounded-2xl shadow-lg' />
        </div>

      </div>





      <div className='w-screen bg-white h-screen'>
        <div className='w-full h-[35%] flex flex-col justify-center items-center p-10'>
          <p className='mt-10 text-gray-600'>Process</p>
          <h2 className='text-5xl mt-5 text-gray-600'>Three simple steps</h2>
          <p className='mt-5 text-xl text-gray-600'>Travel planning made straightforward</p>
        </div>


        <div className='w-full h-[65%] px-[30px] flex items-center justify-evenly gap-10'>

          <div className='h-[70%] w-[46%] rounded-2xl border border-blue-900 overflow-hidden flex justify-between cursor-pointer hover:scale-105 transition-all'>

            {/* Text Section */}
            <div className='p-6 mt-20 text-black space-y-3'>
              <p className='text-sm font-semibold'>Step One</p>

              <h1 className='text-3xl font-bold leading-tight'>
                Search 
              </h1>

              <p className='text-sm'>
                Tell us where and when you want to go
              </p>

              <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
                Next <i className="ri-arrow-right-s-line text-lg"></i>
              </p>
            </div>

            {/* Image */}
            <img
              src="/images/CU8.jpg"
              className="w-[50%] h-full object-cover"
              alt="flight"
            />
          </div>





          <div className='h-[70%] w-[23%] rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

            {/* Text Section */}
            <div className='p-6 text-black space-y-3'>
              <p className='text-sm font-semibold'>Step Two</p>

              <h1 className='text-3xl font-bold leading-tight'>
                Book 
              </h1>

              <p className='text-sm opacity-80'>
                Choose your option and secure your booking
              </p>

              <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
               Next <i className="ri-arrow-right-s-line text-lg"></i>
              </p>
            </div>

            {/* Image */}
            <img
              src="/images/CU9.jpg"
              className="w-full h-[190px] object-cover"
              alt="flight"
            />
          </div>

          <div className='h-[70%] w-[23%] rounded-2xl border border-blue-900 overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-all'>

            {/* Text Section */}
            <div className='p-6 text-black space-y-3'>
              <p className='text-sm font-semibold'>Step Three</p>

              <h1 className='text-3xl font-bold leading-tight'>
               Travel
              </h1>

              <p className='text-sm opacity-80'>
                Pack your bags and enjoy your journey
              </p>

              <p className='mt-4 font-medium cursor-pointer flex items-center gap-1 hover:gap-2 transition-all'>
              Done <i className="ri-arrow-right-s-line text-lg"></i>
              </p>
            </div>

            {/* Image */}
            <img
              src="/images/CU10.jpg"
              className="w-full h-[190px] object-cover"
              alt="flight"
            />
          </div>


        </div>


      </div>




    </>

  )
}

export default HomeHeroThree

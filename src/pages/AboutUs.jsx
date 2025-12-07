import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-screen'>
      <div className=' relative h-[50vh] w-screen flex justify-center mt-5 '>
        <img className=' h-full w-[90%]  rounded-[20px] object-cover' src="/images/CU3.jpg" alt="" />
        <h1 className='absolute text-black text-4xl font-bold mt-[23%] mr-[70%] text-5xl'>
          About Us
        </h1>

      </div>


      <div className='w-full flex flex-col md:flex-row flex justify-between p-15 gap-8'>
        <div className='text-black w-[45%]'>
          <p className='mb-6'>
            <b>About Global Trip Master</b> <br />
            Welcome to Global Trip Master, your trusted partner for seamless travel experiences across India.
            We may not carry a big brand name yet, but what we do carry is years of experience, deep industry knowledge, and an unwavering commitment to serving our customers with trust, professionalism, and genuine care.

            At the heart of our service is a simple belief — travel should be safe, comfortable, and truly memorable. Whether you’re booking a flight, reserving a cab, planning a train journey, or organizing a complete holiday package, we ensure that every step of your travel is smooth and stress-free.
          </p>
        </div>

        <div className='text-black  w-[45%] flex flex-col gap-6'>
          <div>
            <p>
              <b>Our Mission:</b><br />
              To deliver an outstanding travel experience that blends comfort, safety, and reliability—helping you explore India with confidence and joy.
            </p>
          </div>
          <br />
          <div>
            <p>
              <b>Our Mission / Our Aim:</b> <br />
              Our vision is to become one of India’s most reliable and respected travel partners—not through loud branding, but through consistent excellence. We see ourselves as a service that redefines comfort and safety in travel, making every journey smooth and worry-free. As we continue to expand our presence across India, we aim to blend modern technology with traditional hospitality, creating a travel experience that feels personal, trusted, and genuinely comforting. Ultimately, we hope to build a travel environment where every individual feels cared for, supported, and inspired to explore the beauty of India with complete confidence.
            </p>
          </div>
        </div>
      </div>


      <div>
        <h1 className='bg-black flex items-center justify-center text-white'>Niche footer ayega</h1>
      </div>

    </div>
  )
}

export default AboutUs

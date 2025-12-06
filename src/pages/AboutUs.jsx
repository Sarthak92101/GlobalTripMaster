import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-screen'>
      <div className=' relative h-[50vh] w-screen flex justify-center mt-5 '>
        <img className=' h-full w-[90%]  rounded-[20px] object-cover' src="/images/CU1.jpg" alt="" />
        <h1 className='absolute text-white text-4xl font-bold mt-[23%] mr-[70%] text-5xl'>
          About Us
        </h1>

      </div>


      <div className='w-full flex flex-col md:flex-row flex justify-between p-15 gap-8'>
        <div className='text-black w-[45%]'>
          <p className='mb-6'>
            <b>About Global Trip Master</b> <br />
            Travel India Tours offers you a secure and comfort Tour packages & car rental services. We don’t have brand name but we have experience and a faithfully commitment to conduct business with unwavering high standards of trust, professionalism and ethical behaviour. We are committed to building a rewarding and lasting relationship with clients. Our core focus is on providing a secure and comfort customer care so that you celebrate superior tours & car rental experience. All our staff is imbibed in the nuances of hospitality and customer care. The average age of all our cars is less than 2 years. With us, your are ensconced in clean cars that are filled with all standard accessories - functioning air conditioners, first aid kits, seat belts, music systems, tinted glass and tissue boxes.

            We provide customizable solutions that are client centric. These include like - special arrangements for conferences and long lease for the discerning few. EDGE; we are trusted Tours & Car rental partner for many business and leisure travels in DELHI/NCR India.
          </p>
        </div>

        <div className='text-black  w-[45%] flex flex-col gap-6'>
          <div>
            <p>
              <b>Our Mission:</b><br />
              To build an Integrated Travel Management Organization with diversified revenue streams complimenting each other to provide sustainable revenues and profitable growth.
            </p>
          </div>
          <br />
          <div>
            <p>
              <b>Our Mission / Our Aim:</b> <br />
              It is the aim of everyone at Travel India Tours to be reliable, courteous, flexible, efficient and above all co-operative in everything we do. Our clients come from varying sectors of the national and international business community – Government institution, banking, commercial firms, schools, universities, Hospitals and medical firms. The majority of them can be categorised as medium to large sized enterprises, although there is no limit to the size of the companies or organisations we serve.
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

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="w-full p-10 bg-white">

      <div className="border border-black rounded-2xl p-10 flex justify-between gap-10">


        <div className="w-1/2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-20 w-20 object-contain mb-6"
          />

          <h4 className="text-black font-bold">Address</h4>
          <p className="text-black mb-4">Address of the organization</p>

          <h4 className="text-black font-bold">Contact</h4>
          <p className="text-black">1800123456 - 1800123456</p>
        </div>


        <div className="w-1/2 flex justify-end gap-20">

          <div>
            <Link to="/"><h4 className="text-black font-semibold mt-2">Home</h4></Link>
            <Link to="/About-us"><h4 className="text-black font-semibold mt-2">About Us</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Services</h4></Link>
            <Link to="/contact-us"><h4 className="text-black font-semibold mt-2">Contact</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Flight</h4></Link>
          </div>

          <div>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Trains</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Cabs</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Hotels</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Privacy</h4></Link>
            <Link to="#"><h4 className="text-black font-semibold mt-2">Careers</h4></Link>
          </div>

        </div>

      </div>


     <div className='flex gap-140 px-2'>
       <div className="w-1/2">
        <h4 className="text-black text-sm ">© 2025 GlobalTripMaster.All rights reserved</h4>
      </div>

        <div className="w-1/2 flex  text-sm gap-5 ">
        <Link to="#"><h4 className="text-black text-sm pl-5">Privacy policy</h4></Link>
        <Link to="#"><h4 className="text-black text-sm pl-5">Terms of Service</h4></Link>
        <Link to="#"><h4 className="text-black text-sm pl-5">Cookie setting</h4></Link>
      </div>
     </div>


    </div>
  )
}

export default Footer

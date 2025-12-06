import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      {/* Navbar */}
      <div className="h-[60px] w-full bg-[#FCFCFC] flex justify-between items-center px-5 shadow-sm">

        {/* Logo */}
        <div className="h-full w-[150px] flex items-center overflow-hidden">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-full w-full object-cover cursor-pointer"
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6 text-[#111] font-medium">

          <Link to="/" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            Home
          </Link>

          <Link to="/about-us" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            About Us
          </Link>

          <Link to="/rent-car" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            Rent a Car
          </Link>

          <Link to="/domestic-tour" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            Domestic Tour
          </Link>

          <Link to="/international-tour" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            International Tour
          </Link>

          <Link to="/day-tour" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            Day Tour
          </Link>

          <Link to="/contact-us" className="hover:text-blue-700 hover:scale-125 transition-all transform">
            Get in Touch
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar

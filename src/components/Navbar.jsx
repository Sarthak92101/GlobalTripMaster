import React from 'react'

const Navbar = () => {
  return (
    <div>

      {/* Navbar */}
      <div className="h-[60px] w-full bg-[#FCFCFC] flex justify-between items-center px-5 shadow-sm">

        {/* Logo */}
        <div className="h-full w-[150px] flex items-center overflow-hidden">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-full w-full object-cover cursor-pointer"
          />
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-6 text-[#111] font-medium">
          {["Home", "About Us", "Rent a Car", "Domestic Tour", "International Tour", "Day Tour", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-700 hover:scale-125 transition-all transform"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Marquee */}
    
    </div>
  )
}

export default Navbar

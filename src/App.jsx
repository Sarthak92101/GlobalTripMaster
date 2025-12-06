import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar'; 
import RentCar from './pages/RentCar';  
import DomesticTour from './pages/DomesticTour';
import InternationalTour from './pages/InternationalTour';
import DayTour from './pages/DayTour';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='text-white'>

      <Navbar />   

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/rent-car' element={<RentCar />} />
         <Route path='/domestic-tour' element={<DomesticTour />} />
        <Route path='/international-tour' element={<InternationalTour />} />
        <Route path='/day-tour' element={<DayTour />} />
        <Route path='/contact-us' element={<ContactUs />} /> 
      </Routes>
   <div className="overflow-hidden whitespace-nowrap h-20 mt-10 bg-red-200 flex items-center">
        <div className="animate-marquee text-[#111] text-3xl px-3 inline-block">
          This Website is under construction -- This Website is under construction -- This Website is under construction
        </div>
      </div>


      <Footer/>

    </div>
  )
}

export default App

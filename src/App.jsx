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
  
      <Footer/>

    </div>
  )
}

export default App

import React from 'react';
import Navbar from '../components/Navbar'; // make sure casing matches your file

const Home = () => {
  return (
    <div className="w-screen">
      {/* Navbar Component */}
      <Navbar />

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap h-20 mt-10 bg-red-200 flex items-center">
        <div className="animate-marquee text-[#111] text-3xl px-3 inline-block">
          This Website is under construction -- This Website is under construction -- This Website is under construction
        </div>
      </div>
    </div>
  );
};

export default Home;

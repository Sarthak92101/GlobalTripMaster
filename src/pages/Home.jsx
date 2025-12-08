import React from 'react';
import Navbar from '../components/Navbar';
import HomeHeroTop from '../components/HomeHeroTop';
import HomeHeroTwo from '../components/HomeHeroTwo';
import HomeHeroThree from '../components/HomeHeroThree';
import QuestionHero from '../components/QuestionHero';
import TourSlider from '../components/TourSlider';
import InternationalSlider from '../components/InternationalSlider';

const Home = () => {
  return (
    <div className="w-screen">

<HomeHeroTop/>
<TourSlider/>
<InternationalSlider/>
<HomeHeroTwo/>
<HomeHeroThree/>
<QuestionHero/>
   
    </div>
  );
};

export default Home;

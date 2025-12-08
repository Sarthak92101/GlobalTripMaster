import React from 'react';
import Navbar from '../components/Navbar';
import HomeHeroTop from '../components/HomeHeroTop';
import HomeHeroTwo from '../components/HomeHeroTwo';
import HomeHeroThree from '../components/HomeHeroThree';
import HomeHeroFour from '../components/HomeHeroFour';
import QuestionHero from '../components/QuestionHero';
import TourSlider from '../components/TourSlider';
import InternationalSlider from '../components/InternationalSlider';
import DayToursGrid from '../components/DayTours';

const Home = () => {
  return (
    <div className="w-screen">

<HomeHeroTop/>
<TourSlider/>
<InternationalSlider/>
<DayToursGrid/>
<HomeHeroTwo/>
<HomeHeroThree/>
<QuestionHero/>
<HomeHeroFour/>

   
    </div>
  );
};

export default Home;

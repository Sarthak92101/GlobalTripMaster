import React from 'react';
import Navbar from '../components/Navbar';
import HomeHeroTop from '../components/HomeHeroTop';
import HomeHeroTwo from '../components/HomeHeroTwo';
import HomeHeroThree from '../components/HomeHeroThree';
import QuestionHero from '../components/QuestionHero';
import HomeHeroFour from '../components/HomeHeroFour';

const Home = () => {
  return (
    <div className="w-screen">

<HomeHeroTop/>
<HomeHeroTwo/>
<HomeHeroThree/>
<QuestionHero/>
<HomeHeroFour/>

   
    </div>
  );
};

export default Home;

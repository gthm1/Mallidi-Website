
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSection from './components/IntroSection'
import TitleUnderline from './components/TitleUnderline'
import RealEstateIntro from './components/RealEstateIntro'
import ConstructionIntro from './components/ConstructionIntro';
import WhyChooseUs from './components/WhyChooseUS';
import SpeakToUs from './components/SpeakToUs';
import Footer from './components/Footer';
import UnderConstruction from './components/UnderConstruction';

/*
import React from 'react';
*/
import { Routes, Route } from 'react-router-dom';





function App() {
  return (
    <>
    <div className='App'>
      
      <Routes>
        <Route path="/" element={<>
          <Header/>
          <Hero/>
          <IntroSection/>
          <TitleUnderline title='What We Offer'/>
          <RealEstateIntro/>
          <ConstructionIntro/>
          <TitleUnderline title='Why Choose Us'/>
          <WhyChooseUs/>
          <SpeakToUs/>
          <Footer/>
        </>} />
        <Route path="/construction" element={<UnderConstruction />} />
        <Route path="/real-estate" element={<UnderConstruction />} />
        <Route path="/about-us" element={<UnderConstruction />} />
        <Route path="/contact-us" element={<UnderConstruction />} />

        <Route path="/homeDesigns" element={<UnderConstruction />} />
        <Route path="/customDesigns" element={<UnderConstruction />} />
        <Route path="/knockDownRebuild" element={<UnderConstruction />} />
        <Route path="/houseAndLand" element={<UnderConstruction />} />
        <Route path="/houseForSale" element={<UnderConstruction />} />
        <Route path="/landsForSale" element={<UnderConstruction />} />

        <Route path="/exploreMore" element={<UnderConstruction />} />
      </Routes>
    </div>
    </>
  );
};

export default App;

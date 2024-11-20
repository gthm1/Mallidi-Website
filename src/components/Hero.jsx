/*
import React from 'react';
*/
import './Hero.css';
import videoSource from '../assets/Hero.mp4';
import ButtonComponent from './ButtonComponent';



const Hero = () => {
    return(
        <div className='hero'>
            <video autoPlay='autoplay' muted loop id='backgroundVideo'>
                <source src={videoSource} type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
            <div className='content'>
                <h6>From land acquisition to custom builds. We offer a</h6>
                <h1>One-Stop Real Estate Solution</h1>
                <div className='hero-buttons'>
                <ButtonComponent width="200px" text="Custom Homes" link="/customDesigns" />
                <ButtonComponent width="200px" text="Pre-Built Homes" link="/houseForSale" />
                <ButtonComponent width="200px" text="Lands" link="/landsForSale" />    
                </div>
            </div>  
        </div>
    );
};

export default Hero;
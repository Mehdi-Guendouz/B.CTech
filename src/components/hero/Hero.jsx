import React from 'react';
import "./hero.scss"

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className="left">
                <span>Build the future with</span>
                <h1>Blockchain technology<br />and currency</h1>
                <button>Get Whitepaper</button>
            </div>
            <div className="right">
                <img src="./image/hero.png" alt="hero" />
            </div>
        </div>
    );
}

export default Hero;

import React from 'react';
import "./About.scss"

const About = () => {
    return (
        <div className='about-container'>
            <div className="content">
                <img src="./image/about.png" alt="" />
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet  ipsam quae. amet consectetur adipisicing elit. Accusamus officiis libero tenetur vel, dignissimos recusandae? Deleniti voluptate facilis dolor inventore?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus officiis libero tenetur vel, dignissimos recusandae? Deleniti voluptate facilis dolor inventore?</p>
                <button>Learn More</button>
            </div>
            <div className="pictures-container">
                <div className="item one">
                    <div className="blur blur-one"></div>
                    <img src="./icons/books.png" alt="" />
                    <span>Marketplace</span>
                </div>
                <div className="item two">
                    <div className="blur blur-two"></div>
                    <img src="./icons/secure.png" alt="" />
                    <span>Money Protection</span>
                </div>
                <div className="item three">
                    <div className="blur blur-three"></div>
                    <img src="./icons/folder.png" alt="" />
                    <span>Data Protection</span>
                </div>
                <div className="item four">
                    <div className="blur blur-four"></div>
                    <img src="./icons/lock.png" alt="" />
                    <span>Fast and Secure</span>
                </div>
            </div>
        </div>
    );
}

export default About;

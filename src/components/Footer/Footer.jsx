import React from 'react';
import "./Footer.scss"
import { FiFacebook } from 'react-icons/fi';
import { TfiTwitter } from 'react-icons/tfi';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='footer-container'>
            <img src="./image/worldmap.png" alt="map" className='footer-img'/>
            <div className="left">
                <h1>B.CTech</h1>
                <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                <div className="social-media">
                    <span>Social Media</span>
                    <div className="icons">
                        <div>
                            <FiFacebook/>
                        </div>
                        <div>
                            <TfiTwitter />
                        </div>
                        <div>
                            <FiInstagram />
                        </div>
                    </div>
                </div>
                <span>All rights reserved@2021</span>
            </div>
            <div className="right">
                <div className="up">
                    <span>Newslatter</span>
                    <div className="input-container">
                        <input type="text"  placeholder='Email Address'  />
                        <button>Submit</button>
                    </div>
                </div>
                <div className="down">
                    <div className="item">
                        <h2>About Us</h2>
                        <span>Whitepaper</span>
                        <span>Blog</span>
                        <span>Activity</span>
                    </div>
                    <div className="item">
                        <h2>Support</h2>
                        <span>Help & Support</span>
                        <span>Community</span>
                        <span>Author</span>
                        <span>Profile</span>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

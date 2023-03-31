import React from 'react';
import "./Community.scss"

const Community = () => {
    return (
        <div className='community-container'>
            <div className="content">
                <h1>Our community with User reviews</h1>
                <img src="./image/about.png" alt=""  className='about-img'/>
                <div className="card">
                    <img src="./icons/arrow.png" alt="" className='arrow-right'/>
                    <div className="profile-img">
                        <img src="./image/profile.png" alt="" />
                    </div>
                    <div className="card-content">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, dolor. Commodi laborum quae eos dignissimos eius incidunt debitis. Praesentium aspernatur dolore debitis unde eum earum voluptatibus fugit nam. Ipsum perspiciatis quae non soluta a minima blanditiis fugit corporis expedita consequuntur.</p>
                        <span>-DR Mira</span>
                    </div>
                    <img src="./icons/arrow.png" alt="" className='arrow-left'/>
                </div>
            </div>
        </div>
    );
}

export default Community;

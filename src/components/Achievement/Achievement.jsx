import React from 'react';
import "./Achievement.scss"

const Achievement = () => {
    return (
        <div className='achievement-container'>
            <div className="top">
                <span>achievement</span>
                <h1>Full Decentralised and Currency Security</h1>
                <div className="statistics">
                    <div className="item">
                        <span>1M+</span>
                        <p>Happy User</p>
                    </div>
                    <div className="item">
                        <span>250k+</span>
                        <p>Community Assets</p>
                    </div>
                    <div className="item">
                        <span>20k+</span>
                        <p>Build Community</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <img src="./image/worldmap.png" alt="" />
            </div>
        </div>
    );
}

export default Achievement;

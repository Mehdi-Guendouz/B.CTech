import React from 'react';
import "./Work.scss"

const Work = () => {
    return (
        <div className='work-container'>
            <h1>How Do We Work Our System and Our Journey</h1>
            <div className="item-container item-end">
            <img src="./image/green-point.png" alt="green" className='green-point' />                
                <div className="item first-item">
                    <span>01</span>
                    <div>
                        <h4>consulting</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis magnam incidunt sapiente animi qui quaerat ipsa corporis? Adipisci, porro?</p>
                    </div>
                    <img src="./icons/connect.png" alt="" />
                </div>
            </div>
            <div className="item-container ">
                <img src="./image/green-point.png" alt="green" className='green-point' />                
                <div className="item second-item">
                    <span>02</span>
                    <div>
                        <h4>Research & Complaince</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis magnam incidunt sapiente animi qui quaerat ipsa corporis? Adipisci, porro?</p>
                    </div>
                    <img src="./icons/carbon.png" alt="" />
                </div>
            </div>
            <div className="item-container item-end">
                <img src="./image/green-point.png" alt="green" className='green-point' />
                <div className="item first-item">
                    <span>03</span>
                    <div>
                        <h4>Technology</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos blanditiis magnam incidunt sapiente animi qui quaerat ipsa corporis? Adipisci, porro?</p>
                    </div>
                    <img src="./icons/technology.png" alt="" />
                </div>
            </div>

            <button>Let's see more</button>
        </div>
    );
}

export default Work;

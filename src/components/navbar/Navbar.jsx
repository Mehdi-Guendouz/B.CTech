import React from 'react';
import "./navbar.scss"

const Navbar = () => {
    return (
        <div className='nav-wrapper'>
            <div className='nav-container'>
            <h1>B.CTech</h1>
                <div className="right">
                    <nav>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </nav>
                    <a href="#" className='btn'>Join For Free</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

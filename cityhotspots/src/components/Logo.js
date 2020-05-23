import React from 'react';
import headerLogo from '../assets/logo.png';

function Logo() {
    return (
        <div className ="navLogoContainer">
            <nav className="logoNav">
                <img className = "logo" src={headerLogo}  alt="fireSpot"/>
            </nav>
        </div>
    );
}

export default Logo;

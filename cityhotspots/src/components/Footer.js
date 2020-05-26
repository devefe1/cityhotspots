import React, { Component } from 'react';
import Social from '../assets/social.png';


class Footer extends Component {
    render() {
        return (
            <div className = "footerParent" >
                <div className = "childFooter">
                    <h2> Join the club & get updates on special events! </h2>
                         </div>
                <div className = "sepBar">
                        <input className="footerBar" type="text" placeholder="  Email Address" />
                        <a href="#" class="footerButton">Suscribe Now!</a>
                        
                        </div>
                        <img className = "socialLogo" src={Social}  alt="fireSpot"/>
                       
                    
            </div>
        )
    }
}

export default Footer;
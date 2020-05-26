import React from 'react';

function Contact() {
    return (
        <div className ="contactContainer">
            <div className= "firstContact">
            <li className="contact">CONTACT US</li>
            <li className="contactP"> We're here to help and answer any questions you might have.
                <br/>
                We look forward to hearing from you!
            </li>
            <br/>
            <li className="contactNumber">682-246-5810 | city@hotspots.com</li>
        </div>
            <div className ="contactBoxes">
                <input className="contactBar" type="text" placeholder="   Name" />
                <input className="contactBar1" type="text" placeholder="   Email" />
                <input className="contactBar2" type="text" placeholder="   Feedback" />
                <a href="#" class="contactButton">Submit</a>
            </div>
        </div>
    );
}

export default Contact;

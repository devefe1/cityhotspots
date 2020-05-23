import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
<div className="header">
 
    <nav className="navBar">
        <li >HOTSPOTS</li>
        <li >CATEGORIES</li>
        <div>
        <li className= "sep_Home" >HOME</li>
        </div>
        <li >CONTACT</li>
        <li >MY ACCOUNT</li>
    </nav>
    
</div>
        ) 
    } 
}

export default Header;
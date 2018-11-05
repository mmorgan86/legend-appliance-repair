import React, { Component } from 'react';
import './Navbar.css';



class Navbar extends Component{
    state = {
        facebook: 'https://www.facebook.com/LegendAppService/'
      }
    
  render() {
      const { facebook } = this.state
    return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"></span>
            <div className="company-nav">
                <a className="navbar-brand" href="/" alt="Legend Appliance Repair brand name">
                    Legend Appliance Repair
                </a>
                <div className="company-info">
                <ul>
                    <li><a className="company-phone" href="tel:+1-910-292-0837"><i className="fas fa-phone-square"></i> 910-292-0837</a>
                    </li>
                    <li><a alt="facebook page" href={facebook} target="__blank"><i className="fab fa-facebook-square"></i> Like Us</a>
                    </li>
                </ul>
               
                </div>
                
            </div>
            
            
            {/* <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="/">
                <img src="/" alt="logo" />
            </a> */}
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        <div className="collapse navbar-collapse flex-grow-1 text-center" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <a href="/" alt="" className="nav-link m-2 menu-item nav-active">
                    <i className="fas fa-home"></i> Home</a>
                </li>
                <li className="nav-item">
                    <a href="#About" className="nav-link m-2 menu-item" alt="">
                    <i className="fas fa-file-alt">
                    </i> About</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link m-2 menu-item" alt="">
                    <i className="fas fa-wrench"></i> Services</a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link m-2 menu-item" alt="link to contact us">
                    <i className="fas fa-users"></i> Contact</a>
                </li>
            </ul>
        </div>
    </nav>    
  </div>

    )
  }
}

export default Navbar;
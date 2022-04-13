import '../App.css';
import { Component } from 'react';

export default class NavBar extends Component {
    constructor() {
        super()
    }
    getHome = () => {
        return console.log("home");
    }
    getAbout = () => {
        return console.log("about");
    }
    getContact = () => {
        return console.log("Contact");
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-primary">
                    <img style={{ 'height': '100px', 'width': '100px' }} src="/Images/logo.jpg" className="rounded-circle float-left" alt="Card image cap"></img>
                    <span href="#" className="navbar-brand d-none d-sm-none d-xs-none d-md-block d-lg-block">&nbsp; JAKS Electronics</span>
                    <span href="#" className="navbar-brand d-sm-block d-xs-block d-md-none d-lg-none">&nbsp; J&E</span>

                    <div className="dropdown d-sm-block d-xs-block d-md-none d-lg-none">
                        <span className="dropdown-toggler drop " type="button" data-toggle="dropdown">
                            <span className="navbar-toggler-icon "></span>
                            <ul className='dropdown-menu custDrop' >
                                <li><a href="#home" className="nav-item nav-link active" onClick={this.getHome}><u>Home</u></a></li>
                                <li><a href="#about" className="nav-item nav-link active" onClick={this.getAbout}><u>About Us</u></a></li>
                                <li><a href="#contact" className="nav-item nav-link active" onClick={this.getContact}><u>Contact Us</u></a></li>
                            </ul>
                        </span>
                    </div>
                    <div className="collapse navbar-collapse hidden-sm hidden-xs" id="navbarNav">
                        <div className="navbar-nav ms-auto">
                            <a href="#home" className="nav-item nav-link active" onClick={this.getHome}>Home</a>
                            <a href="#about" className="nav-item nav-link active" onClick={this.getAbout}>About Us</a>
                            <a href="#contact" className="nav-item nav-link active" onClick={this.getContact}>Contact Us</a>
                        </div>
                    </div>
                </nav>

            </>
        )
    }

}
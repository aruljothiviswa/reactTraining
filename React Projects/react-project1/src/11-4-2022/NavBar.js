import { useState } from 'react';
import '../App.css';
import { productData } from './productDetails.js'
import Content from './Content';
import ContactUs from './ContactUs';
import { employeeDetails } from './productDetails.js'
import EmpContent from './EmpContent';
import AboutUs from './AboutUs';
import Registration from './Registration';

export default function NavBar() {
    const data = productData;
    const empData = employeeDetails;
    const [content, setContent] = useState(<Content data={data} />)

    const getHome = () => setContent(<Content data={data} />)
    const getAbout = () => setContent(<AboutUs />)
    const getContact = () => setContent(<ContactUs />)
    const getRegister = () => setContent(<Registration />)
    const empDetails = () => setContent(<EmpContent data={empData} />)
    const changePage = (value) => value; 

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
                            <li><a href="#home" className="nav-item nav-link active" onClick={getHome}><u>Home</u></a></li>
                            <li><a href="#contact" className="nav-item nav-link active" onClick={empDetails}><u>Employee Details</u></a></li>
                            <li><a href="#register" className="nav-item nav-link active" onClick={getRegister}><u>Registration</u></a></li>
                            <li><a href="#about" className="nav-item nav-link active" onClick={getAbout}><u>About Us</u></a></li>
                            <li><a href="#contact" className="nav-item nav-link active" onClick={getContact}><u>Contact Us</u></a></li>
                        </ul>
                        {/* <span className='dropdown-menu custDrop' >
                                <a href="#home" className="nav-item nav-link " value={getHome} onChange="changePage(value)"><u>Home</u></a>
                                <a href="#contact" className="nav-item nav-link " value={empDetails} onChange={empDetails}><u>Employee Details</u></a>
                                <a href="#register" className="nav-item nav-link active" value={getRegister} onChange={getRegister}><u>Registration</u></a>
                                <a href="#about" className="nav-item nav-link active" value={getAbout} onChange={getAbout}><u>About Us</u></a>
                                <a href="#contact" className="nav-item nav-link active" value={getContact} onChange={getContact}><u>Contact Us</u></a>
                        </span> */}
                    </span>
                </div>
                <div className="collapse navbar-collapse hidden-sm hidden-xs" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <a href="#home" className="nav-item nav-link active" onClick={getHome}>Home</a>
                        <a href="#contact" className="nav-item nav-link active" onClick={empDetails}>Employee Details</a>
                        <a href="#contact" className="nav-item nav-link active" onClick={getRegister}>Registration</a>
                        <a href="#about" className="nav-item nav-link active" onClick={getAbout}>About Us</a>
                        <a href="#contact" className="nav-item nav-link active" onClick={getContact}>Contact Us</a>
                    </div>
                </div>
            </nav><br></br>
            {content}
        </>
    )

    }
import { useState } from 'react';
import '../App.css';
import { productData } from './productDetails.js'
import Content from './Content';
import ContactUs from './ContactUs';
import { employeeDetails } from './productDetails.js'
import EmpContent from './EmpContent';
import AboutUs from './AboutUs';
import Registration from './Registration';
import LifeCycle from '../13-4-2022/LifeCycle';
import FunctionalCompUseEffect from '../13-4-2022/FunctionalCompUseEffect';

export default function NavBar() {
    const data = productData;
    const empData = employeeDetails;
    const [content, setContent] = useState(<Content data={data} />)

    const getHome = () => setContent(<Content data={data} />)
    const getAbout = () => setContent(<AboutUs />)
    const getContact = () => setContent(<ContactUs />)
    const getRegister = () => setContent(<Registration />)
    const empDetails = () => setContent(<EmpContent data={empData} />)
    const getProducts = () => setContent(<LifeCycle />)
    const getProductsFunction = () => setContent(<FunctionalCompUseEffect />)

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-primary">
                <img style={{ 'height': '100px', 'width': '100px' }} src="/Images/logo.jpg" className="rounded-circle float-left" alt="Card image cap"></img>
                <span href="#" className="navbar-brand d-none d-sm-none d-xs-none d-md-block d-lg-block">&nbsp; JAKS Electronics</span>
                <span href="#" className="navbar-brand d-sm-block d-xs-block d-md-none d-lg-none">&nbsp; J&E</span>

                <div className="dropdown d-sm-block d-xs-block d-md-none d-lg-none">
                    <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className="navbar-toggler-icon"></span></a>
                    <ul className='dropdown-menu' style={{ right: '0',left: 'auto'}} aria-labelledby='navbarDropdown'>
                        <li><a href="#home" className="dropdown-item" onClick={getHome}>Home</a></li>
                        <li><a href="#contact" className="dropdown-item" onClick={empDetails}>Employee Details</a></li>
                        <li><a href="#register" className="dropdown-item" onClick={getRegister}>Registration</a></li>
                        <li><a href="#product" className="dropdown-item" onClick={getProducts}>Fetch API</a></li>
                        <li> <a href="#product" className="dropdown-item" onClick={getProductsFunction}>AXIOS API</a></li>
                        <li><a href="#about" className="dropdown-item" onClick={getAbout}>About Us</a></li>
                        <li> <a href="#contact" className="dropdown-item" onClick={getContact}>Contact Us</a></li>
                    </ul>

                    {/* <span className="dropdown-toggler drop " type="button" data-toggle="dropdown"> */}
                    {/* <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        > <span className="navbar-toggler-icon"></span>
                        </button> */}


                    {/* <span className="navbar-toggler-icon "></span>
                       <span className='dropdown-menu custDrop' id="navbarSupportedContent" >
                            <a href="#home" className="nav-item nav-link active" onClick={getHome}>Home</a>
                            <a href="#contact" className="nav-item nav-link active" onClick={empDetails}>Employee Details</a>
                            <a href="#register" className="nav-item nav-link active" onClick={getRegister}>Registration</a>
                            <a href="#product" className="nav-item nav-link active" onClick={getProducts}>Product API</a>
                            <a href="#product" className="nav-item nav-link active" onClick={getProductsFunction}>UseEffect Product</a>
                            <a href="#about" className="nav-item nav-link active" onClick={getAbout}>About Us</a>
                            <a href="#contact" className="nav-item nav-link active" onClick={getContact}>Contact Us</a>
                        </span> */}
                    {/* </span> */}
                </div>
                <div className="collapse navbar-collapse hidden-sm hidden-xs" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <a href="#home" className="nav-item nav-link active" onClick={getHome}>Home</a>
                        <a href="#contact" className="nav-item nav-link active" onClick={empDetails}>Employee Details</a>
                        <a href="#register" className="nav-item nav-link active" onClick={getRegister}>Registration</a>
                        <a href="#product" className="nav-item nav-link active" onClick={getProducts}>Fetch API</a>
                        <a href="#product" className="nav-item nav-link active" onClick={getProductsFunction}>AXIOS API</a>
                        <a href="#about" className="nav-item nav-link active" onClick={getAbout}>About Us</a>
                        <a href="#contact" className="nav-item nav-link active" onClick={getContact}>Contact Us</a>
                    </div>
                </div>
            </nav><br></br>
            {content}
        </>
    )

}
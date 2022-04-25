import '../App.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-primary custNav">
                <img style={{ 'height': '50px', 'width': '50px' }} src="/Images/logo.jpg" className="rounded-circle float-left" alt="Card image cap"></img>
                <span href="#" className="navbar-brand d-none d-sm-none d-xs-none d-md-block d-lg-block">&nbsp; JAKS Electronics</span>
                <span href="#" className="navbar-brand d-sm-block d-xs-block d-md-none d-lg-none">&nbsp; J&E</span>

                <div className="dropdown d-sm-block d-xs-block d-md-none d-lg-none">
                    <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false"><span className="navbar-toggler-icon"></span></a>
                    <ul className='dropdown-menu' style={{ right: '0', left: 'auto' }} aria-labelledby='navbarDropdown'>
                        <li ><NavLink to='/' className="custList">Home</NavLink></li>
                        <li ><NavLink to='/products' className="custList" > Products</NavLink></li>
                        <li ><NavLink to='/Registration' className="custList"> Registration</NavLink></li>
                        <li ><NavLink to='/Register' className="custList"> Register card</NavLink></li>
                        <li ><NavLink to='/ProductDetails' className="custList">Product Details</NavLink></li>
                        <li ><NavLink to='/AboutUs' className="custList"> About Us</NavLink></li>
                        <li ><NavLink to='/ContactUs' className="custList"> Contact Us</NavLink></li>
                    </ul>

                </div>
                <div className="collapse navbar-collapse hidden-sm hidden-xs" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <NavLink to='/' >Home</NavLink>&nbsp;&nbsp;
                        <NavLink to='/products' > Products</NavLink>&nbsp;&nbsp;
                        <NavLink to='/Registration'> Registration</NavLink>&nbsp;&nbsp;
                        <NavLink to='/Register'> Register Card</NavLink>&nbsp;&nbsp;
                        <NavLink to='/ProductDetails'>Product Details</NavLink>&nbsp;&nbsp;
                        <NavLink to='/AboutUs'> About Us</NavLink>&nbsp;&nbsp;
                        <NavLink to='/ContactUs'> Contact Us</NavLink>&nbsp;&nbsp;
                    </div>
                </div>
            </nav><br></br>
           <Footer/>
        </>
    )

}
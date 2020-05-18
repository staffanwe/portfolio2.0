import React from 'react';
import './NavBar.css';
import Logo from '../../images/Logo.png';
import { Link } from 'react-scroll';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <h2 className="about-link">About</h2>
                <h2 className="skills-link">Skills</h2>
                <h2 className="projects-link"> Projects</h2>
                <h2 className="contact-link">Contact</h2>
            </div>
            <div className="logo-navbar-wrapper">
                <Link
                    className="link-about"
                    to="landing"
                    smooth={true}
                    duration={800}
                >
                    <img className="logo-navbar" src={Logo} alt="logo"></img>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;

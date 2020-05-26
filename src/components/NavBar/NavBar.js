import React from 'react';
import './NavBar.css';
import Logo from '../../images/Logo.png';
import { Link } from 'react-scroll';
import Drawer from '../Drawer/Drawer';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Drawer />
            <div className="navbar-links">
                <Link
                    className="link-about"
                    to="about"
                    smooth={true}
                    duration={800}
                >
                    <h2 className="about-link">About</h2>
                </Link>
                <Link
                    className="link-about"
                    to="skills"
                    smooth={true}
                    duration={800}
                >
                    <h2 className="skills-link">Skills</h2>
                </Link>
                <Link
                    className="link-about"
                    to="projects"
                    smooth={true}
                    duration={800}
                >
                    <h2 className="projects-link"> Projects</h2>
                </Link>
                <Link
                    className="link-about"
                    to="contact"
                    smooth={true}
                    duration={800}
                >
                    <h2 className="contact-link">Contact</h2>
                </Link>
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

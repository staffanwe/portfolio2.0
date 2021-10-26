import React from 'react';
import './NavBar.css';
import Logo from '../../images/Logo3.png';
import { Link } from 'react-scroll';
import Drawer from '../Drawer/Drawer';
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
  const history = useHistory();

  return (
    <div className="navbar">
      <Drawer />
      <div className="navbar-links">
        <Link className="link-about" to="about" smooth={true} duration={800}>
          <h2 className="about-link">ABOUT</h2>
        </Link>
        <Link className="link-about" to="skills" smooth={true} duration={800}>
          <h2 className="skills-link">SKILLS</h2>
        </Link>

        <Link className="link-about" to="projects" smooth={true} duration={800}>
          <h2 className="projects-link"> PROJECTS</h2>
        </Link>
        <Link className="link-about" to="contact" smooth={true} duration={800}>
          <h2 className="contact-link">CONTACT</h2>
        </Link>
      </div>
      <div className="logo-navbar-wrapper" onClick={() => history.push('/')}>
        <div className="link-about">
          <img className="logo-navbar" src={Logo} alt="logo"></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

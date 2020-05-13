import React from 'react';
import './Landingpage.css';
import Logo from '../../images/Logo.png';
import Github from '../../images/github.svg';
import LinkedIn from '../../images/linkedin.svg';
import Instagram from '../../images/instagram.svg';
import Down from '../../images/down.svg';
import { Link } from 'react-scroll';

const Landingpage = (props) => {
    return (
        <section id="landing">
            <div className="landingpage">
                <div className="welcome-background">
                    <div className="textwrapper">
                        <h1 className="welcome">Welcome!</h1>
                    </div>
                    <div className="logo-wrapper">
                        <img className="logo" src={Logo} alt="logo"></img>
                    </div>
                </div>
                <div className="info-box">
                    <h3>Software Developer from the deepest of forrests</h3>
                    <div className="social-links">
                        <a
                            href="https://github.com/staffanwe"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Github}
                                alt="Github"
                                className="social-link"
                            ></img>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/staffan-westerlund-28b1b71a8/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={LinkedIn}
                                alt="LinkedIn"
                                className="social-link"
                            ></img>
                        </a>
                        <a
                            href="https://www.instagram.com/staffanwesterlund/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Instagram}
                                alt="Instagram"
                                className="social-link"
                            ></img>
                        </a>
                    </div>
                    <p className="learn-more">
                        Learn more about me and what I do...
                    </p>
                    <Link
                        className="link-about"
                        to="about"
                        smooth={true}
                        duration={800}
                    >
                        <img src={Down} alt="down" className="arrow-down"></img>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Landingpage;

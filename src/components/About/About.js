import React from 'react';
import './About.css';
import { Link } from 'react-scroll';

const About = (props) => {
    return (
        <section className="about" id="about">
            <Link
                style={{ color: 'white' }}
                className="c-main__contact"
                to="landing"
                smooth={true}
                duration={500}
            >
                Top
            </Link>
        </section>
    );
};

export default About;

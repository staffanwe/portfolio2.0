import React from 'react';
import './Landingpage.css';
import { Link } from 'react-scroll';

const Landingpage = (props) => {
    return (
        <section id="landing">
            <div className="landingpage">
                <Link
                    className="c-main__contact"
                    to="about"
                    smooth={true}
                    duration={500}
                >
                    Contact
                </Link>
            </div>
        </section>
    );
};

export default Landingpage;

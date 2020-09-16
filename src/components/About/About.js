import React, { useEffect } from 'react';
import './About.css';
import ProfileImg from '../../images/IMG_1337.jpg';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';

const About = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className="about" id="about">
            <div data-aos="fade-up" className="about-header">
                <h1>About me</h1>
            </div>
            <div data-aos="fade-up" className="about-container">
                <div className="text-container">
                    <h1 className="text-container-h1">My name is Staffan,</h1>
                    <p className="text-container-p">
                        and I am a student currently studying my fourth year at
                        Umeå University to get a Master of Science degree in
                        Interaction Technology and Design and a bachelors degree
                        in Computer Science. Originally I'm from a city in
                        northern Sweden called Piteå but I moved when it was
                        time to start my education. I love to be creative and
                        solve problems and that is why I do what I do. I have
                        always been good at logical things like mathematics.
                        That in combination with design, which always has been
                        an interest of mine, became my profession. <br />
                        <br />
                        If you meet me and wonder what to talk about, try
                        sports. Sports and especially football has always been
                        my biggest interest and what I really love doing.
                    </p>
                </div>
                <div className="img-cropper">
                    <img
                        className="img"
                        src={ProfileImg}
                        alt="profile-pic"
                    ></img>
                </div>
            </div>
        </section>
    );
};

export default About;

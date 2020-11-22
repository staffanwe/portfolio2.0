import React, { useEffect } from 'react';
import './Skills.css';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import ReactJS from '../../icons/react.svg';
import ExpressJS from '../../icons/ExpressJS.svg';
import DotNet from '../../icons/c-sharp.svg';
import HTMLIcon from '../../icons/html.svg';
import CSSIcon from '../../icons/css.svg';
import BootstrapIcon from '../../icons/bootstrap.svg';
import MaterialIcon from '../../icons/material.svg';
import AdobeIcon from '../../icons/adobe.svg';
import JavaIcon from '../../icons/java.svg';
import CIcon from '../../icons/c.svg';
import PythonIcon from '../../icons/python.svg';
import DatabaseIcon from '../../icons/database.svg';
import OpenGLIcon from '../../icons/opengl.png';

const Skills = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills" id="skills">
      <div data-aos="fade-up" className="skills-header">
        <h1>Skills</h1>
      </div>

      <div data-aos="fade-up" className="skills-container">
        <div className="skills-row">
          {[
            { title: 'ReactJS', img: ReactJS },
            { title: 'ExpressJS', img: ExpressJS },
            { title: '.NET Core', img: DotNet },
            { title: 'React Native', img: ReactJS },
            { title: 'HTML5', img: HTMLIcon },
            { title: 'CSS3', img: CSSIcon },
            { title: 'Bootstrap', img: BootstrapIcon },
            { title: 'Material UI', img: MaterialIcon },
            { title: 'Adobe Suite', img: AdobeIcon },
            { title: 'Java', img: JavaIcon },
            { title: 'C99', img: CIcon },
            { title: 'C++', img: CIcon },
            { title: 'Open GL', img: OpenGLIcon },
            { title: 'Python 3', img: PythonIcon },
            { title: 'SQL', img: DatabaseIcon },
            { title: 'NoSQL', img: DatabaseIcon },
          ].map((skill, index) => (
            <div className="skills-ball">
              <img src={skill.img} alt={skill.title}></img>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useEffect } from 'react';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import './Projects.css';
import WhoSkips from '../../images/Whoskips.png';
import Annonser from '../../images/Annons.png';
import Alumntorget from '../../images/Alumntorget.png';
import Matchstats from '../../images/Matchfakta.PNG';
import Paradox from '../../images/paradox_white.jpg';
import IdApp from '../../images/id_app.png';

const Projects = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className="projects" id="projects">
      <div data-aos="fade-up" className="projects-header">
        <h1>Projects</h1>
      </div>

      <div data-aos="fade-up" className="projects-container">
        <div className="projects-row">
          {[
            {
              title: 'Employee evaluation',
              img: Paradox,
              description:
                'The goal of this project was to create an application to make employee evaluation easier and more efficient for the game development studio Paradox Arctic. Me and 4 of my friends accepted the challenge and created a web application in React. ',
            },
            {
              title: 'Freshman app',
              img: IdApp,
              description:
                'The freshman app is an application for first year students to get an easier way in to the new life of being a student. It is ment to be a part of the reception of the new students where things like the calendar of events, news from the older students, information about the city and more. It is prototyped and developed with figma and React Native. ',
            },
            {
              title: 'Who Skips?',
              img: WhoSkips,
              description:
                'Who skips is an application where League of Legends players can choose which players that has to skip a game if they are more than 5 players. It is an application built with the MERN stack where the stats about the players are stored in a database.',
            },
            {
              title: 'Alumntorget',
              img: Alumntorget,
              description:
                'Alumntorget is a prototype that I together with some other students designed in a project for Umeå University. It is an application for alumnis at the university to easier get in touch with each other and to continuing their connection to the school. ',
            },
          ].map((project, index) => (
            <div className="project-box">
              <img className="project-image" src={project.img} alt={project.title}></img>
              <div class="overlay">
                <div class="text">
                  <h1>{project.title}</h1>
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

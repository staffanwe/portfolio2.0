import React, { useEffect } from 'react';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import './Projects.css';
import WhoSkips from '../../images/Whoskips.png';
import Annonser from '../../images/Annons.png';
import Alumntorget from '../../images/Alumntorget.png';
import Matchstats from '../../images/Matchfakta.PNG';

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
              title: 'Who Skips?',
              img: WhoSkips,
              description:
                'Who skips is an application where League of Legends players can choose which players that has to skip a game if they are more than 5 players. It is an application built with the MERN stack where the stats about the players are stored in a database.',
            },
            {
              title: 'Annonser',
              img: Annonser,
              description:
                'Annonser is a full stack web application that runs on two servers. One for subscribers and one for ads and advertisers. Subscribers and companies can create an ad and put it on the website for anyone to see.',
            },

            {
              title: 'Alumntorget',
              img: Alumntorget,
              description:
                'Alumntorget is a prototype that I together with some other students designed in a project for Umeå University. It is an application for alumnis at the university to easier get in touch with each other and to continuing their connection to the school. ',
            },
            {
              title: 'Score predictor',
              img: Matchstats,
              description:
                'Score predictor is a simple application developed in ASP .NET Core MVC. In the application the user can choose two teams and simulate a game between the two teams and get the match stats from it. The application is communicating with a MySQL database.',
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

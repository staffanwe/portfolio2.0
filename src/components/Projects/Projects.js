import { Box, Button, Container } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../../node_modules/aos/dist/aos.css';
import LetterCard from '../../images/BusinessCard.png';
import Drawing from '../../images/drawing1.png';
import HatLogo from '../../images/Hats3.png';
import Pattern from '../../images/pattern4.png';
import Poster from '../../images/Poster5.png';
import TimeFront from '../../images/TimeFront.png';
import './Projects.css';

const Projects = (props) => {
  const history = useHistory();

  return (
    <div className="background">
      <Container style={{ maxWidth: '1600px' }}>
        <section className="projects" id="projects">
          <div className="projects-container">
            <div className="projects-row">
              {[
                {
                  title: 'The Party for Cool Hats',
                  img: HatLogo,
                  description:
                    'The goal of this project was to create a logo for a political party. Together with 4 other students this logo was designed. ',
                  url: '/project/cool-hats',
                  class: 'project-image',
                },
                {
                  title: 'Pattern',
                  img: Pattern,
                  description: 'In this project I have designed a pattern repeat and added it to some mockups. ',
                  url: '/project/pattern',
                  class: 'project-image2',
                },
                {
                  title: 'Letters',
                  img: LetterCard,
                  description: 'Here I have used an existing font and modified it to create a personal logotype.',
                  url: '/project/letters',
                  class: 'project-image2',
                },
                {
                  title: 'Propaganda poster',
                  img: Poster,
                  description:
                    'In this project I have designed a propaganda poster in Adobe Illustrator for the political party from the previous project "The Party for Cool Hats".',
                  url: '/project/poster',
                  class: 'project-image2',
                },
                {
                  title: 'Magazine layout',
                  img: TimeFront,
                  description:
                    'In this project I have used Adobe InDesign to design a magazine layout. I have design a cover and three spreads for Time Magazine. The theme of the design is from a previous project with the political party "The Party for Cool Hats".',
                  url: '/project/layout',
                  class: 'project-image2',
                },
                {
                  title: 'Drawing',
                  img: Drawing,
                  description:
                    'In this project I got to train my drawing skills by drawing an object that was standing in front of me in different angels.',
                  url: '/project/drawing',
                  class: 'project-image2',
                },
              ].map((project, index) => (
                <div className="project-box">
                  <img className={project.class} src={project.img} alt={project.title}></img>
                  <div class="overlay">
                    <div class="text">
                      <h1>{project.title}</h1>
                      {project.description}
                      <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Button
                          variant="text"
                          style={{
                            color: '#fff',
                            textTransform: 'none',
                            fontFamily: 'inherit',
                            fontSize: '20px',
                            marginTop: '10px',
                          }}
                          onClick={() => history.push(project.url)}
                        >
                          View more...
                        </Button>
                      </Box>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Projects;

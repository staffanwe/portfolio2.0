import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Poster1 from './images/Poster.png';
import Poster2 from './images/Poster2.png';
import Poster3 from './images/Poster4.png';
import PosterFinal from './images/Poster5.png';
import Poster4 from './images/Poster6.png';
import Poster5 from './images/Poster7.png';

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    paddingTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    paddingTop: '50px',
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: '40px',
    color: '#423b3b',
  },
  hat1: {
    height: '100%',
  },
  bread: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: '20px',
    fontWeight: 300,
    textAlign: 'justify',
  },
  smallHeader: {
    fontFamily: "'Josefin Sans', sans-serif",
    fontSize: '25px',
    fontWeight: 400,
  },
}));

const Poster = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.body}>
        <Typography className={classes.header}>Propaganda poster</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={PosterFinal} alt="The final poster"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            In this project I have designed a propaganda poster for the political party in a previous project "The Party
            for Cool Hats". The message of the poster I have designed is that a hat never gets old and should not be
            thrown away and instead should be recycled. Down below I show the iterations of this poster from the first,
            which is the poster furthest to the left, up until the final version.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Poster1} alt="Poster 1"></img>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Poster2} alt="Poster 2"></img>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Poster3} alt="Poster 3"></img>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Poster4} alt="Poster 4"></img>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Poster5} alt="Poster 5"></img>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={PosterFinal} alt="Poster 6"></img>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Poster;

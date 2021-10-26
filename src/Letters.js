import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import BusinessCard from './images/BusinessCard.png';
import Fonts from './images/Fonts.png';
import LetterLogo from './images/Logo3.png';
import Logos from './images/Logos.png';
import Moodboard from './images/Moodboard.png';
import Office from './images/Office.png';

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
    width: '100%',
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

const Letters = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.body}>
        <Typography className={classes.header}>Letters</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={LetterLogo} alt="Letter logo"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            In this project i have used an existing font which I then modified to create a personal logo. This is
            supposed to symbolize me as a graphical designer and is for instance used in this portfolio.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="column" width="40%" justifyContent="center">
              <Typography className={classes.smallHeader}>Moodboard</Typography>
              <Typography className={classes.bread}>
                This project started off my creating a moodboard to get the feeling of what the logo should be like. I
                chose some images that i liked, some of them having to do with my interests and some of them that I just
                liked.{' '}
              </Typography>
            </Box>
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Moodboard} alt="Moodboard"></img>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Fonts} alt="Fonts"></img>
            </Box>
            <Box display="flex" flexDirection="column" width="45%" justifyContent="center">
              <Typography className={classes.smallHeader}>Fonts</Typography>
              <Typography className={classes.bread}>
                The designing of the logo started by me testing out a whole bunch of different fonts by spelling my
                initials. I got a lot of insipiration from this and I chose a font that was called "Gloria Halleluja" to
                continue with because I thought it had a fun look to it.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Typography className={classes.smallHeader}>Logo variants</Typography>
            <Typography className={classes.bread}>
              This is the logo that I ended up with. It is created in Figma and it is made by modifing the font that I
              chose. To make it work in black and white i added some channels where the "S" and "W" overlapped to get
              the same illusion as in the colored one where the "S" twists around the "W".
            </Typography>
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Logos} alt="Logos"></img>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Typography className={classes.smallHeader}>Mockups</Typography>
            <Typography className={classes.bread}>
              When the logo was done I used Adobe Photoshop to add my logo in to some mockups that I show down below.
            </Typography>
            <Box style={{ width: '100%', paddingBottom: 40 }}>
              <img className={classes.hat1} src={BusinessCard} alt="BusinessCard"></img>
            </Box>
            <Box style={{ width: '100%', paddingBottom: 40 }}>
              <img className={classes.hat1} src={Office} alt="Office"></img>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Letters;

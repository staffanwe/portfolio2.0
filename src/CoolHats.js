import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import HatSketch from './images/Hats1.png';
import HatDigital from './images/Hats2.png';
import HatLogo from './images/Hats3.png';

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

const CoolHats = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.body}>
        <Typography className={classes.header}>The Party for Cool hats</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={HatLogo} alt="Hat logo"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            This logo was created to represent the imaginary political party "The Party for Cool Hats". The political
            standpoint of this party is that everyone should wear hats. It does not matter what hat you are wearing, the
            party is all about diversity and respect.
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="column" width="50%" justifyContent="center">
              <Typography className={classes.smallHeader}>Sketching</Typography>
              <Typography className={classes.bread}>
                The design process started with everone sketching different kinds of logos that had anything to do with
                hats. When we had a large amount of sketches we started to vote for which sketches that we liked the
                most and wanted to continue with, with this one making it into the digital phase.
              </Typography>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={HatSketch} alt="Hat sketch"></img>
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
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={HatDigital} alt="Hat sketch"></img>
            </Box>
            <Box display="flex" flexDirection="column" width="50%" justifyContent="center">
              <Typography className={classes.smallHeader}>Graphic design</Typography>
              <Typography className={classes.bread}>
                The different parts of the logo were designed and assembled using Figma. We played around with some
                different looks and colors. The black outlines were removed and the text element was added in the final
                result.
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default CoolHats;

import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import InDesign from './images/indesign.png';
import Time1 from './images/Time1.png';
import Time2 from './images/Time2.png';
import Time3 from './images/Time3.png';
import TimeFront from './images/TimeFront.png';

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
        <Typography className={classes.header}>Magazine layout</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={TimeFront} alt="Cover magazine"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            In this project I have designed a magazine and three spreads. More specifically for a concept for Time
            magazine. The theme of the design is from a previous project with the political party "The Party for Cool
            Hats".
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box display="flex" flexDirection="column" width="30%" justifyContent="center">
              <Typography className={classes.smallHeader}>Design</Typography>
              <Typography className={classes.bread}>
                The design was made in Adobe InDesign. I studied a copy of Time magazine and then tried to design
                spreads that had the same sort of layout with the theme of hats.
              </Typography>
            </Box>
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={InDesign} alt="InDesign"></img>
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
            <Typography className={classes.smallHeader}>Final result</Typography>
          </Box>
          <Box style={{ height: 500, paddingBottom: 30 }}>
            <img className={classes.hat1} src={TimeFront} alt="Time cover"></img>
          </Box>
          <Box style={{ height: 500, paddingBottom: 30 }}>
            <img className={classes.hat1} src={Time1} alt="Time spread 1"></img>
          </Box>
          <Box style={{ height: 500, paddingBottom: 30 }}>
            <img className={classes.hat1} src={Time2} alt="Time spread 2"></img>
          </Box>
          <Box style={{ height: 500, paddingBottom: 30 }}>
            <img className={classes.hat1} src={Time3} alt="Time spread 3"></img>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default CoolHats;

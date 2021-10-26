import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Drawing1 from './images/drawing1.png';
import Drawing2 from './images/drawing2.png';
import Plant from './images/plant.png';
import Plant2 from './images/plant2.png';

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

const Drawing = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.body}>
        <Typography className={classes.header}>Drawing</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={Drawing2} alt="Drawing 2"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            In this project I got to train my drawing skills. I drawed a plant that I had standing in front of me in two
            different angels.
          </Typography>
          <Box display="flex" flexDirection="column" marginTop="40px" justifyContent="center">
            <Typography className={classes.smallHeader}>Front view</Typography>
            <Typography className={classes.bread}>
              When I did my first drawing I had the plant standing in front of me like in the picture to the right.
              Having it standing there made it possible for me to spot more details than in a photo.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box style={{ height: 600, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Plant} alt="Plant object"></img>
            </Box>
            <Box style={{ height: 600, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Drawing1} alt="Drawing 1"></img>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography className={classes.smallHeader}>Top view</Typography>
            <Typography className={classes.bread}>
              In this drawing I had the plant standing on the floor making it a little harder to look at it as often. I
              spent more time on this one, trying to focus more on shadows and details.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="space-between"
            marginTop="10px"
          >
            <Box style={{ height: 600, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Plant2} alt="Plant object"></img>
            </Box>
            <Box style={{ height: 600, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Drawing2} alt="Drawing 1"></img>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Drawing;

import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PatternSketch from './images/pattern1.png';
import PatternDigital from './images/pattern2.png';
import PatternDigital2 from './images/pattern3.png';
import PatternRepeat from './images/pattern4.png';
import Mockup1 from './images/pattern5.png';
import Mockup2 from './images/pattern6.jpeg';
import Slice1 from './images/slice1.png';
import Slice2 from './images/slice2.png';
import Slice3 from './images/slice3.png';
import Slice4 from './images/slice4.png';

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

const Pattern = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.body}>
        <Typography className={classes.header}>Pattern</Typography>
        <Box style={{ height: 300, paddingBottom: 40 }}>
          <img className={classes.hat1} src={PatternRepeat} alt="Pattern repeat"></img>
        </Box>
        <Box display="flex" flexDirection="column" style={{ alignItems: 'center' }}>
          <Typography className={classes.bread}>
            In this project I have designed a pattern and added it to some mockups. Here I will show my process that
            resulted in the final pattern repeat.
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
                I started my process with sketching on paper. I let my pen do the work and I ended up with some
                different ideas. This sketch to the right I found interesting. I decided that I wanted to take this
                sketch into the computer to see what I could do with it.
              </Typography>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={PatternSketch} alt="Pattern sketch"></img>
            </Box>
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
          <Typography className={classes.smallHeader}>Graphic design</Typography>
          <Typography className={classes.bread}>
            I took my sketch and designed a digital version of it in Figma. Then I sliced the image in 4 pieces in the
            way that is shown below, and filled the gap with some additional shapes. I did this so I could create a
            seamless pattern repeat.{' '}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
          >
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={PatternDigital} alt="Pattern digital"></img>
            </Box>
            <Box style={{ height: 300, width: 300, paddingBottom: 40, display: 'flex', flexWrap: 'wrap' }}>
              <Box style={{ height: 150 }}>
                <img className={classes.hat1} src={Slice1} alt="Sketch slice 1"></img>
              </Box>
              <Box style={{ height: 150 }}>
                <img className={classes.hat1} src={Slice2} alt="Sketch slice 2"></img>
              </Box>
              <Box style={{ height: 150 }}>
                <img className={classes.hat1} src={Slice3} alt="Sketch slice 3"></img>
              </Box>
              <Box style={{ height: 150 }}>
                <img className={classes.hat1} src={Slice4} alt="Sketch slice 4"></img>
              </Box>
            </Box>
            <Box style={{ height: 300, paddingBottom: 40 }}>
              <img className={classes.hat1} src={PatternDigital2} alt="Pattern digital 2"></img>
            </Box>
          </Box>
          <Box style={{ width: '100%', paddingBottom: 40 }}>
            <img className={classes.hat1} src={PatternRepeat} alt="Pattern repeat"></img>
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
            When the pattern repeat was done I applied the pattern to some digital mockups, a phone case and a backpack.
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="10px"
          >
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Mockup1} alt="Mockup phone case"></img>
            </Box>
            <Box style={{ height: 400, paddingBottom: 40 }}>
              <img className={classes.hat1} src={Mockup2} alt="Mockup backpack"></img>
            </Box>
          </Box>
        </Box>
      </div>
    </Container>
  );
};

export default Pattern;

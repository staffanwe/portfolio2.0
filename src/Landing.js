/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import Landingpage from './components/Landingpage/Landingpage';
import { Scroll } from 'react-fns';
import { WindowSize } from 'react-fns';
import Projects from './components/Projects/Projects';

const Landing = () => {
  return (
    <div>
      <Scroll
        render={({ x, y }) => (
          <div>
            <WindowSize render={({ width, height }) => <div className="fixed"></div>} />
          </div>
        )}
      />
      <Projects />
    </div>
  );
};

export default Landing;

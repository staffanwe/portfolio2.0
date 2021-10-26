import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import CoolHats from './CoolHats';
import Pattern from './Pattern';

import NavBar from './components/NavBar/NavBar';
import Letters from './Letters';
import Poster from './Poster';
import Magazine from './Magazine';
import Drawing from './Drawing';

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/project/cool-hats" exact component={CoolHats} />
        <Route path="/project/pattern" exact component={Pattern} />
        <Route path="/project/letters" exact component={Letters} />
        <Route path="/project/poster" exact component={Poster} />
        <Route path="/project/layout" exact component={Magazine} />
        <Route path="/project/drawing" exact component={Drawing} />
      </Switch>
    </Router>
  );
};

export default Routes;

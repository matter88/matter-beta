import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Team from './Team.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/team' component={Team}/>
    </Switch>
  </main>
)

export default Main;
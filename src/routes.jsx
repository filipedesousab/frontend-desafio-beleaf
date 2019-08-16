import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import LunchBoxesList from './LunchBoxesList';
import LunchBox from './LunchBox';

/** @type {function} Constroe as rodas das páginas da aplicação */
const Routes = () => (
  <Router history={createHashHistory()}>
    <Switch>
      <Route exact path="/" component={LunchBoxesList} />
      <Route exact path="/lunchBox/:id" component={LunchBox} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;

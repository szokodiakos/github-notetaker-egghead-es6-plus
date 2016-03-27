import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile.js';

const routes = (
  <Route path="/" component={App}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);

export default routes;

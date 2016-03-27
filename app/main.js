import ReactDOM from 'react-dom';
import React from 'react';
import { Router, hashHistory } from 'react-router';

import routes from './config/routes.js';

ReactDOM.render(
  <Router routes={routes} history={hashHistory} />,
  document.getElementById('app')
);

import React from 'react';

import SearchGithub from './SearchGithub.js';

const App = ({ children }) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={ { marginTop: 15 } }>
        <SearchGithub />
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;

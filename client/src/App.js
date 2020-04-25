import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BubblePage from './components/BubblePage';
import PrivateRouter from './utils/PrivateRouter';

import Login from './components/Login';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Login} />
        <PrivateRouter path='/bubbles' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import clsx from 'clsx';
import Navigationbar from './components/common/Navigationbar';
import Routes from './components/common/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  const [navbarStatus, toggleNavbar] = useState(false);

  return (
    <Router>
      <div className={clsx('App', navbarStatus && 'responsive')}>
        <Navigationbar navbarStatus={navbarStatus} toggleNavbar={toggleNavbar} />
        <Routes />
      </div>
    </Router>
  );
}

export default App;

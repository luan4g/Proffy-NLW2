import React from 'react';

import Routes from './Routes/routes';

import './assets/global.css';
import AuthContext from './contexts/auth';

function App() {
  return (
    <AuthContext.Provider value={{ signed: false }}>
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;

import React from 'react';

import Routes from './Routes/routes';

import './assets/global.css';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

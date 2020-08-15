import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from '../pages/AuthRoutes/Signin';
import Signup from '../pages/AuthRoutes/Signup';
import Reset from '../pages/AuthRoutes/Reset';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/reset-password" component={Reset} exact />
    </BrowserRouter>
  )
}

export default AuthRoutes;
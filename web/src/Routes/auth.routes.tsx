import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from '../pages/AuthRoutes/Signin';
import Signup from '../pages/AuthRoutes/Signup';
import Update from '../pages/AuthRoutes/Update';
import Reset from '../pages/AuthRoutes/Reset';
import SuccessSignup from '../pages/AuthRoutes/Signup/sucess';
import SuccessUpdate from '../pages/AuthRoutes/Update/success';
import SuccessReset from '../pages/AuthRoutes/Reset/success';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/success-signup" component={SuccessSignup} exact />
      <Route path="/update-password" component={Update} exact />
      <Route path="/update-success" component={SuccessUpdate} exact />
      <Route path="/reset-password/:token" component={Reset} exact />
      <Route path="/reset-success" component={SuccessReset} exact />
    </BrowserRouter>
  )
}

export default AuthRoutes;
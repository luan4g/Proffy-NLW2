import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from '../pages/AuthRoutes/Signin';
import Signup from '../pages/AuthRoutes/Signup';
import Reset from '../pages/AuthRoutes/Reset';
import SuccessSignup from '../pages/AuthRoutes/Signup/sucess';
import SuccessReset from '../pages/AuthRoutes/Reset/success';

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Route path="/signin" component={Signin} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/success-signup" component={SuccessSignup} exact />
      <Route path="/reset-password" component={Reset} exact />
      <Route path="/reset-success" component={SuccessReset} exact />
    </BrowserRouter>
  )
}

export default AuthRoutes;
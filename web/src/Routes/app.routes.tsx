import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/AppRoutes/Landing';
import TeacherList from '../pages/AppRoutes/TeacherList';
import TeacherForm from '../pages/AppRoutes/TeacherForm';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Route  path="/" component={Landing} exact />
      <Route  path="/study" component={TeacherList} exact />
      <Route  path="/give-classes" component={TeacherForm} exact />
    </BrowserRouter>
  )
}

export default AppRoutes;
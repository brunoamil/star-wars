import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './../pages/Dashboard';
import ListCategory from './../pages/ListCategory';
import Home from './../pages/Home';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/listcategory/:category/:id" component={ListCategory} />
  </Switch>
)

export default Routes;
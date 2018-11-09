import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import Login from '../components/Login';
import NotFoundPage from '../components/NotFoundPage';
import { history } from '../helpers/history.helper';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

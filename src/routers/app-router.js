import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/not-found-page';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={() => <h2>Login page</h2>} exact={true} />
        <PrivateRoute path="/dashboard" component={() => <h2>Dashboard page</h2>} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

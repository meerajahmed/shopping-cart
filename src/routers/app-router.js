import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from '../components/not-found-page';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';
import Login from "../containers/login";
import SignUp from "../containers/sign-up";
import Dashboard from "../containers/dashboard";
import CartDetails from "../containers/cart-details";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PublicRoute path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/cart" component={CartDetails} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

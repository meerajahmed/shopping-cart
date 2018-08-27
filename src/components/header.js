import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Shopping Cart</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);

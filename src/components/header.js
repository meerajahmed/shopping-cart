import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = ({userName, startLogout, cartItemsCount}) => (
  <header className="sticky-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <Link to="/dashboard" className="navbar-brand">Book Store</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/dashboard" className="nav-link" activeClassName="is-active">Dashboard</NavLink>
          </li>
          <li className="nav-item active">
            <NavLink to="/cart" className="nav-link" activeClassName="is-active">Cart</NavLink>
          </li>
        </ul>
        <span className="navbar-text mr-3 text-light">Welcome {userName}</span>
        {cartItemsCount > 0 && (
          <Link to="/cart" className="btn btn-outline-light mr-3">
            Cart <span className="badge badge-light">{cartItemsCount}</span>
          </Link>
        )}
        <button className="btn btn-outline-light my-2 my-sm-0" onClick={startLogout}>Logout</button>
      </div>
    </nav>
  </header>
);

export default Header;
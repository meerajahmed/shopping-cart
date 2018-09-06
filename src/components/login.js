import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//import { userActions } from '../_actions';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    submitted: false
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) =>  {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.handleSubmit({email, password});
    }
  };

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} />
              {submitted && !email &&
              <div className="help-block">Email is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
              <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Login</button>
              <Link to="/signup" className="btn btn-link">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

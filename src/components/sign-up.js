import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

//import { userActions } from '../_actions';

export default class SignUp extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    submitted: false
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    const {user} = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submitted: true});
    const {user} = this.state;
    if (user.firstName && user.lastName && user.email && user.password) {
      this.props.handleSubmit(user);
    }
  };

  render() {
    //const {registering} = this.props;
    const {user, submitted} = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <h2>Sign Up</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" value={user.firstName}
                     onChange={this.handleChange}/>
              {submitted && !user.firstName &&
              <div className="help-block">First Name is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName" value={user.lastName}
                     onChange={this.handleChange}/>
              {submitted && !user.lastName &&
              <div className="help-block">Last Name is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" value={user.email}
                     onChange={this.handleChange}/>
              {submitted && !user.email &&
              <div className="help-block">Email is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={user.password}
                     onChange={this.handleChange}/>
              {submitted && !user.password &&
              <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Sign Up</button>
              <Link to="/" className="btn btn-link">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
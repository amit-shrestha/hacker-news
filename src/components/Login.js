import React from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';

import { auth } from '../utils/auth';

/**
 *
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {
  /**
   * Creates an instance of Login.
   *
   * @memberof Login
   */
  constructor() {
    super();
    this.state = {
      redirectToPreviousRoute: false,
      credentials: [],
      username: '',
      password: ''
    };
    this.usernameExist = false;
    this.incorrectCredential = false;
    auth.isAuthenticated = false;
  }

  /**
   *
   *
   * @memberof Login
   */
  login = () => {
    if (this.state.username && this.state.password) {
      if (this.state.credentials.length > 0) {
        this.state.credentials.forEach(credential => {
          if (
            credential.username === this.state.username &&
            credential.password === this.state.password
          ) {
            auth.authenticate();
            this.setState({
              redirectToPreviousRoute: true
            });
            this.incorrectCredential = true;
          }
        });
        if (!this.incorrectCredential) {
          alert('Incorrect Credentials');
        }
      } else {
        alert('Please SignUp first !');
      }
    } else {
      alert('Please enter valid Credentials !');
    }
  };

  signup = () => {
    if (this.state.credentials.length > 0) {
      this.state.credentials.forEach(credential => {
        if (credential.username === this.state.username) {
          this.usernameExist = true;
        }
      });
      if (!this.usernameExist) {
        this.setState(
          {
            credentials: [
              ...this.state.credentials,
              { username: this.state.username, password: this.state.password }
            ]
          },
          this.storeCredentials()
        );
      } else {
        alert('Username already exists !');
      }
    } else {
      this.setState(
        {
          credentials: [
            { username: this.state.username, password: this.state.password }
          ]
        },
        this.storeCredentials()
      );
    }
  };

  storeCredentials = () => {
    window.localStorage.setItem(
      'loginCredentials',
      JSON.stringify(this.state.credentials)
    );
    this.setState({ username: '', password: '' });
    alert('Sign up Successfull');
  };

  /**
   *
   *
   * @memberof Login
   */
  componentDidMount() {
    const loginCredentialsUnparsed = window.localStorage.getItem(
      'loginCredentials'
    );
    const loginCredentialsParsed = loginCredentialsUnparsed
      ? JSON.parse(loginCredentialsUnparsed)
      : [];

    this.setState({ credentials: loginCredentialsParsed });
  }

  /**
   *
   *
   * @returns
   * @memberof Login
   */
  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/newstories' }
    };
    const { redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }

    return (
      <div className="auth-form">
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <button onClick={this.login}>Log in</button>
        <button onClick={this.signup}>Sign Up</button>
      </div>
    );
  }
}

Login.propTypes = {
  location: Proptypes.object
};

export default Login;

import React from 'react';
import Proptypes from 'prop-types';

import { auth } from '../utils/auth';
import { getCredentials, saveCredentials } from '../services/storage';

/**
 *
 *
 * @class Login
 * @augments {React.Component}
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
      credentials: [],
      username: '',
      password: '',
      error: false,
      isIncorrectCredential: false,
      hasNoUser: false,
      isInvalidCredential: false,
      usernameAlreadyExist: false
    };
    this.incorrectCredential = true;
    this.usernameExist = false;
  }

  /**
   * Login.
   *
   * @memberof Login
   */
  login = () => {
    const { from } = this.props.location.state || {
      from: { pathname: '/newstories' }
    };

    if (this.state.username && this.state.password) {
      if (this.state.credentials.length > 0) {
        this.state.credentials.forEach(credential => {
          if (
            credential.username === this.state.username &&
            credential.password === this.state.password
          ) {
            auth.authenticate();
            this.props.history.push(from);
            this.incorrectCredential = false;
          }
        });
        if (this.incorrectCredential) {
          this.setState({ error: true, isIncorrectCredential: true });
        }
      } else {
        this.setState({ error: true, hasNoUser: true });
      }
    } else {
      this.setState({ error: true, isInvalidCredential: true });
    }
  };

  /**
   * Sign Up.
   *
   * @memberof Login
   */
  signup = () => {
    if (this.state.credentials.length > 0) {
      this.state.credentials.forEach(credential => {
        if (credential.username === this.state.username) {
          this.setState({ error: true, usernameAlreadyExist: true });
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
          () => this.storeCredentials()
        );
      }
    } else {
      this.setState(
        {
          credentials: [
            { username: this.state.username, password: this.state.password }
          ]
        },
        () => this.storeCredentials()
      );
    }
  };

  /**
   * Store Login Credentials.
   *
   * @memberof Login
   */
  storeCredentials = () => {
    saveCredentials(this.state.credentials);
    this.setState({ username: '', password: '' });
  };

  /**
   * Get Login Credentials.
   *
   * @memberof Login
   */
  componentDidMount() {
    const loginCredentialsParsed = getCredentials();

    this.setState({ credentials: loginCredentialsParsed });
  }

  /**
   * Renders Login Form.
   *
   * @returns
   * @memberof Login
   */
  render() {
    return (
      <div className={this.state.error ? 'auth-form red' : 'auth-form'}>
        <input
          className="username-input"
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={event => this.setState({ username: event.target.value })}
        />
        <div
          className={
            this.state.usernameAlreadyExist ? 'display-error-msg' : 'error-msg'
          }
        >
          Username Already Exists
        </div>
        <input
          className="password-input"
          type="password"
          placeholder="Password"
          value={this.state.password}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <div
          className={
            this.state.isIncorrectCredential ? 'display-error-msg' : 'error-msg'
          }
        >
          Incorrect Credentials
        </div>
        <div
          className={this.state.hasNoUser ? 'display-error-msg' : 'error-msg'}
        >
          Please SignUp First
        </div>
        <div
          className={
            this.state.isInvalidCredential ? 'display-error-msg' : 'error-msg'
          }
        >
          Please enter valid credentials
        </div>
        <button onClick={this.login}>Log in</button>
        <button onClick={this.signup}>Sign Up</button>
      </div>
    );
  }
}

Login.propTypes = {
  location: Proptypes.object,
  history: Proptypes.object
};

export default Login;

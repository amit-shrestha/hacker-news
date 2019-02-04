import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../assets/css';
import Navbar from './Navbar';
import Stories from './Stories';
import DisplayStory from './DisplayStory';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   *
   */
  constructor() {
    super();
    this.state = {};
  }

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <Router basename="/hacker-news">
        <div className="wrapper">
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute
                path="/newstories"
                component={props => <Stories {...props} option="newstories" />}
              />
              <PrivateRoute
                path="/topstories"
                component={props => <Stories {...props} option="topstories" />}
              />
              <PrivateRoute
                path="/beststories"
                component={props => <Stories {...props} option="beststories" />}
              />
              <PrivateRoute path="/:story_id" component={DisplayStory} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

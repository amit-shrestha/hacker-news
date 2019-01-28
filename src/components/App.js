import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../assets/css';
import Navbar from './Navbar';
import Stories from './Stories';
import DisplayStory from './DisplayStory';

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
      <Router>
        <div className="wrapper">
          <div className="container">
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                component={props => <Stories {...props} option="newstories" />}
              />
              <Route
                path="/topstories"
                component={props => <Stories {...props} option="topstories" />}
              />
              <Route
                path="/beststories"
                component={props => <Stories {...props} option="beststories" />}
              />
              <Route path="/:story_id" component={DisplayStory} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import StoryWrapper from './StoryWrapper';
import Story from './Story';

/**
 *
 */
const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <StoryWrapper {...props} option="newstories" />
              )}
            />
            <Route
              path="/topstories"
              component={props => (
                <StoryWrapper {...props} option="topstories" />
              )}
            />
            <Route
              path="/beststories"
              component={props => (
                <StoryWrapper {...props} option="beststories" />
              )}
            />
            <Route path="/:story_id" component={Story} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;

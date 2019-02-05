import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Story from './Story';
import Navbar from './Navbar';
import StoryWrapper from './StoryWrapper';
import { CONSTANTS } from '../constants/constants';

/**
 * Returns Route paths.
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
                <StoryWrapper {...props} option={CONSTANTS.NEW_STORIES} />
              )}
            />
            <Route
              path="/topstories"
              component={props => (
                <StoryWrapper {...props} option={CONSTANTS.TOP_STORIES} />
              )}
            />
            <Route
              path="/beststories"
              component={props => (
                <StoryWrapper {...props} option={CONSTANTS.BEST_STORIES} />
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

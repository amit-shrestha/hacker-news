import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Story from './Story';
import Navbar from './Navbar';
import StoryWrapper from './StoryWrapper';
import { CONSTANTS } from '../constants/constants';
import PrivateRoute from './PrivateRoute';
import Login from './Login';

/**
 * Returns Route paths.
 */
const Router = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <Route path="/" component={Navbar} />

          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute
              path={`/${CONSTANTS.NEW_STORIES}`}
              component={props => (
                <StoryWrapper {...props} option={CONSTANTS.NEW_STORIES} />
              )}
            />
            <PrivateRoute
              path={`/${CONSTANTS.TOP_STORIES}`}
              component={props => (
                <StoryWrapper {...props} option={CONSTANTS.TOP_STORIES} />
              )}
            />
            <PrivateRoute
              path={`/${CONSTANTS.BEST_STORIES}`}
              component={props => (
                <StoryWrapper {...props} option={CONSTANTS.BEST_STORIES} />
              )}
            />
            <PrivateRoute path="/:story_id" component={Story} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;

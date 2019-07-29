import React from 'react';
import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';

import { auth } from '../utils/auth';

import { CONSTANTS } from '../constants/constants';

/**
 *
 * @param {*} props
 */
const Navbar = props => {
  return (
    <div className="nav-bar">
      <div className="header">
        <h1>Hacker News</h1>
        {auth.isAuthenticated ? (
          <span className="logout-btn">
            <button onClick={() => auth.logout(() => props.history.push('/'))}>
              Log Out
            </button>
          </span>
        ) : null}
      </div>

      <ul>
        <li>
          <NavLink to="/newstories" activeClassName="active">
            New Stories
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${CONSTANTS.TOP_STORIES}`} activeClassName="active">
            Top Stories
          </NavLink>
        </li>
        <li>
          <NavLink to={`/${CONSTANTS.BEST_STORIES}`} activeClassName="active">
            Best Stories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  history: Proptypes.object
};

export default Navbar;

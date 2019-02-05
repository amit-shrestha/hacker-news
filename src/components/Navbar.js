import React from 'react';
import { NavLink } from 'react-router-dom';

import { CONSTANTS } from '../constants/constants';

/**
 *  Returns Navbar component.
 */
const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1>Hacker News</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
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

export default Navbar;

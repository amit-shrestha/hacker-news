import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { auth } from '../utils/auth';

/**
 *
 */
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="header clearfix">
        <h1>Hacker News</h1>
        {auth.isAuthenticated ? (
          <div>
            <Link to="/">Log out</Link>
          </div>
        ) : null}
      </div>

      <ul>
        <li>
          <NavLink to="/newstories" activeClassName="active">
            New Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/topstories" activeClassName="active">
            Top Stories
          </NavLink>
        </li>
        <li>
          <NavLink to="/beststories" activeClassName="active">
            Best Stories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

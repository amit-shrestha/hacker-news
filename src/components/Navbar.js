import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 *
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

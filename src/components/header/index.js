import React from "react";

import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav>
      <a href="/" className="logo selected">
        Danny Ruchtie
      </a>

      <NavLink to="/" exact={true} className="menu" activeClassName="selected">
        Work
      </NavLink>

      <NavLink to="/play" className="menu" activeClassName="selected">
        Play
      </NavLink>

      <NavLink to="/photography" className="menu" activeClassName="selected">
        Photography
      </NavLink>

      <NavLink to="/about" className="menu" activeClassName="selected">
        About
      </NavLink>

      {/* <NavLink to="/writing" className="menu" activeClassName="selected">
        Writing
      </NavLink> */}
    </nav>
  );
}

export default Header;

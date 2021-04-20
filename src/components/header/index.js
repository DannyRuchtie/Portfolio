import React from "react";

import { NavLink } from "react-router-dom";





function Header(props) {
  return (
    <nav>
      <a href="/" className="logo selected">
        Danny Ruchtie
      </a>

      <NavLink to="/" key="1" exact={true} className="menu" activeClassName="selected">
        Work
      </NavLink>

      <NavLink to="/play" key="1" className="menu" activeClassName="selected">
        Play
      </NavLink>

      <NavLink to="/photography" key="1" className="menu" activeClassName="selected">
        Photos
      </NavLink>

      <NavLink to="/about" key="1" className="menu" activeClassName="selected">
        About
      </NavLink>

      {/* <NavLink to="/writing" className="menu" activeClassName="selected">
        Writing
      </NavLink> */}
    </nav>
  );
}

export default Header;

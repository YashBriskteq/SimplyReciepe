import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">SimplyReciepe</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

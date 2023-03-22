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
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Link to="/reciepes">Reciepes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

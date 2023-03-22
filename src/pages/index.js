import React from "react";
import { Link } from "gatsby";

const index = () => {
  return (
    <div>
      <nav>
        <Link to="/">SimplyReciepe</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>Hello !!!</h1>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default index;

import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimplyReciepe</span>. Built with
        ❤️
      </p>
    </footer>
  );
};

export default Footer;

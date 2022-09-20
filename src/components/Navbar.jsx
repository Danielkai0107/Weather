import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="navbar">
      <Link to="/" className="navbar__logo"></Link>
      <ul className="navbar__menu">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/info"></Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;

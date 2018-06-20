import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import './Header.css';
import header1x from '../images/header.jpg';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="film">
          <img src={header1x} alt="Raquel Arañón Creatividad Diseño" />
        </div>
        <img
          src={logo}
          alt="Raquel Arañón Creatividad Diseño"
          className="logo"
        />
        <h1>RAQUEL ARAÑÓN</h1>
        <h2>CREATIVIDAD & DISEÑO</h2>
      </Link>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/portfolio"
              activeStyle={{
                backgroundColor: '#a98c71',
                color: '#fff',
                padding: '0.2em 1em'
              }}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{
                backgroundColor: '#a98c71',
                color: '#fff',
                padding: '0.2em 1em'
              }}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeStyle={{
                backgroundColor: '#a98c71',
                color: '#fff',
                padding: '0.2em 1em'
              }}
            >
              services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/press"
              activeStyle={{
                backgroundColor: '#a98c71',
                color: '#fff',
                padding: '0.2em 1em'
              }}
            >
              press
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

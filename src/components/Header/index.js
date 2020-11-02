import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import LogoImg from '../Logo';

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <LogoImg className="header__logo--img" />
        </Link>
      </div>
      <nav>
        <ul className="header__navigation">
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/game">Swapi</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
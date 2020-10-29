import React, { Component } from 'react';

import imgLogo from './../../assets/img/logo.svg'
import './styles.scss';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <a href="/">
            <img className="header__logo--img" src={imgLogo} alt="Marca mais conhecida do mundo star wars" />
          </a>
        </div>
        <nav>
          <ul className="header__navigation">
            <li><a href="/">About</a></li>
            <li><a href="/">Game</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
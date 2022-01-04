import React from 'react';
import './Header.scss';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">devfinder</h1>
      <div className="header__toggle">
        <h2>dark</h2>
        <Moon className="header__toggle__icon" />
      </div>
    </div>
  );
};

export default Header;

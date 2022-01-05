import React from 'react';
import './Header.scss';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../assets/icon-sun.svg';

const Header = (props) => {
  const { setTheme, isDark } = props;

  return (
    <div className="header">
      <h1 className="header__title">devfinder</h1>
      {isDark ? (
        <div onClick={setTheme} className="header__toggle">
          <h2>light</h2>
          <Sun className="header__toggle__icon" />
        </div>
      ) : (
        <div onClick={setTheme} className="header__toggle">
          <h2>dark</h2>
          <Moon className="header__toggle__icon" />
        </div>
      )}
    </div>
  );
};

export default Header;

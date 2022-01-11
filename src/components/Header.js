import React from 'react';
import './Header.scss';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';

const Header = (props) => {
  const { setTheme, isDark } = props;
  return (
    <div className="header">
      <h1 className="header__title">devfinder</h1>
      {isDark ? (
        <div onClick={setTheme} className="header__toggle">
          <h2>light</h2>
          <img src={Sun} alt="Sun" className="header__toggle__icon" />
        </div>
      ) : (
        <div onClick={setTheme} className="header__toggle">
          <h2>dark</h2>
          <img src={Moon} alt="Moon" className="header__toggle__icon" />
        </div>
      )}
    </div>
  );
};

export default Header;

import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1>Theme Switcher App</h1>
    </nav>
  );
};

export default Navbar;

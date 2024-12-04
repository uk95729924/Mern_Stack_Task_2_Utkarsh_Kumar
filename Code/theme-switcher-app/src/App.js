import React from 'react';
import ThemeProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import ThemeToggler from './components/ThemeToggler';

import './styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main>
          <h2>Welcome to the Theme Switcher App</h2>
          <ThemeToggler />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;

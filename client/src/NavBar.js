import React from 'react';
import useDarkMode from './hooks/useDarkMode';


const Navbar = (key,storedValue) => {
  const [darkMode, setDarkMode] = useDarkMode(storedValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
    
    
  }
  return (
    <nav className="navbar">
      <h1>Most Searched Tennis Stars</h1>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div
           onClick={useDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
}


export default Navbar;
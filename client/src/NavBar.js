import React from 'react';
import useDarkMode from './hooks/useDarkMode';
import { Button} from "semantic-ui-react";

const Navbar = (key,storedValue) => {
  const [darkMode, setDarkMode] = useDarkMode(storedValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode)
    
    
  }
  return (
    <nav className="navbar">
      <h1>Most Searched Tennis</h1>
      <Button className='toggle-button' toggle onClick={toggleMode}>
       Dark Mode
      </Button>
    </nav>
  );
}


export default Navbar;
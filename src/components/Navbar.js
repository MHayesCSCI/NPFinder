import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/NPFinder' className='navbar-logo' onClick={closeMobileMenu}>
            NPFinder
            <i class='fas fa-tree' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Parks' className='nav-links' onClick={closeMobileMenu}>
                Parks
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Activities'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Activities
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Articles'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Articles
              </Link>
            </li>

            <li>
              <Link
                to='/Things-to-do'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                THINGS TO DO
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>THINGS TO DO</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
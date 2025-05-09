import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { 
  darkModeState,
  profileState
} from '../state/atoms';

const Navbar = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const profile = useRecoilValue(profileState);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('bg-dark', !darkMode);
    document.body.classList.toggle('bg-white', darkMode);

    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if(isDarkMode !== null){
      setDarkMode(isDarkMode);
      document.body.classList.toggle('bg-dark', isDarkMode);
      document.body.classList.toggle('bg-white', !isDarkMode);
    }
  }, []);

  return (
    <nav className={'navbar navbar-expand-lg pt-3 pb-3 ' + (darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white')}>
      <div className="container header">

        <Link className="navbar-brand fw-semibold profile-name logo-text" to="/">
          <span className={ (darkMode ? 'text-info' : 'text-primary') }>{ profile.name ? profile.name : '. . .' }</span>
        </Link>

        <div className="">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link dark-mode" onClick={toggleDarkMode} aria-label="Dark mode">
                {
                  darkMode ?
                  <box-icon type='solid' name='sun' color='#fff'></box-icon> :
                  <box-icon type='solid' name='moon' color='#2b3137'></box-icon>
                }
              </button>
            </li>
          </ul>
        </div>

      </div>
    </nav>  
  );
}

export default Navbar;
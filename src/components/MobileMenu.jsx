import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/menu.css';
import { useDispatch } from 'react-redux';
import { authLog, useLogoutMutation } from '../api/authLog';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const handleMobileLogout = async () => {
    await logout(); // Call the logout function to log the user out
    dispatch(authLog.util.resetApiState());
    document.cookie = '_hotel-booking=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    navigate('/');
  };

  return (
    <div className="mobile-menu">
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span />
          <span />
          <span />
        </div>
      </button>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/home">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/reservations">
              <p>My Reservations</p>
            </Link>
          </li>
          <li>
            <Link to="/room/new">
              <p>Add Cottage</p>
            </Link>
          </li>
          <li>
            <Link to="/rooms/delete">
              <p>Remove Cottage</p>
            </Link>
          </li>
          <li>
            <button onClick={handleMobileLogout} id="logout-mobile" type="button">
              <p>Log Out</p>
            </button>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

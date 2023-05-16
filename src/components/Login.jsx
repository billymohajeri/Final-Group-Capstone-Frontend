import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaSuitcaseRolling,
  FaChevronCircleRight,
  FaGripLines,
  FaSearch,
} from 'react-icons/fa';
import { useLoginMutation } from '../api/authLog';

import './css/home.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      username,
      password,
    })
      .unwrap()
      .then(() => {
        navigate('/home');
      })
      .catch(() => {
      });
  };

  return (
    <div
      className="login-background"
      style={{
        backgroundImage: 'url(/login.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="menu-buttons">
        <FaGripLines />
      </div>
      <div>
        <h1>Reserve Your Dream Trip!</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              placeholder="Username"
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <br />
          <button className="myButton" type="submit">
            <FaSuitcaseRolling />
            <span>Log In</span>
            <FaChevronCircleRight />
          </button>
        </form>
      </div>
      <div className="menu-buttons2">
        <div className="glass">
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default Login;

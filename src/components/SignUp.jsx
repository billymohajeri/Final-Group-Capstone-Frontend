import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  // FaLock,
  FaGripLines,
  FaSearch,
  FaUserPlus,
  FaChevronCircleRight,
} from 'react-icons/fa';
// import { MdHotel } from 'react-icons/md';
import './css/signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { username, password } }),
      });

      if (response.ok) {
        console.log('Success');
        navigate('/');
      } else {
        setError('Error creating user');
      }
    } else {
      setError('Passwords do not match');
    }
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
      <form className="signupForm" onSubmit={handleSubmit}>
        {/* <MdHotel className="bed" /> */}
        <h2>Create a new account</h2>
        <div className="login__field">
          {/* <FaUser /> */}
          <input
            type="text"
            className="login__input"
            id="username"
            name="username"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="login__field">
          {/* <FaLock /> */}
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="login__input"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="login__field">
          {/* <FaLock /> */}
          <input
            type="password"
            className="login__input"
            value={passwordConfirmation}
            placeholder="Confirm password"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
        </div>
        <button className="myButton" type="submit">
          <FaUserPlus />
          Sign Up
          <FaChevronCircleRight />
        </button>
        {error && <div>{error}</div>}
      </form>
      <div className="menu-buttons2">
        <div className="glass">
          <FaSearch />
        </div>
      </div>
    </div>
  );
}

export default SignUp;

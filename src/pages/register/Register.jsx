import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../Config';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [passShow, setPassShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(`${API_URL}/auth/register`, {
        username,
        email,
        password,
      });
      res.data &&
        window.location.replace(`https://techzoid-blog.onrender.com/login`);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className='register-container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label for='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={() => setPassShow(!passShow)}>
            {!passShow ? (
              <i className='fa-regular fa-eye'></i>
            ) : (
              <i className='fa-regular fa-eye-slash'></i>
            )}
          </span>
        </div>
        <button className='btn btn-success' type='submit'>
          Register
        </button>
        {error && <span style={{ color: 'red' }}>Something went wrong</span>}
      </form>
      <Link to='/login' className='btn btn-dark login-button'>
        {' '}
        Login If existing user
      </Link>
    </div>
  );
}

export default Register;

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
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (username == '') {
      alert('Username must not be empty');
    } else if (username.length < 4) {
      alert('Username must be of at least 4 characters');
    } else if (email == '') {
      alert('Email must not be empty');
    } else if (!email.includes('@')) {
      alert('Not a Valid Email');
    } else if (password == '') {
      alert('Passsword must not be empty');
    } else if (!regex.test(password)) {
      alert(
        'Passsword must be at least 8 characters in length including a uppercase letter, a lowercase letter and a digit'
      );
    } else {
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
            data-bs-toggle='tooltip'
            data-bs-placement='bottom'
            title='Username must contain 4 characters'
          />
        </div>
        <div className='mb-3'>
          <label for='InputEmail' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='InputEmail'
            aria-describedby='emailHelp'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3 inputPassword'>
          <label for='InputPassword' className='form-label'>
            Password
          </label>
          <input
            type={!passShow ? 'password' : 'text'}
            className='form-control'
            id='InputPassword'
            onChange={(e) => setPassword(e.target.value)}
            data-bs-toggle='tooltip'
            data-bs-placement='bottom'
            title='Password must contain 8 characters including an UPPERCASE, a LOWERCASE and a NUMBER'
          />
          <span onClick={() => setPassShow(!passShow)} className='showPassword'>
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

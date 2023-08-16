import { useState, useContext, useRef } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';
import API_URL from '../../Config';

function Login() {
  const [passShow, setPassShow] = useState(false);
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            className='form-control'
            id='username'
            ref={userRef}
          />
        </div>
        <div className='mb-3 inputPassword'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            type={!passShow ? 'password' : 'text'}
            className='form-control'
            id='exampleInputPassword1'
            ref={passwordRef}
          />
          <span onClick={() => setPassShow(!passShow)} className='showPassword'>
            {!passShow ? (
              <i className='fa-regular fa-eye'></i>
            ) : (
              <i className='fa-regular fa-eye-slash'></i>
            )}
          </span>
        </div>
        <button
          type='submit'
          className='loginButton disabled-btn'
          disabled={isFetching}
        >
          Login
        </button>
      </form>
      <Link to='/register' className='btn btn-dark register-button'>
        {' '}
        Register If new user
      </Link>
    </div>
  );
}

export default Login;

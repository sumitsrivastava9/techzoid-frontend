import React from 'react';
import { Link } from 'react-router-dom';
// import ProfilePicture from '../../assets/profile-pic.png';
import '../navbar/navbar.css';
import { Context } from '../../context/Context';
import { useContext } from 'react';
import API_URL from '../../Config';

function NavBar() {
  const { user, dispatch } = useContext(Context);
  const PF = `${API_URL}/images/`;

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top navbar-custom'>
        <div className='container'>
          <div className='navbar-brand'>
            <a className='brand-link' href='/'>
              Techzoid
            </a>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse d-flex-row justify-content-evenly'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav'>
              <li className='navbar-item p-2'>
                <Link className='nav-link' id='hover-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' to='/write'>
                  Write
                </Link>
              </li>
              <li className='navbar-item p-2'>
                <Link className='nav-link' onClick={handleLogout}>
                  {user && 'Logout'}
                </Link>
              </li>
            </ul>
            <div>
              {user ? (
                <Link to='/settings'>
                  <img
                    src={PF + user.profilePic}
                    alt='The Author'
                    className='profilepicture mx-2'
                  />
                </Link>
              ) : (
                <>
                  <Link
                    className='text-white mx-2'
                    style={{ textDecoration: 'none', fontFamily: 'poppins' }}
                    to='/login'
                  >
                    Login
                  </Link>
                  <Link
                    className='text-white'
                    style={{ textDecoration: 'none', fontFamily: 'poppins' }}
                    to='/register'
                  >
                    Register
                  </Link>
                </>
              )}

              {/* <i className='fa-solid fa-magnifying-glass search-button mx-3'></i> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

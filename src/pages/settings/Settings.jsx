import React, { useContext, useState } from 'react';
import './settings.css';
// import profilePicture from '../../assets/profile-pic.png';
import { Context } from '../../context/Context';
import axios from 'axios';
import API_URL from '../../Config';

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = `${API_URL}/images/`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post(`${API_URL}/upload`, data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(`${API_URL}/users/` + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' });
    }
  };
  return (
    <div className='settings container'>
      <div className='settingsTitle'>
        <span className='settingsUpdateTitle'>Update Your Account</span>
      </div>
      <form className='settingsForm' onSubmit={handleSubmit}>
        <div className='profilePictureContainer'>
          <div className='settingsPP'>
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              className='profilePicture'
            />
          </div>
          <label htmlFor='fileInput' className='form-label'>
            <i className='settingsPPIcon fa-solid fa-user'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            className='form-control'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className='updateBox'>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input
              type='text'
              placeholder='rohan'
              className='form-control'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input
              type='email'
              placeholder='rohan@gmail.com'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input
              type='password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className='settingsSubmit btn btn-dark' type='submit'>
          Update
        </button>
        {success && (
          <span
            style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}
          >
            Profile has been updated...
          </span>
        )}

        <div className='settingsDeleteTitle text-center'>Delete Account</div>
      </form>
    </div>
  );
}

export default Settings;

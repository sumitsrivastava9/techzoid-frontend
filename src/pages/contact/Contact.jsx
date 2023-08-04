import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div className='container contact-container'>
      <div className='socialMedia'>
        <h2> Contact Author </h2>
        <div className='socialMediaIcon'>
          <a
            href='https://twitter.com/the__sumitverma'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            <i class='fa-brands fa-square-x-twitter contact-icon'></i>
          </a>
          <a
            href='https://www.instagram.com/sumit__srivastavaa/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-instagram contact-icon'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/sumit-kumar-009/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-brands fa-linkedin-in contact-icon'></i>
          </a>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sumit9verma999@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i class='fa-solid fa-envelope contact-icon'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

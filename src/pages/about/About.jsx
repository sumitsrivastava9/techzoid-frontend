import './about.css';
import React from 'react';
import dp from '../../assets/default.png';
import Footer from '../../components/footer/Footer';

function About() {
  return (
    <>
      <div className='aboutWrapperContainer'>
        <div className='aboutWrapper'>
          <div className='leftAboutWrapper'>
            <div className='dpWrapper'>
              <img src={dp} alt='' className='dp' />
            </div>
            <div className='profileInfo'>
              <div className='profileIntro'>
                <h2>Welcome to Techzoid</h2>
              </div>
              <div className='profileSubIntro'>
                <p>
                  <sup>
                    <i class='fa-solid fa-quote-left'></i>
                  </sup>{' '}
                  At TechZoid, we live and breathe technology. Our passion for
                  all things tech drives us to explore the ever-evolving world
                  of innovation, gadgets, software, and digital trends. Since
                  our inception, we have been committed to providing our readers
                  with the latest news, insightful articles, in-depth reviews,
                  and helpful guides to stay ahead in this fast-paced
                  technological landscape.{' '}
                  <sup>
                    <i class='fa-solid fa-quote-right'></i>
                  </sup>
                </p>
              </div>
              <div className='iconText'>
                Follow/Contact Us
                <i class='fa-solid fa-circle-arrow-down rightArrowIcon'></i>
              </div>
              <span className='profileIcons'>
                <a
                  href='https://twitter.com/the__sumitverma'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-square-x-twitter profile-icon'></i>
                </a>
                <a
                  href='https://www.instagram.com/sumit__srivastavaa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-instagram profile-icon'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/sumit-kumar-009/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-brands fa-linkedin-in profile-icon'></i>
                </a>
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sumit9verma999@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fa-solid fa-envelope profile-icon'></i>
                </a>
              </span>
            </div>
          </div>
          <div className='rightAboutWrapper container'>
            <h2 className='text-center'></h2>
            <div className='profileDesc'></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

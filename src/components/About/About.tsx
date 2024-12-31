import React, { useEffect } from 'react';
import './About.css';
import aboutimg from '../../assets/download.png';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='about'>
      <div className='container-fluid'>
        <div className='about container'>
          <div
            className='about-img'
            // data-aos='zoom-out-right'
          >
            <img
              src={aboutimg}
              alt=''
            />
          </div>
          <div
            className='about-text'
            data-aos='fade-left'
          >
            <h1>Sunrise Enterprises</h1>
            <strong>"Where Protection Meets Perfection."</strong>
            <br />
            <p>
              Your trusted partner for durable, customizable, and sustainable
              cardboard boxes—built to protect, designed to impress.Providing
              high-quality cardboard packaging solutions that protect products,
              promote brands, and prioritize the environment.
            </p>
            <button className='btn-explore'>Explore Products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

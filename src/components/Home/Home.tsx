import React, { useEffect } from 'react';
import './Home.css';
import Homeimg from '../../assets/waste-processing-factory_118813-24576-removebg.png';
import Aos from 'aos';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='home'>
      <div className='container-fluid'>
        <div className='home container'>
          <div className='home-text'>
            <h1 data-aos='fade-right'>
              Sunrise <strong>Packaging Solutions</strong> for a Sustainable
              Future
            </h1>
            <p data-aos='fade-right'>
              Reliable, eco-friendly solutions for all your cardboard needs.
              Simplify your operations while promoting sustainability.
            </p>
            <button
              className='btn-explore'
              data-aos='fade-right'
            >
              Explore Products
            </button>
          </div>
          <div
            className='image-container'
            data-aos='zoom-in-left'
          >
            <img
              src={Homeimg}
              alt='Sustainable Solutions'
              className='home-img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

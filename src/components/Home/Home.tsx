import React from 'react';
import './Home.css';
import Homeimg from '../../assets/waste-processing-factory_118813-24576-removebg.png';

const Home = () => {
  return (
    <section id='home'>
      <div className='container-fluid'>
        <div className='home container'>
          <div className='home-text'>
            <h1>
              Sunrise <strong>Cardboard Solutions</strong> for a Sustainable
              Future
            </h1>
            <p>
              Reliable, eco-friendly solutions for all your cardboard needs.
              Simplify your operations while promoting sustainability.
            </p>
            <button className='btn-explore'>Explore Solutions</button>
          </div>
          <div className='image-container'>
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

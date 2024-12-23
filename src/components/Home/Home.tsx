import React from 'react';
import './Home.css';
import Homeimg from '../../assets/waste-processing-factory_118813-24576-removebg.png';

const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
        <div className='home'>
          <div>
            <h1>Sunrise Cardboard Solutions for a Sustainable Future</h1>
            <p>
              Reliable, eco-friendly solutions for all your cardboard needs.
              Simplify your operations while promoting sustainability.
            </p>
          </div>
          <div>
            <img
              src={Homeimg}
              alt='Image'
              className='home-img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

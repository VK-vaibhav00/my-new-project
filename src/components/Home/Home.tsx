import { useEffect } from 'react';
import './Home.css';
import Homeimg from '../../assets/Home.png';
import Aos from 'aos';
import { Link } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='home'>
      <div className='homes container-fluid'>
        <div className='home container'>
          <div
            className='home-text'
            data-aos='fade-right'
          >
            <h1>SUNRISE PACKAGING SOLUTUIONS FOR A SUSTAINABLE FUTURE</h1>
            <p>
              Reliable, eco-friendly solutions for all your packaging needs.
              Simplify your operations while promoting sustainability.
            </p>
            <Link
              to='product'
              smooth={true}
              offset={-60}
              duration={500}
            >
              <button className='home-btn-explore'>Explore Products</button>
            </Link>
          </div>
          <div
            className='image-container'
            // data-aos='zoom-in-left'
          >
            <img
              src={Homeimg}
              alt='Sustainable Solutions'
              className='home-image'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

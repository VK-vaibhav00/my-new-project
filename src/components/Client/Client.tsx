import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import './Client.css';
import Leftarrow from '../../assets/LeftArrow.png';
import Rightarrow from '../../assets/ArrowGrey.png';
import client1 from '../../assets/large.png';
// import client2 from '../../assets/bajaj-logo-581A18EFC1-seeklogo.com.png';
// import client3 from '../../assets/5ef0a132e152b7b29311f6c7_Dominos-Pizza-600x600.png';
// import client4 from '../../assets/1024x1024.jpg';

import leftimg from '../../assets/doubleQuotes1.png';
import rightimg from '../../assets/doubleQuotes2.png';

const Client = () => {
  const slider = useRef<HTMLUListElement | null>(null);
  const [tx, setTx] = useState(0); // State for the translation

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const id = setInterval(() => {
      slideforward();
    }, 10000); // Auto-slide every 10 seconds

    return () => clearInterval(id);
  }, []);

  const slidebackward = () => {
    setTx((prevTx) => Math.min(prevTx + 25, 0)); // Move back one slide
  };

  const slideforward = () => {
    setTx((prevTx) => (prevTx > -66.66 ? prevTx - 25 : 0)); // Move forward one slide or reset
  };

  useEffect(() => {
    if (slider.current) {
      // Ensure slider.current is not null
      slider.current.style.transform = `translateX(${tx}%)`;
    }
  }, [tx]);

  return (
    <section id='client'>
      <div className='container-fluid clients'>
        <div className='container'>
          <div
            className='client-heading'
            data-aos='fade-up'
          >
            <h4>What our client says</h4>
            <h1>Clients Feedbacks</h1>
            <p>
              Our clients send us a bunch of smiles with our services and we
              love them.
            </p>
          </div>
          <div className='client-body'>
            <img
              src={Leftarrow}
              alt='Previous'
              className='back-btn'
              onClick={slidebackward}
            />
            <img
              src={Rightarrow}
              alt='Next'
              className='next-btn'
              onClick={slideforward}
            />
            <div className='slider'>
              <ul ref={slider}>
                <li>
                  <div className='slide'>
                    <div className='user-info'>
                      <img
                        src={client1}
                        alt='Client 1'
                      />
                      <div>
                        <h3>Mittal Metal Industries </h3>
                        {/* <span>Founder of iTechGenic Global Pte Limited</span> */}
                      </div>
                    </div>
                    <img
                      src={leftimg}
                      alt='Left Quote'
                      className='left-img'
                    />
                    <p>
                      The quality of cardboard boxes is excellent, and their
                      service is reliable and timely. They’ve been a crucial
                      partner in ensuring our products are packaged securely and
                      professionally. Highly recommended!
                    </p>
                    <img
                      src={rightimg}
                      alt='Right Quote'
                      className='right-img'
                    />
                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className='user-info'>
                      <img
                        src={client1}
                        alt='Client 2'
                      />
                      <div>
                        <h3>Mittal Metal Industries </h3>
                        {/* <span>Founder of Hexatic Tech Private Limited</span> */}
                      </div>
                    </div>
                    <img
                      src={leftimg}
                      alt='Left Quote'
                      className='left-img'
                    />
                    <p>
                      The quality of cardboard boxes is excellent, and their
                      service is reliable and timely. They’ve been a crucial
                      partner in ensuring our products are packaged securely and
                      professionally. Highly recommended!
                    </p>
                    <img
                      src={rightimg}
                      alt='Right Quote'
                      className='right-img'
                    />
                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className='user-info'>
                      <img
                        src={client1}
                        alt='Client 3'
                      />
                      <div>
                        <h3>Mittal Metal Industries</h3>
                        {/* <span>Founder of Keva Minds Consultancy</span> */}
                      </div>
                    </div>
                    <img
                      src={leftimg}
                      alt='Left Quote'
                      className='left-img'
                    />
                    <p>
                      The quality of cardboard boxes is excellent, and their
                      service is reliable and timely. They’ve been a crucial
                      partner in ensuring our products are packaged securely and
                      professionally. Highly recommended!
                    </p>
                    <img
                      src={rightimg}
                      alt='Right Quote'
                      className='right-img'
                    />
                  </div>
                </li>
                <li>
                  <div className='slide'>
                    <div className='user-info'>
                      <img
                        src={client1}
                        alt='Client 4'
                      />
                      <div>
                        <h3>Mittal Metal Industries</h3>
                        {/* <span>Head of Talent Acquisition at Appriffy</span> */}
                      </div>
                    </div>
                    <img
                      src={leftimg}
                      alt='Left Quote'
                      className='left-img'
                    />
                    <p>
                      The quality of cardboard boxes is excellent, and their
                      service is reliable and timely. They’ve been a crucial
                      partner in ensuring our products are packaged securely and
                      professionally. Highly recommended!
                    </p>
                    <img
                      src={rightimg}
                      alt='Right Quote'
                      className='right-img'
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;

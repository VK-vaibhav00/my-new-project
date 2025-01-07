import React, { useEffect } from 'react';
import './Services.css';
import img1 from '../../assets/Carboardboxes/Partition.png';
import img2 from '../../assets/Carboardboxes/corrugated.png';
import img3 from '../../assets/Carboardboxes/Sheets2.png';
import img4 from '../../assets/Carboardboxes/Heavy-duty.png';
import img5 from '../../assets/Carboardboxes/illustration-cargo_498740-30994-removebg-preview.png';
import img6 from '../../assets/Carboardboxes/Packeging.png';
import Aos from 'aos';

const cardsData = [
  {
    id: 1,
    title: 'Partition Boxes',
    description:
      'Partition boxes are containers that are divided into separate compartments or sections to organize and store items systematically.',
    image: img1,
  },
  {
    id: 2,
    title: 'Corrugated Boxes',
    description:
      'Corrugated boxes are durable, lightweight, and versatile packaging materials made from corrugated fiberboard.',
    image: img2,
  },
  {
    id: 3,
    title: 'Corrugated Sheets',
    description:
      'Corrugated sheets are strong, lightweight, and versatile materials made from corrugated fiberboard or corrugated plastic.',
    image: img3,
  },
  {
    id: 5,
    title: 'Laminated Boxes',
    description:
      'Laminated boxes are high-quality, durable packaging solutions designed to provide enhanced strength, protection, and an aesthetically appealing finish.',
    image: img5,
  },
  {
    id: 4,
    title: 'Heavy Duty Boxes',
    description:
      'Heavy-duty boxes are robust and durable packaging solutions designed to handle large, heavy, or bulky items.',
    image: img4,
  },
  {
    id: 6,
    title: 'Agricultural Boxes',
    description:
      'Agricultural packaging boxes are specially designed solutions for storing, transporting, and protecting agricultural produce such as fruits, vegetables, flowers, and other farm products.',
    image: img6,
  },
];

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id='product'>
      <div className='container-fluid'>
        <div className=' service container'>
          <p
            className='service-heading'
            data-aos='fade-down'
          >
            Our Products
          </p>
          <div className='service-container'>
            {cardsData.map((card) => (
              <div
                className='card'
                key={card.id}
              >
                <div
                  className='card-image'
                  data-aos='flip-left'
                >
                  <img
                    src={card.image}
                    alt={card.title}
                  />
                </div>
                <hr />
                <div className='card-content'>
                  <h3 className='card-title'>{card.title}</h3>
                  <p className='card-description'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

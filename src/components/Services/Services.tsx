import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Services.css';
import img1 from '../../assets/Regular Boxes.png';
import img2 from '../../assets/Jumbo box.png';
import img3 from '../../assets/Heavy Duty Boxes.png';
import img4 from '../../assets/paper-pallets-tray.png';
import img5 from '../../assets/wooden-pallet-.png';
import img6 from '../../assets/colorful box (2).jpg';
import Bgcol from '../../assets/6080984.jpg';

const Services = () => {
  const images=[ img1,img2,img3,img4,img5,img6];
  const setting={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className='container'>
        <div className='services'>
          <h1>Services</h1>
        </div>
      </div>
    </>
  );
};

export default Services;

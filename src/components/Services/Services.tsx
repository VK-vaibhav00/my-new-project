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
import Bgcol from '../../assets/rm222-mind-16.jpg';

const Services = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${Bgcol})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px" }}>
        <div className="services">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img src={image} alt={`Slide ${index + 1}`} style={{ maxWidth: "100%", height: "auto" }} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;

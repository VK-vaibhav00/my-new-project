import React from "react";
import './Services.css';
import { ImageSlider } from "./ImageSlider";
 import img1 from '../../assets/Regular Boxes.png';
 import img2 from '../../assets/Jumbo box.png';
 import img3 from '../../assets/Heavy Duty Boxes.png';
 import img4 from '../../assets/paper-pallets-tray.png';
 import img5 from '../../assets/wooden-pallet-.png';
 import img6 from '../../assets/colorful box (2).jpg';

const Services = () => {
 const IMAGES=[img2,img1,img3,img4,img5,img6]
    
 return( 
  <div className="container-fluid">
 <div className="services container">
  <div 
      style={{
      maxWidth: "769px",
      width: "100rem",
      
      aspectRatio: "10 /10",
      margin: "0 auto",
    }}
  >
  <ImageSlider imageUrls={IMAGES} />
  </div>
  </div>
  </div>
  
 )
};
export default  Services;
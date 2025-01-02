import React, { useState } from "react";
import "./Services.css";
 import img1 from '../../assets/Regular Boxes.png';
 import img2 from '../../assets/Jumbo box.png';
 import img3 from '../../assets/Heavy Duty Boxes.png';
 import img4 from '../../assets/paper-pallets-tray.png';
 import img5 from '../../assets/wooden-pallet-.png';
 import img6 from '../../assets/colorful box (2).jpg';

const Services = () => {
  // Array of image data
  const images = [
    {
      src: img1,
      title: "DESIGN SLIDER",
      topic: "Regular Boxes",
      description: "Hii this is regularboxes",
    },
    {
      src: img2,
      title: "DESIGN SLIDER",
      topic: "Jumbo Boxes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: img3,
      title: "DESIGN SLIDER",
      topic: "Heavy Duty Boxes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: img4,
      title: "DESIGN SLIDER",
      topic: "Paper-Pallets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: img5,
      title: "DESIGN SLIDER",
      topic: "Wooden-Pallets",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: img6,
      title: "DESIGN SLIDER",
      topic: "Colorful Boxes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  // State to manage the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container-fluid">
      <div className="services container">
        <div className="carousel">
          {/* Display the current image */}
          <div className="list">
            <div className="item">
              <img src={images[currentIndex].src} alt={images[currentIndex].title} />
              <div className="content">
                <div className="title">{images[currentIndex].title}</div>
                <div className="topic">{images[currentIndex].topic}</div>
                <div className="des">{images[currentIndex].description}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail List */}
          <div className="thumbnail">
            {images.map((image, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={image.src} alt={image.title} />
                <div className="content">
                  <div className="title">{image.title}</div>
                  <div className="description">{image.description}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows for navigation */}
          <div className="arrows">
            <button id="prev" onClick={prevSlide} aria-label="Previous slide">
              &lt;
            </button>
            <button id="next" onClick={nextSlide} aria-label="Next slide">
              &gt;
            </button>
          </div>
        </div>
      </div>
  );
};

export default Services;











// import React from "react";
// import './Services.css';
// import { ImageSlider } from "./ImageSlider";


// const Services = () => {
// //  const IMAGES=[img2,img1,img3,img4,img5,img6]
    
//  return( 
//   <div className="container-fluid">
//  <div className="services container">
//  <div class="carousel">
        
//         <div class="list">
//             <div class="item">
//                 <img src="image/img1.jpg">
//                 <div class="content">
//                     <div class="author">LUNDEV</div>
//                     <div class="title">DESIGN SLIDER</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         <!-- lorem 50 -->
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img2.jpg">
//                 <div class="content">
//                     <div class="author">LUNDEV</div>
//                     <div class="title">DESIGN SLIDER</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img3.jpg">
//                 <div class="content">
//                     <div class="author">LUNDEV</div>
//                     <div class="title">DESIGN SLIDER</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img4.jpg">
//                 <div class="content">
//                     <div class="author">LUNDEV</div>
//                     <div class="title">DESIGN SLIDER</div>
//                     <div class="topic">ANIMAL</div>
//                     <div class="des">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
//                     </div>
//                     <div class="buttons">
//                         <button>SEE MORE</button>
//                         <button>SUBSCRIBE</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <!-- list thumnail -->
//         <div class="thumbnail">
//             <div class="item">
//                 <img src="image/img1.jpg">
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img2.jpg">
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img3.jpg">
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//             <div class="item">
//                 <img src="image/img4.jpg">
//                 <div class="content">
//                     <div class="title">
//                         Name Slider
//                     </div>
//                     <div class="description">
//                         Description
//                     </div>
//                 </div>
//             </div>
//         </div>
     

//         <div class="arrows">
//             <button id="prev"><</button>
//             <button id="next">></button>
//         </div>
        
//         <div class="time"></div>
//     </div>
//   </div>
//   </div>
  
//  )
// };
// export default  Services;
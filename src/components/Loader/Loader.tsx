import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './Loader.css';
import Loaderanimation from '../../assets/Animation - 1735551528650.json';

const Loader = () => {
  const animationRef = useRef(null); // Create a reference for the DOM container

  useEffect(() => {
    if (animationRef.current) {
      const animationInstance = lottie.loadAnimation({
        container: animationRef.current, // DOM element for animation
        renderer: 'svg', // Renderer type
        loop: true,
        autoplay: true,
        animationData: Loaderanimation, // JSON animation data
      });

      animationInstance.setSpeed(1); // Set the speed of the animation

      return () => {
        animationInstance.destroy(); // Cleanup the animation instance
      };
    }
  }, []);

  return (
    <div className='loaders'>
      <div
        ref={animationRef}
        className='lottie-img'
      />
    </div>
  ); // Attach ref to the container div
};

export default Loader;

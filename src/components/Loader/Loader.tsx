import React, { useEffect, useRef } from "react";
import "./Loader.css";
import AOS from "aos";
import Lottie from "lottie-react";
import Loaderanimation from "../../assets/Animation - 1722518365398.json";

const Loader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      const animation = animationRef.current;
      animation.setSpeed(2); // Set the speed of the animation
    }
  }, []);

  return (
    <div className="loaders">
      <img src={infeonit} alt="" />
      <Lottie
        animationData={Loaderanimation}
        lottieRef={animationRef}
        className="lottie-img"
      />
     
     
    </div>
  );
};

export default Loader;

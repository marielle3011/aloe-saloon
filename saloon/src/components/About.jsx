import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Index.css';
import homepage1 from '../assets/homepage1.jpg';
import homepage2 from '../assets/homepage2.jpg';
import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirstImage(!showFirstImage);
      setShowSecondImage(!showSecondImage);
    }, 5000); // Swap images after 5 seconds

    return () => clearTimeout(timeout);
  }, [showFirstImage, showSecondImage]);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div className="relative">
      {/* Flip image */}
      <div className="flex items-center justify-center h-[800px] cursor-pointer relative z-10 ">
        <div className="flip-card w-[600px] h-[360px] rounded-md" onClick={handleFlip}>
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: 'normal' }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div
              className="flip-card-front w-[100%] bg-cover border-[1px] text-white rounded-lg p-4 h-[100%]"
              style={{ backgroundImage: `url(${isFlipped ? homepage2 : homepage1})` }}
            >
              <h1 className="text-2xl font-bold">Facial</h1>
            </div>
            <div
              className="flip-card-front w-[100%] bg-cover border-[1px] text-white rounded-lg p-4 h-[150%]"
              style={{ backgroundImage: `url(${isFlipped ? homepage1 : homepage2})` }}
            >
              <h1 className="text-2xl font-bold">Facial</h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other two images */}
      <div className="absolute top-0 left-0 w-full h-full" style={{ display: showFirstImage ? 'block' : 'none' }}>
        <img className="cover-1 w-full h-full object-cover" src={cover1} alt="Cover 1" />
      </div>
      <div className="absolute top-0 left-0  w-full h-full" style={{ display: showSecondImage ? 'block' : 'none' }}>
        <img className="cover-2 w-full h-full object-cover" src={cover2} alt="Cover 2" />
      </div>
      {/*Features offered*/}
    </div>
  );
};

export default About;

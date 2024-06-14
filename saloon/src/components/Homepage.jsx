// Homepage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import background from '../assets/background.mp4';
import elevate from '../assets/elevate.jpg';

const Homepage = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookNowClick = () => {
    setIsAnimating(true);
    navigate('/appointment'); // Navigate to the appointment page
  };

  return (
    <div className="relative w-full h-screen">
      <div className="background-video relative z-0 overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={background} type="video/mp4" />
        </video>
        <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 z-10">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#6B6B6B', color: '#fff' }}
            className="book-now px-5 py-3 text-white font-bold border border-black rounded-lg bg-transparent text-2xl"
            onClick={handleBookNowClick} // Use the navigation function
          >
            Book Now
          </motion.button>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img className="elevate" src={elevate} alt="elevate your happiness" />
      </div>
      <div className="flex justify-center mt-7">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#6B6B6B', color: '#fff' }}
          className="find-style-button px-5 py-3 text-black font-bold border border-black rounded-lg bg-transparent text-2xl"
          onClick={() => {}}
        >
          Find Your Style
        </motion.button>
        <br/>
      </div>
      
      <div className=" bottom-0 w-full bg-black py-25 text-white text-3xl text-center">
        <h1 className="text-3xl font-extrabold">ALOE</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="text-xl font-semibold"
        >
          Feel your best
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#333', color: '#fff' }}
          className="mt-4 px-5 py-3 text-white font-bold border-white rounded-lg border-8 bg-transparent text-2xl"
          onClick={() => {}}
        >
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default Homepage;

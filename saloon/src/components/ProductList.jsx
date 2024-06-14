import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { FiEye } from 'react-icons/fi';
import Signup from './Signup';
import item1 from '../assets/item1.jpg';
import item2 from '../assets/item2.jpeg';
import item3 from '../assets/item3.jpeg';
import item4 from '../assets/item4.jpeg';
import item5 from '../assets/item5.jpeg';
import item6 from '../assets/item6.jpeg';
import item7 from '../assets/item7.jpeg';
import item8 from '../assets/item8.jpg';

const ProductList = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const navigate = useNavigate();

  const toggleLoginBox = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  return (
    <div className="relative py-16 pl-20 bg-black text-white">
      <div className="container text-center">
        <div className="flex justify-end items-center pt-[-56] pr-4">
          <button 
            className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-4 px-6 rounded-lg"
            onClick={toggleLoginBox}
          >
            <AiOutlineShoppingCart className="text-xl" />
          </button>
        </div>

        <h3 className="text-white mb-2">Shop</h3>
        <h2 className="text-3xl w-full mb-2">Best Selling</h2>
        <div className="flex justify-center mb-10">
          <div className="bg-pink-400 w-20 h-1 rounded border-pink-400 flex justify-center"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-2 lg:mx-20">
          {[item1, item2, item3, item4, item5, item6, item7, item8].map((item, index) => (
            <div key={index} className="h-fit group">
              <div className="relative overflow-hidden">
                <img className="w-full" src={item} alt={`item${index + 1}`} />
                <div className="absolute w-full h-full transition-all flex items-center justify-center duration-300 top-0 hover:right-0 -right-40 bg-rose-950/10 opacity-0 hover:opacity-100">
                  <h2 className="text-2xl font-semibold text-pink-950">Shop</h2>
                  <button className="bg-white p-3 text-2xl absolute right-[20px] top-[20px] text-pink-400 hover:text-white hover:bg-pink-400">
                    <AiOutlineShoppingCart />
                  </button>
                  <button className="bg-white p-3 text-2xl absolute right-[20px] top-[80px] text-pink-400 hover:text-white hover:bg-pink-400">
                    <FiEye />
                  </button>
                  <button className="bg-white p-3 text-2xl absolute right-[20px] top-[140px] text-pink-400 hover:text-white hover:bg-pink-400">
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isLoginVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="w-full max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-lg relative">
            <button 
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleLoginBox}
            >
              <AiOutlineClose />
            </button>
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Login</h1>
            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2 text-white" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 text-black rounded-md" type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2 text-white" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 text-black rounded-md" type="password" id="password" placeholder="Enter your password" />
              </div>
              <div className="text-center">
                <input className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-md cursor-pointer hover:bg-green-700" type="submit" value="Login" />
              </div>
            </form>
            <div className="text-center mt-4">
              <button 
                className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-md cursor-pointer hover:bg-blue-700"
                onClick={() => navigate('/Signup')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

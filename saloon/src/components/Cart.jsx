import React from 'react'
import { motion } from 'framer-motion';
import hairstyle1 from '../assets/hairstyle1.jpg';
import '../Index.css';
import {useNavigate}from 'react-router-dom';
import hairstyle2 from '../assets/hairstyle2.jpg';
import hairstyle3 from '../assets/hairstyle3.jpg';
import hairstyle4 from '../assets/hairstyle4.jpg';
import hairstyle5 from '../assets/hairstyle5.jpg';
import hairstyle6 from '../assets/hairstyle6.jpg';
import hairstyle7 from '../assets/hairstyle7.jpg';
import hairstyle8 from '../assets/hairstyle8.jpg';
import hairstyle9 from '../assets/hairstyle9.jpg';
import hairstyle10 from '../assets/hairstyle10.jpg';
import hairstyle11 from '../assets/hairstyle11.jpg';
import Findyoursaloon from '../assets/Findyoursaloon.jpg';
import sal1 from '../assets/sal1.jpg';
import sal2 from '../assets/sal2.png';
import sal3 from '../assets/sal3.jpeg';
import sal4 from '../assets/sal4.jpeg';
import shop_products from '../assets/shop_products.mp4';
import ProductList from './ProductList';

const Cart = () => {
  const navigate=useNavigate();
  const handleLocateSaloon=()=>{
    window.location.href='https://www.toniguy.com/find-salon/';
  };
  return (
    <div className='bg-slate-gray-500'>
       <div className="blog">
        <img className="hairstyle1" src={hairstyle1} alt="Hairstyle1"></img>
        <img className="hairstyle2" src={hairstyle2} alt="Hairstyle2"></img>
        <img className="hairstyle3" src={hairstyle3} alt="Hairstyle2"></img>
        <img className="hairstyle4" src={hairstyle4} alt="Hairstyle4"></img>
        <img className="hairstyle5" src={hairstyle5} alt="hairstyle5"></img>
        <img className="hairstyle6" src={hairstyle6} alt="hairstyle6"></img>
        <img className="hairstyle7" src={hairstyle7} alt="hairstyle7"></img>
        <img className='hairstyle8' src={hairstyle8} alt="hairstyle8"></img>
        <img className='hairstyle9' src={hairstyle9} alt="hairstyle9"></img>
        <img className="hairstyle10" src={hairstyle10} alt="hairstyle10"></img>
        <img className="hairstyle11" src={hairstyle11} alt="hairstyle11"></img>
        <img className="Find" src={Findyoursaloon} alt="find"></img>
       </div>
       <div className="button-locate">
       <div className="flex justify-center mt-8">
        <button onClick={handleLocateSaloon} className="bg-gray-600 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-gray-800 hover:text-gray-100 hover-underline">
          Locate Your Nearest Saloon
        </button>
        </div>
      </div>
      {/*Add the about page contents over here*/}
      <div className="mt-12 bg-slate-900 w-full h-full text-white">
           <h2 className='head1 justify-center align-middle items-center'>We are collaborated with the top saloons</h2>
           <br/>
           <br/>
           <br/>
          <div className='grid grid-cols-3 gap-2 mx-20'>
               <div className='h-fit group'>
                  <div className='relative overflow-hidden'>
                      <img className=' w-full' src={sal1} alt="item1" />
                  </div>
          </div>
                 <div className='h-fit group'>
                        <div className='relative overflow-hidden'>
                             <img className=' w-full' src={sal2} alt="item2" />
                        </div>
                  </div>
                 <div className='h-fit group'>
                       <div className='relative overflow-hidden'>
                                <img className='w-full' src={sal3} alt="item3" />
                        </div>
                   </div>
                   <br/>
                   <br/>
                 </div>
        </div>
    </div>
  )
}

export default Cart

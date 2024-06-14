import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';
import sal_icon from '../assets/sal_icon.jpg'
import '../Index.css'
import ProductList from './ProductList';

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setClick(false);
  };

  return (
    <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4"> {/* Adjusted z-index here */}
      <div className="flex items-center flex-1">
        <span className="text-1xl font-bold cursor-pointer" onClick={scrollToTop}>
          <img src={sal_icon} alt="LOGO"></img>
        </span>
        {/* Responsive Menu Toggler */}
        <div className="lg:hidden md:hidden ml-auto">
          <button className="block sm:hidden" onClick={handleClick}>
            {click ? <FaTimes /> : <AiOutlineMenu />}
          </button>
        </div>
        {/* Responsive Menu */}
        {click && (
          <div className="lg:hidden absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-50"> {/* Adjusted z-index here */}
            <ul className="text-center text-xl p-20">
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link onClick={scrollToTop} to="/">Home</Link>
              </li>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link onClick={scrollToTop} to="/about">About</Link>
              </li>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link onClick={scrollToTop} to="/cart">Services</Link>
              </li>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link onClick={scrollToTop} to="/ProductList">Shop</Link>
              </li>
              <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                <Link onClick={scrollToTop} to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
        {/* Desktop Menu */}
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link onClick={scrollToTop} to="/">Home</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link onClick={scrollToTop} to="/about">About</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link onClick={scrollToTop} to="/cart">Services</Link>
            </li>
            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link onClick={scrollToTop} to="/ProductList">Shop</Link>
            </li>

            <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
              <Link onClick={scrollToTop} to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

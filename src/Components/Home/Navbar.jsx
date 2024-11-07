// ./components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-[#fcf9ea] text-black h-[80px] p-4 rounded-xl flex justify-between items-center px-10">
      <img src="https://riyawansilver.com/wp-content/uploads/2023/04/logo-1.png" className='ml-3 object-cover h-[90px]' alt="" />
      <div className="flex space-x-6 items-center w-[67%] justify-between">
        <div className='flex items-center gap-10'>
          <Link
            to="/"
            className={`text-xl font-poppins px-4 py-1 rounded-full ${
              activeLink === '/' ? 'bg-[#1B5C40] text-white' : ''
            }`}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-xl font-poppins px-4 py-1 rounded-full ${
              activeLink === '/products' ? 'bg-[#1B5C40] text-white' : ''
            }`}
            onClick={() => handleLinkClick('/products')}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-xl font-poppins px-4 py-1 rounded-full ${
              activeLink === '/about' ? 'bg-[#1B5C40] text-white' : 'text-xl font-poppins'
            }`}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className={`text-xl font-poppins px-4 py-1 rounded-full  ${
              activeLink === '/blogs' ? 'bg-[#1B5C40] text-white' : 'text-xl font-poppins'
            }`}
            onClick={() => handleLinkClick('/blogs')}
          >
            Blogs
          </Link>
          <Link
            to="/videos"
            className={`text-xl font-poppins flex items-center px-4 py-1 rounded-full justify-center ${
              activeLink === '/videos' ? 'bg-[#1B5C40] text-white' : 'text-xl font-poppins'
            }`}
            onClick={() => handleLinkClick('/videos')}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              style={{ color: "#ff111" }}
            /> Videos
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="rounded-full text-xl bg-[#1B5C40] font-poppins text-white px-5 py-1">
            <i className="ri-shopping-cart-2-fill"></i> Cart
          </button>
          <Link to="/login" className="text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white">
            <i className="ri-user-fill"></i> Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

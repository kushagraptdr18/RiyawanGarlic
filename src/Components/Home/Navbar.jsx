// ./components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#034C2C] text-white h-[130px] p-4 flex justify-between items-center">
      <img src="https://riyawansilver.com/wp-content/uploads/2023/04/logo-1.png" className='ml-3 object-cover h-[100px]' alt="" />
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-2xl">Home</Link>
        <Link to="/products" className="text-2xl">Products</Link>
        <Link to="/about" className="text-2xl">About</Link>
        <Link to="/blogs" className="text-2xl">Blogs</Link>
        <Link to="/videos" className="text-2xl flex items-center justify-center">
          <i className="ri-youtube-fill"></i> Videos
        </Link>
        <button className='rounded-md text-2xl'>
          <i className="ri-shopping-cart-2-fill"></i> Cart
        </button>
        <Link to="/login" className="text-2xl rounded-md">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

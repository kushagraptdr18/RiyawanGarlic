// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProducts from './Components/AllProducts';
import AllBlogs from './Components/AllBlogs';
import AllVideos from './Components/AllVideos';
import Login from './Components/Login';
import Home from "./Components/Home/Home"
import About from './Components/About';
import ProductDetails from './Components/ProductDetails';
import PlaceOrder from './Components/PlaceOrder';


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/videos" element={<AllVideos />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/place-order/:id" element={<PlaceOrder />} />
      </Routes>
    
  );
}

export default App;

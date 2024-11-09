import React, { useEffect, useState } from 'react';
import Navbar from "./Home/Navbar";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "./utils/axiosInstance";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/product");
        // console.log(response);
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/product/252/image"
        );
        console.log(response);

        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
  }, []);

  // Function to handle add to cart
  const handleAddToCart = async (product) => {
    try {
      await axios.post('https://fakestoreapi.com/cart', { productId: product.id });
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img
                src={`http://localhost:8080/api/product/${product.id}/image`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">${product.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the navigate event
                      navigate(`/place-order/${product.id}`);
                    }}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the navigate event
                      handleAddToCart(product);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

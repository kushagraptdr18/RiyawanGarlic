// ./components/Products.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Fetch products from a fake API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products'); // Replace with your API
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to change the index for cycling through products
  const nextProducts = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      return nextIndex < products.length ? nextIndex : 0; // Reset to 0 if out of bounds
    });
  };

  // Set an interval to change products every few seconds
  useEffect(() => {
    if (products.length > 0) { // Check if products are loaded
      const interval = setInterval(nextProducts, 7000); // Change products every 7 seconds
      return () => clearInterval(interval);
    }
  }, [products]);

  // Get the current set of three products to display
  const displayedProducts = products.slice(currentIndex, currentIndex + 3);

  return (
    <section
      id="products"
      className="py-12 bg-zinc-100 flex flex-col gap-5 items-center"
    >
      <h2 className="text-5xl font-bold text-center mb-8 text-black">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-center mb-6">{product.title}</h3>
            <div className="flex justify-between mt-auto">
              <button className="px-4 py-2 bg-[#1B5C40] text-bold rounded-full text-white">Buy Now</button>
              <button className="px-4 py-2 bg-[#1B5C40] text-bold rounded-full text-white">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {/* Loop back to the beginning if there are fewer than 3 products left */}
      {currentIndex + 3 >= products.length && products.length > 0 && (
        <div className="text-center mt-4 text-gray-600">
          <p>Refreshing to the first product set...</p>
        </div>
      )}

      <button className="border border-white bg-[#034C2C] text-white text-2xl px-4 py-2 rounded-full mt-10 mb-10 w-[250px]">
        View All Products <i className="ri-arrow-right-line"></i>
      </button>
    </section>
  );
}

export default Products;

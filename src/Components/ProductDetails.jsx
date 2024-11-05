import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Home/Navbar"; // Adjust path as necessary
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    const fetchRelatedProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setRelatedProducts(response.data.slice(0, 4)); // Limit to 4 related products for simplicity
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchProductDetails();
    fetchRelatedProducts();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto py-4 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {/* Left Column: Product Image */}
          <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
            <img src={product.image} alt={product.title} className="h-80 object-cover rounded-md" />
          </div>

          {/* Right Column: Product Details */}
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <p className="text-xl font-semibold mb-4">${product.price}</p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition">
                Buy Now
              </button>
              <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
                <img src={relatedProduct.image} alt={relatedProduct.title} className="h-32 object-cover mb-2 rounded" />
                <h3 className="text-sm font-medium text-center">{relatedProduct.title}</h3>
                <p className="text-gray-600 text-sm">${relatedProduct.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

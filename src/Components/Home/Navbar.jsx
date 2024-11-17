import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleCartClick = () => {
    if (isAuthenticated) {
      navigate("/cart"); // If authenticated, navigate to the cart page
    } else {
      alert("Please log in to access the cart.");
    }
  };

  return (
    <nav className="bg-[#fcf9ea] text-black h-[80px] p-4 rounded-xl flex justify-between items-center px-10 relative">
      <img
        src="https://riyawansilver.com/wp-content/uploads/2023/04/logo-1.png"
        className="ml-3 object-cover h-[90px] sm:h-[80px]"
        alt="Logo"
      />
      <div className="hidden sm:flex items-center gap-6 md:gap-5">
        <Link
          to="/"
          className={`text-base md:text-xl font-poppins px-4 py-1 rounded-full ${
            activeLink === "/" ? "bg-[#1B5C40] text-white" : ""
          }`}
          onClick={() => handleLinkClick("/")}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`text-base md:text-xl font-poppins px-4 py-1 rounded-full ${
            activeLink === "/products" ? "bg-[#1B5C40] text-white" : ""
          }`}
          onClick={() => handleLinkClick("/products")}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={`text-base md:text-xl font-poppins px-4 py-1 rounded-full ${
            activeLink === "/about" ? "bg-[#1B5C40] text-white" : ""
          }`}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </Link>
        <Link
          to="/blogs"
          className={`text-base md:text-xl font-poppins px-4 py-1 rounded-full ${
            activeLink === "/blogs" ? "bg-[#1B5C40] text-white" : ""
          }`}
          onClick={() => handleLinkClick("/blogs")}
        >
          Blogs
        </Link>
        <Link
          to="/videos"
          className={`text-base md:text-xl font-poppins flex items-center px-4 py-1 rounded-full justify-center ${
            activeLink === "/videos" ? "bg-[#1B5C40] text-white" : ""
          }`}
          onClick={() => handleLinkClick("/videos")}
        >
          <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#ff111" }} /> Videos
        </Link>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={handleCartClick} // Handle cart click
          className="rounded-full text-sm sm:text-xl bg-[#1B5C40] font-poppins text-white px-5 py-1"
        >
          <i className="ri-shopping-cart-2-fill"></i> Cart
        </button>
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
          >
            <i className="ri-logout-box-r-line"></i> Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
          >
            <i className="ri-user-fill"></i> Login
          </Link>
        )}
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="sm:hidden text-2xl text-[#1B5C40] focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="ri-menu-3-line"></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[80px] left-0 w-full bg-[#fcf9ea] z-10 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/products")}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
            <Link
              to="/blogs"
              className="text-lg font-poppins px-4 py-1 rounded-full"
              onClick={() => handleLinkClick("/blogs")}
            >
              Blogs
            </Link>
            <Link
              to="/videos"
              className="text-lg font-poppins flex items-center px-4 py-1 rounded-full justify-center"
              onClick={() => handleLinkClick("/videos")}
            >
              <FontAwesomeIcon icon={faYoutube} size="xl" style={{ color: "#ff111" }} /> Videos
            </Link>
            <div className="mt-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
                >
                  <i className="ri-logout-box-r-line"></i> Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-sm sm:text-xl rounded-full px-5 py-1 font-poppins bg-[#1B5C40] text-white"
                >
                  <i className="ri-user-fill"></i> Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

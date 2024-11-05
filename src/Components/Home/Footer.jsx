// ./components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai'; // Import email icon
import { BiPhone, BiMapPin } from 'react-icons/bi'; // Import phone and location icons

function Footer() {
  return (
    <footer className="bg-[#034C2C] text-white pt-10 h-fit">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Logo and Description */}
        <div className="flex flex-col items-center">
          <img src="https://riyawansilver.com/wp-content/uploads/2023/04/logo-1.png" className='object-cover h-[80px]' alt="Rizwan Silver Garlic Logo" />
          <p className="text-[20px] w-[70%]">
          Founder of Riyawan Silver Garlic brand. We work as non profit organization that helps farmers at every step to grow a best product. We help them sowing to selling there products.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-5 ">
          <h3 className="text-4xl font-bold mb-2 ">Useful Links</h3>
          <ul className='flex flex-col gap-3'>
            <li><a href="#products" className="text-2xl hover:underline">Products</a></li>
            <li><a href="#blogs" className="text-2xl hover:underline">Blogs</a></li>
            <li><a href="#videos" className="text-2xl hover:underline">Videos</a></li>
            <li><a href="#contact" className="text-2xl hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className=" info flex flex-col gap-5">
          <h3 className="text-3xl font-bold mb-2">Contact Us</h3>
          <p className='text-1xl flex items-center'>
            <BiMapPin className="mr-2" /> 
            <a href="https://www.google.com/maps/place/%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8+%E0%A4%B8%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B5%E0%A4%B0+%E0%A4%97%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B2%E0%A4%BF%E0%A4%95(%E0%A4%B2%E0%A4%B9%E0%A4%B8%E0%A5%81%E0%A4%A8)+%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%A8/@23.72621,74.990677,18z/data=!4m6!3m5!1s0x39641fff6d6cd225:0xdfedcdb691406af3!8m2!3d23.725893!4d74.9904029!16s%2Fg%2F11f6l7spk7?hl=hi&shorturl=1" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Riyawan,Tehsil-Piploda,Dist.Ratlam(M.P)
            </a>
          </p>
          <p className='text-1xl flex items-center'>
            <BiPhone className="mr-2" />
            <a href="tel:+11234567890" className="hover:underline">
              +91 89895 93423
            </a>
          </p>
          <p className='text-1xl flex items-center'>
            <AiOutlineMail className="mr-2" />
            <a href="mailto:info@rizwansilvergarlic.com" className="hover:underline">
              kapildhakad1@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/kapil.dhakad143?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full">
              <FaFacebook className="h-6 w-6 text-[#ABBA7C]" />
            </a>
            <a href="https://www.instagram.com/krishijankar/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full">
              <FaInstagram className="h-6 w-6 text-[#ABBA7C]" />
            </a>
            <a href="https://x.com/Kapildhakad8?t=i1XLtkxYxP2-Sd-jJUTa7A&s=09&mx=2" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full">
              <FaTwitter className="h-6 w-6 text-[#ABBA7C]" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full">
              <FaLinkedin className="h-6 w-6 text-[#ABBA7C]" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10 py-4 bg-green-800">
        <p>&copy; {new Date().getFullYear()} Rizwan Silver Garlic. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

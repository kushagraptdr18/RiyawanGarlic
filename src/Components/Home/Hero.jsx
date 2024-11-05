// ./components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className=" bg-zinc-100 bg-cover bg-center h-[674px] flex flex-col items-center justify-center p-20  text-black">
      
      <div className=" h-fit w-[90%] bg-black bg-opacity-20 p-20 rounded flex items-center justify-between ">
       
       <div className='flex flex-col'>
       <h2 className="text-6xl font-bold mb-4">Welcome to Garlic <br /><span>World</span></h2>
        <p className="text-2xl ">Best Quality Riyawan Silver Garlic</p>
        <button className='border border-black bg-transparent text-black px-4 py-2 rounded-full mt-6 w-[150px] '>Contact Us</button>
       </div>

       <img className='h-[220px]' src="https://pngimg.com/uploads/garlic/garlic_PNG12791.png" alt="" />


      </div>

        <button className='border border-black bg-[#034C2C] text-white text-2xl px-4 py-2 rounded-full mt-16 w-[250px] '><a href="#products">Explore More </a><i class="ri-arrow-down-line"></i> </button>

      
    </section>
  );
}

export default Hero;

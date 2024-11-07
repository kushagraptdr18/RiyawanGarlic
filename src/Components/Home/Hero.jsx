// ./components/Hero.js
import React from 'react';
// import garlicVideo from '../assets/vedios/garlicVedio.mp4';
function Hero() {
  return (
    <section className="bg-cover bg-center h-[700px] mt-4  rounded-2xl bg-blue-200 w-fit ml-36 flex flex-col items-center justify-center relative  text-white">
      
     
       <div className='flex flex-col absolute left-[4%] '>
       <h2 className="text-6xl font-bold mb-4 ">Welcome to Riyawan Silver </h2>
        <p className="text-5xl ">WE'LL DELIVER <br /> EVERY GARLIC <br /> YOU NEED</p>
        <button className='  text-xl text-white bg-[#1B5C40] px-4 py-2 rounded-full mt-6 w-[150px] '>Contact Us</button>
       </div>

   
      <video className='h-[100%] w-[100%] rounded-2xl ' muted loop autoPlay src="src/assets/vedios/garlicVedio.mp4"  />



        {/* <button className='border border-black bg-[#034C2C] text-white text-2xl px-4 py-2 rounded-full mt-16 w-[250px] '><a href="#products">Explore More </a><i class="ri-arrow-down-line"></i> </button> */}

      
    </section>
  );
}

export default Hero;

// ./components/Hero.js
import React from 'react';

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[700px] mt-4 rounded-2xl bg-blue-200 w-full flex flex-col items-center justify-center text-white">
      
      <div className='absolute left-4 sm:left-8 md:left-16 lg:left-[4%] max-w-full '>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to Riyawan Silver</h2>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          WE'LL DELIVER <br />
          EVERY GARLIC <br />
          YOU NEED
        </p>
       
       <button className='text-xl sm:text-2xl bg-[#1B5C40] px-4 py-2 rounded-full mt-6 w-[150px] sm:w-[200px]'>
          Contact Us
        </button>
       
      </div>

      <video 
        className='h-full w-full rounded-2xl object-cover' 
        muted 
        loop 
        autoPlay 
        src="src/assets/vedios/garlicVedio.mp4" 
      />
    </section>
  );
}

export default Hero;

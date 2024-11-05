// ./components/Videos.js
import React from 'react';

const videos = [
  {
    id: 1,
    title: "How to Grow Garlic",
    url: "https://www.youtube.com/embed/qygHljE3p3E?si=y-1PUqzMM41WbTsK", // Replace with actual YouTube video URL
    description: "Learn the best techniques for growing garlic in your garden."
  },
  {
    id: 2,
    title: "Health Benefits of Garlic",
    url: "https://www.youtube.com/embed/E1sXxthVO_4?si=bnsn4PLPRvoERSli", // Replace with actual YouTube video URL
    description: "Discover the amazing health benefits that garlic offers."
  },
  {
    id: 3,
    title: "Garlic Recipes to Try",
    url: "https://www.youtube.com/embed/Y_syCWXUanM?si=mRwY39Z7CGxldhHQ", // Replace with actual YouTube video URL
    description: "Try these delicious recipes that feature garlic as a main ingredient."
  }
];

function Videos() {
  return (
    <section id='videos' className="py-12 bg-zinc-100 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center mb-8 text-black">Our Videos</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold p-4">{video.title}</h3>
            <iframe
              className="w-full h-48"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="p-4 text-gray-700">{video.description}</p>
          </div>
        ))}
      </div>

      <button className='border border-white bg-[#034C2C] text-white text-2xl px-4 py-2 rounded-full mt-10  mb-10 w-[250px] '>View More <i class="ri-arrow-right-line"></i> </button>

    </section>
  );
}

export default Videos;

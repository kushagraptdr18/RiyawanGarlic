import React from 'react'
import Navbar from './Home/Navbar';

const AllBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "लहसुन के फायदे और उपयोग",
      content: "लहसुन को आयुर्वेद में औषधीय गुणों के लिए जाना जाता है। यह हमारे स्वास्थ्य के लिए अत्यंत लाभकारी है।",
      image: "https://wallpaperaccess.com/full/3601266.jpg"
    },
    {
      id: 2,
      title: "लहसुन खाने के स्वास्थ्य लाभ",
      content: "लहसुन खाने से हृदय को मजबूती मिलती है और यह ब्लड प्रेशर को नियंत्रित करता है।",
      image: "https://wallpapercave.com/wp/wp2443236.jpg"
    },
    {
      id: 3,
      title: "लहसुन का सेवन कैसे करें?",
      content: "लहसुन को कई तरह से खाया जा सकता है, जैसे कच्चा, पका हुआ, या सलाद में।",
      image: "https://tse3.mm.bing.net/th?id=OIP.ThpVdCJIsTfX5ZWbloJfmAHaFK&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      title: "लहसुन के त्वचा और बालों के लिए लाभ",
      content: "लहसुन में एंटीऑक्सीडेंट होते हैं जो त्वचा को चमकदार और बालों को मजबूत बनाते हैं।",
      image: "https://tse3.mm.bing.net/th?id=OIP.XZhnu3pZWKccWaTu_5faqAHaE6&pid=Api&P=0&h=180"
    },
   
  ];



  return (
    <section id="blogs" className=" bg-zinc-100 pb-20">
      <Navbar></Navbar>
      <h2 className="text-5xl font-bold text-center mb-8 mt-8 text-black">Our Blogs</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-600">{blog.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllBlogs

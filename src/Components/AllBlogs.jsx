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
    {
      id: 5,
      title: "लहसुन से रोग प्रतिरोधक क्षमता में सुधार",
      content: "लहसुन के नियमित सेवन से इम्यून सिस्टम मजबूत होता है।",
      image: "https://tse3.mm.bing.net/th?id=OIP.a3VX9S27i1EhK1l8ktwI-QHaEK&pid=Api&P=0"
    },
    {
      id: 6,
      title: "लहसुन का तेल और उसके उपयोग",
      content: "लहसुन का तेल बालों और त्वचा के लिए फायदेमंद होता है।",
      image: "https://tse1.mm.bing.net/th?id=OIP.bGFHx4FwNsXZC7GACUHoJgHaEK&pid=Api&P=0"
    },
    {
      id: 7,
      title: "लहसुन और सर्दी-जुकाम",
      content: "सर्दी और जुकाम के इलाज में लहसुन एक प्रमुख औषधि है।",
      image: "https://tse1.mm.bing.net/th?id=OIP.DUNlS8ybk6fMEoeH3-Mh6wHaHa&pid=Api&P=0"
    },
    {
      id: 8,
      title: "लहसुन और मधुमेह का उपचार",
      content: "मधुमेह के उपचार में लहसुन का उपयोग सहायक हो सकता है।",
      image: "https://tse3.mm.bing.net/th?id=OIP.Nq0-TnEoFV7NRPeWeAzm7QHaE8&pid=Api&P=0"
    },
    {
      id: 9,
      title: "लहसुन और रक्त संचार",
      content: "लहसुन के सेवन से रक्त संचार बेहतर होता है।",
      image: "https://tse4.mm.bing.net/th?id=OIP.mY4R-NhsgTeBmE3fxeupUgHaEK&pid=Api&P=0"
    },
    {
      id: 10,
      title: "लहसुन के एंटीबैक्टीरियल गुण",
      content: "लहसुन में प्राकृतिक एंटीबैक्टीरियल गुण होते हैं।",
      image: "https://tse1.mm.bing.net/th?id=OIP.9Z_gvR6DkZ_FmGPZm5gQ8gHaE8&pid=Api&P=0"
    }
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

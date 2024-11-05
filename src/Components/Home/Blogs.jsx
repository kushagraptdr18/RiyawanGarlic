// ./components/Blogs.js
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "लहसुन के फायदे और उपयोग",
    content: "लहसुन को आयुर्वेद में औषधीय गुणों के लिए जाना जाता है। यह हमारे स्वास्थ्य के लिए अत्यंत लाभकारी है और विभिन्न रोगों से बचाने में मदद करता है। इसमें एंटीबैक्टीरियल और एंटीफंगल गुण होते हैं जो इम्यूनिटी को बढ़ाते हैं।",
    image: "https://wallpaperaccess.com/full/3601266.jpg" // Replace with actual garlic image URL
  },
  {
    id: 2,
    title: "लहसुन खाने के स्वास्थ्य लाभ",
    content: "लहसुन खाने से हृदय को मजबूती मिलती है और यह ब्लड प्रेशर को नियंत्रित करता है। साथ ही, यह कोलेस्ट्रॉल के स्तर को भी कम करता है। रोजाना लहसुन का सेवन शरीर को कई रोगों से बचाने में सहायक होता है।",
    image: "https://wallpapercave.com/wp/wp2443236.jpg" // Replace with actual garlic image URL
  },
  {
    id: 3,
    title: "लहसुन का सेवन कैसे करें?",
    content: "लहसुन को कई तरह से खाया जा सकता है, जैसे कच्चा, पका हुआ, या सलाद में। कच्चा लहसुन खाने से अधिक लाभ मिलता है। अगर आप लहसुन का तीखा स्वाद पसंद नहीं करते तो उसे दूध या पानी के साथ भी लिया जा सकता है।",
    image: "https://tse3.mm.bing.net/th?id=OIP.ThpVdCJIsTfX5ZWbloJfmAHaFK&pid=Api&P=0&h=180" // Replace with actual garlic image URL
  },
  {
    id: 4,
    title: "लहसुन के त्वचा और बालों के लिए लाभ",
    content: "लहसुन न केवल स्वास्थ्य बल्कि त्वचा और बालों के लिए भी लाभकारी है। इसमें एंटीऑक्सीडेंट होते हैं जो त्वचा को चमकदार और बालों को मजबूत बनाते हैं। लहसुन का तेल बालों में लगाने से बालों का झड़ना कम होता है।",
    image: "https://tse3.mm.bing.net/th?id=OIP.XZhnu3pZWKccWaTu_5faqAHaE6&pid=Api&P=0&h=180" // Replace with actual garlic image URL
  }
];

function Blogs() {
  return (
    <section id="blogs" className="py-12 bg-zinc-100 pb-20">
      <h2 className="text-5xl font-bold text-center mb-8 text-black">Our Blogs</h2>
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

export default Blogs;

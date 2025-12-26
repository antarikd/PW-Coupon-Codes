
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogs: React.FC = () => {
  useEffect(() => {
    document.title = "PW Coupons Blog – Latest Preparation Tips & Discounts";
  }, []);

  const posts = [
    { id: 1, title: "How to apply PW Coupon Code in 2026", desc: "Step by step guide to get maximum discount on your PW batches.", date: "Oct 12, 2025" },
    { id: 2, title: "JEE 2026 Strategy with PW Lakshya", desc: "How to use PW resources effectively to crack IIT JEE in your first attempt.", date: "Oct 10, 2025" },
    { id: 3, title: "Best NEET Batches in Physics Wallah", desc: "Comparison of Yakeen, Lakshya and Arjuna NEET batches for 2026 aspirants.", date: "Oct 08, 2025" },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pw-dark mb-4">Educational Blogs & Updates</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Stay updated with the latest news from Physics Wallah and get prep tips from toppers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col">
            <div className="h-48 bg-pw-dark/10 relative overflow-hidden">
               <img 
                src="pw-banner.jpg" 
                alt={post.title} 
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/400/300?random=${post.id}`;
                }}
              />
              <div className="absolute top-4 left-4 bg-pw-yellow text-pw-dark text-xs font-bold px-2 py-1 rounded">2026 UPDATE</div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="text-gray-400 text-xs mb-2">{post.date}</span>
              <h2 className="text-xl font-bold text-pw-dark mb-3 leading-tight">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{post.desc}</p>
              <Link to="/" className="text-pw-dark font-bold text-sm hover:text-pw-yellow transition flex items-center">
                Read More 
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

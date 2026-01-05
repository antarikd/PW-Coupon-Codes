import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BANNER_IMAGE = "https://png.pngtree.com/background/20250120/original/pngtree-best-platforms-for-digital-education-and-e-learning-picture-image_15918449.jpg";

const Blogs: React.FC = () => {
  useEffect(() => {
    document.title = "PW Coupons Blog – Latest Preparation Tips & Discounts";
  }, []);

  const posts = [
    { id: 1, title: "How to apply PW Coupon Code in 2026", desc: "Step by step guide to get maximum discount on your PW batches.", date: "Oct 12, 2025", path: "/how-to-apply-pw-coupon-code-2026" },
    { id: 2, title: "The PW Revolution in Indian Education", desc: "How Alakh Pandey turned a vision into a movement for millions of students.", date: "Oct 11, 2025", path: "/physics-wallah-revolution-indian-education" },
    { id: 3, title: "NEET vs JEE: Which Exam Should You Choose?", desc: "A detailed 2026 comparison of syllabus, difficulty, and career scope.", date: "Oct 10, 2025", path: "/neet-vs-jee-2026-comparison-guide" },
    { id: 4, title: "PW SAT 2026: Details, Syllabus & Registration", desc: "Complete guide to the Physics Wallah Scholarship Admission Test for 2026.", date: "Oct 09, 2025", path: "/pw-sat-scholarship-test-2026" },
    { id: 5, title: "JEE 2026 Strategy with PW Lakshya", desc: "How to use PW resources effectively to crack IIT JEE in your first attempt.", date: "Oct 08, 2025", path: "/jee-2026-strategy-pw-lakshya" },
    { id: 6, title: "Best NEET Batches in Physics Wallah", desc: "Comparison of Yakeen, Lakshya and Arjuna NEET batches for 2026 aspirants.", date: "Oct 07, 2025", path: "/best-neet-batches-physics-wallah-2026" },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pw-dark mb-4 tracking-tighter italic">Educational Blogs & Updates</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Stay updated with the latest news from Physics Wallah and get prep tips from toppers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition flex flex-col group">
            <div className="h-48 bg-pw-dark/10 relative overflow-hidden">
               <img 
                src={BANNER_IMAGE} 
                alt={post.title} 
                className="w-full h-full object-cover object-center opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-pw-yellow text-pw-dark text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-widest shadow-lg">2026 UPDATE</div>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-3">{post.date}</span>
              <h2 className="text-lg font-bold text-pw-dark mb-4 leading-tight h-14 overflow-hidden">{post.title}</h2>
              <p className="text-gray-500 text-xs mb-6 flex-grow leading-relaxed">{post.desc}</p>
              <Link to={post.path} className="text-pw-dark font-black text-[10px] uppercase tracking-widest hover:text-pw-yellow transition flex items-center group/link">
                Read Guide
                <svg className="w-3 h-3 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
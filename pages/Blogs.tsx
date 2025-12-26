
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BANNER_IMAGE = "https://scontent.fccu22-1.fna.fbcdn.net/v/t39.30808-6/607131865_122151085334737608_7118691726728882233_n.webp?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qhNIxino_Q4Q7kNvwFAgjLh&_nc_oc=Admi8DjeZ5xvvSwXyVZRTtzfGVzE0P8MUTMvwR_I-kK5BAe8jpdZXNSlR4mu4fQfBS0&_nc_zt=23&_nc_ht=scontent.fccu22-1.fna&_nc_gid=jdp7VVUlw0Ls-fjS3nZlhA&oh=00_AfmQpR89KdQh32s5VuucrJN9laV_y2rHCaiWV820WP9FTg&oe=69542526";

const Blogs: React.FC = () => {
  useEffect(() => {
    document.title = "PW Coupons Blog – Latest Preparation Tips & Discounts";
  }, []);

  const posts = [
    { id: 1, title: "How to apply PW Coupon Code in 2026", desc: "Step by step guide to get maximum discount on your PW batches.", date: "Oct 12, 2025", path: "/how-to-apply-pw-coupon-code-2026" },
    { id: 2, title: "The PW Revolution in Indian Education", desc: "How Alakh Pandey turned a vision into a movement for millions of students.", date: "Oct 11, 2025", path: "/physics-wallah-revolution-indian-education" },
    { id: 3, title: "JEE 2026 Strategy with PW Lakshya", desc: "How to use PW resources effectively to crack IIT JEE in your first attempt.", date: "Oct 10, 2025", path: "/jee-2026-strategy-pw-lakshya" },
    { id: 4, title: "Best NEET Batches in Physics Wallah", desc: "Comparison of Yakeen, Lakshya and Arjuna NEET batches for 2026 aspirants.", date: "Oct 08, 2025", path: "/best-neet-batches-physics-wallah-2026" },
    { id: 5, title: "PW Offline Vidyapith vs Online Batches", desc: "A complete comparison for 2026 students covering fees, doubt solving and environment.", date: "Oct 05, 2025", path: "/pw-offline-vidyapith-vs-online-batches" },
    { id: 6, title: "NEET High Weightage Chapters Guide", desc: "Master the important topics in Biology, Physics, and Chemistry for NEET 2026.", date: "Oct 03, 2025", path: "/neet-high-weightage-chapters-guide" },
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
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
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

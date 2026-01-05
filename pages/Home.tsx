
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PAGE_DATA, PRIMARY_COUPON, NEW_USER_COUPON } from '../constants';

const BANNER_IMAGE = "https://png.pngtree.com/background/20250120/original/pngtree-best-platforms-for-digital-education-and-e-learning-picture-image_15918449.jpg";
const TELEGRAM_URL = "https://t.me/PWCOUPONNEW";

const CopyButton: React.FC<{ code: string; variant?: 'dark' | 'accent' | 'white' | 'table' }> = ({ code, variant = 'dark' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStyles = () => {
    if (copied) return 'bg-[#16a34a] text-white border-[#16a34a] shadow-lg';
    switch (variant) {
      case 'white': return 'bg-white text-[#1f2937] hover:bg-gray-100 shadow-md';
      case 'accent': return 'bg-[#f59e0b] text-white hover:bg-[#d97706] shadow-md';
      case 'table': return 'bg-[#22c55e] text-white hover:bg-[#16a34a] text-[8px] sm:text-[10px] px-3 sm:px-5 py-1.5 hover:scale-105';
      default: return 'bg-[#1f2937] text-white hover:bg-black shadow-md';
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl text-[8px] sm:text-[11px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] transition-all duration-500 transform active:scale-90 btn-shine ${getStyles()}`}
    >
      {copied ? '✓ COPIED' : 'COPY'}
    </button>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = PAGE_DATA.home.title;
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const batchData = [
    { name: 'JEE (Lakshya/Arjuna)', code: PRIMARY_COUPON },
    { name: 'NEET (Yakeen/Lakshya)', code: PRIMARY_COUPON },
    { name: 'GATE Wallah 2026', code: PRIMARY_COUPON },
    { name: 'UPSC / State PCS', code: PRIMARY_COUPON },
    { name: 'Commerce & CA', code: PRIMARY_COUPON }
  ];

  const faqs = [
    { q: "What is the best Physics Wallah Offer for 2026?", a: "The best Physics Wallah Offer for 2026 is available via code ANTDAS0001, providing the highest possible institutional discount on all coaching batches including Lakshya and Yakeen." },
    { q: "Is the PW Coupon Code ANTDAS0001 valid for all batches?", a: "Yes, the PW maximum discount code ANTDAS0001 is a universal ambassador code valid for all batches including JEE, NEET, GATE, UPSC, and Foundation courses for the 2026 academic session." },
    { q: "How can I apply the PW maximum discount code?", a: "To use the PW maximum discount code, simply select your batch on the PW app or website, go to the checkout page, and enter code ANTDAS0001 in the 'Apply Coupon' field for instant savings." }
  ];

  const homePosts = [
    { id: 1, title: "How to apply PW Coupon Code in 2026", desc: "Step by step guide to get maximum discount on your PW batches with the latest Physics Wallah Offer.", date: "Oct 12, 2025", path: "/how-to-apply-pw-coupon-code-2026" },
    { id: 2, title: "The PW Revolution in Indian Education", desc: "How Alakh Pandey's vision created the ultimate Physics Wallah Offer for students.", date: "Oct 11, 2025", path: "/physics-wallah-revolution-indian-education" },
    { id: 3, title: "NEET vs JEE: Which Exam Should You Choose?", desc: "Choosing the right path and the right PW maximum discount code for your 2026 prep.", date: "Oct 10, 2025", path: "/neet-vs-jee-2026-comparison-guide" }
  ];

  return (
    <div className="bg-[#f9fafb] animate-fade-in">
      
      {/* 1. Hero Section */}
      <section className="bg-[#1f2937] text-white pt-10 sm:pt-24 pb-12 sm:pb-32 px-4 text-center relative overflow-hidden ad-friendly-section">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 mb-6 sm:mb-8">
            <span className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#f59e0b]">Official Physics Wallah Offer 2026</span>
          </div>
          <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-8 tracking-tighter italic leading-none">
            PW Coupon Code Pw maximum discount
          </h1>
          <p className="text-[10px] sm:text-lg md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto px-4">
            Get the ultimate <span className="text-[#f59e0b]">Pw maximum discount code</span> for all 2026 batches.
          </p>
        </div>
      </section>

      {/* Ad-friendly gap */}
      <div className="ad-friendly-gap"></div>

      {/* 2. Banner Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 sm:-mt-20 relative z-20 ad-friendly-section">
        <div className="bg-white rounded-[1.5rem] sm:rounded-[3rem] p-1.5 sm:p-4 shadow-2xl border border-gray-100 overflow-hidden">
          <img 
            src={BANNER_IMAGE} 
            alt="Physics Wallah Offer - Best PW Coupon Code 2026" 
            className="w-full h-[180px] sm:h-[450px] object-cover object-center rounded-[1.2rem] sm:rounded-[2.5rem]"
          />
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 3. Dual Coupon Cards */}
      <section className="max-w-6xl mx-auto px-4 py-4 ad-friendly-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-stretch">
          <article className="bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col group">
            <div className="bg-[#1f2937] p-5 sm:p-10 text-center relative overflow-hidden">
              <span className="text-[#22c55e] text-[7px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-2 block">Verified Pw coupon code 2026</span>
              <h3 className="text-lg sm:text-3xl font-black text-white italic">Primary Maximum Discount Code</h3>
            </div>
            <div className="p-6 sm:p-12 text-center flex-grow">
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-[1.2rem] sm:rounded-[2.5rem] p-6 sm:p-12 mb-4 sm:mb-10">
                <span className="text-2xl sm:text-7xl font-black text-[#1f2937] tracking-widest block mb-4 sm:mb-10 font-mono break-all">{PRIMARY_COUPON}</span>
                <CopyButton code={PRIMARY_COUPON} variant="dark" />
              </div>
            </div>
          </article>

          <article className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[1.5rem] sm:rounded-[3rem] shadow-xl overflow-hidden flex flex-col text-white">
            <div className="p-6 sm:p-14 text-center">
              <h2 className="text-xl sm:text-5xl md:text-6xl font-black mb-4 leading-none tracking-tighter italic">PW Maximum Discount Code</h2>
              <div className="bg-black/10 rounded-[1.5rem] sm:rounded-[3rem] p-6 sm:p-14 text-center border border-white/10 backdrop-blur-md">
                <div className="text-2xl sm:text-7xl font-black text-white mb-6 sm:mb-12 tracking-widest font-mono break-all">{NEW_USER_COUPON}</div>
                <CopyButton code={NEW_USER_COUPON} variant="white" />
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 4. Trust Section */}
      <section className="max-w-6xl mx-auto px-4 ad-friendly-section">
        <div className="bg-[#1f2937] text-white rounded-[1.5rem] sm:rounded-[4rem] p-8 sm:p-24 shadow-2xl text-center relative overflow-hidden">
           <h2 className="text-xl sm:text-4xl font-black italic mb-4 tracking-tighter uppercase">Physics Wallah Offer Integrity</h2>
           <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 font-medium text-[10px] sm:text-base">
             Our Pw maximum discount code database is audited daily to ensure students receive the highest tier of support for the 2026 session.
           </p>
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 5. Batch Table */}
      <section className="max-w-6xl mx-auto px-4 ad-friendly-section">
        <div className="bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-2xl p-4 sm:p-16 border border-gray-100 overflow-hidden">
          <div className="mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-5xl font-black text-[#1f2937] italic tracking-tighter mb-2 uppercase">Verified PW Coupon Code 2026 List</h2>
            <p className="text-gray-500 font-medium text-[9px] sm:text-lg">Get the best Physics Wallah Offer instantly.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-[7px] sm:text-[11px] font-black text-gray-400 uppercase tracking-widest">
                  <th className="pb-4 sm:pb-8">Target Batch</th>
                  <th className="pb-4 sm:pb-8">Maximum Discount Code</th>
                  <th className="pb-4 sm:pb-8 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {batchData.map((batch, i) => (
                  <tr key={i} className="group hover:bg-gray-50/80 transition-all">
                    <td className="py-4 sm:py-8 font-black text-[#1f2937] italic text-[10px] sm:text-lg">{batch.name}</td>
                    <td className="py-4 sm:py-8 font-bold text-[#22c55e] font-mono text-[10px] sm:text-lg">{batch.code}</td>
                    <td className="py-4 sm:py-8 text-right"><CopyButton code={batch.code} variant="table" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 6. Restore Blogs Section */}
      <section className="max-w-6xl mx-auto px-4 ad-friendly-section">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-5xl font-black text-[#1f2937] italic tracking-tighter mb-2 uppercase">Best Physics Wallah Offers & Guides</h2>
          <p className="text-gray-500 font-medium text-[9px] sm:text-lg">Apply your Pw maximum discount code correctly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {homePosts.map((post) => (
            <article key={post.id} className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all flex flex-col">
              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                <span className="text-[7px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">{post.date}</span>
                <h3 className="text-sm sm:text-xl font-black text-[#1f2937] italic mb-4 leading-tight group-hover:text-[#f59e0b] transition-colors">{post.title}</h3>
                <p className="text-[9px] sm:text-sm text-gray-500 mb-6 flex-grow leading-relaxed">{post.desc}</p>
                <Link to={post.path} className="text-[8px] sm:text-xs font-black uppercase tracking-widest text-[#1f2937] border-b-2 border-[#f59e0b] w-fit hover:border-[#1f2937] transition-all">
                  Read Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 7. Help Center */}
      <section className="max-w-4xl mx-auto px-4 ad-friendly-section">
        <div className="bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-xl p-8 sm:p-16 text-center border border-gray-100">
          <h3 className="text-base sm:text-3xl font-black text-[#1f2937] italic mb-6 sm:mb-12 uppercase">
            Code Issues? <span className="underline decoration-[#f59e0b] decoration-4 underline-offset-4">Get the latest Physics Wallah Offer</span>
          </h3>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-[#22c55e] text-white px-8 sm:px-14 py-3 sm:py-5 rounded-full font-black uppercase tracking-widest text-[9px] sm:text-xs inline-flex items-center gap-4 shadow-xl hover:bg-[#16a34a] transition-all btn-shine">
            📢 Open Telegram for Discount Codes
          </a>
        </div>
      </section>

      <div className="ad-friendly-gap"></div>

      {/* 8. FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-12 ad-friendly-section">
        <div className="text-center mb-10 sm:mb-20">
          <h2 className="text-xl sm:text-5xl font-black text-[#1f2937] uppercase italic tracking-tighter">Physics Wallah Offer FAQ</h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <article key={i} className="bg-white rounded-[1rem] sm:rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-10 text-left hover:bg-gray-50/50 transition-all"
              >
                <span className="text-[11px] sm:text-xl font-black text-[#1f2937] italic">{faq.q}</span>
                <span className={`text-[8px] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {openFaq === i && (
                <div className="p-5 sm:p-10 pt-0 text-[10px] sm:text-base text-gray-500 font-medium leading-relaxed border-t border-gray-50">
                  {faq.a}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
      
      <div className="ad-friendly-gap mb-8"></div>
    </div>
  );
};

export default Home;

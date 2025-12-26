
import React, { useEffect, useState } from 'react';
import CouponCard from '../components/CouponCard';
import { PAGE_DATA, PRIMARY_COUPON, NEW_USER_COUPON } from '../constants';

const BANNER_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmKRSSz7GbiLfE8jvopMNYHWYEAgsZKpFyFw&s";

const CopyButton: React.FC<{ code: string; variant?: 'dark' | 'yellow' | 'white' }> = ({ code, variant = 'dark' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStyles = () => {
    if (copied) return 'bg-green-500 text-white shadow-green-200';
    switch (variant) {
      case 'white': return 'bg-white text-red-600 hover:bg-gray-50';
      case 'yellow': return 'bg-pw-yellow text-pw-dark hover:bg-yellow-400';
      default: return 'bg-pw-dark text-white hover:bg-black';
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-block px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all transform active:scale-95 shadow-lg ${getStyles()}`}
    >
      {copied ? '✓ COPIED' : 'COPY CODE'}
    </button>
  );
};

const Home: React.FC = () => {
  useEffect(() => {
    document.title = PAGE_DATA.home.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DATA.home.metaDesc);
  }, []);

  const faqs = [
    { q: `Is the PW Coupon Code ${PRIMARY_COUPON} valid for all batches?`, a: `Yes, ${PRIMARY_COUPON} is a universal code valid for JEE, NEET, GATE, UPSC, and all other Physics Wallah batches in 2026.` },
    { q: "How much discount can I get using this code?", a: "You get the maximum possible discount allowed by Physics Wallah at the time of purchase, typically ranging from flat discounts to percentage-based savings." },
    { q: "Can I use this coupon on the PW mobile app?", a: "Absolutely. The code works perfectly on both the PW Android/iOS App and the official website." }
  ];

  return (
    <div className="animate-fade-in bg-gray-50/30">
      {/* Hero Header */}
      <section className="bg-pw-dark text-white pt-16 pb-32 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-pw-yellow/20 text-pw-yellow text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.3em] mb-6 border border-pw-yellow/30">
            Official 2026 Partner
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
            {PAGE_DATA.home.h1}
          </h1>
          <p className="text-lg md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate destination for verified <span className="text-pw-yellow font-bold">Physics Wallah batch discounts</span>.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        {/* Banner */}
        <div className="mb-16">
          <img 
            src={BANNER_IMAGE} 
            alt="PW Coupon Code 2026 Verified Banner" 
            className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white object-cover max-h-[450px]"
          />
        </div>

        {/* SIDE-BY-SIDE MAIN OFFERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-stretch">
          {/* Left: Standard Coupon Card */}
          <div className="flex flex-col">
            <CouponCard category="Physics Wallah" />
          </div>

          {/* Right: New User Specific Card */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-[3rem] p-1 shadow-2xl h-full">
              <div className="bg-white/5 backdrop-blur-md rounded-[2.9rem] p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <span className="bg-white text-red-600 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest mb-10 inline-block shadow-xl">
                    Exclusive for 2026
                  </span>
                  <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                    New User Max Discount
                  </h2>
                  <p className="text-white/80 text-xl mb-12 font-medium leading-relaxed max-w-sm">
                    First time on the PW App? Unlock the special "Welcome" price with this verified code.
                  </p>
                </div>

                <div className="relative z-10 bg-black/20 border border-white/10 p-10 rounded-[2.5rem] text-center">
                  <span className="block text-white/40 text-[10px] font-black uppercase mb-4 tracking-[0.3em]">Redeem Now</span>
                  <div className="text-5xl md:text-7xl font-black text-white mb-10 font-mono tracking-widest drop-shadow-lg">
                    {NEW_USER_COUPON}
                  </div>
                  <CopyButton code={NEW_USER_COUPON} variant="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMPACT COMMUNITY BUTTONS (Simplified Socials) */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-24">
           {/* Telegram Small */}
           <a 
            href="https://t.me/pw_updates" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#0088cc] hover:bg-[#0077b5] text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg transition-all hover:-translate-y-1 active:scale-95"
           >
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.5 4.35-1.76 4.84-1.77.11 0 .35.03.5.16.12.1.16.24.18.33.02.06.02.19 0 .28z"/></svg>
             <span>Telegram Group</span>
           </a>

           {/* Instagram Small */}
           <a 
            href="https://instagram.com/physicswallah" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg transition-all hover:-translate-y-1 active:scale-95"
           >
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
             <span>Instagram Official</span>
           </a>
        </div>

        {/* VERIFIED BATCH CODES TABLE */}
        <section className="mb-24">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-5xl font-black text-pw-dark mb-3 tracking-tighter italic">Verified Batch Codes</h2>
                <p className="text-gray-400 font-bold text-lg">Instant discounts for JEE, NEET, and GATE aspirants.</p>
              </div>
              <div className="flex justify-center">
                 <div className="bg-pw-yellow/10 border border-pw-yellow px-6 py-3 rounded-2xl flex items-center">
                    <span className="relative flex h-3 w-3 mr-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-pw-dark text-xs font-black uppercase tracking-widest">Live 2026 Database</span>
                 </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-12 py-8 text-left text-[11px] font-black text-gray-400 uppercase tracking-widest">Target Batch</th>
                    <th className="px-12 py-8 text-left text-[11px] font-black text-gray-400 uppercase tracking-widest">Primary Coupon</th>
                    <th className="px-12 py-8 text-left text-[11px] font-black text-gray-400 uppercase tracking-widest hidden sm:table-cell">Success Rate</th>
                    <th className="px-12 py-8 text-right text-[11px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50">
                  {[
                    { name: 'JEE (Lakshya/Arjuna/Prayas)', code: PRIMARY_COUPON },
                    { name: 'NEET (Yakeen/Lakshya/Arjuna)', code: PRIMARY_COUPON },
                    { name: 'GATE Wallah 2026', code: PRIMARY_COUPON },
                    { name: 'UPSC / State PCS Wallah', code: PRIMARY_COUPON },
                    { name: 'Commerce & CA Wallah', code: PRIMARY_COUPON },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                      <td className="px-12 py-10 text-base font-bold text-pw-dark">{row.name}</td>
                      <td className="px-12 py-10 text-lg font-mono font-black text-red-600 bg-red-50/30 group-hover:bg-red-50/60 transition-colors">{row.code}</td>
                      <td className="px-12 py-10 text-[10px] font-black text-green-600 uppercase tracking-widest hidden sm:table-cell">
                        <span className="px-3 py-1 bg-green-50 rounded-lg border border-green-100">99.8% Success</span>
                      </td>
                      <td className="px-12 py-10 text-right">
                        <CopyButton code={row.code} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pb-32 max-w-4xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black text-pw-dark uppercase tracking-tight">Student Support FAQ</h2>
             <div className="w-24 h-2 bg-pw-yellow mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 open:shadow-2xl">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none select-none">
                  <h3 className="text-xl font-black text-pw-dark pr-8 leading-tight">{faq.q}</h3>
                  <div className="text-pw-dark/30 group-open:text-pw-yellow transition-all duration-500 transform group-open:rotate-180">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-10 text-gray-500 leading-relaxed pt-2">
                  <div className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-pw-yellow text-base font-medium">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

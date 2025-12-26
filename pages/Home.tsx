
import React, { useEffect, useState } from 'react';
import CouponCard from '../components/CouponCard';
import { PAGE_DATA, PRIMARY_COUPON, NEW_USER_COUPON } from '../constants';
import { Link } from 'react-router-dom';

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

const CategoryIcon: React.FC<{ label: string; icon: React.ReactNode; path: string }> = ({ label, icon, path }) => (
  <Link to={path} className="flex flex-col items-center group">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-pw-yellow">
      {icon}
    </div>
    <span className="text-[10px] md:text-xs font-black text-pw-dark uppercase tracking-widest group-hover:text-pw-yellow transition-colors">
      {label}
    </span>
  </Link>
);

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

      {/* Educational Category Bar (New Educational Images/Icons Section) */}
      <div className="max-w-5xl mx-auto px-4 -mt-16 mb-12 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
          <CategoryIcon 
            label="IIT JEE" 
            path="/pw-jee-coupon-code"
            icon={<svg className="w-8 h-8 text-pw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-1.9 1.36h-1.876a2 2 0 01-1.9-1.36l-.722-2.166a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-1.353 1.353a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l1.353-1.353a2 2 0 00.547-1.022l.477-2.387a2 2 0 00-1.414-1.96l-2.166-.722a2 2 0 01-1.36-1.9V6.124a2 2 0 011.36-1.9l2.166-.722a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022l-1.353-1.353a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l1.353 1.353a2 2 0 001.022.547l2.387.477a2 2 0 001.96-1.414l.722-2.166a2 2 0 011.9-1.36h1.876a2 2 0 011.9 1.36l.722 2.166a2 2 0 001.96 1.414l2.387-.477a2 2 0 001.022-.547l1.353-1.353a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-1.353 1.353a2 2 0 00-.547 1.022l-.477 2.387a2 2 0 001.414 1.96l2.166.722a2 2 0 011.36 1.9v1.876a2 2 0 01-1.36 1.9l-2.166.722a2 2 0 00-1.414 1.96l.477 2.387z" /></svg>} 
          />
          <CategoryIcon 
            label="NEET" 
            path="/pw-neet-coupon-code"
            icon={<svg className="w-8 h-8 text-pw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>} 
          />
          <CategoryIcon 
            label="GATE" 
            path="/pw-gate-coupon-code"
            icon={<svg className="w-8 h-8 text-pw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.722 2.166a2 2 0 01-1.9 1.36h-1.876a2 2 0 01-1.9-1.36l-.722-2.166a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l-1.353 1.353a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l1.353-1.353a2 2 0 00.547-1.022" /></svg>} 
          />
          <CategoryIcon 
            label="UPSC" 
            path="/"
            icon={<svg className="w-8 h-8 text-pw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16 3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824 3.846 12.083 12.083 0 01.665-6.479L12 14z" /></svg>} 
          />
          <CategoryIcon 
            label="SCHOOL" 
            path="/edu-offers"
            icon={<svg className="w-8 h-8 text-pw-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>} 
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Banner */}
        <div className="mb-16">
          <img 
            src="pw-banner.jpg" 
            alt="PW Coupon Code 2026 Verified Banner" 
            className="w-full h-auto rounded-[3rem] shadow-2xl border-8 border-white object-cover max-h-[450px]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/1200/500?grayscale&blur=2";
            }}
          />
        </div>

        {/* SIDE-BY-SIDE MAIN OFFERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-stretch">
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

        {/* VERIFIED BATCH CODES TABLE - Now placed right under the side-by-side cards */}
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
              <table className="min-width-full divide-y divide-gray-100">
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

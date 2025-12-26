
import React, { useEffect, useState } from 'react';
import CouponCard from '../components/CouponCard';
import { PAGE_DATA, PRIMARY_COUPON } from '../constants';
import { Link } from 'react-router-dom';

const CopyButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PRIMARY_COUPON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-block px-6 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all transform active:scale-95 shadow-md ${
        copied 
          ? 'bg-green-500 text-white' 
          : 'bg-pw-dark text-white hover:bg-pw-yellow hover:text-pw-dark'
      }`}
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
    { q: "Is the PW Coupon Code BADMUN001 valid for all batches?", a: "Yes, BADMUN001 is a universal code valid for JEE, NEET, GATE, UPSC, and all other Physics Wallah batches in 2026." },
    { q: "How much discount can I get using this code?", a: "You get the maximum possible discount allowed by Physics Wallah at the time of purchase, typically ranging from flat discounts to percentage-based savings." },
    { q: "Can I use this coupon on the PW mobile app?", a: "Absolutely. The code works perfectly on both the PW Android/iOS App and the official website." }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-pw-dark text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            {PAGE_DATA.home.h1}
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Unlock the gateway to your dream career with verified <span className="text-pw-yellow font-bold">Physics Wallah Discounts</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/blogs" className="bg-white/5 backdrop-blur-md text-white font-bold px-10 py-4 rounded-full border border-white/10 hover:bg-white/10 transition text-sm uppercase tracking-wider">
              Preparation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <img 
          src="pw-banner.jpg" 
          alt="PW Coupon Code 2026 Verified Banner" 
          className="w-full h-auto rounded-3xl shadow-2xl border-8 border-white object-cover max-h-[450px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://picsum.photos/1200/500?grayscale&blur=2";
          }}
        />
      </div>

      {/* Main Coupon Section */}
      <section id="coupons" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 text-pw-dark leading-tight tracking-tighter">Why Use Our Verified PW Coupon?</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Preparing for competitive exams like <strong className="text-pw-dark">JEE, NEET, or GATE</strong> requires top-notch guidance. Physics Wallah offers the best education at the lowest prices, and with <strong className="text-pw-dark">BADMUN001</strong>, we make it even more affordable for every student in India.
            </p>
            <div className="space-y-4 mb-10">
              {['Highest Savings Guaranteed', 'Valid for All 2026 Batches', 'Instant Cashback Offers', 'Trusted by 1M+ Students'].map((item) => (
                <div key={item} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                  <div className="flex-shrink-0 w-8 h-8 bg-pw-yellow rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-5 h-5 text-pw-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold text-pw-dark text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <CouponCard />
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center text-pw-dark mb-12 uppercase tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-pw-dark mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Specific Table */}
      <section className="bg-white py-24 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black text-pw-dark mb-4 tracking-tighter">Verified 2026 Batch Codes</h2>
          <p className="text-gray-500 mb-12 text-lg">Quick access to verified discounts for top batches.</p>
          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-pw-dark text-white">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-black uppercase tracking-widest">Target Exam</th>
                  <th className="px-8 py-5 text-left text-sm font-black uppercase tracking-widest">Best Code</th>
                  <th className="px-8 py-5 text-left text-sm font-black uppercase tracking-widest">Savings</th>
                  <th className="px-8 py-5 text-right text-sm font-black uppercase tracking-widest">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {[
                  { name: 'JEE 2026 (Lakshya/Arjuna)', link: '/pw-jee-coupon-code' },
                  { name: 'NEET 2026 (Yakeen/Lakshya)', link: '/pw-neet-coupon-code' },
                  { name: 'GATE Wallah 2026', link: '/pw-gate-coupon-code' },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 text-sm font-bold text-pw-dark">{row.name}</td>
                    <td className="px-8 py-6 text-sm font-mono font-black text-red-600 bg-red-50/50">{PRIMARY_COUPON}</td>
                    <td className="px-8 py-6 text-sm font-black text-green-600 uppercase tracking-tighter italic">MAX DISCOUNT</td>
                    <td className="px-8 py-6 text-right">
                      <CopyButton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

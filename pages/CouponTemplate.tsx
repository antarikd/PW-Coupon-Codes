
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PAGE_DATA, PRIMARY_COUPON } from '../constants';
import CouponCard from '../components/CouponCard';

interface CouponTemplateProps {
  pageKey: 'pwCoupon' | 'jee' | 'neet' | 'gate';
}

const CouponTemplate: React.FC<CouponTemplateProps> = ({ pageKey }) => {
  const data = PAGE_DATA[pageKey];

  useEffect(() => {
    document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.metaDesc);
    window.scrollTo(0, 0);
  }, [data]);

  const getSpecificContent = () => {
    switch(pageKey) {
      case 'jee': return "Aspiring for IIT? Use our special JEE discount code for Lakshya and Arjuna batches.";
      case 'neet': return "Crack NEET 2026 with PW. Use our dedicated medical batch coupon for the best price.";
      case 'gate': return "GATE Wallah offers top-tier engineering guidance. Save big on your technical prep today.";
      default: return "Save on every single Physics Wallah course with our verified promo codes.";
    }
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-pw-dark text-white py-12 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.h1}</h1>
        <p className="text-pw-yellow font-semibold tracking-wide uppercase text-sm">Target Keyword: {data.keyword}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-6">
        <img 
          src="pw-banner.jpg" 
          alt={`${data.h1} Hero`} 
          className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[300px]"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://picsum.photos/1200/400?random=${pageKey}`;
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-pw-dark mb-4">Looking for {data.keyword}?</h2>
            <p className="mb-6 leading-relaxed">
              {getSpecificContent()} We understand that high-quality education should be accessible to everyone. 
              By using our verified code, you join thousands of students who have saved money while securing 
              their future with Physics Wallah.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-pw-yellow p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-pw-dark mb-2">Pro Tip for 2026 Aspirants</h3>
              <p className="text-sm">Early bird batches often have additional discounts. Combine them with code <strong>{PRIMARY_COUPON}</strong> for maximum benefits.</p>
            </div>

            <h3 className="text-xl font-bold mb-3">Why choose this code?</h3>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Verified for all 2026 {data.keyword} batches.</li>
              <li>Valid on PW Web and Android App.</li>
              <li>Stackable with seasonal sales.</li>
              <li>Zero processing fees.</li>
            </ul>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
              <Link to="/pw-jee-coupon-code" className="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-pw-yellow transition">JEE Codes</Link>
              <Link to="/pw-neet-coupon-code" className="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-pw-yellow transition">NEET Codes</Link>
              <Link to="/pw-gate-coupon-code" className="text-xs bg-gray-100 px-3 py-1 rounded hover:bg-pw-yellow transition">GATE Codes</Link>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <CouponCard category={data.keyword} />
            <div className="mt-8 bg-pw-dark/5 p-6 rounded-2xl border border-pw-dark/10">
              <h4 className="font-bold mb-3 text-pw-dark">Latest Batches</h4>
              <ul className="text-sm space-y-3">
                <li className="flex justify-between border-b pb-2"><span>Lakshya {pageKey.toUpperCase()}</span> <span className="text-green-600 font-bold">Active</span></li>
                <li className="flex justify-between border-b pb-2"><span>Arjuna {pageKey.toUpperCase()}</span> <span className="text-green-600 font-bold">Active</span></li>
                <li className="flex justify-between"><span>PRAYAS {pageKey.toUpperCase()}</span> <span className="text-green-600 font-bold">Active</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponTemplate;

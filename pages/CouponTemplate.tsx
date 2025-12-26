
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PAGE_DATA, PRIMARY_COUPON } from '../constants';
import CouponCard from '../components/CouponCard';

const BANNER_IMAGE = "https://scontent.fccu22-1.fna.fbcdn.net/v/t39.30808-6/607131865_122151085334737608_7118691726728882233_n.webp?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qhNIxino_Q4Q7kNvwFAgjLh&_nc_oc=Admi8DjeZ5xvvSwXyVZRTtzfGVzE0P8MUTMvwR_I-kK5BAe8jpdZXNSlR4mu4fQfBS0&_nc_zt=23&_nc_ht=scontent.fccu22-1.fna&_nc_gid=jdp7VVUlw0Ls-fjS3nZlhA&oh=00_AfmQpR89KdQh32s5VuucrJN9laV_y2rHCaiWV820WP9FTg&oe=69542526";

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
      case 'jee': return "Aspiring for IIT JEE 2026? Physics Wallah offers the most structured courses for engineering aspirants. Whether you are in class 11 or 12, choosing the best Physics Wallah batches for 2026 is the first step toward your dream engineering college.";
      case 'neet': return "Crack NEET 2026 with India's best medical coaching. Use our dedicated medical batch coupon for the best price on Yakeen and Lakshya NEET batches. Physics Wallah provides an environment where every student can excel through high-quality video lectures and rigorous testing.";
      case 'gate': return "GATE Wallah offers top-tier engineering guidance for all branches. Save big on your technical preparation with our verified GATE coupon today. Our mentors provide the roadmap needed to navigate the complex GATE syllabus efficiently.";
      default: return "Save on every single Physics Wallah course, from Class 6 to UPSC, with our verified promo codes and batch-specific discounts. Join millions of students who trust PW for their academic success.";
    }
  };

  return (
    <div className="animate-fade-in pb-20 bg-gray-50/30">
      {/* Dynamic SEO Header */}
      <section className="bg-pw-dark text-white pt-16 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pw-yellow/80 bg-white/5 py-2 px-6 rounded-full border border-white/10">
              Verified {data.keyword} 2026
            </span>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            {data.h1}
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Get instant savings on your 2026 subscription. Official ambassador code: <span className="text-pw-yellow font-bold underline decoration-pw-yellow/30 underline-offset-8">{PRIMARY_COUPON}</span>
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className="mb-16">
          <img 
            src={BANNER_IMAGE} 
            alt={`${data.h1} verified discount banner`} 
            className="w-full h-auto rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-4 md:border-8 border-white object-cover max-h-[450px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-gray-100">
              <h2 className="text-2xl md:text-4xl font-black text-pw-dark mb-8 tracking-tight">Looking for {data.keyword}?</h2>
              <div className="prose prose-lg prose-pw max-w-none text-gray-600 space-y-6">
                <p className="leading-relaxed">
                  {getSpecificContent()} We understand that high-quality education should be affordable. 
                  By using our verified code <span className="text-pw-dark font-black">{PRIMARY_COUPON}</span>, you join over 50,000 students 
                  who have saved money while securing their future with Physics Wallah. If you are new to the platform, we have a <Link to="/how-to-apply-pw-coupon-code-2026" className="text-pw-dark font-bold underline decoration-pw-yellow decoration-2 underline-offset-4 hover:text-pw-yellow transition-colors">step-by-step guide to applying PW coupon codes</Link> that covers both the app and website processes.
                </p>
                
                <p className="leading-relaxed">
                  The impact of this platform goes beyond just discounts; it is about empowerment. Discover <Link to="/physics-wallah-revolution-indian-education" className="text-pw-dark font-bold underline decoration-pw-yellow decoration-2 underline-offset-4 hover:text-pw-yellow transition-colors">how PW is changing Indian education</Link> by bridging the gap between talent and opportunity across rural and urban India.
                </p>
                
                <div className="bg-yellow-50/50 border-l-8 border-pw-yellow p-8 rounded-2xl my-10">
                  <h3 className="font-black text-pw-dark text-xl mb-4">Pro Tip for {data.keyword} Aspirants</h3>
                  <p className="text-gray-700 font-medium">
                    Batch prices often fluctuate. If you see an early-bird offer, combine it with code <strong>{PRIMARY_COUPON}</strong> for the absolute lowest price possible on the platform. Don't forget to check our <Link to="/best-neet-batches-physics-wallah-2026" className="text-pw-dark font-bold underline decoration-pw-yellow decoration-1 underline-offset-2">batch comparison guide</Link> to ensure you pick the right track for your preparation level.
                  </p>
                </div>

                <h3 className="text-2xl font-black text-pw-dark mt-10 mb-6">Why use this {data.keyword}?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {[
                    'Verified for all 2026 batches',
                    'Directly from PW Ambassador',
                    'Works on Website & App',
                    'Valid for New & Old Users',
                    'Instant Applied Discount',
                    'No Expiry for 2026 Session'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100 font-bold text-sm text-pw-dark">
                      <span className="text-green-500 text-xl">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Internal Links for SEO */}
            <div className="bg-pw-dark rounded-[2.5rem] p-10 md:p-14 text-white">
              <h3 className="text-2xl font-black mb-8">Browse Other PW Savings</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/pw-jee-coupon-code" className="bg-white/10 hover:bg-pw-yellow hover:text-pw-dark px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all">JEE Codes</Link>
                <Link to="/pw-neet-coupon-code" className="bg-white/10 hover:bg-pw-yellow hover:text-pw-dark px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all">NEET Codes</Link>
                <Link to="/pw-gate-coupon-code" className="bg-white/10 hover:bg-pw-yellow hover:text-pw-dark px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all">GATE Codes</Link>
                <Link to="/pw-coupon-code" className="bg-white/10 hover:bg-pw-yellow hover:text-pw-dark px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all">All PW Promo</Link>
              </div>
            </div>
          </div>
          
          {/* Sticky Coupon Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <CouponCard category={data.keyword} />
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full -mr-12 -mt-12"></div>
                <h4 className="font-black mb-6 text-pw-dark text-lg uppercase tracking-tight">Active {data.keyword} Batches</h4>
                <ul className="space-y-4">
                  {[
                    {name: 'Lakshya Batch', status: 'Active'},
                    {name: 'Arjuna Batch', status: 'Active'},
                    {name: 'Prayas/Fastrack', status: 'Verified'},
                    {name: 'Ultimate/Crash', status: 'Ready'}
                  ].map((batch, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="font-bold text-gray-700 text-sm">{batch.name}</span>
                      <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-widest border border-green-100">{batch.status}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-50 text-center">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Data Updated Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponTemplate;

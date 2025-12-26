
import React, { useEffect } from 'react';
import CouponCard from '../components/CouponCard';

const EduOffers: React.FC = () => {
  useEffect(() => {
    document.title = "Educational Offers 2026 – Best Deals for Students";
  }, []);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-pw-dark mb-4">Exclusive Education Offers</h1>
        <p className="text-gray-500">We curate the best deals for students across various categories.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">🎓</span>
              Physics Wallah Specials
            </h2>
            <p className="text-gray-600 mb-6">Physics Wallah continues to lead with affordable high-quality batches. Use our primary coupon to unlock hidden discounts.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">JEE Batch</p>
                <p className="text-lg font-bold">UP TO 30% OFF</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">NEET Batch</p>
                <p className="text-lg font-bold">BEST PRICE</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 text-yellow-600">⚡</span>
              Limited Time Deals
            </h2>
            <p className="text-gray-600">Flash sales occur during festival seasons. Check back daily during Diwali and New Year for the biggest price drops.</p>
          </div>
        </div>
        
        <div>
          <CouponCard />
        </div>
      </div>

      <section className="bg-pw-dark text-white rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Never Miss a Discount</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">Subscribe to our mini-newsletter for the fastest updates on PW Coupon Code releases.</p>
        <div className="max-w-md mx-auto flex gap-2">
          <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-3 rounded-full text-gray-900 focus:outline-none" />
          <button className="bg-pw-yellow text-pw-dark font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition">Join</button>
        </div>
      </section>
    </div>
  );
};

export default EduOffers;

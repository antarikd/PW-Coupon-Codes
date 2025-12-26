
import React, { useState } from 'react';
import { PRIMARY_COUPON } from '../constants';

interface CouponCardProps {
  category?: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ category = "Physics Wallah" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PRIMARY_COUPON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 max-w-lg mx-auto transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_60px_-15px_rgba(255,215,0,0.3)] w-full group/card">
      <div className="bg-pw-dark p-8 text-center transition-colors duration-500 group-hover/card:bg-black relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-pw-yellow opacity-50"></div>
        <span className="text-pw-yellow text-xs font-black uppercase tracking-[0.2em] bg-white/10 py-1.5 px-4 rounded-full mb-4 inline-block border border-white/5">
          Verified for 2026 Admissions
        </span>
        <h3 className="text-3xl font-bold text-white tracking-tight">Save on {category}</h3>
      </div>
      <div className="p-12 flex flex-col items-center text-center">
        <div 
          className="relative group cursor-pointer w-full mb-8" 
          onClick={handleCopy}
          title="Click to copy code"
        >
          {/* Animated glow background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-pw-yellow via-orange-400 to-pw-yellow rounded-[2rem] blur-xl opacity-10 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          
          <div className="relative bg-white border-4 border-dashed border-pw-dark/10 rounded-[2rem] py-10 px-6 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-pw-yellow group-hover:bg-gray-50/50">
            <span className="text-4xl md:text-5xl font-black text-pw-dark tracking-normal mb-6 select-all transition-transform duration-500 group-hover:scale-105 drop-shadow-sm">
              {PRIMARY_COUPON}
            </span>
            <div className="w-full max-w-[280px]">
              <button 
                className={`w-full py-4 rounded-2xl font-black text-lg uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-xl ${
                  copied ? 'bg-green-500 text-white' : 'bg-pw-dark text-white hover:bg-black group-hover:bg-pw-yellow group-hover:text-pw-dark'
                }`}
              >
                {copied ? '✓ COPIED!' : 'COPY CODE'}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 font-semibold text-sm mb-8 uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
          <span>Apply at Checkout for Max Savings</span>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center group/stat">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-colors">100%</span>
            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Verified</span>
          </div>
          <div className="flex flex-col items-center group/stat">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-colors">2026</span>
            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Active</span>
          </div>
          <div className="flex flex-col items-center group/stat">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-colors">MAX</span>
            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-tighter">Discount</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

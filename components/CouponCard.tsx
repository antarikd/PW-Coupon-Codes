
import React, { useState } from 'react';
import { PRIMARY_COUPON } from '../constants';

interface CouponCardProps {
  category?: string;
}

const CouponCard: React.FC<CouponCardProps> = ({ category = "Physics Wallah" }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = "https://pw-coupon-hub.netlify.app/";
  const shareText = `Get the best discount on PW batches for 2026 using coupon code: ${PRIMARY_COUPON}. Check it out here:`;

  const handleCopy = () => {
    navigator.clipboard.writeText(PRIMARY_COUPON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 max-w-lg mx-auto transform transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_60px_100px_-15px_rgba(255,215,0,0.45)] w-full group/card relative">
      {/* Top Banner with Lighting Effect */}
      <div className="bg-pw-dark p-8 text-center transition-all duration-500 group-hover/card:bg-black relative overflow-hidden">
        {/* Animated Top Border Shimmer */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pw-yellow to-transparent opacity-100 animate-shimmer"></div>
        
        {/* Verified Badge with Neon Glow */}
        <div className="relative inline-block mb-4">
          <div className="absolute -inset-2 bg-pw-yellow/40 blur-xl rounded-full opacity-0 group-hover/card:opacity-100 transition-all duration-700"></div>
          <span className="relative text-pw-yellow text-[10px] md:text-xs font-black uppercase tracking-[0.25em] bg-white/10 py-1.5 px-5 rounded-full inline-block border border-pw-yellow/30 shadow-[0_0_15px_rgba(255,215,0,0.2)] transition-all group-hover/card:scale-110">
            Verified for 2026 Admissions
          </span>
        </div>
        
        <h3 className="text-3xl font-bold text-white tracking-tight relative z-10 transition-all group-hover/card:translate-y-1">Save on {category}</h3>
      </div>

      <div className="p-10 flex flex-col items-center text-center relative bg-gradient-to-b from-white to-gray-50/50">
        {/* Main Glow Container */}
        <div 
          className="relative group cursor-pointer w-full mb-8" 
          onClick={handleCopy}
          title="Click to copy code"
        >
          {/* Multi-layered Animated Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-pw-yellow via-orange-400 to-yellow-200 rounded-[2.5rem] blur-3xl opacity-5 group-hover:opacity-80 transition-opacity duration-1000"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-pw-yellow to-orange-500 rounded-[2.2rem] opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500"></div>
          
          <div className="relative bg-white border-2 border-dashed border-pw-dark/10 rounded-[2rem] py-12 px-6 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-pw-yellow group-hover:bg-yellow-50/60 overflow-hidden shadow-sm group-hover:shadow-2xl">
            {/* Inner Shimmer Light Effect */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"></div>

            {/* Prominent Yellow Coupon Code with Vibrant Sky-Blue Glow Shadow */}
            <span className="text-4xl md:text-5xl font-black text-pw-yellow tracking-[0.1em] mb-10 select-all transition-all duration-500 group-hover:scale-115 drop-shadow-[0_0_20px_rgba(0,191,255,1)] group-hover:drop-shadow-[0_0_30px_rgba(0,191,255,1.2)] font-mono leading-none block text-center w-full">
              {PRIMARY_COUPON}
            </span>
            
            <div className="w-full max-w-[280px] relative z-10">
              <button 
                className={`w-full py-4 rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.25em] transition-all duration-300 transform active:scale-90 shadow-xl ${
                  copied 
                    ? 'bg-green-500 text-white shadow-green-200 scale-105' 
                    : 'bg-pw-dark text-white hover:bg-black group-hover:bg-pw-yellow group-hover:text-pw-dark group-hover:shadow-pw-yellow/60 group-hover:-translate-y-1'
                }`}
              >
                {copied ? '✓ COPIED TO CLIPBOARD' : 'REDEEM DISCOUNT'}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Share Buttons */}
        <div className="flex items-center space-x-4 mb-8">
          <button 
            onClick={shareOnTwitter}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-2 hover:rotate-6"
            title="Share on Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </button>
          <button 
            onClick={shareOnFacebook}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#4267B2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-2 hover:-rotate-6"
            title="Share on Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button 
            onClick={shareOnWhatsApp}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-2 hover:rotate-12"
            title="Share on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.049a11.815 11.815 0 001.592 5.922L0 24l6.117-1.605a11.803 11.803 0 005.925 1.583h.005c6.637 0 12.046-5.411 12.049-12.05a11.825 11.825 0 00-3.483-8.43z"/></svg>
          </button>
        </div>
        
        {/* Real-time Status with Pulse */}
        <div className="flex items-center space-x-3 text-gray-500 font-extrabold text-[10px] mb-8 uppercase tracking-widest bg-gray-100 px-5 py-2.5 rounded-full border border-gray-200 transition-all hover:bg-green-50 hover:border-green-200 group/status cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="group-hover/status:text-green-700 transition-colors">Apply at Checkout for Max Savings</span>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-3 gap-4 w-full pt-8 border-t border-gray-100">
          <div className="flex flex-col items-center group/stat cursor-help">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-all duration-300 transform group-hover/stat:scale-125 drop-shadow-sm">100%</span>
            <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest group-hover/stat:text-pw-dark transition-colors">Verified</span>
          </div>
          <div className="flex flex-col items-center group/stat cursor-help">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-all duration-300 transform group-hover/stat:scale-125 drop-shadow-sm">2026</span>
            <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest group-hover/stat:text-pw-dark transition-colors">Active</span>
          </div>
          <div className="flex flex-col items-center group/stat cursor-help">
            <span className="text-pw-dark font-black text-xl group-hover/stat:text-pw-yellow transition-all duration-300 transform group-hover/stat:scale-125 drop-shadow-sm">MAX</span>
            <span className="text-gray-400 text-[9px] uppercase font-black tracking-widest group-hover/stat:text-pw-dark transition-colors">Benefit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;

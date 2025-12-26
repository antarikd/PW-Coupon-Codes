
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CouponCard from '../components/CouponCard';
import { PAGE_DATA, PRIMARY_COUPON, NEW_USER_COUPON } from '../constants';

const BANNER_IMAGE = "https://scontent.fccu22-1.fna.fbcdn.net/v/t39.30808-6/607131865_122151085334737608_7118691726728882233_n.webp?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qhNIxino_Q4Q7kNvwFAgjLh&_nc_oc=Admi8DjeZ5xvvSwXyVZRTtzfGVzE0P8MUTMvwR_I-kK5BAe8jpdZXNSlR4mu4fQfBS0&_nc_zt=23&_nc_ht=scontent.fccu22-1.fna&_nc_gid=jdp7VVUlw0Ls-fjS3nZlhA&oh=00_AfmQpR89KdQh32s5VuucrJN9laV_y2rHCaiWV820WP9FTg&oe=69542526";

const CopyButton: React.FC<{ code: string; variant?: 'dark' | 'yellow' | 'white' }> = ({ code, variant = 'dark' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStyles = () => {
    if (copied) return 'bg-green-500 text-white shadow-green-200 scale-105';
    switch (variant) {
      case 'white': return 'bg-white text-red-600 hover:bg-gray-100 hover:shadow-white/20 hover:-translate-y-1 active:scale-95';
      case 'yellow': return 'bg-pw-yellow text-pw-dark hover:bg-white hover:text-pw-dark hover:shadow-pw-yellow/30 hover:-translate-y-1 active:scale-95';
      default: return 'bg-pw-dark text-white hover:bg-pw-yellow hover:text-pw-dark hover:shadow-pw-dark/30 hover:-translate-y-1 active:scale-95';
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-block px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 transform shadow-lg whitespace-nowrap ${getStyles()}`}
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

  const studentFaqs = [
    {
      q: "What is a PW coupon code?",
      a: "A PW coupon code is a unique alphanumeric string provided by Physics Wallah to help students reduce their batch fees. Codes like ANTDAS0001 are part of the ambassador program designed to make premium education more affordable. By entering this code at checkout, you receive an instant discount on your chosen engineering or medical coaching batch."
    },
    {
      q: "How to apply PW coupon code in 2026?",
      a: "To apply your code, first select your desired batch on the PW app or website. Click on the 'Buy Now' button to reach the payment summary page. Look for the 'Have a Coupon Code?' input box, enter a verified code like ANTDAS0001, and click 'Apply.' The price will decrease immediately for the 2026 session."
    },
    {
      q: "Are PW coupon codes on this site verified?",
      a: "Yes, every PW coupon code 2026 listed here is manually verified by our student ambassador team. We test each code directly on the official Physics Wallah platform daily to ensure it is active and providing the promised discount. We prioritize transparency and never promote fake, misleading, or clickbait offers to our student community."
    },
    {
      q: "Do PW coupon codes work for all batches?",
      a: "Most verified PW coupons, especially primary ones like ANTDAS0001, are universal and work across all major batches including JEE (Arjuna/Lakshya), NEET (Yakeen), GATE, and Foundation courses. However, some extremely specialized or already heavily discounted short-term crash courses might have specific restrictions. Always check the final discount amount on your checkout screen before paying."
    },
    {
      q: "Can I use PW coupon code on the mobile app?",
      a: "Absolutely! All Physics Wallah discounts and coupon codes are fully functional on both the official PW Android/iOS mobile application and the desktop website. Since the majority of students use the mobile app for their daily classes, the coupon system is seamlessly integrated into the app’s secure payment gateway for a smooth and fast checkout experience."
    },
    {
      q: "What to do if PW coupon code does not work?",
      a: "If a code fails, first check for spelling errors or extra spaces. Some codes might have reached their usage limit or expired. If you face any issues, contact our Telegram support team immediately. We will guide you step-by-step, suggest an alternative verified coupon, or help you unlock batch-specific discounts to ensure you save money."
    },
    {
      q: "Are extra discounts available for new users?",
      a: "Yes, Physics Wallah frequently offers exclusive 'First-Time User' discounts to encourage new students. If you are registering a new account with a fresh mobile number, using a verified PW coupon code 2026 can often unlock a higher discount percentage. We always recommend new users to check for these specific welcome offers during their initial batch purchase."
    },
    {
      q: "Is this website officially affiliated with Physics Wallah?",
      a: "No, this platform is an independent educational resource hub and is not officially part of Physics Wallah Pvt Ltd. We operate as part of the student ambassador program to help aspirants find verified PW coupon codes and preparation guidance. For official technical support or refund queries, students must contact the official Physics Wallah help desk directly."
    },
    {
      q: "Are these discounts valid for PW Vidyapeeth (Offline)?",
      a: "Typically, the PW coupon codes 2026 provided here are designed for online batches on the mobile app. PW Vidyapeeth (offline centers) usually has a separate physical admission process with localized scholarship programs like PWSAT. However, some hybrid Pathshala batches may accept these codes. It is best to verify with the specific offline center counselor before enrolling."
    },
    {
      q: "Why should I trust this site for PW discounts?",
      a: "We are committed to the 'Student First' philosophy, providing honest and transparent information. Unlike generic coupon sites, we are active members of the PW student community who manually test every discount daily. Our mission is to ensure no student pays more than necessary, offering reliable support and verified codes to help you reach your academic goals."
    }
  ];

  const benefits = [
    { 
      title: 'Verified Codes', 
      desc: 'Manually checked daily to ensure 100% success rate.', 
      icon: '✅',
      bg: 'bg-green-50',
      border: 'border-green-100'
    },
    { 
      title: 'Max Discounts', 
      desc: 'Official ambassador codes for the highest available savings.', 
      icon: '💰',
      bg: 'bg-yellow-50',
      border: 'border-yellow-100'
    },
    { 
      title: 'Latest Updates', 
      desc: 'Real-time alerts for 2026 batch launches and price drops.', 
      icon: '🚀',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    { 
      title: 'Student Support', 
      desc: '24/7 dedicated assistance via our Telegram help desk.', 
      icon: '🤝',
      bg: 'bg-purple-50',
      border: 'border-purple-100'
    }
  ];

  return (
    <div className="animate-fade-in bg-gray-50/30">
      {/* Hero Header */}
      <section className="bg-pw-dark text-white pt-12 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="h-[1px] w-6 bg-pw-yellow/30"></span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-pw-yellow/80 transition-all hover:tracking-[0.6em] cursor-default">Official PW Ambassador</span>
            <span className="h-[1px] w-6 bg-pw-yellow/30"></span>
          </div>

          <div className="inline-block relative group">
            <div className="absolute -inset-4 bg-pw-yellow/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <h1 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex items-center justify-center flex-wrap gap-x-3 relative z-10 transition-all duration-500 group-hover:scale-[1.03]">
              <span className="text-white">PW</span>
              <span className="text-pw-yellow font-black uppercase tracking-tighter drop-shadow-[0_2px_15px_rgba(255,215,0,0.3)]">
                Coupon Code
              </span>
              <span className="inline-flex items-center justify-center bg-white text-pw-dark rounded-full px-4 py-1 text-xl md:text-3xl font-black shadow-xl transition-all group-hover:bg-pw-yellow group-hover:rotate-3 group-hover:-translate-y-1">
                2026
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-lg text-white/60 mb-4 max-w-lg mx-auto font-medium leading-relaxed">
            Verified savings for <span className="text-pw-yellow underline decoration-pw-yellow/30 underline-offset-4 hover:decoration-white transition-all cursor-pointer">JEE, NEET & GATE</span> 2026 sessions.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        {/* Banner */}
        <div className="mb-16 group cursor-pointer relative perspective-1000">
          <div className="absolute -inset-3 bg-gradient-to-r from-pw-yellow/20 via-orange-500/20 to-pw-yellow/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <img 
            src={BANNER_IMAGE} 
            alt="PW Coupon Code 2026 Verified Banner" 
            className="w-full h-auto rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border-4 md:border-[12px] border-white object-cover max-h-[500px] transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Informative Text Block for SEO */}
        <div className="max-w-4xl mx-auto mb-16 text-center group">
          <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 transition-all group-hover:translate-x-1 group-hover:text-blue-900">Your Gateway to Affordable Excellence</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base px-4">
            Physics Wallah has redefined the way students prepare for India's toughest exams. By providing the <Link to="/best-neet-batches-physics-wallah-2026" className="text-pw-dark font-bold underline decoration-pw-yellow decoration-2 underline-offset-4 hover:text-pw-yellow transition-colors">best Physics Wallah batches for 2026</Link>, the platform ensures that high-quality education is accessible to everyone. Whether you are aiming for IIT JEE or NEET, our verified coupons help you secure these world-class resources at the most competitive prices.
          </p>
        </div>

        {/* SIDE-BY-SIDE MAIN OFFERS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-stretch">
          <div className="flex flex-col h-full">
            <CouponCard category="Physics Wallah" />
          </div>

          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-red-600 to-orange-700 rounded-[3rem] p-1 shadow-2xl h-full transition-all duration-700 hover:shadow-orange-300/40 hover:-translate-y-2">
              <div className="bg-white/5 backdrop-blur-md rounded-[2.9rem] p-10 md:p-14 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <span className="bg-white text-red-600 text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest mb-10 inline-block shadow-xl transition-all group-hover:bg-red-600 group-hover:text-white group-hover:scale-110">
                    Exclusive for 2026
                  </span>
                  <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter transition-all group-hover:tracking-tight group-hover:drop-shadow-2xl">
                    New User Max Discount
                  </h2>
                  <p className="text-white/80 text-xl mb-12 font-medium leading-relaxed max-w-sm group-hover:text-white transition-colors">
                    First time on the PW App? Unlock the special "Welcome" price with this verified code.
                  </p>
                </div>

                <div className="relative z-10 bg-black/30 backdrop-blur-sm border border-white/20 p-10 rounded-[2.5rem] text-center transition-all group-hover:bg-black/50 group-hover:border-white/40 group-hover:shadow-2xl">
                  <span className="block text-white/40 text-[10px] font-black uppercase mb-4 tracking-[0.4em] group-hover:text-pw-yellow transition-colors">Redeem Now</span>
                  <div className="text-5xl md:text-7xl font-black text-white mb-10 font-mono tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]">
                    {NEW_USER_COUPON}
                  </div>
                  <CopyButton code={NEW_USER_COUPON} variant="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VERIFIED BATCH CODES TABLE (PRIMARY SECTION) */}
        <section className="mb-24">
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden group/table transition-all duration-700 hover:shadow-pw-yellow/10">
            <div className="p-6 md:p-12 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 bg-gradient-to-r from-white to-gray-50/30">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-pw-dark mb-2 md:mb-3 tracking-tighter italic transition-all group-hover/table:translate-x-2">Verified Batch Codes</h2>
                <p className="text-gray-400 font-bold text-sm md:text-lg">Instant discounts for JEE, NEET, and GATE Aspirants.</p>
              </div>
              <div className="flex justify-center">
                 <div className="bg-pw-yellow/10 border border-pw-yellow/40 px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl flex items-center transition-all hover:bg-pw-yellow hover:border-pw-yellow group/live cursor-pointer">
                    <span className="relative flex h-2 w-2 md:h-3 md:w-3 mr-3 md:mr-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-full w-full bg-green-500 transition-colors group-hover/live:bg-pw-dark"></span>
                    </span>
                    <span className="text-pw-dark text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors group-hover/live:text-pw-dark">Live 2026 Database</span>
                 </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100 table-auto">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="px-4 md:px-12 py-4 md:py-8 text-left text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">Target Batch</th>
                    <th className="px-4 md:px-12 py-4 md:py-8 text-left text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">Primary Coupon</th>
                    <th className="px-4 md:px-12 py-4 md:py-8 text-left text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest hidden sm:table-cell">Success Rate</th>
                    <th className="px-4 md:px-12 py-4 md:py-8 text-right text-[9px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50">
                  {[
                    { name: 'JEE (Lakshya/Arjuna)', code: PRIMARY_COUPON },
                    { name: 'NEET (Yakeen/Lakshya)', code: PRIMARY_COUPON },
                    { name: 'PW Power Batch', code: PRIMARY_COUPON },
                    { name: 'GATE Wallah 2026', code: PRIMARY_COUPON },
                    { name: 'UPSC Wallah', code: PRIMARY_COUPON },
                    { name: 'Commerce & CA', code: PRIMARY_COUPON },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-pw-yellow/5 transition-all group/row">
                      <td className="px-4 md:px-12 py-6 md:py-10 text-xs md:text-base font-bold text-pw-dark leading-tight transition-all group-hover/row:translate-x-2">{row.name}</td>
                      <td className="px-4 md:px-12 py-6 md:py-10">
                        <span className="text-sm md:text-lg font-mono font-black text-red-600 bg-red-50/30 px-2 py-1 rounded md:bg-transparent md:px-0 group-hover/row:text-pw-dark transition-all duration-300">
                          {row.code}
                        </span>
                      </td>
                      <td className="px-4 md:px-12 py-6 md:py-10 text-[9px] md:text-[10px] font-black text-green-600 uppercase tracking-widest hidden sm:table-cell">
                        <span className="px-3 py-1 bg-green-50 rounded-lg border border-green-100 group-hover/row:bg-green-200 transition-colors">99.8% Success</span>
                      </td>
                      <td className="px-4 md:px-12 py-6 md:py-10 text-right">
                        <CopyButton code={row.code} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TRUST SECTION (SECONDARY SECTION) */}
        <section className="mb-24 px-4 max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden group hover:shadow-blue-100 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-10 tracking-tight italic transition-all group-hover:translate-x-2">
              How We Verify PW Coupon Codes & Help You Get Maximum Discount
            </h2>
            
            <div className="space-y-8 text-gray-600 relative z-10">
              <p className="leading-relaxed text-base md:text-lg font-medium">
                At PW Coupon Hub, our team of student ambassadors manually researches and tests every <strong className="text-pw-dark">verified PW coupon code</strong> before it reaches our lists. We collect codes from reliable official Physics Wallah ambassador channels and trusted student partnership sources to ensure 100% validity for all users.
              </p>
              
              <p className="leading-relaxed text-base md:text-lg">
                Every <strong className="text-pw-dark">Physics Wallah discount</strong> shown on this site is updated frequently and double-checked specifically for the <strong className="text-pw-dark">2026 admissions</strong> cycle. We maintain a strict schedule to remove expired or invalid codes, ensuring our platform remains a helpful resource that avoids fake or misleading offers.
              </p>
              
              <div className="bg-blue-50/50 p-8 rounded-2xl border-l-8 border-pw-dark mt-10 transition-all hover:bg-blue-50 group-hover:translate-x-1">
                <h3 className="font-black text-pw-dark mb-4 uppercase tracking-widest text-xs">Support & Troubleshooting</h3>
                <p className="text-sm md:text-base">
                  If a <strong className="text-pw-dark">PW coupon code 2026</strong> does not apply at checkout, our dedicated support team is here to help. We can guide you step-by-step through the application process, suggest an alternative verified coupon, or help you find the best new-user and batch-specific discounts for your preparation needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE PW COUPON HUB SECTION */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-pw-dark mb-4 tracking-tighter italic">Why Choose PW Coupon Hub?</h2>
            <div className="w-24 h-1.5 bg-pw-yellow mx-auto rounded-full transition-all hover:w-48 duration-500"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className={`bg-white p-8 rounded-[2rem] shadow-xl border ${benefit.border} hover:shadow-2xl hover:shadow-blue-100/40 hover:-translate-y-3 transition-all duration-300 flex flex-col items-center text-center group cursor-default`}>
                <div className={`${benefit.bg} w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-sm group-hover:shadow-md`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-pw-dark mb-4 tracking-tight uppercase group-hover:text-pw-yellow transition-colors">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HELP NOTICE SECTION */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-pw-yellow/20 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 text-center shadow-xl shadow-pw-yellow/5 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pw-yellow/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              <h3 className="text-pw-dark font-black text-xl md:text-3xl mb-6 leading-tight tracking-tight relative z-10">
                If PW coupon code is not working <span className="underline decoration-pw-yellow decoration-4 underline-offset-4 md:underline-offset-8 group-hover:decoration-pw-dark transition-all">use Help center below</span> we will definitely help you.
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8 relative z-10">
                <a 
                  href="https://t.me/PWCOUPONNEW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0088cc] hover:bg-white hover:text-[#0088cc] border border-[#0088cc] text-white px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center shadow-lg hover:shadow-[#0088cc]/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.96-.75 3.78-1.65 6.31-2.74 7.58-3.27 3.61-1.5 4.35-1.76 4.84-1.77.11 0 .35.03.5.16.12.1.16.24.18.33.02.06.02.19 0 .28z"/></svg>
                  <span>Open Help Center</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pb-32 max-w-4xl mx-auto">
          <div className="text-center mb-10 group">
             <h2 className="text-4xl font-black text-pw-dark uppercase tracking-tight transition-all group-hover:tracking-wider">Student Support FAQ</h2>
             <div className="w-24 h-2 bg-pw-yellow mx-auto mt-6 rounded-full transition-all group-hover:w-48 duration-700"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm italic px-4">
              Learn more about <Link to="/physics-wallah-revolution-indian-education" className="text-pw-dark font-bold underline decoration-pw-yellow decoration-1 underline-offset-2 hover:decoration-pw-dark transition-all">how PW is changing Indian education</Link> and why it remains the top choice for millions.
            </p>
          </div>

          <div className="space-y-6 px-4">
            {studentFaqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 open:shadow-2xl hover:border-pw-yellow/30">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none select-none group-hover:bg-gray-50/50 transition-colors">
                  <h3 className="text-xl font-black text-pw-dark pr-8 leading-tight group-hover:text-blue-900 transition-colors">{faq.q}</h3>
                  <div className="text-pw-dark/30 group-open:text-pw-yellow transition-all duration-500 transform group-open:rotate-180 flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-10 text-gray-500 leading-relaxed pt-2">
                  <div className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-pw-yellow text-base font-medium transition-all group-hover:bg-yellow-50/30">
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

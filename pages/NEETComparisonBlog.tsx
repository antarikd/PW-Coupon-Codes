
import React, { useEffect } from 'react';
import CouponCard from '../components/CouponCard';
import { PRIMARY_COUPON } from '../constants';

const NEETComparisonBlog: React.FC = () => {
  useEffect(() => {
    document.title = "Best NEET Batches in PW 2026: Get Maximum Batch Discount";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Compare the best NEET batches in Physics Wallah for 2026. Learn how to get the maximum discount using our verified PW Coupon Code. Save big on medical prep!');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-gray-50/30 pb-20">
      {/* Blog Header */}
      <header className="bg-pw-dark text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pw-dark via-emerald-900 to-pw-dark opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-pw-yellow text-pw-dark text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-bounce">
              NEET 2026 ADMISSION GUIDE
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter italic shadow-sm">
            Best NEET Batches in Physics Wallah (2026): Yakeen, Lakshya, & Arjuna
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Everything you need to know about choosing the right medical batch for your 2026 goal.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
              <div className="prose prose-lg prose-pw max-w-none text-gray-700 space-y-8">
                
                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Overview of PW NEET Batches</h2>
                  <p className="leading-relaxed">
                    Choosing the best NEET batch in Physics Wallah (PW) is one of the most important decisions for NEET 2026 aspirants. PW offers multiple batches like <strong>Yakeen, Lakshya, and Arjuna</strong>, each designed for a specific type of student.
                  </p>
                  <p className="leading-relaxed">
                    This detailed comparison will help you understand which PW NEET batch is best for you in 2026, based on your class level, preparation stage, and learning needs.
                  </p>
                </section>

                <hr className="border-gray-100" />

                <section className="group">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight group-hover:text-blue-600 transition-colors">1. PW Arjuna NEET Batch (2026)</h2>
                  <div className="bg-blue-50/50 p-6 rounded-2xl mb-6 border border-blue-100 transition-all hover:bg-blue-50">
                    <p className="font-bold text-blue-800 uppercase text-xs mb-2">Best for: Class 11 Students</p>
                    <p className="text-sm">Targeting NEET 2026 from the very beginning of high school.</p>
                  </div>
                  <h4 className="font-bold text-pw-dark mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                    <li>Covers Class 11 NEET syllabus from basics to advanced.</li>
                    <li>Ideal for beginners and school-going students.</li>
                    <li>Strong foundation building in Physics, Chemistry, and Biology.</li>
                    <li>Regular DPPs and chapter-wise tests.</li>
                  </ul>
                  <p className="font-medium p-4 bg-gray-50 rounded-xl border-l-4 border-blue-400"><strong>Who Should Choose Arjuna?</strong> Students currently in Class 11 starting their journey for the first time.</p>
                </section>

                <section className="group">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight group-hover:text-green-600 transition-colors">2. PW Lakshya NEET Batch (2026)</h2>
                  <div className="bg-green-50/50 p-6 rounded-2xl mb-6 border border-green-100 transition-all hover:bg-green-50">
                    <p className="font-bold text-green-800 uppercase text-xs mb-2">Best for: Class 12 Students</p>
                    <p className="text-sm">Preparing for Boards and NEET 2026 simultaneously.</p>
                  </div>
                  <h4 className="font-bold text-pw-dark mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                    <li>Focus on Class 12 NEET syllabus.</li>
                    <li>Advanced-level problem solving for medical entrance.</li>
                    <li>NCERT-based teaching strictly aligned with latest NTA patterns.</li>
                    <li>Balanced approach of theory, intensive practice, and mock tests.</li>
                  </ul>
                  <p className="font-medium p-4 bg-gray-50 rounded-xl border-l-4 border-green-400"><strong>Who Should Choose Lakshya?</strong> Aspirants preparing alongside their board exams with a basic understanding of Class 11 concepts.</p>
                </section>

                <section className="group">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight group-hover:text-red-600 transition-colors">3. PW Yakeen NEET Batch (2026)</h2>
                  <div className="bg-red-50/50 p-6 rounded-2xl mb-6 border border-red-100 transition-all hover:bg-red-50">
                    <p className="font-bold text-red-800 uppercase text-xs mb-2">Best for: Dropper / Repeater Students</p>
                    <p className="text-sm">Full focus on cracking NEET after a gap year or second attempt.</p>
                  </div>
                  <h4 className="font-bold text-pw-dark mb-3">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                    <li>Complete full NEET syllabus (Class 11 + 12 combined).</li>
                    <li>Faster-paced revision-oriented teaching methods.</li>
                    <li>High-level question practice and ranking improvement strategies.</li>
                    <li>Intensive test series with detailed performance analysis.</li>
                  </ul>
                  <p className="font-medium p-4 bg-gray-50 rounded-xl border-l-4 border-red-400"><strong>Who Should Choose Yakeen?</strong> Droppers who want to dedicate 100% of their time to rank improvement.</p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Comparison Table: PW NEET Batches (2026)</h2>
                  <div className="overflow-x-auto rounded-3xl border border-gray-100">
                    <table className="min-w-full bg-white overflow-hidden">
                      <thead className="bg-pw-dark text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Batch Name</th>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Best For</th>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase tracking-widest">Syllabus Coverage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-pw-dark">Arjuna NEET</td>
                          <td className="px-6 py-4 text-sm">Class 11</td>
                          <td className="px-6 py-4 text-sm">Class 11 only</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-pw-dark">Lakshya NEET</td>
                          <td className="px-6 py-4 text-sm">Class 12</td>
                          <td className="px-6 py-4 text-sm">Class 12 only</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-pw-dark">Yakeen NEET</td>
                          <td className="px-6 py-4 text-sm">Droppers</td>
                          <td className="px-6 py-4 text-sm">Full (11+12)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="bg-pw-dark text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pw-yellow/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-1000"></div>
                  <h2 className="text-2xl font-black mb-6 relative z-10 uppercase tracking-tighter">Get PW NEET Batches at the Lowest Price</h2>
                  <p className="mb-6 opacity-80 relative z-10">Don't pay the full price. Use our verified ambassador codes to save instantly:</p>
                  <div className="flex flex-col md:flex-row gap-4 relative z-10">
                    <div className="bg-white/10 p-4 rounded-2xl flex-grow border border-white/5 transition-all hover:bg-white/20">
                      <p className="text-[10px] uppercase font-black tracking-widest mb-1 text-pw-yellow">Primary Coupon</p>
                      <p className="text-2xl font-black">{PRIMARY_COUPON}</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl flex-grow border border-white/5 transition-all hover:bg-white/20">
                      <p className="text-[10px] uppercase font-black tracking-widest mb-1 text-pw-yellow">Benefit</p>
                      <p className="text-lg font-black">Maximum Instant Discount</p>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-[2rem] text-center border-2 border-dashed border-pw-yellow/30">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-4 tracking-tight">Final Verdict</h2>
                  <p className="leading-relaxed text-gray-600 mb-6">
                    Physics Wallah provides one of the best and most affordable NEET preparation environments in India. Success in NEET 2026 depends on consistency, regular NCERT revision, and the smart use of PW resources like DPP video solutions. 
                  </p>
                  <p className="leading-relaxed font-black text-pw-dark italic text-xl">
                    Select the batch that matches your academic level, apply code {PRIMARY_COUPON}, and start your medical journey today!
                  </p>
                </section>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="mb-8">
                <CouponCard category="NEET Yakeen/Lakshya" />
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-pw-yellow group-hover:w-full transition-all duration-700 opacity-5"></div>
                <h3 className="text-lg font-black mb-6 text-pw-dark uppercase tracking-tight relative z-10">Admission Alerts</h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    {label: 'Arjuna 2.0', date: 'Open Now'},
                    {label: 'Lakshya Fastrack', date: 'Coming Soon'},
                    {label: 'Yakeen Hindi', date: 'Active'},
                    {label: 'Ultimate Crash', date: 'Dec 2025'}
                  ].map((alert, i) => (
                    <li key={i} className="flex justify-between items-center text-sm border-b border-gray-50 pb-2 hover:bg-gray-50 transition-colors p-1 rounded-lg">
                      <span className="font-bold text-gray-700">{alert.label}</span>
                      <span className="text-[10px] font-black bg-gray-100 px-2 py-1 rounded uppercase tracking-tighter text-gray-500">{alert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NEETComparisonBlog;

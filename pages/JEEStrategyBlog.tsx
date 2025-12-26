
import React, { useEffect } from 'react';
import CouponCard from '../components/CouponCard';

const JEEStrategyBlog: React.FC = () => {
  useEffect(() => {
    document.title = "JEE 2026 Strategy: Crack IIT & Save on PW Lakshya Batch";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Master your JEE 2026 prep with our PW Lakshya strategy guide. Plus, get the latest PW Coupon Code for maximum savings on your JEE batch. Step-by-step tips!');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-gray-50/30 pb-20">
      {/* Blog Header */}
      <header className="bg-pw-dark text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pw-dark via-blue-900 to-pw-dark opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-pw-yellow text-pw-dark text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              IIT JEE 2026 SPECIAL
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter italic drop-shadow-md">
            JEE 2026 Strategy with PW Lakshya: How to Use PW Resources Effectively
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A mentor-led guide for Class 12 students to balance boards and JEE preparation using the Lakshya batch effectively.
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
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Introduction for IIT JEE 2026 Aspirants</h2>
                  <p className="leading-relaxed">
                    Preparing for IIT JEE 2026 is a journey that requires more than just hard work; it requires a structured roadmap. For students currently in Class 12, the pressure is double because you have to balance your Board exams along with the highly competitive JEE Main and Advanced. 
                  </p>
                  <p className="leading-relaxed">
                    In this guide, we will discuss the complete <strong>JEE 2026 strategy</strong> using the <strong>PW Lakshya batch</strong>. We will break down exactly how to use <strong>PW resources for JEE</strong> to ensure you are not just studying, but studying effectively to secure a seat in the top IITs in your very first attempt.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">What is PW Lakshya Batch and Why It is Effective?</h2>
                  <p className="leading-relaxed">
                    The <strong>PW Lakshya batch</strong> is specifically designed for Class 12 students. It covers the entire Class 12 syllabus from a JEE perspective while also providing a bridge for Class 11 backlogs. 
                  </p>
                  <p className="leading-relaxed">
                    Why it works:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Top-tier faculty with years of experience in producing JEE toppers.</li>
                    <li>Synchronized curriculum that helps in both Boards and JEE.</li>
                    <li>Affordability combined with premium quality resources.</li>
                    <li>A massive community of competitive peers to keep you motivated.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Step-by-Step JEE 2026 Preparation Strategy</h2>
                  <p className="leading-relaxed">
                    To <strong>crack IIT JEE first attempt</strong>, you need to follow a phase-wise approach:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-pw-yellow/20">
                      <h4 className="font-black text-pw-dark mb-2">Phase 1: Syllabus Completion (Until October 2025)</h4>
                      <p className="text-sm">Your primary goal should be to finish the Class 12 syllabus by October. This gives you enough time for the first attempt of JEE Main in January 2026.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-pw-yellow/20">
                      <h4 className="font-black text-pw-dark mb-2">Phase 2: Class 11 Revision (November - December 2025)</h4>
                      <p className="text-sm">Use the Lakshya revision modules to brush up on high-weightage Class 11 topics like Mechanics, Organic Chemistry basics, and Calculus fundamentals.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">How to Use PW Resources Effectively</h2>
                  
                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-4 border-b-2 border-pw-yellow w-fit">1. Live Classes vs. Recorded Lectures</h3>
                  <p className="text-gray-600 mb-4">Always try to attend <strong>Live Classes</strong>. It maintains a routine. However, if you miss a class, watch the recording within 24 hours. Do not let backlogs pile up. Use the 1.5x speed feature only for topics you are already comfortable with.</p>

                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-4 border-b-2 border-pw-yellow w-fit">2. NCERT + PW Notes</h3>
                  <p className="text-gray-600 mb-4">For Chemistry, NCERT is your bible. For Physics and Maths, PW class notes are sufficient for concept building. Supplement these with PW Modules for Advanced-level problems.</p>

                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-4 border-b-2 border-pw-yellow w-fit">3. Daily Practice Problems (DPPs)</h3>
                  <p className="text-gray-600 mb-4">Never skip a DPP. If you get stuck, try the problem at least three times before watching the video solution. The struggle of solving a problem is what builds your brain's logic.</p>

                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-4 border-b-2 border-pw-yellow w-fit">4. Tests & Mock Exams</h3>
                  <p className="text-gray-600 mb-4">The All India Test Series (AITS) in the Lakshya batch is vital. Even if your preparation is 60%, give the test. Analyze the "Silly Mistakes" and "Conceptual Gaps" after every exam.</p>
                </section>

                <section className="bg-pw-dark text-white p-10 rounded-[2.5rem] shadow-2xl transition-transform hover:scale-[1.01]">
                  <h2 className="text-2xl font-black mb-6">High-Weightage JEE Chapters 2026</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="hover:bg-white/5 p-4 rounded-xl transition-colors">
                      <h4 className="text-pw-yellow font-bold mb-2 uppercase tracking-widest text-xs">Physics</h4>
                      <ul className="text-sm space-y-1 opacity-80">
                        <li>Modern Physics</li>
                        <li>Electrostatics</li>
                        <li>Current Electricity</li>
                        <li>Optics</li>
                      </ul>
                    </div>
                    <div className="hover:bg-white/5 p-4 rounded-xl transition-colors">
                      <h4 className="text-pw-yellow font-bold mb-2 uppercase tracking-widest text-xs">Chemistry</h4>
                      <ul className="text-sm space-y-1 opacity-80">
                        <li>GOC & Hydrocarbons</li>
                        <li>Coordination Compounds</li>
                        <li>Thermodynamics</li>
                        <li>Chemical Bonding</li>
                      </ul>
                    </div>
                    <div className="hover:bg-white/5 p-4 rounded-xl transition-colors">
                      <h4 className="text-pw-yellow font-bold mb-2 uppercase tracking-widest text-xs">Mathematics</h4>
                      <ul className="text-sm space-y-1 opacity-80">
                        <li>Calculus (Integral/Diff)</li>
                        <li>Vectors & 3D Geometry</li>
                        <li>Matrices & Determinants</li>
                        <li>Probability</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Daily Study Routine (Sample)</h2>
                  <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="min-w-full bg-white overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase text-gray-400">Time Block</th>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase text-gray-400">Activity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 text-sm font-bold">06:00 AM - 08:30 AM</td><td className="px-6 py-4 text-sm">Self-study (Difficult Physics/Maths topics)</td></tr>
                        <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 text-sm font-bold">09:00 AM - 02:00 PM</td><td className="px-6 py-4 text-sm">School / Board Focused Study</td></tr>
                        <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 text-sm font-bold">04:00 PM - 08:30 PM</td><td className="px-6 py-4 text-sm">PW Lakshya Live Classes</td></tr>
                        <tr className="hover:bg-gray-50 transition-colors"><td className="px-6 py-4 text-sm font-bold">09:30 PM - 11:30 PM</td><td className="px-6 py-4 text-sm">DPP Solving & Daily Revision</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Common Mistakes to Avoid</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start bg-red-50/50 p-4 rounded-xl border-l-4 border-red-500">
                      <span className="text-red-500 mr-2 font-black">X</span>
                      <span><strong>Ignoring Class 11:</strong> Many students focus only on Class 12. Remember, 45-50% of the JEE paper comes from Class 11.</span>
                    </li>
                    <li className="flex items-start bg-red-50/50 p-4 rounded-xl border-l-4 border-red-500">
                      <span className="text-red-500 mr-2 font-black">X</span>
                      <span><strong>Collecting Too Many Books:</strong> Stick to PW Modules and standard references like HC Verma or MS Chauhan. Too many books lead to zero completion.</span>
                    </li>
                    <li className="flex items-start bg-red-50/50 p-4 rounded-xl border-l-4 border-red-500">
                      <span className="text-red-500 mr-2 font-black">X</span>
                      <span><strong>Procrastinating Revision:</strong> Knowledge without revision is like a leaky bucket. Revise every Sunday.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Mental Health & Discipline</h2>
                  <p className="leading-relaxed">
                    JEE is a marathon, not a sprint. Take 15-minute breaks after every 2 hours of study. Sleep for at least 6-7 hours. A tired brain cannot solve complex integration problems. Stay away from social media distractions and keep your goal—the IIT campus—in front of your study table.
                  </p>
                </section>

                <section className="bg-yellow-50 p-8 rounded-[2.5rem] border-2 border-pw-yellow/20 relative">
                   <div className="absolute top-4 right-4 text-4xl opacity-10">💡</div>
                   <h2 className="text-2xl font-black text-pw-dark mb-4 uppercase tracking-tighter">Strong Conclusion & Motivation</h2>
                   <p className="text-gray-700 font-medium">
                    You have roughly 15-18 months left for <strong>IIT JEE preparation 2026</strong>. This is more than enough time to change your life. Thousands of students from humble backgrounds have cracked JEE using <strong>PW resources for JEE</strong>. If they can do it, so can you. 
                   </p>
                   <p className="mt-4 text-gray-700 font-medium">
                    Focus on the process, be honest with your DPPs, and attend every Lakshya lecture with full concentration. Your IIT seat is waiting for you!
                   </p>
                </section>

              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="mb-8">
                <CouponCard category="JEE Lakshya Batch" />
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-black mb-6 text-pw-dark uppercase tracking-tight">Strategy Checklist</h3>
                <ul className="space-y-4">
                  {[
                    'Class 12 Syllabus Track',
                    'Class 11 Backlog Plan',
                    'DPP Completion Status',
                    'Weekly Test Analysis',
                    'Short Notes Preparation'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="w-5 h-5 border-2 border-pw-yellow rounded flex items-center justify-center group-hover:bg-pw-yellow transition-colors">
                        <div className="w-2 h-2 bg-pw-yellow rounded-sm group-hover:bg-white"></div>
                      </div>
                      <span className="text-sm font-bold text-gray-600 group-hover:text-pw-dark transition-colors">{item}</span>
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

export default JEEStrategyBlog;

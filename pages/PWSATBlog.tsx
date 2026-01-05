
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CouponCard from '../components/CouponCard';
import { PRIMARY_COUPON } from '../constants';

const PWSATBlog: React.FC = () => {
  useEffect(() => {
    document.title = "PW SAT 2026: Complete Details, Eligibility, Syllabus, Registration & Benefits";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Complete guide to PW SAT 2026. Learn about the Physics Wallah Scholarship Admission Test eligibility, syllabus, registration process, and how to get up to 100% scholarship.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-gray-50/30 pb-20">
      {/* Blog Header */}
      <header className="bg-pw-dark text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pw-dark via-blue-900 to-pw-dark opacity-40"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-pw-yellow text-pw-dark text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              Scholarship Alert 2026
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter italic shadow-sm">
            PW SAT 2026: Complete Details, Eligibility, Syllabus, Registration & Benefits
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Unlock up to 100% scholarship for JEE, NEET, and Foundation batches through the Physics Wallah Scholarship Admission Test.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-2 space-y-12">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 transition-all hover:shadow-2xl">
              <div className="prose prose-lg prose-pw max-w-none text-gray-700 space-y-8">
                
                <section id="introduction">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Introduction</h2>
                  <p className="leading-relaxed">
                    Quality education is the right of every student, regardless of their financial background. However, the high costs of competitive exam coaching often act as a barrier for many talented aspirants. To bridge this gap, <strong>Physics Wallah</strong> conducts the <strong>PW SAT (Physics Wallah Scholarship Admission Test)</strong>.
                  </p>
                  <p className="leading-relaxed">
                    The <strong>PW SAT 2026</strong> is more than just an entrance exam; it is a gateway for students to secure world-class coaching for JEE, NEET, and Foundation courses at a fraction of the cost—or even entirely for free. In this comprehensive guide, we will explore everything you need to know about the <strong>Physics Wallah Scholarship Test</strong>, from registration to the benefits that can change your academic trajectory.
                  </p>
                </section>

                <section id="what-is-pwsat">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">What is PW SAT (Physics Wallah Scholarship Admission Test)?</h2>
                  <p className="leading-relaxed">
                    PW SAT stands for the Physics Wallah Scholarship Admission Test. It is a national-level talent search and scholarship exam designed to identify bright minds and provide them with the financial support they need to succeed in India's toughest competitive exams.
                  </p>
                  <h3 className="text-xl font-bold text-pw-dark mt-4">The Purpose of the Exam</h3>
                  <p className="leading-relaxed">
                    The primary purpose of <strong>PW SAT 2026</strong> is to provide scholarships of up to 100% to deserving students. This helps students from diverse socio-economic backgrounds join the <Link to="/physics-wallah-revolution-indian-education" className="text-blue-600 underline">Physics Wallah revolution</Link> and get mentored by top-tier faculty.
                  </p>
                  <h3 className="text-xl font-bold text-pw-dark mt-4">Who Can Appear?</h3>
                  <p className="leading-relaxed">
                    Students currently studying in Classes 6, 7, 8, 9, 10, 11, and 12, as well as 12th-pass (dropper) students, are eligible to appear for this test. It covers aspirants for:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>IIT JEE (Main & Advanced)</li>
                    <li>NEET (Medical Entrance)</li>
                    <li>Foundation Courses (Olympiads, NTSE)</li>
                    <li>Board Exam Excellence</li>
                  </ul>
                </section>

                <section id="highlights">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">PW SAT 2026 Highlights</h2>
                  <div className="overflow-x-auto rounded-2xl border border-gray-100">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase text-gray-400">Feature</th>
                          <th className="px-6 py-4 text-left text-xs font-black uppercase text-gray-400">Details</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        <tr><td className="px-6 py-4 font-bold">Exam Name</td><td className="px-6 py-4 text-sm">PW SAT 2026</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Conducting Body</td><td className="px-6 py-4 text-sm">Physics Wallah (PW)</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Mode of Exam</td><td className="px-6 py-4 text-sm">Online (App/Web) & Offline (Select Centers)</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Maximum Scholarship</td><td className="px-6 py-4 text-sm">Up to 100% on Course Fees</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Application Fee</td><td className="px-6 py-4 text-sm">Generally Free / Minimal (Check App)</td></tr>
                        <tr><td className="px-6 py-4 font-bold">Target Exams</td><td className="px-6 py-4 text-sm">JEE, NEET, NTSE, KVPY, Olympiads</td></tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="eligibility">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">PW SAT Eligibility Criteria</h2>
                  <p className="leading-relaxed">
                    To ensure every student gets a fair chance, the <strong>PW SAT eligibility</strong> is kept broad. If you belong to any of the following categories, you can register for the <strong>PW SAT 2026</strong>:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <h4 className="font-bold mb-2">School Students</h4>
                      <p className="text-sm">Students moving from Class 5 to 6, up to Class 11 to 12.</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                      <h4 className="font-bold mb-2">Aspirants & Droppers</h4>
                      <p className="text-sm">Class 12 pass-out students planning to take a drop for JEE/NEET 2026.</p>
                    </div>
                  </div>
                </section>

                <section id="syllabus">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">PW SAT 2026 Syllabus: What to Study?</h2>
                  <p className="leading-relaxed">
                    The <strong>PW SAT syllabus</strong> is strictly aligned with the NCERT curriculum of the student's current class. This ensures that you don't need to study anything "extra" beyond your school books, though a deeper conceptual understanding is required.
                  </p>
                  
                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-2">For Classes 6 to 10 (Foundation)</h3>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    <li>Mathematics: Basic arithmetic, geometry, and algebra (as per class).</li>
                    <li>Science: Physics, Chemistry, and Biology basics.</li>
                    <li>Mental Ability (IQ): Logical reasoning, number series, and puzzles.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-2">For Classes 11, 12 & Droppers (JEE/NEET)</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Physics: Mechanics, Thermodynamics, Electromagnetism, etc.</li>
                    <li>Chemistry: Physical, Organic, and Inorganic Chemistry.</li>
                    <li>Mathematics (for JEE): Algebra, Calculus, Trigonometry.</li>
                    <li>Biology (for NEET): Botany and Zoology.</li>
                  </ul>
                  <p className="mt-4 italic text-sm text-gray-500">Note: The test focuses on checking your fundamental clarity rather than rote memorization.</p>
                </section>

                <section id="pattern">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">PW SAT Exam Pattern & Marking Scheme</h2>
                  <p className="leading-relaxed">The <strong>Physics Wallah Scholarship Test</strong> follows a student-friendly pattern:</p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-pw-dark text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">1</span>
                      <span><strong>Type:</strong> Multiple Choice Questions (MCQs) only.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-pw-dark text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">2</span>
                      <span><strong>Duration:</strong> Typically 60 to 90 minutes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-6 h-6 bg-pw-dark text-white rounded-full flex items-center justify-center text-xs mr-3 mt-1 flex-shrink-0">3</span>
                      <span><strong>Marking:</strong> Usually +4 for correct and 0 or -1 for incorrect (Check specific instructions on the paper).</span>
                    </li>
                  </ul>
                </section>

                <section id="registration">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">How to Register for PW SAT 2026 (Step-by-Step)</h2>
                  <p className="leading-relaxed mb-6">Registering for the <strong>PW SAT registration</strong> process is simple and can be done from the comfort of your home:</p>
                  <div className="space-y-4">
                    {[
                      "Download the Physics Wallah App or visit the official website.",
                      "Click on the 'PW SAT' banner or search for the scholarship test section.",
                      "Fill in your basic details: Name, Class, Target Exam (JEE/NEET), and Mobile Number.",
                      "Select your preferred exam date and slot (for online mode).",
                      "Select the exam mode (Online or Offline).",
                      "Submit the form and receive your admit card/hall ticket on your registered number/email."
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                        <span className="font-black text-pw-yellow mr-4">Step 0{idx+1}</span>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="benefits">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">PW SAT Scholarship & Discount Benefits</h2>
                  <p className="leading-relaxed">
                    The biggest of the <strong>PW SAT benefits</strong> is the massive reduction in course fees. Based on your performance, you can get:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-medium">
                    <li>100% Scholarship: Completely free coaching at Vidyapith or Online.</li>
                    <li>70% - 90% Scholarship: For top rankers.</li>
                    <li>20% - 50% Scholarship: For consistent performers.</li>
                  </ul>
                  <h3 className="text-xl font-bold text-pw-dark mt-6 mb-2">PW SAT Scholarship vs Coupon Code</h3>
                  <p className="leading-relaxed">
                    A <strong>PW Coupon Code</strong> like <strong>{PRIMARY_COUPON}</strong> provides an instant flat discount to everyone. However, <strong>PW SAT 2026</strong> is performance-based. If you score well, you can save much more through PW SAT than through a standard coupon.
                  </p>
                </section>

                <section id="can-stack" className="bg-yellow-50 p-8 rounded-[2rem] border-2 border-pw-yellow/20">
                  <h2 className="text-2xl font-black text-pw-dark mb-4">Can PW Coupon Codes Be Used with PW SAT?</h2>
                  <p className="leading-relaxed mb-4">
                    This is a common question among students. Generally, scholarship discounts and coupon codes cannot be "stacked" or added together in a single transaction on the PW App.
                  </p>
                  <p className="leading-relaxed font-bold">
                    Our Advice:
                  </p>
                  <p className="text-sm">
                    If you get a 90% scholarship via PW SAT, use it! It's the best deal. If you don't appear for PW SAT or get a smaller scholarship (like 5%), you should compare it with the discount offered by <Link to="/how-to-apply-pw-coupon-code-2026" className="text-pw-dark font-black underline">verified PW coupon codes</Link> to see which saves you more. 
                  </p>
                  <p className="mt-4 text-xs italic">For the most up-to-date guidance on stacking, contact our Telegram help desk.</p>
                </section>

                <section id="tips">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Important Preparation Tips for PW SAT</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-gray-100 rounded-2xl">
                      <h4 className="font-bold mb-2">Focus on NCERT</h4>
                      <p className="text-xs">90% of the questions are conceptual variants of NCERT problems. Don't skip the basics.</p>
                    </div>
                    <div className="p-6 border border-gray-100 rounded-2xl">
                      <h4 className="font-bold mb-2">Practice Mental Ability</h4>
                      <p className="text-xs">For foundation students, IQ questions carry significant weight. Practice logical reasoning daily.</p>
                    </div>
                  </div>
                </section>

                <section id="faqs">
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">FAQs about PW SAT 2026</h2>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">Q: Is the PW SAT exam online or offline?</h4>
                      <p className="text-sm">A: Both! You can choose to take the test online via the PW App/Website or offline at designated PW Vidyapith centers across India.</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q: Is there any registration fee for PW SAT?</h4>
                      <p className="text-sm">A: Registration is generally free for students to encourage maximum participation. Check the latest status on the official PW App.</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q: When will the PW SAT 2026 results be declared?</h4>
                      <p className="text-sm">A: Results are typically announced within 7 to 10 days of the exam date on the official PW platform.</p>
                    </div>
                    <div>
                      <h4 className="font-bold">Q: Can I re-appear for PW SAT if I scored low?</h4>
                      <p className="text-sm">A: Usually, a student can appear once per session. However, during different "phases" of the test, new opportunities might arise.</p>
                    </div>
                  </div>
                </section>

                <section id="conclusion" className="bg-pw-dark text-white p-10 rounded-[2.5rem] text-center">
                  <h2 className="text-2xl font-black mb-6">Final Conclusion</h2>
                  <p className="mb-8 opacity-80">
                    The <strong>PW SAT 2026</strong> is an incredible opportunity for students to prove their mettle and secure their future. Whether you want to join a <Link to="/pw-jee-coupon-code" className="text-pw-yellow underline">JEE batch</Link> or a <Link to="/pw-neet-coupon-code" className="text-pw-yellow underline">NEET batch</Link>, this test can help you do it with minimal financial stress.
                  </p>
                  <p className="font-black italic text-pw-yellow">
                    Register today, test your knowledge, and take the first step toward your dream IIT or Medical college!
                  </p>
                </section>

              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="mb-8">
                <CouponCard category="PW SAT Batch Discount" />
              </div>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                <h3 className="text-lg font-black mb-6 text-pw-dark uppercase tracking-tight">Article Sections</h3>
                <ul className="space-y-3 text-sm font-bold text-gray-500">
                  <li><a href="#what-is-pwsat" className="hover:text-pw-dark transition-colors">What is PW SAT?</a></li>
                  <li><a href="#highlights" className="hover:text-pw-dark transition-colors">Exam Highlights</a></li>
                  <li><a href="#syllabus" className="hover:text-pw-dark transition-colors">Detailed Syllabus</a></li>
                  <li><a href="#registration" className="hover:text-pw-dark transition-colors">Registration Steps</a></li>
                  <li><a href="#benefits" className="hover:text-pw-dark transition-colors">Scholarship Benefits</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PWSATBlog;


import React, { useEffect } from 'react';
import CouponCard from '../components/CouponCard';
import { PRIMARY_COUPON } from '../constants';

const HowToApplyBlog: React.FC = () => {
  useEffect(() => {
    document.title = "How to Apply PW Coupon Code 2026: Step-by-Step Guide";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Learn exactly how to apply Physics Wallah (PW) coupon codes in 2026. Get maximum discounts on JEE, NEET, and GATE batches with our trusted student guide.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-gray-50/30 pb-20">
      {/* Article Header */}
      <header className="bg-pw-dark text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent opacity-30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6">
            <span className="bg-pw-yellow text-pw-dark text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              2026 Enrollment Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter italic drop-shadow-lg">
            How to Apply PW Coupon Code 2026: The Ultimate Student Guide
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            A comprehensive, step-by-step walkthrough to ensure you get the maximum discount on every Physics Wallah batch.
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
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">What Is a PW Coupon Code?</h2>
                  <p className="leading-relaxed">
                    A <strong>PW Coupon Code</strong> is a special promotional and discount code provided for students who want to enroll in Physics Wallah (PW) courses at a reduced price. These coupon codes are designed to help students get instant discounts on PW batches, including <strong>JEE, NEET, GATE, UPSC, and Foundation</strong> courses.
                  </p>
                  <p className="leading-relaxed">
                    PW coupon codes are usually applicable to selected batches and may vary depending on the course type, user eligibility, and ongoing offers. In many cases, new users receive exclusive and higher discounts, making PW courses more affordable.
                  </p>
                  <p className="leading-relaxed">
                    Using the right PW coupon code at the right time can help you access premium Physics Wallah courses at a much lower cost, without compromising on quality education.
                  </p>
                </section>

                <hr className="border-gray-100" />

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Step-by-Step Guide: How to Apply PW Coupon Code in 2026</h2>
                  <p className="mb-8 font-medium italic text-gray-500">Follow these simple and easy steps carefully to apply a PW discount code in 2026 and get the maximum benefit:</p>
                  
                  <div className="space-y-6">
                    {[
                      { step: 1, title: "Visit the Official Physics Wallah Website or App", content: "Go to the official Physics Wallah website or open the PW mobile app on your smartphone. Make sure you are logged in using your registered mobile number or email ID before proceeding." },
                      { step: 2, title: "Choose Your Desired PW Batch", content: "Select the course or batch you want to enroll in. Popular options include PW JEE batches, NEET batches, GATE courses, and UPSC programs. Click on the “Enroll Now” button." },
                      { step: 3, title: "Proceed to the Checkout Page", content: "Once you click on enroll, you will be redirected to the checkout or payment page, where the total course fee and offer details are displayed." },
                      { step: 4, title: "Enter the PW Coupon Code", content: `On the checkout page, look for the “Apply Coupon Code” field. Carefully enter code ${PRIMARY_COUPON} and click on the Apply button.` },
                      { step: 5, title: "Verify the Discount", content: "After applying successfully, the discounted price will be shown instantly. Always double-check that the discount has been applied before moving to payment." },
                      { step: 6, title: "Complete the Payment", content: "Once the reduced price is confirmed, select your preferred payment method and complete the transaction. Congratulations! You've saved money." },
                    ].map((item) => (
                      <div key={item.step} className="flex group cursor-default p-4 rounded-2xl transition-all hover:bg-gray-50">
                        <div className="mr-6 flex-shrink-0">
                          <span className="w-10 h-10 md:w-12 md:h-12 bg-pw-dark text-pw-yellow rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transition-all group-hover:scale-110 group-hover:rotate-6 group-hover:bg-pw-yellow group-hover:text-pw-dark">
                            {item.step}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-pw-dark mb-2 transition-colors group-hover:text-blue-900">{item.title}</h3>
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed transition-colors group-hover:text-gray-900">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-[2rem] border-l-8 border-pw-yellow my-12 transition-transform hover:scale-[1.01] hover:bg-yellow-50/50">
                  <h2 className="text-xl md:text-2xl font-black text-pw-dark mb-4 uppercase tracking-tighter">How to Get Maximum Discount on PW Batches in 2026</h2>
                  <ul className="space-y-3 list-disc list-inside font-medium text-gray-700">
                    <li className="hover:translate-x-1 transition-transform">Always use verified and updated PW coupon codes like <span className="text-red-600 font-black">{PRIMARY_COUPON}</span></li>
                    <li className="hover:translate-x-1 transition-transform">New users often receive higher welcome discounts</li>
                    <li className="hover:translate-x-1 transition-transform">Apply coupon codes during admission seasons or festival sales</li>
                    <li className="hover:translate-x-1 transition-transform">Avoid using fake, expired, or untrusted coupon codes</li>
                  </ul>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <h3 className="font-black text-pw-dark mb-3 uppercase tracking-tight text-sm">Is PW Coupon Valid for All Batches?</h3>
                    <p className="text-xs text-gray-500">Most codes are valid for popular courses such as JEE, NEET, GATE, and UPSC. However, the discount percentage may vary depending on the batch and duration.</p>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                    <h3 className="font-black text-pw-dark mb-3 uppercase tracking-tight text-sm">Can You Use PW Code on Mobile App?</h3>
                    <p className="text-xs text-gray-500">Yes, PW coupon codes can be applied on both the Physics Wallah official website and the PW mobile app seamlessly.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-black text-pw-dark mb-6 tracking-tight">Why Use a Verified PW Coupon Code Website?</h2>
                  <p className="leading-relaxed">
                    A trusted and verified PW coupon website like ours offers benefits such as 100% working codes, latest updated offers for 2026, and a much higher success rate compared to random sources.
                  </p>
                </section>

                <section className="bg-red-600 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group transition-all hover:shadow-red-200">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                  <h2 className="text-2xl font-black mb-4 relative z-10 uppercase tracking-tighter italic">Important Note for Maximum PW Discount</h2>
                  <p className="mb-0 text-white/90 font-medium relative z-10">
                    To unlock the maximum discount, it is strongly recommended to use a <strong>new or unregistered mobile number</strong> during enrollment. In many cases, PW provides higher discounts to new users compared to existing users.
                  </p>
                  <p className="mt-4 text-white/90 font-medium relative z-10">
                    If the code shows an error, contact our support team via the help center immediately for an alternative verified code.
                  </p>
                </section>

                <div className="pt-10 border-t border-gray-100">
                   <h2 className="text-xl font-black text-pw-dark mb-4 italic transition-all hover:translate-x-2">Final Words</h2>
                   <p className="text-gray-500 italic">
                    Applying a PW Coupon Code in 2026 is one of the easiest ways to access high-quality education at a fraction of the cost. Stay smart, stay budget-friendly, and start your journey with Physics Wallah today.
                   </p>
                </div>

              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="mb-8">
                <CouponCard category="All PW Batches" />
              </div>
              
              <div className="bg-pw-dark p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group transition-all hover:shadow-pw-dark/40">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity group-hover:opacity-20"></div>
                <h3 className="text-xl font-black mb-6 relative z-10 uppercase tracking-tight">Need Assistance?</h3>
                <p className="text-white/60 text-sm mb-8 relative z-10">Our ambassadors are available 24/7 on Telegram to help you apply codes or choose batches.</p>
                <a 
                  href="https://t.me/PWCOUPONNEW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-pw-yellow text-pw-dark py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:shadow-lg transition-all transform active:scale-95 shadow-lg relative z-10"
                >
                  Join Telegram Help
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HowToApplyBlog;

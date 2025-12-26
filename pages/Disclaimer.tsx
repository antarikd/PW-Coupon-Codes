
import React, { useEffect } from 'react';
import { PAGE_DATA } from '../constants';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    document.title = PAGE_DATA.disclaimer.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DATA.disclaimer.metaDesc);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in bg-gray-50/30 pb-20">
      {/* Header */}
      <header className="bg-pw-dark text-white py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter italic">
            Affiliate Disclosure & Disclaimer
          </h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            Transparency is the foundation of our student community. Learn more about how we maintain this platform.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-gray-100">
          <div className="prose prose-pw max-w-none text-gray-700 space-y-10">
            
            <section>
              <h2 className="text-2xl font-black text-pw-dark mb-6 tracking-tight uppercase">1. Affiliate Disclosure</h2>
              <p className="leading-relaxed">
                In compliance with the FTC guidelines and Google’s transparency policies, we wish to disclose that <strong>PW Coupon Hub</strong> is a participant in various affiliate marketing programs. This means that when you click on certain links on our website and make a purchase (such as enrolling in a Physics Wallah batch), we may receive a small commission from the provider.
              </p>
              <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-pw-yellow my-6">
                <p className="font-bold text-pw-dark mb-2 italic">Crucial Information for Students:</p>
                <p className="text-sm">Using our <strong>Physics Wallah coupon code</strong> or links never results in an extra cost to you. In fact, our codes are designed to provide you with the <strong>maximum available discount</strong> on the platform.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-pw-dark mb-6 tracking-tight uppercase">2. Non-Official Platform Status</h2>
              <p className="leading-relaxed">
                It is important to understand that <strong>this is not the official website of Physics Wallah (PW)</strong> or PhysicsWallah Pvt Ltd. We are an independent, student-led resource center dedicated to providing verified <strong>PW discount offers</strong> and educational guidance to help aspirants navigate their prep journey.
              </p>
              <p className="leading-relaxed">
                While we strive for excellence, any official support regarding batch access, app technicalities, or refund requests must be handled directly through the official Physics Wallah support channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-pw-dark mb-6 tracking-tight uppercase">3. Verification of Coupon Codes</h2>
              <p className="leading-relaxed">
                Our team manually researches and tests every <strong>verified PW coupon</strong> listed on this site. We aim to keep our database updated for the 2026 academic session. However, please note that:
              </p>
              <ul className="list-disc list-inside space-y-3 marker:text-pw-yellow">
                <li>Physics Wallah reserves the right to modify or deactivate any promo code at their discretion.</li>
                <li>Discount percentages may vary depending on the batch type and enrollment period.</li>
                <li>Certain "Welcome" offers may only apply to new users who haven't registered on the PW app before.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-pw-dark mb-6 tracking-tight uppercase">4. Pricing and Information Accuracy</h2>
              <p className="leading-relaxed">
                All information provided on this website regarding fees, batch schedules, and faculty is for <strong>educational and informational purposes only</strong>. Final pricing is strictly controlled by Physics Wallah and is subject to change without notice. We recommend verifying the final checkout price on the official PW App or Website before completing any transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-pw-dark mb-6 tracking-tight uppercase">5. Contact and Support</h2>
              <p className="leading-relaxed">
                Our goal is to assist students in making quality education more affordable. If you find a <strong>Physics Wallah coupon code</strong> that is not working, please contact us via our Telegram help center, and our ambassadors will provide you with a fresh, working alternative.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400 font-medium italic">
                Last Updated: October 2025. This disclaimer is subject to periodic updates to remain compliant with changing digital advertising regulations.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;


import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CouponTemplate from './pages/CouponTemplate';
import Blogs from './pages/Blogs';
import EduOffers from './pages/EduOffers';
import HowToApplyBlog from './pages/HowToApplyBlog';
import JEEStrategyBlog from './pages/JEEStrategyBlog';
import NEETComparisonBlog from './pages/NEETComparisonBlog';
import VidyapithVsOnlineBlog from './pages/VidyapithVsOnlineBlog';
import NEETWeightageBlog from './pages/NEETWeightageBlog';
import PWRevolutionBlog from './pages/PWRevolutionBlog';
import PWSATBlog from './pages/PWSATBlog';
import NeetVsJeeBlog from './pages/NeetVsJeeBlog';
import Disclaimer from './pages/Disclaimer';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pw-coupon-code" element={<CouponTemplate pageKey="pwCoupon" />} />
          <Route path="/pw-jee-coupon-code" element={<CouponTemplate pageKey="jee" />} />
          <Route path="/pw-neet-coupon-code" element={<CouponTemplate pageKey="neet" />} />
          <Route path="/pw-gate-coupon-code" element={<CouponTemplate pageKey="gate" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/how-to-apply-pw-coupon-code-2026" element={<HowToApplyBlog />} />
          <Route path="/jee-2026-strategy-pw-lakshya" element={<JEEStrategyBlog />} />
          <Route path="/best-neet-batches-physics-wallah-2026" element={<NEETComparisonBlog />} />
          <Route path="/pw-offline-vidyapith-vs-online-batches" element={<VidyapithVsOnlineBlog />} />
          <Route path="/neet-high-weightage-chapters-guide" element={<NEETWeightageBlog />} />
          <Route path="/physics-wallah-revolution-indian-education" element={<PWRevolutionBlog />} />
          <Route path="/pw-sat-scholarship-test-2026" element={<PWSATBlog />} />
          <Route path="/neet-vs-jee-2026-comparison-guide" element={<NeetVsJeeBlog />} />
          <Route path="/edu-offers" element={<EduOffers />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          {/* Catch all for SEO friendliness */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;


import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CouponTemplate from './pages/CouponTemplate';
import Blogs from './pages/Blogs';
import EduOffers from './pages/EduOffers';

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
          <Route path="/edu-offers" element={<EduOffers />} />
          {/* Catch all for SEO friendliness */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

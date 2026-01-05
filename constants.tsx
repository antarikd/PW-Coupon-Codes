
import React from 'react';
import { CouponData, NavLink } from './types';

export const PRIMARY_COUPON = "ANTDAS0001";
export const NEW_USER_COUPON = "6296JVYD";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'PW Coupon', path: '/pw-coupon-code' },
  { label: 'JEE', path: '/pw-jee-coupon-code' },
  { label: 'NEET', path: '/pw-neet-coupon-code' },
  { label: 'GATE', path: '/pw-gate-coupon-code' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Offers', path: '/edu-offers' },
];

export const PAGE_DATA: Record<string, CouponData> = {
  home: {
    title: "Pw coupon code 2026: Physics Wallah Maximum Discount Code (Verified)",
    metaTitle: "Pw coupon code 2026: Physics Wallah Maximum Discount Code",
    metaDesc: "Claim the best Physics Wallah Offer with Pw coupon code 2026. Use PW maximum discount code ANTDAS0001 for all batches including JEE & NEET.",
    h1: "PW Coupon Code Pw maximum discount",
    keyword: "PW Coupon Code 2026",
    path: "/"
  },
  pwCoupon: {
    title: "Physics Wallah Offer: Get PW Maximum Discount Code 2026",
    metaTitle: "Physics Wallah Offer: Get PW Maximum Discount Code 2026",
    metaDesc: "Looking for a Physics Wallah Offer? Use the PW maximum discount code for extra savings. Verified PW coupon code 2026 for instant batch discounts!",
    h1: "Verified Physics Wallah Coupon Code 2026",
    keyword: "Physics Wallah Coupon Code",
    path: "/pw-coupon-code"
  },
  jee: {
    title: "PW JEE Coupon Code 2026: Best Physics Wallah Offer for IIT JEE",
    metaTitle: "PW JEE Coupon Code 2026: Best Physics Wallah Offer for IIT JEE",
    metaDesc: "Unlock the Physics Wallah Maximum Discount Code for JEE Lakshya & Arjuna. The most trusted PW JEE coupon code 2026 for engineering aspirants.",
    h1: "PW JEE Coupon Code 2026: Save on Lakshya & Arjuna",
    keyword: "PW JEE Coupon Code",
    path: "/pw-jee-coupon-code"
  },
  neet: {
    title: "PW NEET Coupon Code 2026: Medical Batch Physics Wallah Offer",
    metaTitle: "PW NEET Coupon Code 2026: Medical Batch Physics Wallah Offer",
    metaDesc: "Score the PW maximum discount code for NEET Yakeen & Lakshya. Official PW NEET coupon code 2026 for maximum savings on medical batches.",
    h1: "PW NEET Coupon Code 2026: Best Deal for Medical Batches",
    keyword: "PW NEET Coupon Code",
    path: "/pw-neet-coupon-code"
  },
  gate: {
    title: "PW GATE Coupon Code 2026: Official Physics Wallah Offer",
    metaTitle: "PW GATE Coupon Code 2026: Official Physics Wallah Offer",
    metaDesc: "Get the PW maximum discount code for GATE Wallah 2026. Verified PW GATE coupon code 2026 for all engineering branch batches.",
    h1: "Official PW GATE Coupon Code 2026 (Verified)",
    keyword: "PW GATE Coupon Code",
    path: "/pw-gate-coupon-code"
  },
  disclaimer: {
    title: "Disclaimer & Affiliate Disclosure - PW Coupon Hub 2026",
    metaTitle: "Disclaimer & Affiliate Disclosure - PW Coupon Hub 2026",
    metaDesc: "Learn how we provide verified Physics Wallah coupon codes and maximum discount offers independently for student welfare.",
    h1: "Affiliate Disclosure & Disclaimer",
    keyword: "Disclaimer",
    path: "/disclaimer"
  }
};

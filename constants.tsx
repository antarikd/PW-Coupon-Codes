
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
    title: "PW Coupon Code 2026 – Verified Discounts",
    metaTitle: "PW Coupon Code 2026 – Verified Discounts",
    metaDesc: "Get verified PW Coupon Code 2026. Use ANTDAS0001 for maximum discount on all Physics Wallah batches.",
    h1: "PW Coupon Code 2026",
    keyword: "PW Coupon Code 2026",
    path: "/"
  },
  pwCoupon: {
    title: "PW Coupon Code 2026 - Save on All Batches",
    metaTitle: "PW Coupon Code 2026 - Save on All Batches",
    metaDesc: "Save big on any PW course with the official PW Coupon Code 2026. Apply code ANTDAS0001 now.",
    h1: "PW Coupon Code 2026",
    keyword: "PW Coupon Code",
    path: "/pw-coupon-code"
  },
  jee: {
    title: "PW JEE Coupon Code 2026 – Physics Wallah JEE Discounts",
    metaTitle: "PW JEE Coupon Code 2026 – Physics Wallah JEE Discounts",
    metaDesc: "Preparing for IIT JEE 2026? Use PW JEE Coupon Code 2026: ANTDAS0001 to get the best price on Lakshya & Arjun batches.",
    h1: "PW JEE Coupon Code 2026",
    keyword: "PW JEE Coupon Code 2026",
    path: "/pw-jee-coupon-code"
  },
  neet: {
    title: "PW NEET Coupon Code 2026 – Save on Medical Batches",
    metaTitle: "PW NEET Coupon Code 2026 – Save on Medical Batches",
    metaDesc: "Unlock massive discounts on PW NEET batches with PW NEET Coupon Code 2026. Use code ANTDAS0001 today.",
    h1: "PW NEET Coupon Code 2026",
    keyword: "PW NEET Coupon Code 2026",
    path: "/pw-neet-coupon-code"
  },
  gate: {
    title: "PW GATE Coupon Code 2026 – Best GATE Coaching Offers",
    metaTitle: "PW GATE Coupon Code 2026 – Best GATE Coaching Offers",
    metaDesc: "Get the latest PW GATE Coupon Code 2026. Use ANTDAS0001 for heavy discounts on GATE Wallah courses.",
    h1: "PW GATE Coupon Code 2026",
    keyword: "PW GATE Coupon Code 2026",
    path: "/pw-gate-coupon-code"
  }
};

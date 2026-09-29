import React from 'react';
import { FaDotCircle } from 'react-icons/fa';
import phone from '../Assets/offerPhone.svg';

const points = [
  'Learn from experienced traders and structured educational resources.',
  'Understand practical trading strategies and risk management.',
  'Access market analysis, courses, and trading resources.',
  'Explore Forex, Crypto, and Indices learning materials.',
  'Connect with a community of traders and support.',
  'Use practical tools and indicators as part of your workflow.',
];

const Offer = () => (
  <section className="bg-slate-950 py-16 md:py-20">
    <div className="page-container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
      <div className="text-white">
        <span className="section-label !text-blue-300">Why Prime X Capital</span>
        <h2 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">
          Build better trading habits with practical education and support.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          A focused learning environment for traders who want to improve their market knowledge and develop a more consistent process.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
              <FaDotCircle className="mt-1 shrink-0 text-blue-400" size={12} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={phone} alt="Prime X Capital mobile trading service" className="w-[70%] max-w-[360px]" />
      </div>
    </div>
  </section>
);

export default Offer;

import React from 'react';
import time from '../Assets/time.png';
import sig from '../Assets/sniper 1.svg';
import phone from '../Assets/sigCopier.svg';
import book from '../Assets/standing-book-mockup (3) 1.png';
import phone2 from '../Assets/phone.png';
import target from '../Assets/accuracy.webp';
import toDo from '../Assets/toDo.png';
import trophy from '../Assets/trophy.png';
import wallet from '../Assets/wallet.png';

const benefits = [
  ['Save Time and Energy', time, 'Spend less time monitoring charts and market updates while building a more structured trading routine.'],
  ['Save on Costly Mistakes', wallet, 'Learn core concepts and practical approaches that can help you avoid common beginner mistakes.'],
  ['Effortless Learning', toDo, 'Use structured resources and market analysis to make your learning process easier to follow.'],
  ['Consistent Process', trophy, 'Develop disciplined habits and a repeatable process instead of relying on impulsive decisions.'],
  ['24/7 Support', phone2, 'Get access to support and a community where you can ask questions and continue learning.'],
  ['Accuracy & Analysis', target, 'Improve your ability to read market conditions and understand how analysis informs a trade.'],
];

const services = [
  [sig, 'MAGNAx Sniper Indicator', 'Explore a tool designed to help identify potential market entries with less manual analysis.'],
  [phone, 'PXC VIP Signals', 'Access market signals and educational context while continuing to build your own trading knowledge.'],
  [book, 'The Complete Guide to Forex Trading', 'A beginner-friendly resource covering forex, crypto, indices, confidence, discipline, and market fundamentals.'],
];

const Courses = () => (
  <section className="bg-slate-50 py-16 md:py-20">
    <div className="page-container">
      <div className="max-w-2xl">
        <span className="section-label">Education & resources</span>
        <h2 className="section-title">Resources built around your trading journey.</h2>
        <p className="section-copy">
          Keep the interface simple and the information useful: learn, practise, review, and improve.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(([title, icon, copy]) => (
          <article key={title} className="surface-card p-6">
            <img src={icon} alt="" className="mb-5 h-10 w-10 object-contain" />
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{copy}</p>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <div className="text-center">
          <span className="section-label">Services</span>
          <h2 className="section-title">Featured trading resources</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map(([image, title, copy]) => (
            <article key={title} className="surface-card flex min-h-[390px] flex-col p-6">
              <div className="flex h-48 items-center justify-center rounded-lg bg-slate-50">
                <img src={image} alt="" className="max-h-40 max-w-[75%] object-contain" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{copy}</p>
              <button className="secondary-btn mt-5 w-fit">Learn more</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Courses;

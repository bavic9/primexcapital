import React, { useState } from 'react';
import { PlanCard } from './PlanCard';

const plans = {
  Forex: [
    ['Monthly Plan', '$65', 'Full access to our Forex resources and courses', ['VIP Forex Signals', 'Beginner & advanced live classes', 'Private Community', 'Customer Support', 'Help & Support']],
    ['Yearly Plan', '$390', 'Full access to our Forex resources and courses', ['Everything in Monthly plan, plus:', 'Trading plan template', 'PXC verified trading strategies', 'Weekly live trading sessions', 'Priority Support']],
  ],
  Crypto: [
    ['Monthly Plan', '$95', 'Full access to our Crypto resources and courses', ['VIP signals (futures)', 'Beginner & advanced live classes', 'Private Community', 'Customer Support', 'Help & Support']],
    ['Yearly Plan', '$210', 'Full access to our Crypto resources and courses', ['Everything in Monthly plan, plus:', 'VIP signals (futures & spots)', 'Early access to insider coins', 'Weekly live trading sessions for 3 months', 'Priority Support']],
  ],
  Synthetics: [
    ['Monthly Plan', '$75', 'Full access to our Indices resources and courses', ['VIP signals', 'Weekly live trading sessions', 'Private Community', 'Customer Support', 'Life support']],
    ['Yearly Plan', '$450', 'Full access to our Indices resources and courses', ['Everything in Monthly plan, plus:', 'VIP signals', 'PXC official advanced live trading session', 'Weekly live trading sessions for 3 months', 'Priority Support']],
  ],
};

const Mentorship = () => {
  const [active, setActive] = useState('Forex');

  return (
    <section className="section-space bg-white">
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Mentorship</span>
          <h1 className="section-title">Choose your learning plan</h1>
          <p className="section-copy mx-auto">Compare the available plans for Forex, Crypto, and Synthetics. 25% discount is available if you register with our IB link.</p>
        </div>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 rounded-lg border border-slate-200 bg-slate-50 p-1">
          {Object.keys(plans).map((name) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`rounded-md px-2 py-2.5 text-xs font-semibold transition-colors ${
                active === name ? 'bg-blue text-white shadow-sm' : 'text-slate-600 hover:text-blue'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
          {plans[active].map(([title, price, headContent, features]) => (
            <PlanCard
              key={`${active}-${title}`}
              title={title}
              price={price}
              headContent={headContent}
              content1={features[0]}
              content2={features[1]}
              content3={features[2]}
              content4={features[3]}
              content5={features[4]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentorship;

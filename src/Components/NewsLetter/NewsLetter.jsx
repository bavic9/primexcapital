import React from 'react';
import bybit from '../Assets/bybit.svg';
import exness from '../Assets/exness.png';
import deriv from '../Assets/derive.png';
import tradingview from '../Assets/tradingview.png';
import fxtm from '../Assets/fxtm.png';

const NewsLetter = () => (
  <section className="bg-white py-16 md:py-20">
    <div className="page-container">
      <div className="rounded-2xl bg-blue px-6 py-10 text-center md:px-10">
        <span className="text-xs font-semibold uppercase tracking-[.16em] text-blue-100">Stay informed</span>
        <h2 className="mx-auto mt-2 max-w-xl text-2xl font-bold text-white md:text-3xl">Get useful updates from Prime X Capital</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-blue-100">Receive occasional news, resources, and educational updates.</p>
        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <input type="email" placeholder="Email address" className="min-w-0 flex-1 rounded-lg border border-white/20 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-white/40" />
          <button type="button" className="rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">Subscribe</button>
        </form>
      </div>
      <div className="mt-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[.15em] text-slate-400">Platforms we use</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[bybit, exness, deriv, tradingview, fxtm].map((image, index) => (
            <img key={index} src={image} alt="" className="h-30 w-30 max-w-[110px] object-contain opacity-70" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NewsLetter;

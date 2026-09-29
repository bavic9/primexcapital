import React, { useEffect, useState } from 'react';
import './Hero.css';
import hero from '../Assets/hb.png';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuthUser);
    return unsubscribe;
  }, []);

  return (
    <section className="hero-section overflow-hidden text-white">
      <div className="page-container grid min-h-[620px] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-0">
        <div className="max-w-xl">
          <span className="section-label !text-blue-300">Prime X Capital</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Learn to trade with a clearer, more disciplined approach.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-300 md:text-lg">
            Improve your trading knowledge, connect with experienced traders, and build a more structured trading routine.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {authUser ? (
              <a href="https://t.me/primexcapital" target="_blank" rel="noreferrer" className="primary-btn !bg-blue !px-5 !py-3">
                Join Telegram
              </a>
            ) : (
              <Link to="/login" className="primary-btn !bg-blue !px-5 !py-3">Join the Community</Link>
            )}
            <Link to="/mentorship" className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              View mentorship
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/10 pt-5 text-xs text-slate-300">
            <span>Forex</span><span>Crypto</span><span>Indices</span><span>Education</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img className="hero-art w-[78%] max-w-[520px] md:w-[70%] lg:w-full" src={hero} alt="Prime X Capital trading illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

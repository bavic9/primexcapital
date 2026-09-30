import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logoWhite.jpg';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Mentorship', to: '/mentorship' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
];

const Navbar = () => {
  const [authUser, setAuthUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuthUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const handleSignOut = async () => {
    try { await signOut(auth); } catch (error) { console.error(error); }
  };

  return (
    <header className={`site-nav sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur ${scrolled ? 'scrolled' : ''}`}>
      <div className="page-container flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Prime X Capital home">
          <img src={logo} alt="Prime X Capital" className="h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-150 ${
                location.pathname === link.to ? 'text-blue' : 'text-slate-600 hover:text-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
          {authUser ? (
            <button onClick={handleSignOut} className="secondary-btn !px-4 !py-2">
              Logout
            </button>
          ) : (
            <Link to="/login" className="primary-btn !px-4 !py-2">Login</Link>
          )}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          <BiMenuAltRight size={27} />
        </button>
      </div>

      {open && <button aria-label="Close menu" className="mobile-overlay" onClick={() => setOpen(false)} />}

      <aside className={`mobile-menu  ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="absolute right-5 top-5">
          <button onClick={() => setOpen(false)} className=" rounded-lg p-2 text-slate-700 hover:bg-slate-100" aria-label="Close menu">
            <FaTimes size={20} />
          </button>
        </div>
        <div className="flex flex-col px-4 pb-5 gap-2 bg-white">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-6 py-3 text-sm font-semibold ${
                location.pathname === link.to ? 'bg-blue/10 text-blue' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 border-t border-slate-100 pt-4">
            {authUser ? (
              <button onClick={handleSignOut} className="secondary-btn w-full">Logout</button>
            ) : (
              <Link to="/login" className="primary-btn w-fit">Login</Link>
            )}
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      setStatus('Your email or password is incorrect. Please try again.');
    }
  };

  return (
    <section className="section-space bg-slate-50">
      <div className="page-container flex justify-center">
        <div className="surface-card grid w-full max-w-4xl overflow-hidden md:grid-cols-2">
          <div className="hidden bg-slate-950 p-10 text-white md:flex md:flex-col md:justify-center">
            <span className="section-label !text-blue-300">Prime X Capital</span>
            <h1 className="mt-3 text-3xl font-bold">Welcome back.</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Sign in to continue to your trading education and community resources.</p>
          </div>
          <div className="p-7 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-950">Sign in</h2>
            <p className="mt-1 text-sm text-slate-500">Enter your account details below.</p>
            {status && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{status}</p>}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm font-medium text-slate-700">
                Email
                <div className="mt-1 flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3 focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/10">
                  <FaEnvelope className="text-slate-400" size={14} />
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" required className="h-full w-full border-0 bg-transparent text-sm outline-none" />
                </div>
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Password
                <div className="mt-1 flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3 focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/10">
                  <FaLock className="text-slate-400" size={14} />
                  <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" required className="h-full w-full border-0 bg-transparent text-sm outline-none" />
                </div>
              </label>
              <button type="submit" className="primary-btn w-full">Sign in</button>
            </form>
            <p className="mt-5 text-center text-sm text-slate-500">Don't have an account? <Link to="/signup" className="font-semibold text-blue hover:underline">Create one</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

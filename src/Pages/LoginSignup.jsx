import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaEnvelope } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setStatus(error?.message || 'Unable to create your account. Please try again.');
    }
  };

  const fields = [
    ['First name', name, setName, 'text', FaUser],
    ['Last name', lname, setLName, 'text', FaUser],
    ['Email', email, setEmail, 'email', FaEnvelope],
    ['Password', password, setPassword, 'password', FaLock],
  ];

  return (
    <section className="section-space bg-slate-50">
      <div className="page-container flex justify-center">
        <div className="surface-card grid w-full max-w-4xl overflow-hidden md:grid-cols-2">
          <div className="p-7 sm:p-10 md:order-2">
            <h2 className="text-2xl font-bold text-slate-950">Create account</h2>
            <p className="mt-1 text-sm text-slate-500">Set up your Prime X Capital account.</p>
            {status && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{status}</p>}
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              {fields.map(([label, value, setter, type, Icon]) => (
                <label key={label} className="block text-sm font-medium text-slate-700">
                  {label}
                  <div className="mt-1 flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3 focus-within:border-blue focus-within:ring-2 focus-within:ring-blue/10">
                    <Icon className="text-slate-400" size={14} />
                    <input value={value} onChange={(e) => setter(e.target.value)} type={type} placeholder={label} required={label === 'Email' || label === 'Password'} className="h-full w-full border-0 bg-transparent text-sm outline-none" />
                  </div>
                </label>
              ))}
              <button type="submit" className="primary-btn mt-2 w-full">Create account</button>
            </form>
            <p className="mt-5 text-center text-sm text-slate-500">Already have an account? <Link to="/login" className="font-semibold text-blue hover:underline">Sign in</Link></p>
          </div>
          <div className="hidden bg-slate-950 p-10 text-white md:order-1 md:flex md:flex-col md:justify-center">
            <span className="section-label !text-blue-300">Prime X Capital</span>
            <h1 className="mt-3 text-3xl font-bold">Start your learning journey.</h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">Create an account to access the platform and continue your trading education.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSignup;

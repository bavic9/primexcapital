import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs';

export const PlanCard = ({ title, price, headContent, content1, content2, content3, content4, content5 }) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setAuthUser);
    return unsubscribe;
  }, []);

  const items = [content1, content2, content3, content4, content5].filter(Boolean);

  return (
    <article className="surface-card flex h-full w-full flex-col p-6 md:p-7">
      <div>
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{price}</p>
        <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">{headContent}</p>
      </div>
      <ul className="my-6 flex-1 space-y-3 border-y border-slate-100 py-5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
            <BsCheck className="mt-1 shrink-0 text-blue" size={17} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link to={authUser ? '/payment' : '/login'} className="primary-btn w-full">
        Subscribe
      </Link>
    </article>
  );
};

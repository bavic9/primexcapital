import React, { useState } from 'react';
import PaystackPop from '@paystack/inline-js';
import { useNavigate } from 'react-router-dom';
import pay from '../Components/Assets/pay.webp';

const Payment = () => {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: 'pk_test_00a352e451956eec9ddf226179d7b1db798b6aff',
      amount: Number(amount) * 100,
      email,
      name,
      onSuccess(transaction) {
        alert(`Payment Complete! Reference ${transaction.reference}`);
        navigate('/');
      },
      onCancel() {
        alert('You have canceled the transaction.');
      },
    });
  };

  return (
    <section className="section-space bg-slate-50">
      <div className="page-container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="section-label">Secure checkout</span>
            <h1 className="section-title">Make a payment</h1>
            <p className="section-copy mx-auto">Enter your details below to continue with your payment.</p>
          </div>

          <div className="surface-card mt-8 grid overflow-hidden md:grid-cols-[.8fr_1.2fr]">
            <div className="flex items-center justify-center bg-slate-950 p-8">
              <img src={pay} alt="Payment" className="w-full max-w-[280px]" />
            </div>

            <form onSubmit={payWithPaystack} className="p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Name', name, setName, 'text'],
                  ['Amount', amount, setAmount, 'number'],
                  ['Email', email, setEmail, 'email'],
                  ['Phone No.', phone, setPhone, 'tel'],
                ].map(([label, value, setter, type]) => (
                  <label key={label} className="text-sm font-medium text-slate-700">
                    {label}
                    <input
                      type={type}
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      placeholder={label}
                      required
                      min={type === 'number' ? '1' : undefined}
                      className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-blue/10"
                    />
                  </label>
                ))}
              </div>
              <button type="submit" className="primary-btn mt-6 w-full">Continue to payment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

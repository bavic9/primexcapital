import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { PlanCard } from './PlanCard';

const Mentorship = () => {

  const [bg, setBg] = useState('Forex')
  const [activeLink, setActiveLink] = useState('Tab 1');
  const [toggle, setToggle] = useState(1)

  function updateToggle(id) {
    setToggle(id)
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  const forex = [
    {
      title: "Monthly Plan",
      price: "$55",
      headContent: "FULL access to our free resource and course as you begin your Forex Journey",
      content1: "Free trade signals (Bonus)",
      content2: "Access to Beginner & advanced live classes",
      content3: "Private Community",
      content4: "Customer Support",
      content5: "Help & Support",
      icon: <BsCheck />,
    },
    {
      title: "Yearly Plan",
      price: "$145",
      headContent: "FULL access to our free resource and course as you begin your Forex Journey",
      content1: "Everything in Monthly plan, plus:",
      content2: "Free trading plan template",
      content3: "Mentor's Personal Contact",
      content4: "Weekly Live trading sessions for 3 months",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    {
      title: "Lifetime Plan",
      price: "$250",
      headContent: "FULL access to our free resource and course as you begin your Forex Journey",
      content1: "Everything in Yearly plan, plus:",
      content2: "PXC official advanced live trading session and indicators",
      content3: "Art of retail trading (only after mastering trading)",
      content4: "High risk management",
      content5: "Super Priority Instant Support",
      icon: <BsCheck />,
    },
  ];

  const crypto = [
    {
      title: "Monthly Plan",
      price: "$95",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "VIP signals (futures)",
      content2: "Access to Beginner & advanced live classes",
      content3: "Private Community",
      content4: "Customer Support",
      content5: "Help & Support",
      icon: <BsCheck />,
    },
    {
      title: "Yearly Plan",
      price: "$210",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "Everything in Monthly plan, plus:",
      content2: "VIP signals (futures & spots)",
      content3: "Early access to insider coins",
      content4: "Weekly Live trading sessions for 3 months",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    {
      title: "Lifetime Plan",
      price: "$400",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "Everything in Yearly plan, plus:",
      content2: "VIP allocations an spots",
      content3: "Professions and job opportunities in crypto (PDF & live training sessions)",
      content4: "Access to all insider coins",
      content5: "Super Priority Instant Support",
      icon: <BsCheck />,
    },
  ];

  const syn = [
    {
      title: "Monthly Plan",
      price: "$75",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "VIP signals",
      content2: "life support",
      content3: "Private Community",
      content4: "Customer Support",
      content5: "Help & Support",
      icon: <BsCheck />,
    },
    {
      title: "Yearly Plan",
      price: "$190",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "Everything in Monthly plan, plus:",
      content2: "VIP signals",
      content3: "PXC official advanced live trading session",
      content4: "Weekly Live trading sessions for 3 months",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    {
      title: "Lifetime Plan",
      price: "$350",
      headContent: "FULL access to our free resource and course as you begin your Crypto Journey",
      content1: "Everything in Yearly plan, plus:",
      content2: "VIP allocations an spots",
      content3: "Weekly Live trading sessions for 3 months",
      content4: "Access to all insider coins",
      content5: "Super Priority Instant Support",
      icon: <BsCheck />,
    },
  ];





  return (
    <div className='w-[90%] lg:space-y-[8rem] space-y-10 py-[6rem] m-auto'>
      {/* head */}
      <div className='text-center space-y-10'>
        <h1 className='text-6xl font-varela font-semibold'>Choose your <span className='text-blue'>plan</span></h1>
        <p className='lg:text-3xl text-2xl lg:w-[45%] text-gray-500 w-[80%] m-auto'>learning forex made easier</p>
        <span className='flex w-[90%] lg:w-[40%] lg:pt-10 m-auto items-center justify-between'>
          <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
          <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
          <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
        </span>
      </div>

      {/* offer bottom flex */}
      <div className='md:w-2/3 m-auto'>
        <ul className="flex items-center justify-between border-2 border-blue rounded-full cursor-pointer" >
          <li
            onClick={() => { setBg('Forex') }}
            className={
              bg === "Forex"
                ? "border rounded-s-full border-blue bg-blue text-white px-6 text-center w-1/2 md:text-3xl text-lg font-bold"
                : "border rounded-s-full border-blue px-6 text-center w-1/2 md:text-3xl text-lg font-bold"
            }
          >
            <div className={
              activeLink === 'tabs'
                ? 'py-6'
                : 'py-6'
            }
              eventKey="first"
              onClick={() => {
                updateToggle(1);
                onUpdateActiveLink('tabs')
              }}
            >
              <button>Forex</button>
            </div>
          </li>
          <li
            onClick={() => {
              setBg('Crypto')
            }}
            className={
              bg === "Crypto"
                ? "border border-blue bg-blue text-white px-6 text-center w-1/2 md:text-3xl text-lg font-bold"
                : "border border-blue px-6 text-center w-1/2 md:text-3xl text-lg font-bold"
            }
          >
            <div className={
              activeLink === 'tab2'
                ? 'py-6'
                : 'py-6'
              }
              eventKey="second"
              onClick={() => {
                updateToggle(2);
                onUpdateActiveLink('tab2')
              }}>
              <button>Crypto</button>
            </div>
          </li>
          <li
            onClick={() => {
              setBg('Synthetics')
            }}
            className={
              bg === "Synthetics"
                ? "border rounded-e-full border-blue bg-blue px-6 text-white text-center w-1/2 md:text-3xl text-lg font-bold"
                : "border rounded-e-full border-blue text-center px-6 w-1/2 md:text-3xl text-lg font-bold"
            }
          >
            <div className={
              activeLink === 'tab3'
                ? 'py-6'
                : 'py-6'
            }
              eventKey="third"
              onClick={() => {
                updateToggle(3);
                onUpdateActiveLink('tab3')
              }}>
              <button>Synthetics</button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className={toggle === 1 ? 'block' : 'hidden'} eventKey="first">
          <div className=' lg:flex items-center justify-between p-2 animateOpacity'>
            {
              forex.map((project, index) => {
                return (
                  <PlanCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
          </div>
        </div>

        <div className={toggle === 2 ? 'block' : 'hidden'} eventKey="second">
          <div className=' lg:flex items-center justify-between p-2 animateOpacity'>
            {
              crypto.map((project, index) => {
                return (
                  <PlanCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
          </div>
        </div>

        <div className={toggle === 3 ? 'block' : 'hidden'} eventKey="third">
          <div className=' lg:flex items-center justify-between p-2 animateOpacity'>
            {
              syn.map((project, index) => {
                return (
                  <PlanCard
                    key={index}
                    {...project}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentorship

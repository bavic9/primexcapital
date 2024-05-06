import React, { useState } from 'react'
import { BsCheck } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { PlanCard } from './PlanCard';

const Mentorship = ({ items }) => {




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
      price: "$65",
      headContent: "FULL access to our Forex resources and courses",
      content1: "VIP FOREX SIGNALS ",
      content2: "Access to Beginner & advanced live classes",
      content3: "Private Community",
      content4: "Customer Support",
      content5: "Help & Support",
      icon: <BsCheck />,
    },
    {
      title: "Yearly Plan",
      price: "$390",
      headContent: "FULL access to our Forex resources and courses",
      content1: "Everything in Monthly plan, plus:",
      content2: "Trading plan template ",
      content3: "PXC verified trading strategies",
      content4: "Weekly Live trading sessions",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    // {
    //   title: "Lifetime Plan",
    //   price: "$250",
    //   headContent: "FULL access to our Forex resources and courses",
    //   content1: "Everything in Yearly plan, plus:",
    //   content2: "PXC official advanced live trading session and indicators",
    //   content3: "Art of retail trading (only after mastering trading)",
    //   content4: "High risk management",
    //   content5: "Super Priority Instant Support",
    //   icon: <BsCheck />,
    // },
  ];

  const crypto = [
    {
      title: "Monthly Plan",
      price: "$95",
      headContent: "FULL access to our Crypto resources and courses ",
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
      headContent: "FULL access to our Crypto resources and courses ",
      content1: "Everything in Monthly plan, plus:",
      content2: "VIP signals (futures & spots)",
      content3: "Early access to insider coins",
      content4: "Weekly Live trading sessions for 3 months",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    // {
    //   title: "Lifetime Plan",
    //   price: "$400",
    //   headContent: "FULL access to our Crypto resources and courses ",
    //   content1: "Everything in Yearly plan, plus:",
    //   content2: "VIP allocations an spots",
    //   content3: "Professions and job opportunities in crypto (PDF & live training sessions)",
    //   content4: "Access to all insider coins",
    //   content5: "Super Priority Instant Support",
    //   icon: <BsCheck />,
    // },
  ];

  const syn = [
    {
      title: "Monthly Plan",
      price: "$75",
      headContent: "FULL access to our Indicies resources and courses ",
      content1: "VIP signals",
      content2: "Weekly live trading sessions",
      content3: "Private Community",
      content4: "Customer Support",
      content5: "life support",
      icon: <BsCheck />,
    },
    {
      title: "Yearly Plan",
      price: "$450",
      headContent: "FULL access to our Indicies resources and courses ",
      content1: "Everything in Monthly plan, plus:",
      content2: "VIP signals",
      content3: "PXC official advanced live trading session",
      content4: "Weekly Live trading sessions for 3 months",
      content5: "Priority Support",
      icon: <BsCheck />,
    },
    // {
    //   title: "Lifetime Plan",
    //   price: "$350",
    //   headContent: "FULL access to our Indicies resources and courses ",
    //   content1: "Everything in Yearly plan, plus:",
    //   content2: "VIP allocations an spots",
    //   content3: "Weekly Live trading sessions for 3 months",
    //   content4: "Access to all insider coins",
    //   content5: "Super Priority Instant Support",
    //   icon: <BsCheck />,
    // },
  ];





  return (
    <div className='w-[90%] lg:space-y-[8rem] space-y-10 py-[6rem] m-auto'>
      {/* head */}

      <div className='text-center space-y-10'>
        <h1 className='md:text-5xl text-3xl w-1/2 md:w-4/5 text-center m-auto font-varela font-semibold'>Choose your <span className='text-blue'>plan</span></h1>
        <p className='lg:text-2xl text-lg lg:w-[40%] text-gray-500 w-[80%] m-auto'>25% DISCOUNT if you registered with our IB link.</p>
        <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
          <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
          <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
          <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
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
                ? 'py-6 md:py-7'
                : 'py-6 md:py-7'
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
                ? 'py-6 md:py-7'
                : 'py-6 md:py-7'
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
                ? "border rounded-e-full border-blue bg-blue px-0 lg:px-6 text-white text-center w-1/2 md:text-3xl text-base font-bold"
                : "border rounded-e-full border-blue text-center px-0 lg:px-6 w-1/2 md:text-3xl text-base font-bold"
            }
          >
            <div className={
              activeLink === 'tab3'
                ? 'py-[1.6rem] md:py-7'
                : 'py-[1.6rem] md:py-7'
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
          <div className=' md:flex items-center justify-between p-2 animateOpacity m-auto lg:w-[70%] md:w-[100%]'>
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
          <div className=' md:flex items-center justify-between p-2 animateOpacity m-auto lg:w-[70%] md:w-[100%]'>
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
          <div className=' md:flex items-center justify-between p-2 animateOpacity m-auto lg:w-[70%] md:w-[100%]'>
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

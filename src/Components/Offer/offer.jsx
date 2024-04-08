import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaDotCircle } from "react-icons/fa";
import phone from '../Assets/phone.webp'

const Offer = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className=' bg-gray-950 py-20'>
        <div className='flex flex-col lg:flex-row items-center justify-evenly lg:px-32 px-4 pt-16 text-white space-y-10 space-x-4' data-aos="fade-down">

            {/* left flex */}
            <div className='flex flex-col py-4 lg:py-0 px-2 space-y-2 lg:space-y-0 w-full font-prompt'>
                <h1 className=' text-blue font-bold text-4xl lg:text-6xl'>Over 701,463+</h1>
                <h1 className='  w-4/5 text-4xl lg:text-6xl font-bold tracking-widest lg:tracking-wider text-start'>Traders Worldwide Trust Priceaction - Now It’s Your Turn</h1>
                <p className='  text-2xl lg:text-3xl py-3'>Your search for consistent profitability from trading ends here ….</p>
                <div className='flex flex-col space-y-4 pt-3'>
                    <div className='flex justify-start items-center space-x-3 lg:space-x-2'>
                        <FaDotCircle className=' text-blue text-xl'/>
                        <p className='text-xl lg:text-2xl'>Leverage the 12+ years of trading experience of our traders.</p>
                    </div>
                    <div className='flex justify-start items-center space-x-3 lg:space-x-2'>
                        <FaDotCircle className=' text-blue text-xl'/>
                        <p className='text-xl lg:text-2xl'>Learn our proven and powerful trading strategies.</p>
                    </div>
                    <div className='flex justify-start items-center space-x-3 lg:space-x-2'>
                        <FaDotCircle className=' text-blue text-xl'/>
                        <p className='text-xl lg:text-2xl'>Enhance your trading knowledge with free trading analysis.</p>
                    </div>
                    <div className='flex justify-start items-center space-x-3 lg:space-x-2'>
                        <FaDotCircle className=' text-blue text-xl'/>
                        <p className='text-xl lg:text-2xl'>Get free Forex, Indices, Commodities, Stocks, Scalping signals.</p>
                    </div>
                    <div className='flex justify-start items-center space-x-3 lg:space-x-2'>
                        <FaDotCircle className=' text-blue text-xl'/>
                        <p className='text-xl lg:text-2xl'>Chat 24/7 with our team for any trade assistance.</p>
                    </div>
                </div>
            </div>

            {/* right flex */}
            <div className='p-4 w-full'>
                <img className='' src={phone} alt="phone" />
            </div>
        </div>
    </div>





























    // <div className=' lg:space-y-[10rem] space-y-20 py-[10rem] m-auto bg-black'>
    //     {/* offer head */}
    //     <div className='text-center space-y-10' data-aos="fade-up">
    //         <h1 className='md:text-5xl text-3xl w-2/3 md:w-4/5 text-center m-auto font-varela font-semibold'>What we have to <span className='text-blue'>offer</span></h1>
    //         <p className='lg:text-2xl text-lg lg:w-[40%] text-gray-500 w-[80%] m-auto'>Your dreams deserve a solid training academy, we have got you covered!</p>
    //         <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
    //             <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
    //             <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
    //             <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
    //         </span>
    //     </div>

    //     {/* offer bottom flex */}
    //     <div className='flex flex-col lg:flex-row justify-around items-center space-y-16 lg:space-y-0 lg:w-[75%] lg:m-auto '>
    //         <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-4 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'  data-aos="fade-up">
    //             <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Trading Community</h1>
    //             <p className='text-center font-varela md:text-lg text-lg text-gray-600 w-[90%] m-auto leading-10'>
    //                 We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.
    //             </p>
    //             <button className='flex justify-center items-center m-auto rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-3 py-2 hover:text-white hover:bg-blue'>
    //                 Join Telegram Channel
    //             </button>
    //         </div>
    //         <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-4 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110' data-aos="fade-up" data-aos-duration="800">
    //             <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Forex Education</h1>
    //             <p className='text-center font-varela md:text-lg text-lg text-gray-600 w-[90%] m-auto leading-10'>
    //             We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market. Click the button below to enroll now
    //             </p>
    //             <button className='flex justify-center items-center m-auto rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-3 py-2 hover:text-white hover:bg-blue'>
    //                 Enroll Now
    //             </button>
    //         </div>
    //         <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-4 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'  data-aos="fade-up">
    //             <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Live Trading Session</h1>
    //             <p className='text-center font-varela md:text-lg text-lg text-gray-600 w-[90%] m-auto leading-10'>
    //             Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable. Click the button below to subscribe to the channel.
    //             </p>
    //             <button className='flex justify-center items-center m-auto rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-3 py-2 hover:text-white hover:bg-blue'>
    //                 Click here to subscribe
    //             </button>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Offer


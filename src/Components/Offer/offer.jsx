import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Offer = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className='w-[90%] lg:space-y-[10rem] space-y-20 py-[10rem] m-auto'>
        {/* offer head */}
        <div className='text-center space-y-10' data-aos="fade-up">
            <h1 className='md:text-5xl text-3xl w-2/3 md:w-4/5 text-center m-auto font-varela font-semibold'>What we have to <span className='text-blue'>offer</span></h1>
            <p className='lg:text-2xl text-lg lg:w-[40%] text-gray-500 w-[80%] m-auto'>Your dreams deserve a solid training academy, we have got you covered!</p>
            <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
                <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
            </span>
        </div>

        {/* offer bottom flex */}
        <div className='flex flex-col lg:flex-row justify-around items-center space-y-16 lg:space-y-0 lg:w-[75%] lg:m-auto '>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-10 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'  data-aos="fade-up">
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Trading Community</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-600 w-[90%] m-auto leading-10'>
                    We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Join Telegram Channel
                </button>
            </div>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-10 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110' data-aos="fade-up" data-aos-duration="800">
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Forex Education</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-600 w-[90%] m-auto leading-10'>
                We provide a robust curriculum that covers everything from forex basics to advanced trading strategies. Our aim is to equip you with the knowledge and skills you need to thrive in the forex market. Click the button below to enroll now
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Enroll Now
                </button>
            </div>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px]  border rounded-3xl space-y-10 pb-16 shadow-lg shadow-gray-300 transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'  data-aos="fade-up">
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-2xl text-xl'>Live Trading Session</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-600 w-[90%] m-auto leading-10'>
                Our free live trading session on YouTube every Monday 1:00 PM GMT+1 was created to help traders improve their trading and be consistently profitable. Click the button below to subscribe to the channel.
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Click here to subscribe
                </button>
            </div>
        </div>
    </div>
  )
}

export default Offer
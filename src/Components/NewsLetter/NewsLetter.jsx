import React from 'react'
import bybit from '../Assets/bybit.svg'
import exness from '../Assets/exness.png'
import deriv from '../Assets/derive.png'
import tradingview from '../Assets/tradingview.png'
import fxtm from '../Assets/fxtm.png'

const NewsLetter = () => {
    return (
        <div className='bg-gray-100 py-24'>
            <div className='w-[90%] m-auto bg-blue py-20 px-4 rounded-2xl shadow-2xl relative z-10'>
                {/* <div className=' bg-lightBlue rounded-[30%_70%_70%_30%_/_14%_30%_70%_86%] h-[200px] w-[200px] absolute animate-moveR -z-10'></div> */}
                <h1 className='text-center lg:text-5xl text-2xl text-white font-varela font-semibold leading-normal lg:w-1/3 w-[60%] m-auto '>
                    Subscribe to our newsletter
                </h1>
                <div className='flex flex-col lg:flex-row items-center m-auto px-2 mt-8 space-y-6 lg:w-[60%] '>
                    <input type="mail" placeholder='Email address' className='p-3 lg:p-6 rounded-xl bg-transparent border text-white w-4/5 md:w-[60%] mt-4' />
                    <button className='rounded-lg w-fit m-auto ease-out duration-500 hover:shadow-lg text-white bg-black font-varela font-semibold md:text-xl text-lg px-6 md:px-16 py-5 hover:px-10'>
                        Subscribe Now
                    </button>
                </div>
                {/* <div className='bg-lightBlue rounded-[30%_70%_70%_30%_/_14%_30%_70%_86%] h-[80%] w-[80%] absolute bottom-10 right-10 animate-move -z-10'></div> */}
            </div>






            <div className='w-4/5 m-auto flex flex-col items-center space-y-6 mt-20 lg:mt-40'>
                <p className='md:text-2xl text-xl font-bold text-black'>For trading we use:</p>
                <div className='flex flex-col md:flex-row justify-between w-full items-center'>
                    <img className='lg:w-[150px] w-[100px]' src={bybit} alt="" />
                    <img className='lg:w-[150px] w-[100px]' src={exness} alt="" />
                    <img className='lg:w-[150px] w-[100px]' src={deriv} alt="" />
                    <img className='lg:w-[150px] w-[100px]' src={tradingview} alt="" />
                    <img className='lg:w-[150px] w-[100px]' src={fxtm} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
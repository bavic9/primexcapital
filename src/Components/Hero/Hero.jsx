import React from 'react'
import './Hero.css'
import hero from '../Assets/btc.png'

const Hero = () => {
    return (
        <section className='p-4 lg:h-[100vh] pb-36 bg-cover bg-no-repeat'>
            <div className='m-auto lg:px-20 pt-16 lg:pt-36 flex flex-col justify-around lg:flex-row items-center px-4 space-y-16 lg:space-y-0'>
                {/* hero left */}
                <div className='lg:w-1/3 md:p-28 m-auto anim'>
                    <h1 className='text-white font-prompt leading-[1.2] text-6xl font-bold text-center lg:text-left lg:p-0'>
                        This is <span className='text-blue'>PRIME X CAPITAL</span> where you learn to trade like a pro in no time
                        <div className='curved-line'></div>
                    </h1>
                    <p className='text-gray-500 text-center lg:text-start text-3xl md:text-2xl font-varela py-6'>
                        Evaluate your trading journey & network with like minds and expert traders
                    </p>
                    <div className='flex lg:justify-start justify-center items-center gap-3 md:space-x-6 py-6'>
                        <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold text-2xl px-10 lg:px-12 py-5 hover:text-white hover:bg-blue'>
                            Join Free Classes
                        </button>
                        <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold text-2xl px-6 lg:px-8 py-5 hover:text-white hover:bg-blue'>
                            Enroll Now
                        </button>
                    </div>
                </div>


                {/* hero right */}
                <div className='lg:w-1/2 animr'>
                    <img
                        className=''
                        src={hero} alt="" />
                </div>
            </div>



        </section>
    )
}

export default Hero
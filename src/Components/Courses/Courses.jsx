import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImg from '../Assets/forex.jpeg'
import time from '../Assets/time.png'
import sig from '../Assets/sniper 1.svg'
import phone from '../Assets/sigCopier.svg'
import book from '../Assets/standing-book-mockup (3) 1.png'
import phone2 from '../Assets/phone.png'
import target from '../Assets/accuracy.webp'
import toDo from '../Assets/toDo.png'
import trophy from '../Assets/trophy.png'
import wallet from '../Assets/wallet.png'

const Courses = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (
        <div className=' bg-slate-200 py-20'>
            <div className='px-4 lg:px-32'>
                <h1 className=' text-3xl lg:text-6xl lg:w-4/5 m-auto text-center font-extrabold font-lato py-4'>Let’s Smash your “impossible” trading goal together Certainly! <br /> <span className='text-blue'>Here's a spun version of your content</span></h1>

                {/* grid box */}
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 py-16 gap-8'>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>Save Time and Energy</h2>
                        <img className='w-[45px]' src={time} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            <span className='font-bold'> DON'T have enough time?</span> Spend less time monitoring charts and news updates. Let us handle
                            the market analysis while you focus on what matters most to you – <span className='font-bold'>whether it's work or family
                                time. </span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>Save Trading</h2>
                        <img className='w-[45px]' src={wallet} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Avoid the costly learning curve of trading. Learn and earn
                            <span className='font-bold'> with the pros and avoid rookie
                                mistakes.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>
                            Effortless Trading
                        </h2>
                        <img className='w-[45px]' src={toDo} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Our dedicated team of <span className='font-bold'> traders works around the clock.</span> to analyze and decode market trends for
                            you. We all take the same trades and   <span className='font-bold'>achieve consistent profitability.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>Top Notch Consistent</h2>
                        <img className='w-[45px]' src={trophy} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            <span className='font-bold'>Consistency is our strength and it’s evident. </span> With disciplined and patient trading strategies, we
                            ensure consistent profits, setting us apart from
                            <span className='font-bold'> other similar services. </span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>24/7 Customer Support</h2>
                        <img className='w-[45px]' src={phone2} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Need assistance?
                            <span className='font-bold'> Our support agents are available  </span> round the clock to address your queries
                            promptly,  <span className='font-bold'>ensuring you're never left in the dark.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>Accuracy</h2>
                        <img className='w-[45px]' src={target} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Benefit from our over <span className='font-bold'>85% accuracy rate,</span> minimizing drawdowns and maximizing your profits
                            with every trade.
                        </p>
                    </div>
                </div>
            </div>



            <div className='px-3 lg:px-32 pt-8'>
                <h1 className=' text-3xl lg:text-7xl lg:w-4/5 m-auto text-center font-extrabold font-lato py-4'>Our top <span className='text-blue'>profitable services</span></h1>

                {/* grid box */}
                <div className=' grid px-2 md:grid-cols-2 py-16 gap-8'>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[200px] m-auto' src={sig} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>MAGNAx SNIPER INDICATOR</h2>
                        <p className='text-xl font-light'>
                            <span className='font-bold'>Get sniper entries without so much analysis </span>
                        </p>
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Get Now</button>
                    </div>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[200px] m-auto' src={phone} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>PXC VIP Signals</h2>
                        <p className='text-2xl font-bold'>
                            Get vip signals while you earn as you learn on your trading journey.
                        </p>
                        {/* <p className='text-xl font-light'>
                            Our signal copier will copy all the signals from our telegram signal channels in less than 5 seconds.
                        </p> */}
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Get Now</button>
                    </div>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[250px] m-auto' src={book} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>The Complete Gide To Forex Trading</h2>
                        <p className='text-2xl font-bold'>
                            This is the perfect beginner guide to trading the forex, crypto and indices market.
                        </p>
                        <p className='text-xl font-light'>
                            This <span className='font-bold'>FREE EBOOK</span> will help you master the market with confidence, discipline and a positive
                            attitude. No amount is too little to build.
                        </p>
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Get Now</button>
                    </div>
                </div>
            </div>
        </div>


















        // <div className='text pb-32 pt-6'>
        //     <div className=' flex flex-col justify-between lg:w-3/4 lg:flex-row items-center mx-auto gap-10 space-y-10 lg:space-y-0 lg:px-0 px-4' data-aos="fade-up">
        //         <div className='flex text-white flex-col space-y-12 md:w-full lg:w-[40%]'>
        //             <h1 className='text-4xl md:text-6xl font-bold font-varela text-center leading-normal lg:text-left text-black'>
        //                 <span className='text-blue '>Free</span> A-Z Courses on FX Trading from Beginner to Advance
        //             </h1>
        //             <button className='rounded-lg lg:w-fit m-auto lg:m-0 ease-out duration-500 hover:shadow-lg border border-blue text-white bg-blue font-varela font-semibold md:text-xl text-lg px-3 lg:px-4 py-3 hover:text-blue hover:bg-white'>
        //                 View Courses
        //             </button>
        //         </div>

        //         <div className='relative lg:w-1/2 lg:px-0 md:px-4 flex justify-center flex-col space-y-6'>
        //             <img className='lg:w-[90%] w-full rounded-2xl' src={heroImg} alt='img' />
        //             <div className='lg:absolute -bottom-20 -left-[25%] flex justify-between items-center bg-slate-600 text-white px-4 py-6 rounded-xl'  data-aos="flip-left" data-aos-easing="ease-out-cubic">
        //                 <div className='flex flex-col items-center space-y-2'>
        //                     <h1 className='md:text-4xl text-2xl font-varela font-semibold'>50+</h1>
        //                     <p className='md:text-lg text-sm font-varela font-light text-center'>Students Registered</p>
        //                 </div>
        //                 <div className='flex flex-col items-center space-y-2'>
        //                     <h1 className='md:text-4xl text-2xl font-varela font-semibold'>80%</h1>
        //                     <p className='md:text-lg text-sm font-varela font-light text-center'>Course completion rate</p>
        //                 </div>
        //                 <div className='flex flex-col items-center space-y-2'>
        //                     <h1 className='md:text-4xl text-2xl font-varela font-semibold'>80%</h1>
        //                     <p className='md:text-lg text-sm font-varela font-light text-center'>User retention rate</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Courses
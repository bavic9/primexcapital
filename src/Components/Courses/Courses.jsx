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
        AOS.init({duration: 2000})
    }, [])


    return (
        <div className=' bg-slate-200 py-20'>
            <div className='px-4 lg:px-32'>
                <h1 className=' text-3xl lg:text-7xl text-center font-extrabold font-lato py-4'>We Are Here To Help You <span className='text-blue'>Fulfill And Reach All Of Your Trading Goals</span></h1>

                {/* grid box */}
                <div className=' grid lg:grid-cols-3 py-16 gap-8'>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>We Save Your Time</h2>
                        <img className='w-[45px]' src={time} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            You <span className='font-bold'>don’t need to spend hours in front of the charts</span> and the news channels every day. 
                            We do that for you while you can spend that time elsewhere. You can enjoy our service 
                            and make <span className='font-bold'>money while you are on a job or spending time with your family.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>We Save Your Money</h2>
                        <img className='w-[45px]' src={wallet} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Making money consistently in the Forex market takes years of experience which includes losing a lot of money in the process. 
                            We trade our expertise to save you from the losses and help you 
                            <span className='font-bold'>make money from the beginning of your trading journey.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>We Do The Hard Work</h2>
                        <img className='w-[45px]' src={toDo} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            Our team of <span className='font-bold'>professional traders scan the markets 24/7.</span> We analyze and decrypt the markets and economies for you. 
                            All of us take the same trades.  <span className='font-bold'>All of us make money!</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>We Are Consistent</h2>
                        <img className='w-[45px]' src={trophy} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            <span className='font-bold'>Consistency is the name of the game.</span>  We are a team of disciplined and patient traders and we know what we’re doing. 
                            As a result, 
                            <span className='font-bold'>we’ve always been able to come out profitable,</span> unlike other similar services.
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>24/7 Support</h2>
                        <img className='w-[45px]' src={phone2} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            You can contact us at any time of the day. Our support agents will get back to you in the shortest period of time. 
                            <span className='font-bold'>You can message us any time of the day </span>  with any of your queries and 
                            and make <span className='font-bold'>our support agents will always be there to help.</span>
                        </p>
                    </div>
                    <div className=' min-h-[350px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-10 lg:px-12 transition ease-in-out duration-300 shadow-md hover:shadow-2xl' >
                        <h2 className=' text-2xl font-bold text-black'>Unbeatable Accuracy</h2>
                        <img className='w-[45px]' src={target} alt="icon" />
                        <p className='text-2xl font-lato font-light'>
                            We hold an accuracy of <span className='font-bold'>more than 90%</span> which allows us to have very little drawdown and maximum profits.
                        </p>
                    </div>
                </div>
            </div>



            <div className='px-3 lg:px-32 pt-8'>
                <h1 className=' text-3xl lg:text-7xl text-center font-extrabold font-lato py-4'>We Have Been <span className='text-blue'>Using Them Profitably For Years</span></h1>

                {/* grid box */}
                <div className=' grid lg:grid-cols-2 py-16 gap-8'>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[200px] m-auto' src={sig} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>PXC Pro Signals Indicator</h2>
                        <p className='text-xl font-light'>
                            <span className='font-bold'>Even If you can't read the charts, you can too grab the market opportunities with our simple but powerful Pro Signal Indicator</span> Get 
                            instant access to a simple and proven indicator that has transformed HUNDREDS of beginner traders into a "Expert Day TRADER"
                        </p>
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Buy Now</button>
                    </div>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[200px] m-auto' src={phone} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>PXC VIP Signals</h2>
                        <p className='text-2xl font-bold'>
                            Do Not Miss or Delay Entry/exit of Any Trade From Telegram Again!
                        </p>
                        <p className='text-xl font-light'>
                            Our signal copier will copy all the signals from our telegram signal channels in less than 5 seconds.
                        </p>
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Buy Now</button>
                    </div>
                    <div className=' min-h-[650px] flex flex-col space-y-6 rounded-lg bg-white py-10 px-6 lg:px-12 ' >
                        <img className='w-[250px] m-auto' src={book} alt="" />
                        <h2 className='text-3xl font-bold pt-2'>The Complete Gide To Forex Trading</h2>
                        <p className='text-2xl font-bold'>
                            Master the Market With Confidence, Discipline, and a Winning Attitude.
                        </p>
                        <p className='text-xl font-light'>
                            We make profit by analyzing the market, now you can too! Learn to do your own trading analysis in a short period of time.
                        </p>
                        <button className='px-10 py-5 w-fit m-auto border border-blue text-blue text-xl cursor-pointer transition ease-in duration-300 hover:text-white hover:bg-blue shadow-xl hover:shadow-md'>Buy Now</button>
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
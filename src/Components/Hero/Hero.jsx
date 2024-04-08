import React, { useEffect, useState } from 'react'
import './Hero.css'
import hero from '../Assets/hb.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'


const Hero = () => {

    const [authUser, setAuthUser] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='flex justify-center lg:min-h-[90vh]'>
            <div className=' w-[90%] m-auto py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-around animationUp'>
                {/* hero left */}
                <div className='lg:w-full lg:pl-24 lg:m-auto px-4 lg:px-0  ' data-aos="fade-up">
                    <h1 className='text-white font-josefinlg:text-6xl text-5xl font-bold uppercase text-start lg:text-left lg:p-0'>
                        Learn to trade like a pro in no time
                        {/* <div className='curved-line'></div> */}
                    </h1>
                    <p className=' lg:w-[90%] m-auto lg:m-0 text-slate-400 text-start uppercase lg:text-start text-xl md:text-2xl font-josefin py-6'>
                        Evaluate your trading journey & network with like minds and expert traders
                    </p>
                    <div className='flex justify-start gap-3 items-center md:space-x-6 py-6'>
                        {/* <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-5 lg:px-10 py-3 hover:text-white hover:bg-blue'>
                            Join Free Classes
                        </button> */}

                        {/* <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-3 lg:px-6 py-5 hover:text-white hover:bg-blue'>
                            Enroll Now
                        </button> */}

                        {
                            authUser ? (
                                <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-josefin font-semibold md:text-2xl text-base px-3 lg:px-6 py-4 hover:text-white hover:bg-blue'>
                                    Join Telegram Channel
                                </button>
                            ) : (
                                <Link to={'/login'}>
                                    <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-josefin font-semibold md:text-2xl text-base px-3 lg:px-6 py-4 hover:text-white hover:bg-blue'>
                                        Join Telegram Channel
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                </div>


                {/* hero right */}
                <div className='lg:w-full lg:pb-10' data-aos="fade-up">
                    <img
                        className='lg:w-[80%]'
                        src={hero} alt="" 
                    />
                </div>
            </div>



        </section>
    )
}

export default Hero
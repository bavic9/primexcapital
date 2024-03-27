import React, { useEffect, useState } from 'react'
import './Hero.css'
import hero from '../Assets/btc.png'
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
        <section className=''>
            <div className='m-auto lg:px-10 pt-10 lg:pt-16 lg:py-16 flex flex-col lg:justify-around justify-center lg:flex-row items-center space-y-16 lg:space-y-0 animationUp'>
                {/* hero left */}
                <div className='lg:w-1/2 md:p-16 lg:m-auto ' data-aos="fade-right">
                    <h1 className='text-white font-josefin px-4 lg:px-0 lg:text-6xl text-4xl font-semibold text-center lg:text-left lg:p-0'>
                        This is <span className='text-blue'>PRIME X CAPITAL</span> where you learn to trade like a pro in no time
                        <div className='curved-line'></div>
                    </h1>
                    <p className=' lg:w-2/3 w-4/5 m-auto lg:m-0 text-gray-500 text-center lg:text-start text-lg md:text-2xl font-varela py-6'>
                        Evaluate your trading journey & network with like minds and expert traders
                    </p>
                    <div className='flex lg:justify-start justify-center gap-3 items-center md:space-x-6 py-6'>
                        <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-5 lg:px-10 py-5 hover:text-white hover:bg-blue'>
                            Join Free Classes
                        </button>

                        {/* <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-3 lg:px-6 py-5 hover:text-white hover:bg-blue'>
                            Enroll Now
                        </button> */}

                        {
                            authUser ? (
                                <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-3 lg:px-6 py-5 hover:text-white hover:bg-blue'>
                                    Enroll Now
                                </button>
                            ) : (
                                <Link to={'/login'}>
                                    <button className='rounded-lg ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-2xl text-base px-3 lg:px-6 py-5 hover:text-white hover:bg-blue'>
                                        Enroll Now
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                </div>


                {/* hero right */}
                <div className='lg:w-1/2' data-aos="fade-left">
                    <img
                        className=''
                        src={hero} alt="" />
                </div>
            </div>



        </section>
    )
}

export default Hero
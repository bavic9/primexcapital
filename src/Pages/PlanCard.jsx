import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'



export const PlanCard = ({
    title,
    price,
    headContent,
    content1,
    content2,
    content3,
    content4,
    content5,
    icon }) => {



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

    return (
        <div className="max-w-[1140px] m-auto py-4 lg:w-[30%] md:w-[400px]">
            <div className='border lg:max-h-[750px] px-2 py-14 my-6 border-blue rounded-3xl shadow-sm shadow-lightBlue transition delay-150 ease-in-out duration-1000 lg:hover:scale-110 '>
                <h1 className=" md:text-3xl text-2xl text-gray-500 text-center font-semibold">{title}</h1>
                <p className="font-bold text-center md:text-4xl text-3xl py-6">{price}</p>
                <h5 className="md:text-2xl text-lg text-gray-500 text-center px-6 py-2">{headContent}</h5>
                <div className="py-6 px-4 text-gray-500">
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-4xl text-3xl">{icon}</span>
                        <p className="md:text-xl text-lg">{content1}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-4xl text-3xl">{icon}</span>
                        <p className="md:text-xl text-lg">{content2}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-4xl text-3xl">{icon}</span>
                        <p className="md:text-xl text-lg">{content3}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-4xl text-3xl">{icon}</span>
                        <p className="md:text-xl text-lg">{content4}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-4xl text-3xl">{icon}</span>
                        <p className="md:text-xl text-lg">{content5}</p>
                    </div>
                </div>
                <div className="flex justify-center py-4">

                    {/* <Link to={'/payment'}>
                        <button className='cursor-pointer md:text-xl text-lg font-semibold bg-blue hover:text-blue hover:bg-transparent border border-blue md:rounded-full rounded-2xl p-4 transition ease-in-out duration-30 text-white hover:shadow-lg'>
                            Get Started
                        </button>
                    </Link> */}

                    {
                        authUser ? (
                            <Link to={'/payment'}>
                                <button className='cursor-pointer md:text-lg text-base font-semibold  bg-blue hover:text-blue hover:bg-transparent border border-blue rounded-lg px-5 py-2 transition ease-in-out duration-30 text-white hover:shadow-lg'>
                                    Get Started
                                </button>
                            </Link>
                        ) : (
                            <Link to={'/login'}>
                                <button className='cursor-pointer md:text-lg text-base font-semibold  bg-blue hover:text-blue hover:bg-transparent border border-blue rounded-lg px-5 py-2 transition ease-in-out duration-30 text-white hover:shadow-lg'>
                                    Get Started
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

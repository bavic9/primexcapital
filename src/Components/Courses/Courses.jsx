import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImg from '../Assets/forex.jpeg'

const Courses = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])


    return (
        <div className='text pb-32 pt-6'>
            <div className=' flex flex-col justify-between lg:w-3/4 lg:flex-row items-center mx-auto gap-10 space-y-10 lg:space-y-0 lg:px-0 px-4' data-aos="fade-up">
                <div className='flex text-white flex-col space-y-12 md:w-full lg:w-[40%]'>
                    <h1 className='text-4xl md:text-6xl font-bold font-varela text-center leading-normal lg:text-left text-black'>
                        <span className='text-blue '>Free</span> A-Z Courses on FX Trading from Beginner to Advance
                    </h1>
                    <button className='rounded-lg lg:w-fit m-auto lg:m-0 ease-out duration-500 hover:shadow-lg border border-blue text-white bg-blue font-varela font-semibold md:text-xl text-lg px-3 lg:px-4 py-3 hover:text-blue hover:bg-white'>
                        View Courses
                    </button>
                </div>

                <div className='relative lg:w-1/2 lg:px-0 md:px-4 flex justify-center flex-col space-y-6'>
                    <img className='lg:w-[90%] w-full rounded-2xl' src={heroImg} alt='img' />
                    <div className='lg:absolute -bottom-20 -left-[25%] flex justify-between items-center bg-slate-600 text-white px-4 py-6 rounded-xl'  data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='md:text-4xl text-2xl font-varela font-semibold'>50+</h1>
                            <p className='md:text-lg text-sm font-varela font-light text-center'>Students Registered</p>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='md:text-4xl text-2xl font-varela font-semibold'>80%</h1>
                            <p className='md:text-lg text-sm font-varela font-light text-center'>Course completion rate</p>
                        </div>
                        <div className='flex flex-col items-center space-y-2'>
                            <h1 className='md:text-4xl text-2xl font-varela font-semibold'>80%</h1>
                            <p className='md:text-lg text-sm font-varela font-light text-center'>User retention rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
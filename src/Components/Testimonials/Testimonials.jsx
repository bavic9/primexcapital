import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import dp from '../Assets/dp.jpg'
import dp2 from '../Assets/dp2.jpg'
import dp3 from '../Assets/dp3.jpg'

const Testimonials = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])


    return (
        <div className='w-[95%] lg:space-y-[5rem] space-y-10 py-[6rem] m-auto lg:mt-10'>

            <div className='text-center space-y-10' data-aos="fade-up">
                <h1 className='md:text-5xl text-3xl w-1/2 md:w-4/5 text-center m-auto font-varela font-semibold'>What our students <span className='text-blue'>says</span></h1>
                <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
                    <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                    <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                    <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                </span>
            </div>

            <div className='lg:p-4'>
                <div className='lg:flex items-center justify-around space-y-6 lg:space-y-0 gap-6' data-aos="fade-up">
                    <div className=' bg-gray-50 w-[90%] md:w-[50%] lg:w-[30%] m-auto rounded-2xl px-4 lg:px-10 py-6 shadow-lg'>
                        <h2 className='text-xl py-4 font-varela font-semibold'>
                            Amazing Analysis
                        </h2>
                        <p className='leading-relaxed font-varela text-gray-700 text-start'>
                            I enrolled into PXC Academy with minimal knowledge of Forex trading and
                            I can boldly say that I have learnt a lot. The remarkable thing is that I have
                            also been able to learn about life from a different angle. I am impressed with
                            their professionalism and approachability. I’m grateful to Jeffrey Benson and
                            the astonishing PXC Team.
                        </p>
                        <div className='py-6 flex items-center gap-6'>
                            <img src={dp} alt="" className='w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h5 className='text-lg font-varela'>Odibo Efe.</h5>
                                <h6 className='text-black font-varela text-xl font-semibold'>Forex Trader</h6>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block  bg-gray-50 w-[90%] md:w-[50%] lg:w-[30%] m-auto rounded-2xl px-4 lg:px-10 py-6 shadow-lg'>
                        <h2 className='text-xl py-4 font-varela font-semibold'>
                            Amazing Analysis
                        </h2>
                        <p className='leading-relaxed font-varela text-gray-700 text-start'>
                            One of the things that I truly enjoy about PXC is their constant innovation. They seem to always work
                            to provide a better service through offering their traders a wide range of services. They have launched a
                            blog which I find very interesting and their trading recommendations have been a very nice feature. Their
                            support is excellent, but honestly you will never require them as their platform is solid and I have never
                            experienced any outage or trading issues. My withdrawals are processed the same day and I very happy to manage
                            my forex portfolio with PXC.
                        </p>
                        <div className='py-6 flex items-center gap-6'>
                            <img src={dp2} alt="" className='w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h5 className='text-lg font-varela'>Festus Dan.</h5>
                                <h6 className='text-black font-varela text-xl font-semibold'>Forex Trader</h6>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block  bg-gray-50 w-[90%] md:w-[50%] lg:w-[30%] m-auto rounded-2xl px-4 lg:px-10 py-6 shadow-lg'>
                        <h2 className='text-xl py-4 font-varela font-semibold'>
                            Amazing Analysis
                        </h2>
                        <p className='leading-relaxed font-varela text-gray-700 text-start'>
                            I have had nothing but great experiences with PXC. I am planning on
                            traded with them for a long time. They are the most profitable broker I have
                            worked with. Also, I was always supported by their customer service, which answered
                            to all of my questions in within 24 hours. They have a great blog that
                            helped and helps me out to identify important trends in the market. Highly recommended.
                        </p>
                        <div className='py-6 flex items-center gap-6'>
                            <img src={dp3} alt="" className='w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h5 className='text-lg font-varela'>Marry Jane.</h5>
                                <h6 className='text-black font-varela text-xl font-semibold'>Forex Trader</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
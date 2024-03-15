import React from 'react'

const NewsLetter = () => {
    return (
        <div className='bg-gray-100 py-24'>
            <div className='w-[80%] m-auto bg-borderColor py-20 px-4 rounded-2xl shadow-2xl'>
                <h1 className='text-center lg:text-5xl text-3xl text-white font-varela font-semibold leading-normal lg:w-1/3 m-auto '>
                    Subscribe to our newsletter
                </h1>
                <div className='flex flex-col lg:flex-row items-center m-auto px-2 mt-8 space-y-6 lg:w-[60%] '>
                    <input type="mail" placeholder='Email address' className='p-3 lg:p-6 rounded-xl bg-transparent border text-white w-4/5 md:w-[60%] mt-4' />
                    <button className='rounded-lg w-fit m-auto ease-out duration-500 hover:shadow-lg text-white bg-black font-varela font-semibold md:text-xl text-lg px-6 md:px-16 py-5 hover:px-10'>
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
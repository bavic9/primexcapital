import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-gray-100 px-10 flex justify-center pb-6'>
        <div className='w-[90%] flex flex-col lg:flex-row justify-between items-center space-y-8 border-t-2 border-gray-400 py-4 md:py-8 lg:py-0 lg:px-14'>
            <h1 className='md:text-lg text-center text-gray-600'>© 2024 Prime X Capital. All Rights Reserved</h1>

            <div className='flex items-center justify-center gap-4'>
                <div className='p-4 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                    <FaXTwitter className='text-xl'/>
                </div>
                <div className='p-4 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                    <FaFacebookF className='text-xl'/>
                </div>
                <div className='p-4 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                    <FaInstagram className='text-xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
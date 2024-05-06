import React from 'react'
import logo from '../Assets/logosmb.png'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaTelegram} from "react-icons/fa";
// import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' bg-gray-950 px-10 mt-auto w-full py-6'>
            <div className='w-4/5  text-white md:m-auto grid lg:grid-cols-[repeat(4,1fr)] md:grid-cols-[repeat(1,1fr)] grid-cols-[repeat(1,1fr)] gap-x-10 p-4 pb-10'>
                <div className='flex mt-20 flex-col'>
                    <img className='w-[55px]' src={logo} alt="" />
                </div>
                <div className='flex flex-col lg:items-center'>
                    <h5 className='mt-8 text-2xl text-orange'>Support</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'></span>
                    <div className='flex flex-col mt-4'>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>
                    </div>
                </div>
                <div className='flex flex-col lg:items-center'>
                    <h5 className='mt-8 text-2xl text-orange'>Company</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'> </span>
                    <div className='flex flex-col mt-4'>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                    </div>
                </div>
                <div className='flex flex-col lg:items-center'>
                    <h5 className='mt-8 text-2xl text-orange'>Socials</h5>
                    <span className='w-[30px] border-b-orange mx-0 my-4 border-b-4 border-solid'> </span>
                    <div className='grid grid-cols-3 gap-4 w-fit lg:w-full mt-4'>
                        <a href="https://x.com/Prime_x_capital?t=3JHg2WNpMJhStizWAqqkOQ&s=08" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaTwitter className='text-xl' />
                        </a>
                        <a href="https://www.facebook.com/groups/2545729222112814" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaFacebookF className='text-xl' />
                        </a>
                        <a href="https://www.tiktok.com/@primexcapital?_t=8l7IAPBQmOr&_r=1" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaTiktok className='text-xl' />
                        </a>
                        <a href="https://www.instagram.com/prime_x_capital?igsh=aWJrNTczaTFzNDhy" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaInstagram className='text-xl' />
                        </a>
                        <a href="https://youtube.com/@primexcapital?si=edlxB6SH-DSwusdn" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaYoutube className='text-xl' />
                        </a>
                        <a href="https://t.me/primexcapital" target='blank' className='p-2 rounded-full w-fit border border-white transition duration-300 ease-in cursor-pointer hover:bg-white hover:text-gray-950'>
                            <FaTelegram className='text-xl' />
                        </a>
                    </div>
                </div>
            </div>


            <div className='w-[90%]  m-auto flex flex-col lg:flex-row justify-center items-center space-y-8 border-t-2 border-gray-400 py-4 md:py-8 lg:py-0 lg:px-14'>
                <h1 className='md:text-lg text-center text-gray-600 pt-5'>© 2024 Prime X Capital. All Rights Reserved</h1>

                {/* <div className='flex items-center justify-center gap-4'>
                    <div className='p-2 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                        <FaXTwitter className='text-xl' />
                    </div>
                    <div className='p-2 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                        <FaFacebookF className='text-xl' />
                    </div>
                    <div className='p-2 rounded-full border border-gray-800 transition duration-300 ease-in cursor-pointer hover:bg-black hover:text-white'>
                        <FaInstagram className='text-xl' />
                    </div>
                </div> */}
            </div>


        </div>
    )
}

export default Footer
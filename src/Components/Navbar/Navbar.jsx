import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logoWhite from '../Assets/logoWhite.jpg'
import logosmb from '../Assets/logosmb.png'
import { BiMenuAltRight } from 'react-icons/bi'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Navbar = () => {


    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    const NavRef = useRef();

    const showNavBar = () => {
        NavRef.current.classList.toggle('responsive_nav')
    }

    const [menu, setMenu] = useState('Home')


    return (
        <div
            className={scrolled ? 'ease-in-out duration-0 bg-white fixed w-full  flex justify-between z-50 items-center md:px-16 px-4 py-4 shadow-lg'
                : ' flex bg-white justify-between items-center md:px-16 px-4 py-4 shadow-lg '}
        >
            <div
                onClick={() => { setMenu('Home') }}
                className='flex items-center gap-[10px]'>
                <Link to='/'><img className='md:w-48 w-40 md:h-20 h-12 ' src={logoWhite} alt="logo" /></Link>
            </div>
            <div ref={NavRef} className=' md:flex gap-10 relative fixed menu lg:space-y-0 space-y-8'>
                <ul className='lg:flex flex lg:flex-row flex-col gap-[50px] items-center text-gray-700 text-2xl font-semibold outline-none transition'>
                    <li
                        onClick={() => { setMenu('Home') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-14 after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='/'>Home</Link>{menu === 'Home' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu('Mentorship Plan') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-14 after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='/mentorship'>Mentorship Plan</Link>{menu === 'Mentorship Plan' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu('Fire Calculator') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-14 after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='calculator'>Fire Calculator</Link>{menu === 'Fire Calculator' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu('Blog') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-14 after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='/blog'>Blog</Link>{menu === 'Blog' ? <hr /> : <></>}
                    </li>
                    <li
                        onClick={() => { setMenu('FAQs') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-14 after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='/faqs'>FAQs</Link>{menu === 'FAQs' ? <hr /> : <></>}
                    </li>
                </ul>
                <div
                    onClick={() => { setMenu('Login') }}
                    className='md:mt-0 mt-4'>
                    <Link to='/login'><button className='cursor-pointer text-xl font-semibold text-blue border border-blue rounded-full p-4 w-[137px] bg-transparent transition ease-in-out duration-300 hover:bg-blue hover:text-white hover:shadow-lg'>Login</button></Link>
                </div>
                <div className='lg:hidden outline-none  cursor-pointer flex justify-between w-full md:px-12 px-5 absolute top-[0rem]'>
                    <img src={logosmb} className='w-16' alt="logo" />
                    <button className=' p-2 text-black hover:bg-lightBlue hover:p-2 hover:rounded-md ease-in-out duration-700 ' onClick={showNavBar}>
                        <FaTimes size={30} />
                    </button>
                </div>
            </div>
            <div
                className='lg:hidden cursor-pointer p-2 text-black hover:bg-lightBlue hover:p-2 hover:rounded-md ease-in-out duration-700'
                onClick={showNavBar}>
                <BiMenuAltRight size={30} />
            </div>
        </div>
    )
}

export default Navbar





// className=
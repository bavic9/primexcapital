import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logoWhite from '../Assets/logoWhite.jpg'
import logosmb from '../Assets/logosmb.png'
import { BiMenuAltRight } from 'react-icons/bi'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../firebase'


const Navbar = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
            })
            .catch((error) => console.log(error));
    };


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
            className={scrolled ? 'ease-in-out duration-0 bg-white fixed w-[100vw] flex justify-between z-50 items-center md:px-10 px-4 py-3 shadow-lg'
                : ' flex bg-white justify-between items-center md:px-10 px-4 py-3 shadow-lg w-[100vw]'}
        >
            <div
                onClick={() => { setMenu('Home') }}
                className='flex items-center gap-[10px]'>
                <Link to='/'><img className='md:w-48 w-40 md:h-20 h-12 ' src={logoWhite} alt="logo" /></Link>
            </div>
            <div ref={NavRef} className=' md:flex gap-10 relative menu lg:space-y-0 space-y-8'>
                <ul className='lg:flex flex lg:flex-row flex-col gap-[50px] items-center text-black lg:text-gray-700 text-xl lg:text-lg font-bold lg:font-semibold outline-none transition'>
                    <Link to='/'>
                        <li
                            onClick={() => { setMenu('Home') }}
                            className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                            after:top-[31px] after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                            Home{menu === 'Home' ? <hr /> : <></>}
                        </li>
                    </Link>
                    <Link to='/mentorship'>
                        <li
                            onClick={() => { setMenu('Mentorship Plan') }}
                            className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                            after:top-[31px] after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                            Mentorship Plan{menu === 'Mentorship Plan' ? <hr /> : <></>}
                        </li>
                    </Link>
                    {/* <li
                        onClick={() => { setMenu('Fire Calculator') }}
                        className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                        after:top-[31px] after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                        <Link to='/'>Fire Calculator</Link>
                        {menu === 'Fire Calculator' ? <hr /> : <></>}
                    </li> */}
                    <Link to='/'>
                        <li
                            onClick={() => { setMenu('Blog') }}
                            className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                            after:top-[31px] after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                            Blog
                            {/* {menu === 'Blog' ? <hr /> : <></>} */}
                        </li>
                    </Link>
                    <Link to='/'>
                        <li
                            onClick={() => { setMenu('FAQs') }}
                            className='active:text-blue cursor-pointer relative after:content after:absolute after:bg-blue after:h-[3px] after:w-0 after:left-0 
                            after:top-[31px] after:ease-in-out after:duration-500 after:rounded-sm hover:text-blue after:hover:w-full'>
                            FAQs
                            {/* {menu === 'FAQs' ? <hr /> : <></>} */}
                        </li>
                    </Link>
                </ul>
                {
                    authUser ? (
                        <div
                            onClick={() => { setMenu('Login') }}
                            className='md:mt-0 mt-4'>
                            <Link onClick={userSignOut} to='/login'><button className='cursor-pointer text-2xl lg:text-lg lg:font-semibold text-blue border border-blue rounded-2xl lg:rounded-full px-8 py-4 lg:p-2 lg:w-[87px] bg-transparent transition ease-in-out duration-300 hover:bg-blue hover:text-white hover:shadow-lg'>Logout</button></Link>
                        </div>
                    ) : (
                        <div
                            onClick={() => { setMenu('Login') }}
                            className='md:mt-0 mt-4'>
                            <Link to='/login'><button className='cursor-pointer text-2xl lg:text-lg lg:font-semibold text-blue border border-blue rounded-2xl lg:rounded-full px-8 py-4 lg:p-2 lg:w-[87px] bg-transparent transition ease-in-out duration-300 hover:bg-blue hover:text-white hover:shadow-lg'>Login</button></Link>
                        </div>
                    )
                }


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






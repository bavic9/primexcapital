import React, { useState } from 'react'
import { auth } from '../firebase'
import reg from '../Components/Assets/register.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const LoginSignup = () => {


  const [name, setName] = useState('')
  const [lname, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password, name, lname)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div className="flex justify-center items-center lg:py-20 lg:h-[75vh] h-[90vh] w-[100vw] ">
      <div className='flex flex-col lg:flex-row  justify-center items-center w-full lg:w-fit h-full'>
        <div className="lg:p-16 p-8 flex items-center justify-center flex-col lg:w-1/2 w-full space-y-6 animateOpacity">
          <form action="#" onSubmit={handleSubmit} className="flex items-center justify-center flex-col overflow-hidden w-full lg:space-y-4 space-y-8">
            <h2 className="text-[2.2rem] text-blue mb-2.5 font-varela font-semibold">Sign up</h2>
            <div className=" border-2 text-xl max-w-[380px] w-full h-[55px] rounded-full flex items-center justify-center">
              <FaUser />
              <input className='text-base h-full w-4/5 bg-none border-none px-6 outline-none' type="text" placeholder="First Name" onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className=" border-2 text-xl max-w-[380px] w-full h-[55px] rounded-full flex items-center justify-center">
              <FaUser />
              <input className='text-base h-full w-4/5 bg-none border-none px-6 outline-none' type="text" placeholder="Last Name" onChange={(e) => { setlName(e.target.value) }} />
            </div>
            <div className=" border-2 text-xl max-w-[380px] w-full h-[55px] rounded-full flex items-center justify-center">
              <FaEnvelope />
              <input className='text-base h-full w-4/5 bg-none border-none px-6 outline-none' type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required />
            </div>
            <div className=" border-2 text-xl max-w-[380px] w-full h-[55px] rounded-full flex items-center justify-center">
              <FaLock />
              <input className='text-base h-full w-4/5 bg-none border-none px-6 outline-none' type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
            </div>
            <button type='submit' className='cursor-pointer text-xl font-semibold text-blue border border-blue rounded-full p-3 w-[137px] bg-transparent transition ease-in-out duration-300 hover:bg-blue hover:text-white hover:shadow-lg'>
              <Link to='/login'>Submit</Link>
            </button>
          </form>
          <span className="text-center flex gap-2 text-gray-500 text-[15px]">
            <p>Already have an account?</p>
            <a href="login.html" className=' text-blue'>
              <Link to='/login'>
                Login here
              </Link>
            </a>
          </span>
        </div>

        <div className='lg:w-1/2 lg:h-[60vh] overflow-hidden bg-blue rounded-[30%_70%_70%_30%_/_14%_30%_70%_86%] shadow animate-heart'>
          <div className="h-full hidden lg:flex justify-center">
            <img src={reg} className=" w-3/5" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

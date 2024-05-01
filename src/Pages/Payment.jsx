import React, { useState, useEffect } from 'react'
import PaystackPop from '@paystack/inline-js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import pay from '../Components/Assets/pay.webp'


const Payment = () => {

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const payWithPaystack = (e) => {
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: "pk_test_00a352e451956eec9ddf226179d7b1db798b6aff",
            amount: amount * 100,
            email,
            name,
            onSuccess(transaction) {
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                navigate("/")
            },
            onCancel() {
                alert('You have Canceled the transaction')
            }
        })
    }

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <div className='flex flex-col justify-center items-center w-[90vw] m-auto my-20'>
            <div className='text-center mt-10 space-y-2 w-full'>
                <h1 className='md:text-5xl text-3xl w-1/2 md:w-4/5 text-center m-auto font-varela font-semibold'>Make <span className='text-blue'>Payment</span></h1>
                <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
                    <span className='w-[40%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                    <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                    <span className='w-[40%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                </span>
            </div>

            <div className='w-4/5 py-20'>
                <div className="flex lg:flex-row flex-col justify-around items-center space-y-16" data-aos="zoom-out-up">
                    <div className='bg-blue rounded-[30%_70%_70%_30%_/_14%_30%_70%_86%] shadow animate-heart lg:w-[30%] w-full p-4 lg:p-0'>
                        <img src={pay} className='w-[100%] p-3' alt="Contact Us" 
                    />
                    </div>
                    <div className=''>
                        <h2 className='lg:text-2xl text-xl text-center font-semibold ml-4 mb-[30px] text-blue'>Fill with your details</h2>

                        <form action="" id='paymentForm'>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                                <div className=" ">
                                    <input
                                        className='w-full text-black font-medium text-lg tracking-[0.8px] transition-[0.3s] duration-[ease-in-out] mt-0 mb-2 mx-0 px-[26px] py-[18px] rounded-[20px] border border-blue placeholder:text-base placeholder:font-normal placeholder:text-gary-300 focus:placeholder:text-[#121212] focus:placeholder:opacity-80'
                                        type="name" id='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className=" ">
                                    <input
                                        className='w-full text-black font-medium text-lg tracking-[0.8px] transition-[0.3s] duration-[ease-in-out] mt-0 mb-2 mx-0 px-[26px] py-[18px] rounded-[20px] border border-blue placeholder:text-base placeholder:font-normal placeholder:text-gary-300 focus:placeholder:text-[#121212] focus:placeholder:opacity-80'
                                        type="tel" id='amount' placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                                <div className="">
                                    <input
                                        className='w-full text-black font-medium text-lg tracking-[0.8px] transition-[0.3s] duration-[ease-in-out] mt-0 mb-2 mx-0 px-[26px] py-[18px] rounded-[20px] border border-blue placeholder:text-base placeholder:font-normal placeholder:text-gary-300 focus:placeholder:text-[#121212] focus:placeholder:opacity-80'
                                        type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id='email-address' />
                                </div>
                                <div className=" ">
                                    <input
                                        className='w-full text-black font-medium text-lg tracking-[0.8px] transition-[0.3s] duration-[ease-in-out] mt-0 mb-2 mx-0 px-[26px] py-[18px] rounded-[20px] border border-blue placeholder:text-base placeholder:font-normal placeholder:text-gary-300 focus:placeholder:text-[#121212] focus:placeholder:opacity-80'
                                        type="tel" name='phone' placeholder="Phone No." />
                                </div>

                            </div>
                            <div className="flex items-center justify-center">
                                <button type='submit' onClick={payWithPaystack}
                                    className='font-bold text-blue bg-white text-xl relative transition-[0.3s] duration-[ease-in-out] mt-[25px] m-auto px-20 py-4 rounded-[10px] shadow-lg border border-blue hover:text-white before:content-[""] before:w-0 before:h-full before:absolute before:z-0 before:transition-[0.3s] before:duration-[ease-in-out] before:rounded-[10px] before:left-0 before:top-0 hover:before:w-full before:bg-blue before:hover:border-none'>
                                    <span className='z-[1] relative'>Pay</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>










        </div>
    )
}

export default Payment
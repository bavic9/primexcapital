import React, { useState, useEffect } from 'react'
import PaystackPop from '@paystack/inline-js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
// require ('dotenv').config()


const Payment = () => {

    // console.log(process.env)

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    const payWithPaystack = (e) => {
        e.preventDefault()
        const paystack = new PaystackPop()
        paystack.newTransaction({
            key: "pk_test_00a352e451956eec9ddf226179d7b1db798b6aff",
            amount:amount * 100,
            email,
            name,
            onSuccess(transaction){
                let message = `Payment Complete! Reference ${transaction.reference}`
                alert(message)
                navigate("/")
            },
            onCancel(){
                alert('You have Canceled the transaction')
            }
        })
    }

    return (
        <div className='flex flex-col justify-center items-center w-[90vw] m-auto'>
            <div className='text-center space-y-2 w-full' data-aos="fade-up">
                <h1 className='md:text-5xl text-3xl w-1/2 md:w-4/5 text-center m-auto font-varela font-semibold'>Make <span className='text-blue'>Payment</span></h1>
                <span className='flex w-[90%] lg:w-[35%] lg:pt-10 m-auto items-center justify-between'>
                    <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                    <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                    <span className='w-[45%] lg:w-[46%] h-[3px] rounded-full bg-blue animLine'></span>
                </span>
            </div>


            <div className=' flex flex-col justify-center m-auto items-center w-[80%] p-6'>
                <form action="" id='paymentForm' className='py-10 space-y-8'>
                    <div className='flex justify-center items-center gap-10'>
                        <label htmlFor="email" className='text-xl font-varela'>Email:</label>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} id='email-address' className=' border-2 p-2' />
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <label htmlFor="amount" className='text-xl font-varela'>Amount:</label>
                        <input type="tel" id='amount' placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className=' border-2 p-2' />
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <label htmlFor="name" className=' text-xl font-varela'>Name:</label>
                        <input type="name" id='name' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className=' border-2 p-2' />
                    </div>
                    <div className="flex justify-center py-4">
                        <button 
                        type='submit'
                        onClick={payWithPaystack}
                        className='cursor-pointer md:text-xl text-lg font-semibold bg-blue hover:text-blue hover:bg-transparent border border-blue md:rounded-full rounded-2xl p-4 w-[137px] transition ease-in-out duration-30 text-white hover:shadow-lg'>
                            Pay
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
import React, { useState } from 'react'
import PaystackPop from '@paystack/inline-js'


const Payment = () => {

    // if (!authorized) {
    //     return <Redirect to="/login"/>
    // }


    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [name, setName] = useState("")

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
            },
            onCancel(){
                alert('You have Canceled the transaction')
            }
        })
    }

    return (
        <div className=' py-32 lg:py-20'>
            <div className='text-center space-y-10 mt-10'>
                <h1 className='text-6xl font-varela font-semibold'>Make <span className='text-blue'>Payment</span></h1>
                <span className='flex w-[80%] lg:w-[40%] m-auto items-center justify-between'>
                    <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
                    <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                    <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
                </span>
            </div>
            <div className=' flex flex-col justify-center m-auto items-center w-[80%] p-6 mt-10'>
                <form action="" id='paymentForm' className='py-10 space-y-8'>
                    <div className='flex justify-center items-center gap-10'>
                        <label htmlFor="email" className='text-xl font-varela'>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email-address' className=' border-2 p-2' />
                    </div>
                    <div className='flex justify-center items-center gap-5'>
                        <label htmlFor="amount" className='text-xl font-varela'>Amount:</label>
                        <input type="tel" id='amount' value={amount} onChange={(e) => setAmount(e.target.value)} className=' border-2 p-2' />
                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <label htmlFor="name" className=' text-xl font-varela'>Name:</label>
                        <input type="name" id='name' value={name} onChange={(e) => setName(e.target.value)} className=' border-2 p-2' />
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
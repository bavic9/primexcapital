import React from 'react'

const offer = () => {
  return (
    <div className='w-[90%] lg:space-y-[10rem] space-y-20 py-[10rem] m-auto'>
        {/* offer head */}
        <div className='text-center space-y-10'>
            <h1 className='text-6xl font-varela font-semibold'>What we have to <span className='text-blue'>offer</span></h1>
            <p className='lg:text-3xl text-2xl lg:w-[45%] text-gray-500 w-[80%] m-auto'>Your dreams deserve a solid training academy, we have got you covered!</p>
            <span className='flex w-[90%] lg:w-[40%] lg:pt-10 m-auto items-center justify-between'>
                <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
                <span className='h-[20px] w-[20px] rounded-full bg-blue'></span>
                <span className='w-[45%] lg:w-[47%] h-[4px] rounded-full bg-blue animLine'></span>
            </span>
        </div>

        {/* offer bottom flex */}
        <div className='flex flex-col lg:flex-row justify-around items-center space-y-16 lg:space-y-0 lg:w-[75%] lg:m-auto '>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px] border-blue border-2 rounded-3xl space-y-16 pb-16 shadow-lg shadow-lightBlue transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'>
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-3xl text-2xl'>Trading Community</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-500 w-[90%] m-auto leading-10 font-semibold'>
                    We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Join Telegram Channel
                </button>
            </div>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px] border-blue border-2 rounded-3xl space-y-16 pb-16 shadow-lg shadow-lightBlue transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'>
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-3xl text-2xl'>Trading Community</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-500 w-[90%] m-auto leading-10 font-semibold'>
                    We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Join Telegram Channel
                </button>
            </div>
            <div className='mx-4 lg:max-h-[420px] md:w-[300px] border-blue border-2 rounded-3xl space-y-16 pb-16 shadow-lg shadow-lightBlue transition delay-150 ease-in-out duration-1000 lg:hover:scale-110'>
                <h1 className='pt-12 text-center text-black font-varela font-semibold md:text-3xl text-2xl'>Trading Community</h1>
                <p className='text-center font-varela md:text-xl text-lg text-gray-500 w-[90%] m-auto leading-10 font-semibold'>
                    We foster a trading community of over 100,000 subscribers where high quality signals, trading resources and tools are shared for free. Click the button below to join now.
                </p>
                <button className='flex justify-center items-center m-auto rounded-2xl ease-out duration-500 hover:shadow-lg border border-blue text-blue font-varela font-semibold md:text-xl text-lg px-4 py-5 hover:text-white hover:bg-blue'>
                    Join Telegram Channel
                </button>
            </div>
        </div>
    </div>
  )
}

export default offer
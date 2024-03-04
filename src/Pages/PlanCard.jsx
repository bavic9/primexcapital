
export const PlanCard = ({
    title,
    price,
    headContent,
    content1,
    content2,
    content3,
    content4,
    content5,
    icon }) => {
        
    return (
        <div className="max-w-[1140px] m-auto py-4 lg:w-[27%] md:w-[400px]">
            <div className='border-2 lg:max-h-[750px] px-6 mx-4 py-14 my-6 border-blue rounded-3xl shadow-lg shadow-lightBlue transition delay-150 ease-in-out duration-1000 lg:hover:scale-110 '>
                <h1 className=" md:text-3xl text-2xl text-gray-500 text-center font-semibold">{title}</h1>
                <p className="font-bold text-center md:text-4xl text-3xl py-6">{price}</p>
                <h5 className="md:text-2xl text-xl text-gray-500 text-center px-10 py-2">{headContent}</h5>
                <div className="py-6 text-gray-500">
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-5xl text-3xl">{icon}</span>
                        <p className="md:text-2xl text-xl">{content1}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-5xl text-3xl">{icon}</span>
                        <p className="md:text-2xl text-xl">{content2}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-5xl text-3xl">{icon}</span>
                        <p className="md:text-2xl text-xl">{content3}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-5xl text-3xl">{icon}</span>
                        <p className="md:text-2xl text-xl">{content4}</p>
                    </div>
                    <div className="flex items-center justify-start gap-2 py-3">
                        <span className="text-blue md:text-5xl text-3xl">{icon}</span>
                        <p className="md:text-2xl text-xl">{content5}</p>
                    </div>
                </div>
                <div className="flex justify-center py-4">
                    <button className='cursor-pointer md:text-xl text-lg font-semibold bg-blue hover:text-blue hover:bg-transparent border border-blue md:rounded-full rounded-2xl p-4 w-[137px] transition ease-in-out duration-30 text-white hover:shadow-lg'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

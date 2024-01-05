import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full h-[370px] md:h-[320px] flex justify-center '>
            <div className='mx-3 md:w-[1300px] rounded-xl bg-green-300 my-5'>
                <h1 className='font-bold text-xl md:text-3xl mt-10 flex justify-center mx-10'>Subscribe to our Newsletter</h1>
                <p className='mx-10 my-7 flex justify-center text-lg md:text-2xl'>Subscribe to our newsletter to get details and recommendations for nice tour weekly to your email.</p>
                <div className='flex justify-center'>
                    <input className='mt-4 w-[50%] md:w-[30%] h-10 rounded-xl pl-4 py-6' type="email" placeholder='Enter your email...' />
                    <button className='bg-black text-white h-10 mt-4 pt-3 pb-9 rounded-xl px-3 hover:shadow-xl hover:bg-gray-900 hover:text-white active:scale-95'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter

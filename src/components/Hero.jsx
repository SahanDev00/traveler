import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full bg-cover h-screen object-cover' src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-screen"/>
            <div className='absolute top-0 flex flex-col w-full h-full justify-center pl-6'>
                <div className='absolute max-w-[1100px] m-auto p-4 md:left-[10%]'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-red-700 drop-shadow-lg'>Travel Guide</h1>
                    <p className='text-2xl text-white drop-shadow-lg sm:text-3xl py-4'>Know about your next destination.</p>
                    <input className='h-10 w-[70%] border-4 border-red-500 p-4' type="text" placeholder='Where would you like to go?' />
                    <button className='p-3 m-1 bg-white text-red-600 border border-red-500 rounded-full'><FaSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero

import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full bg-cover h-screen object-cover ' src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=740&t=st=1704127087~exp=1704127687~hmac=247e7325fd2fd2002e57e9d5b110efe37640b1ec06bcdbe5e3fdcd8113ef5d81" alt="" />
            <div className='absolute top-0 flex flex-col w-full h-full justify-center pl-6'>
                <div className='absolute max-w-[1100px] m-auto p-4 md:left-[10%]'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-red-600 drop-shadow-lg'>Travel Guide</h1>
                    <p className='text-2xl text-white drop-shadow-lg sm:text-3xl py-4'>Know about your next destination.</p>
                    <input className='h-10 w-80 border-4 border-red-500 p-4' type="text" placeholder='Where would you like to go?' />
                    <button className='p-4 text-red-600 '><FaSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero

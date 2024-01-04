import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <img className='top-0 left-0 w-full bg-cover h-screen object-cover' src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=996&t=st=1704361862~exp=1704362462~hmac=3d565e7931ab44a3549c1dece7bf182ad13d4fd85d1769da41171b136171c874" alt="" />
            <div className="bg-black/40 absolute top-0 left-0 w-full h-screen"/>
            <div className='absolute top-0 flex flex-col w-full h-full justify-center pl-6'>
                <div className='absolute max-w-[1100px] m-auto p-4 md:left-[10%]'>
                    <h1 className='text-4xl sm:text-5xl font-bold text-green-500 drop-shadow-lg'>Travel Guide</h1>
                    <p className='text-2xl text-white drop-shadow-lg sm:text-3xl py-4'>Know about your next destination.</p>
                    <input className='h-10 w-80 border-4 border-red-500 p-4' type="text" placeholder='Where would you like to go?' />
                    <button className='p-3 m-1 bg-white text-red-600 border border-red-500 rounded-full'><FaSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero

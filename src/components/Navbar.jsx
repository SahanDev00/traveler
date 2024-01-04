import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }

    return (
        <div className='absolute flex w-full justify-between h-20 items-center mx-auto px-6 pt-2'>
            <h1 className='text-3xl font-bold mt-1 ml-5 md:ml-5 drop-shadow-xl z-10'>Travel<span className='text-red-700'>er</span></h1>
            <ul className='hidden sm:flex pr-2 z-10'>
                <li className='p-4 m-1 text-lg cursor-pointer uppercase text-white'>Home</li>
                <li className='p-4 m-1 text-lg cursor-pointer uppercase text-white'>Featured</li>
                <li className='p-4 m-1 text-lg cursor-pointer uppercase text-white'>Blog</li>
                <li className='p-4 m-1 text-lg cursor-pointer uppercase text-white'>Contact</li>
            </ul>

            <div onClick={handleNav} className='block sm:hidden cursor-pointer pr-6 z-10'> 
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-green-200 ease-in-out duration-500  z-10' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold mt-5 ml-5 md:ml-3 drop-shadow-xl'>Travel<span className='text-red-500'>er</span></h1>
            <ul className='sm:flex pr-2 '>
                <li className='p-3 ml-3 mt-2 text-lg  cursor-pointer uppercase'>Home</li>
                <li className='p-3 ml-3 text-lg cursor-pointer uppercase'>Featured</li>
                <li className='p-3 ml-3 text-lg cursor-pointer uppercase'>Blog</li>
                <li className='p-3 ml-3 text-lg cursor-pointer uppercase'>Contact</li>
            </ul>
        </div>
        </div>
    )
}

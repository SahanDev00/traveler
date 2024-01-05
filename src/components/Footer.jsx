import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=' w-full h-[650px] md:h-[250px] bg-green-950'>
            <div className='grid md:grid-cols-4 ml-9 pt-3'>
                <h1 className='text-3xl pt-6 font-bold pl-1 md:pl-7 md:ml-5 '>Travel<span className='text-red-700'>er</span></h1>
                <div className='pt-4 pb-2 ml-2'>
                    <h2 className='font-bold text-gray-300 text-lg'>Company</h2>
                    <ul>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>About</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Blog</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Press</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Careers</li>
                    </ul>
                </div>
                <div className='pt-4 pb-2 ml-2'>
                    <h2 className='font-bold text-gray-300 text-lg'>Support</h2>
                    <ul>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Pricing</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Documentation</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Guides</li>
                    </ul>
                </div>
                <div className='pt-4 pb-2 ml-2'>
                    <h2 className='font-bold text-gray-300 text-lg'>Legal</h2>
                    <ul>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Claims</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Policy</li>
                        <li className='text-sm text-gray-400 my-2 cursor-pointer'>Terms</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='w-full grid grid-cols-2 md:grid-cols-3 '>
                <div className=' text-gray-300 mt-5 flex mx-3 md:justify-center space-x-2'>
                    <FaFacebookSquare size={30} className='cursor-pointer '/>
                    <FaInstagram size={30} className='cursor-pointer'/>
                    <FaTwitterSquare size={30} className='cursor-pointer'/>
                    <FaGithubSquare size={30} className='cursor-pointer'/>
                    <FaDribbbleSquare size={30} className='cursor-pointer'/>
                </div>
                <div className='hidden md:flex justify-center mt-5'>
                    <h2 className='text-white text-sm md:text-md'>2024 All rights reserved.</h2>
                </div>
                <div className='mt-5 flex justify-center'>
                    <h2 className='text-white text-sm md:text-md mr-8'>xxxxxxxxxx@gmail.com</h2>
                </div>
            </div>
            <div className='w-full flex md:hidden justify-center mt-5'>
                    <h2 className='text-white text-sm md:text-md'>2024 All rights reserved.</h2>
            </div>
        </div>
    )
}

export default Footer

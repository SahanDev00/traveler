import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const Featured = () => {
    return (
        <div className='w-full  '>
            <div className='w-full h-1'>
                <h1 className='flex justify-center py-10 my-5 text-3xl font-bold text-red-500 '>Featured</h1>
            </div>
            <div className='pt-[7rem] max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-8 md:px-4'>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Thailand</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600' />
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Egypt</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover  mx-auto' src="https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Italy</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Sri Lanka</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Japan</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Korea</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1661963468634-71b9482a3efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Maldives</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Brazil</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Switzerland</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600 '/>
                </div>
                <div className='flex flex-col px-3 md:px-1 border border-r-2 rounded-lg border-red-500 shadow-xl hover:scale-105 duration-200 cursor-pointer'>
                    <h2 className='mx-auto font-bold py-2'>Canada</h2>
                    <img className='rounded-lg p-2 w-[187.68px] h-[130.45px] bg-cover mx-auto' src="https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <p className='p-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellendus ducimus ut reprehenderit consequatur adipisci aut id omnis eos dolor.</p>
                    <FaExternalLinkAlt className='m-2 cursor-pointer text-green-600'/>
                </div>
            </div>
            <div className='w-full flex justify-center py-10 '>
                <button className='border border-r-4 rounded-full px-5 py-2 bg-green-400 hover:scale-110 duration-100'>Load More</button>
            </div>
        </div>
    )
}

export default Featured

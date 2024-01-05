import React from 'react'


const Blogs = () => {
    return (
        <div className='w-full py-5 bg-gray-300'>
            <div className='flex justify-center pb-10 pt-0 '>
                <h1 className='font-bold text-3xl text-green-500'>Blogs</h1>
            </div>
            <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-2 md:mx-auto border md:pt-4 border-black mx-3 bg-gray-400'>
                <img className='w-[75%] mx-auto border border-black my-3 md:ml-10 cursor-pointer' src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xl pt-4 mx-auto md:mx-3 md:p-0 md:mb-5 cursor-pointer'>Maldives</h2>
                    <p className='py-3 p-5 md:p-0 text-center md:mx-3 md:text-left'>Visited the place after seen the blogs and the pictures from this website. Nice experience and a beautiful country. THANK YOU !!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum corporis esse delectus earum laborum recusandae possimus hic fugiat eligendi eveniet iusto eum nobis doloremque inventore in ullam corrupti dolorem vitae, omnis officia enim repellat. Laboriosam earum tempore eligendi quasi.</p>
                    <div className='flex items-center my-6 mx-3 md:mx-0 cursor-pointer'>
                        <img className='w-7 rounded-full ml-4 md:mx-3 mx-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wza0WER4F60dcEv5rpVcquvAeDGymlpzONQngivrkg&s" alt="" />
                        <h3 className='font-bold  md:p-0 md:mx-1'>UserTest</h3>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center py-10 '>
                <button className='border border-r-4 rounded-full px-5 py-2 bg-green-400 hover:scale-110 duration-100'>Load More Blogs</button>
            </div>
        </div>
    )
}

export default Blogs

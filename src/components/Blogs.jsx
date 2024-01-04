import React from 'react'


const Blogs = () => {
    return (
        <div className='w-full py-10 bg-gray-300'>
            <div className='flex justify-center py-9 '>
                <h1 className='font-bold text-3xl text-green-500'>Blogs</h1>
            </div>
            <div className='max-w-[1240px] grid grid-cols-2'>
                <img className='w-[75%] mx-auto border border-black' src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xl pt-4'>Maldives</h2>
                    <p className='py-3'>Visited the place after seen the blogs and the pictures from this website. Nice experience and a beautiful country. THANK YOU !!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum corporis esse delectus earum laborum recusandae possimus hic fugiat eligendi eveniet iusto eum nobis doloremque inventore in ullam corrupti dolorem vitae, omnis officia enim repellat. Laboriosam earum tempore eligendi quasi.</p>
                    <div className='flex items-center my-6'>
                        <img className='w-7 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Wza0WER4F60dcEv5rpVcquvAeDGymlpzONQngivrkg&s" alt="" />
                        <h3 className='font-bold ml-2
                        '>UserTest</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs

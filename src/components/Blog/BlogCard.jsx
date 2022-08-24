import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
function BlogCard({ img, title, desc }) {
  return (
    <>
      <div className='rounded-lg overflow-hidden border border-slate-700'>
        {/* Flex Container */}
        <div className='flex flex-col space-y-2 justify-center  rounded-t-lg'>
          {/* Blog Image */}
          <div className='h-48 w-full overflow-hidden '>
            <img
              src={img}
              alt='blogImg'
              className='min-h-0 object-cover h-full w-full'
            />
          </div>
        </div>
        {/* Title */}
        <div className=' py-6 max-w-xs mx-auto flex flex-col justify-center space-y-3 p-4'>
          <h4 className='text-lg font-medium hover:text-indigo-600 duration-300 ease-in-out hover:cursor-pointer'>
            {title}
          </h4>
          <p className='text-slate-400 text-sm'>{desc}</p>
          <div className='flex items-center space-x-2 cursor-pointer font-semibold hover:text-indigo-600 ease-in-out duration-300'>
            <p>Read More</p>
            <AiOutlineArrowRight size={12} />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard

import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
function CTACard({ title, desc }) {
  return (
    <>
      <div className='p-10 bg-slate-900 rounded-lg flex flex-col space-y-4'>
        <h3 className='text-xl md:text-2xl font-medium'>{title}</h3>
        <p className='text-sm md:text-base text-slate-400'>{desc}</p>
        <div className='flex items-center space-x-2 cursor-pointer font-semibold hover:text-indigo-600 ease-in-out duration-300'>
          <p>Read More</p>
          <AiOutlineArrowRight size={12} />
        </div>
      </div>
    </>
  )
}

export default CTACard

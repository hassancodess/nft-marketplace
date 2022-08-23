import React from 'react'
import { BsWallet2 } from 'react-icons/bs'
function StepCard({ title, desc }) {
  return (
    <>
      <div className='border border-slate-800 px-8 py-10 group hover:bg-indigo-600 duration-500 ease-in-out rounded-2xl'>
        <div className='flex items-center flex-col space-y-4 '>
          <div className='relative'>
            {/* Hexagon */}
            <div className='w-24 h-24 bg-hexagon opacity-5 group-hover:opacity-10 duration-500 ease-in-out'></div>
            {/* Wallet Icon */}
            <div className='absolute top-8 right-8'>
              <BsWallet2
                size={28}
                className='text-indigo-600 opacity-100 group-hover:text-white duration-500 ease-in-out'
              />
            </div>
          </div>
          {/* Content */}
          <h1 className='font-medium text-lg'>{title}</h1>
          <h1 className='max-w-xs text-center text-slate-400 group-hover:text-white/50'>
            {desc}
          </h1>
        </div>
      </div>
    </>
  )
}

export default StepCard

import React from 'react'
import { AiOutlineClockCircle, AiFillHeart } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'

function NFTCard({ img, title, price, likes, sale }) {
  return (
    <>
      <div className='flex flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8'>
        {/* Image & Counter */}
        <div className='flex flex-col items-start relative'>
          <img src={img} alt='NFT' className='object-cover' />
          {sale && (
            <div className='flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5'>
              <AiOutlineClockCircle />
              <p className='text-xs'>66 : 08 : 19 : 27</p>
            </div>
          )}
        </div>
        {/* Content */}
        <div className='px-6 flex flex-col space-y-3'>
          {/* Title */}
          <h1>{title}</h1>
          {/* Price & Like */}
          <div className='flex justify-between'>
            {/* Price */}
            <div className='flex space-x-2 text-indigo-600 items-center'>
              <FaEthereum size={18} />
              <p className='text-sm font-semibold'>{price} ETH</p>
            </div>
            {/* Like */}
            <div className='flex space-x-2 items-center'>
              <AiFillHeart className='text-rose-600' />
              <p className='text-sm text-slate-400 '>{likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTCard

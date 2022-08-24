import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
function Outro() {
  return (
    <>
      {' '}
      <div className='border-t border-slate-700 mt-10 text-center py-4 text-slate-200 '>
        <div className='flex flex-col md:flex-row items-center space-x-1'>
          <p>&copy; 2022 Techwind Design by Shreethemes. Cloned with{'   '}</p>
          <AiFillHeart size={20} className='text-rose-500' />
          <p>by hassancodess.</p>
        </div>
      </div>
    </>
  )
}

export default Outro

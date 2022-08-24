import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
function NewsLetter() {
  return (
    <>
      <div className='flex flex-col space-y-4'>
        <h3 className='font-semibold text-lg'>NewsLetter</h3>
        <div className='flex flex-col space-y-2'>
          <p className='text-md text-slate-300'>
            Sign up and receive the latest tips via email.
          </p>
          <p className='text-md text-slate-300'>
            Write your email <span className='text-rose-500'>*</span>
          </p>
          <div className='p-2 bg-slate-700 rounded-sm flex space-x-1 items-center'>
            <HiOutlineMail size={18} className='' />
            <input
              type='text'
              className='bg-transparent'
              placeholder='Enter email'
            />
          </div>
          <button className='text-white font-semibold bg-indigo-600 p-2 rounded-md'>
            Subscribe
          </button>
        </div>
      </div>
    </>
  )
}

export default NewsLetter

import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AvatarCard from './shared/AvatarCard'
import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/avatar2.jpg'
import avatar3 from '../assets/avatar3.jpg'
import avatar4 from '../assets/avatar4.jpg'
import avatar5 from '../assets/avatar5.jpg'
import avatar6 from '../assets/avatar6.jpg'
import avatar7 from '../assets/avatar7.jpg'

function BestSellers() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto'>
          <div className='flex flex-col items-center md:items-start space-y-5'>
            {/* Content */}
            <h1 className='text-2xl md:text-4xl font-bold'>
              Best Creators & Sellers
            </h1>
            <div className='flex justify-between w-full'>
              <p className='text-slate-400'>Best sellers of the week's NFTs </p>
              <div className='flex items-center space-x-2 text-indigo-600 font-semibold'>
                <p>See More</p>
                <AiOutlineArrowRight size={12} />
              </div>
            </div>
            {/* Slider */}
            <div className='flex space-y-6 md:space-y-0 md:space-x-6 justify-center w-full flex-col md:flex-row  '>
              <AvatarCard
                img={avatar1}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'
              />
              <AvatarCard
                img={avatar2}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
              />
              <AvatarCard
                img={avatar3}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'
              />
              <AvatarCard
                img={avatar4}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'
              />
              <AvatarCard
                img={avatar6}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'
              />
              <AvatarCard
                img={avatar7}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'
              />
              <AvatarCard
                img={avatar5}
                name='Calvin Carlo'
                handle='@calvin_carlo'
                gradient='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestSellers

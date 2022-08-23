import React from 'react'
import NFTCardsList from './shared/NFTCardsList'
import { AiOutlineArrowRight } from 'react-icons/ai'

function HotProducts() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <div className='flex flex-col items-center space-y-8'>
            {/* Content */}
            <div className='flex flex-col items-center space-y-4 '>
              <h1 className='text-2xl md:text-3xl font-medium'>
                Explore Hot Products
              </h1>
              <p className='text-slate-400 max-w-lg text-center'>
                We are a huge marketplace dedicated to connecting great artists
                of all Techwind with their fans and unique token collectors!
              </p>
            </div>
            {/* Collection of NFTs */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {/* Card 1 */}
              <NFTCardsList />
            </div>
            <div className='md:flex items-center space-x-2 text-slate-400 font-semibold hidden  '>
              <p>Explore All Items</p>
              <AiOutlineArrowRight size={12} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HotProducts

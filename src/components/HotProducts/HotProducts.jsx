import React from 'react'
import NFTCardsList from './NFTCardsList'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { motion } from 'framer-motion'

function HotProducts() {
  const parentVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.5 },
    },
  }
  const parentNFTVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.15 },
    },
  }
  const childVariants = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      // transition: { delay: 0.4 },
    },
  }
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <div className='flex flex-col items-center space-y-8'>
            {/* Content */}
            <motion.div
              variants={parentVariants}
              initial='hidden'
              animate='show'
              className='flex flex-col items-center space-y-4 '
            >
              <motion.h1
                variants={childVariants}
                className='text-2xl md:text-3xl font-medium'
              >
                Explore Hot Products
              </motion.h1>
              <motion.p
                variants={childVariants}
                className='text-slate-400 max-w-lg text-center'
              >
                We are a huge marketplace dedicated to connecting great artists
                of all Techwind with their fans and unique token collectors!
              </motion.p>
            </motion.div>
            {/* Collection of NFTs */}
            <motion.div
              variants={parentNFTVariants}
              initial='hidden'
              animate='show'
              className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'
            >
              {/* Card 1 */}
              <NFTCardsList />
            </motion.div>
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

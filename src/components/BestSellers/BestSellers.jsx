import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import AvatarSlider from './AvatarSlider'

import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'

function BestSellers() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <motion.div
            variants={parentVariants}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='flex flex-col items-center md:items-start space-y-5'
          >
            {/* Content */}
            <motion.h1
              variants={childVariants}
              className='text-2xl md:text-3xl font-medium'
            >
              Best Creators & Sellers
            </motion.h1>
            <motion.div
              variants={parentVariants}
              className='flex justify-center md:justify-between w-full '
            >
              <motion.p variants={childVariants} className='text-slate-400 '>
                Best sellers of the week's NFTs{' '}
              </motion.p>
              <motion.div
                variants={childVariants}
                className='md:flex items-center space-x-2 text-indigo-600 font-semibold hidden  '
              >
                <p>See More</p>
                <AiOutlineArrowRight size={12} />
              </motion.div>
            </motion.div>
            <AvatarSlider />
            <div className='md:hidden items-center space-x-2 text-indigo-600 font-semibold flex  '>
              <p>See More</p>
              <AiOutlineArrowRight size={12} />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default BestSellers

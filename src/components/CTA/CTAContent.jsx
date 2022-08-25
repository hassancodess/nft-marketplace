import React from 'react'
import { motion } from 'framer-motion'
import { parentVariants, childVariants } from '../../animations/common'
function CTAContent() {
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col text-center space-y-6 items-center max-w-xl mx-auto'
      >
        <motion.h1
          variants={childVariants}
          className='text-2xl md:text-3xl font-medium leading-snug'
        >
          Join the fastest growing Techwind NFTs with more than 2000+ NFTs
        </motion.h1>
        <motion.p variants={childVariants} className='text-sm md:text-base'>
          We are a huge marketplace dedicated to connecting great artists of all
          Techwind with their fans and unique token collectors!
        </motion.p>
      </motion.div>
    </>
  )
}

export default CTAContent

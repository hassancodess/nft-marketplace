import { motion } from 'framer-motion'
import React from 'react'
import CTACard from './CTACard'
import { parentVariants, childVariants } from '../../animations/common'
function CTACardList() {
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 gap-4'
      >
        <motion.div variants={childVariants}>
          <CTACard
            title='Join our community'
            desc='We are a huge marketplace dedicated to connecting great artists of all Techwind.'
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <CTACard
            title='Learn more about Techwind'
            desc='We are a huge marketplace dedicated to connecting great artists of all Techwind.'
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default CTACardList

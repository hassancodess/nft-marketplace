import React from 'react'
import CollectionCard from './CollectionCard'
import collections from '../../data/collections'
import { childVariants, parentVariants } from '../../animations/common'
import { motion } from 'framer-motion'
function CollectionsList() {
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {/* Collection Card  */}
        {collections.map((collection, idx) => {
          return (
            <motion.div variants={childVariants} key={idx}>
              <CollectionCard
                key={collection.title}
                nfts={collection.nfts}
                title={collection.title}
                profile={collection.profile}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default CollectionsList

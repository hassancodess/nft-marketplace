import React from 'react'
import CollectionCard from './CollectionCard'
import collections from '../../data/collections'
function CollectionsList() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* Collection Card  */}
        {collections.map((collection) => {
          return (
            <CollectionCard
              key={collection.title}
              nfts={collection.nfts}
              title={collection.title}
              profile={collection.profile}
            />
          )
        })}
      </div>
    </>
  )
}

export default CollectionsList

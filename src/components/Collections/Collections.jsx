import React from 'react'
import CollectionsList from './CollectionsList'

function Collections() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container mx-auto max-w-6xl'>
          {/* Content */}
          <div className='flex flex-col items-center space-y-4 pb-14'>
            <h1 className='text-2xl md:text-3xl font-medium'>Collections</h1>
            <p className='text-slate-400 max-w-lg text-center'>
              We are a huge marketplace dedicated to connecting great artists of
              all Techwind with their fans and unique token collectors!
            </p>
          </div>
          {/* Collection List */}
          <CollectionsList />
        </div>
      </section>
    </>
  )
}

export default Collections

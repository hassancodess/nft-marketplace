import React from 'react'
import CTACard from './CTACard'
function CTACardList() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <CTACard
          title='Join our community'
          desc='We are a huge marketplace dedicated to connecting great artists of all Techwind.'
        />
        <CTACard
          title='Learn more about Techwind'
          desc='We are a huge marketplace dedicated to connecting great artists of all Techwind.'
        />
      </div>
    </>
  )
}

export default CTACardList

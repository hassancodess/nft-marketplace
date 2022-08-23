import React from 'react'
import CTACard from './CTACard'
function CTACardList() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <CTACard />
        <CTACard />
      </div>
    </>
  )
}

export default CTACardList

import React from 'react'
import CTACardList from './CTACardList'
import CTAContent from './CTAContent'
function CTA() {
  return (
    <>
      <section className='p-4 mb-24  text-white bg-gradient-to-r from-fuchsia-600/70 to-pink-600/70 relative'>
        {/* Main Container */}
        <div className='container mx-auto max-w-6xl py-24 z-50'>
          {/* CTA SECTION */}
          <div className='flex flex-col space-y-16'>
            {/* Content */}
            <CTAContent />
            {/* CTA Cards List */}
            <CTACardList />
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA

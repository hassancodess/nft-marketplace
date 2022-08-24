import React from 'react'
import Intro from './Intro'
import Links from './Links'
import NewsLetter from './NewsLetter'
import Outro from './Outro'
import { companyLinks, usefulLinks } from '../../data/footer'

function Footer() {
  return (
    <>
      <footer className='p-4 py-12  bg-slate-800 text-white'>
        <div className='container mx-auto max-w-6xl relative'>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {/* Column 1 */}
            <Intro />
            {/* Column 2 */}
            <Links linksObj={companyLinks} />
            {/* Column 3 */}
            <Links linksObj={usefulLinks} />
            {/* Column 4 */}
            <NewsLetter />
          </div>
          {/* Outro */}
          <Outro />
        </div>
      </footer>
    </>
  )
}

export default Footer

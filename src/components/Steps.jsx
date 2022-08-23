import React from 'react'
import StepCard from './shared/StepCard'
function Steps() {
  return (
    <>
      <section className='py-24 p-4'>
        <div className='container mx-auto max-w-6xl'>
          {/* Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6'>
            <StepCard
              title='Connect your wallet'
              desc='Use Trust Wallet, Metamask or any wallet to connect to the app.'
            />
            <StepCard
              title='Create your NFT Item'
              desc='Upload your NFTs and set a title, description and price.'
            />
            <StepCard
              title='List them for sale'
              desc='Earn ETH and BIT for all your NFTs that you sell on our marketplace.'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Steps

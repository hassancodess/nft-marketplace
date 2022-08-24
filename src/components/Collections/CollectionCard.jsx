import React from 'react'
function CollectionCard({ nfts, title, profile }) {
  return (
    <>
      <div className='bg-slate-800 rounded-lg'>
        {/* Flex Container */}
        <div className='relative flex flex-col space-y-2 justify-center p-4 bg-gradient-to-r from-fuchsia-600/40 to-pink-600/40 rounded-lg'>
          {/* Wide NFT */}
          <div className='h-40 w-full rounded-md overflow-hidden'>
            <img src={nfts[0]} alt='nft' className='' />
          </div>
          {/* 3 NFTs */}
          <div className='grid grid-cols-3 gap-2'>
            <img src={nfts[1]} alt='nft' className='rounded-md' />
            <img src={nfts[2]} alt='nft' className='rounded-md' />
            <img src={nfts[3]} alt='nft' className='rounded-md' />
          </div>
          {/* Profile */}
          <div className='self-center absolute top-64 lg:top-60'>
            <img
              src={profile}
              alt=''
              className=' rounded-full bg-center object-cover w-20 h-20 overflow-hidden'
            />
          </div>
          {/* Title */}
        </div>
        <div className='pt-12 pb-6'>
          <h4 className='text-center text-xl font-semibold'>{title}</h4>
        </div>
      </div>
    </>
  )
}

export default CollectionCard

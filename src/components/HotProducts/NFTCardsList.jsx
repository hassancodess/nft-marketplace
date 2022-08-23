import React from 'react'
import NFTCard from './NFTCard'
import nfts from '../../data/nfts'
function NFTCardsList() {
  return (
    <>
      {nfts.map((nft) => {
        return (
          <NFTCard
            key={nft.title}
            img={nft.img}
            title={nft.title}
            price={nft.price}
            likes={nft.likes}
            sale={nft.sale}
          />
        )
      })}
    </>
  )
}

export default NFTCardsList

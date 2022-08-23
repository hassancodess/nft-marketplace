import React from 'react'

function Hero() {
  const styles = {
    bgGradient:
      'bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20',
    btn: 'px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
  }

  return (
    <>
      <section
        className={`py-36 p-4 md:py-52 relative overflow-hidden text-white ${styles.bgGradient}`}
      >
        {/* Backgound */}
        <div className='bg-hero absolute inset-0 bg-no-repeat bg-bottom -z-10'></div>
        {/* Content */}
        <div className='container max-w-6xl mx-auto'>
          <div className='flex flex-col space-y-6 items-start'>
            {/* Heading */}
            <h1 className='text-5xl font-bold max-w-lg leading-normal'>
              Discover Exclusive Digital collectibles
            </h1>
            {/* Paragraph */}
            <p className='max-w-lg leading-6'>
              We are a huge marketplace dedicated to connecting great artists of
              all Techwind with their fans and unique token collectors!
            </p>
            {/* CTA */}
            <button className={styles.btn}>Discover</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

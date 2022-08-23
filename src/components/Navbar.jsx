import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)
  const toggleNav = () => {
    setNav((prev) => {
      return !prev
    })
  }
  const styles = {
    btn: 'px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700',
    navLink: 'hover:text-indigo-600 duration-200 ease-in-out',
    mobileNavLink:
      'hover:text-indigo-600 duration-200 ease-in-out border-b border-white  text-center',
  }
  return (
    <>
      <nav className='p-4 bg-slate-900'>
        <div className='container mx-auto max-w-7xl relative'>
          {/* Flex Container */}
          <div className='flex justify-between items-center text-white'>
            {/* Logo */}
            <h1 className='text-xl font-bold uppercase'>NFT Marketplace.</h1>
            {/* Menu Items */}
            <div className='hidden lg:flex space-x-6 text-sm items-center'>
              <a href='#' className={styles.navLink}>
                Home
              </a>
              <a href='#' className={styles.navLink}>
                Market
              </a>
              <a href='#' className={styles.navLink}>
                Explore
              </a>
              <a href='#' className={styles.navLink}>
                Exhibition
              </a>
              <a href='#' className={styles.navLink}>
                Artist & Collectors
              </a>
              <button className={styles.btn}>Connect Wallet</button>
            </div>
            {/* Hamburger Menu */}
            <div className='lg:hidden' onClick={toggleNav}>
              <AiOutlineMenu size={25} />
            </div>
            {/* Mobile Menu */}
            {nav && (
              <div className='absolute top-14 bg-slate-800 w-full px-28 py-8 rounded-lg'>
                <div className='flex flex-col items-center space-y-6 '>
                  <a href='#' className={styles.mobileNavLink}>
                    Home
                  </a>
                  <a href='#' className={styles.mobileNavLink}>
                    Market
                  </a>
                  <a href='#' className={styles.mobileNavLink}>
                    Explore
                  </a>
                  <a href='#' className={styles.mobileNavLink}>
                    Exhibition
                  </a>
                  <a href='#' className={styles.mobileNavLink}>
                    Artist & Collectors
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

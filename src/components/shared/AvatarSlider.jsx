import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination } from 'swiper'

// Avataer
import AvatarCard from '../shared/AvatarCard'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'
import avatar4 from '../../assets/avatar4.jpg'
import avatar5 from '../../assets/avatar5.jpg'
import avatar6 from '../../assets/avatar6.jpg'
import avatar7 from '../../assets/avatar7.jpg'

function AvatarSlider() {
  const users = [
    {
      name: 'Calvin Carlo',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-green-300 via-blue-500 to-purple-600',
      img: avatar1,
    },
    {
      name: 'Floyd Glasgow',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500',
      img: avatar2,
    },
    {
      name: 'Tiffany Betancourt',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-yellow-200 via-green-200 to-green-500',
      img: avatar3,
    },
    {
      name: 'Mary McMahon',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700',
      img: avatar4,
    },
    {
      name: 'Francis Younger',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-indigo-300 to-purple-400',
      img: avatar5,
    },
    {
      name: 'Joshua Morris',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800',
      img: avatar6,
    },
    {
      name: 'Donald Nielsen',
      handle: 'calvin_carlo',
      gradient: 'bg-gradient-to-r from-yellow-600 to-red-600',
      img: avatar7,
    },
  ]

  return (
    <div className='text-white h-full max-w-6xl container '>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className='mySwiper'
      >
        {users.map((user) => {
          return (
            <SwiperSlide key={user.name}>
              <AvatarCard
                img={user.img}
                name={user.name}
                handle={user.handle}
                gradient={user.gradient}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default AvatarSlider

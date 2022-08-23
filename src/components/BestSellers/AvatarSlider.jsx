import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// Import required modules
import { Autoplay, Pagination } from 'swiper'

// Avatar
import AvatarCard from './AvatarCard'
import users from '../../data/users'

function AvatarSlider() {
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
          1280: {
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

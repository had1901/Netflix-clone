import React, { useState } from 'react'
import {  BsCaretLeftFill, BsCaretRightFill, BsCollectionFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Movies } from './../../Data/MovieData';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from '../Stars';
import Titles from './../Titles';
import { classNames } from 'classnames/bind';

function TopRate() {

  const [nextEl, setNextEl] = useState(null)
  const [prevEl, setprevEl] = useState(null)

  const classNames = 'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white'
  
  return (
    <div className='my-16'>
      <Titles title='Top Rated' Icon={BsCollectionFill}/>
      <div className='mt-10'>
        <Swiper 
          navigation={{nextEl, prevEl}}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
        
        {Movies.map((movie, index) => (
          <SwiperSlide  key={index}>
            <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
              <img 
                src={`./images/movies/${movie.titleImage}`} 
                alt={movie.name}
                className='w-full h-full object-cover rounded-lg'
              />
              <div className='px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                <button className='w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                  <FaHeart />
                </button>
                <Link to={`/movie/${movie.name}`} className='font-semibold text-xl trancuted line-clamp-2'>
                  <div className='flex gap-2 text-star'>
                      <Rating value={movie.rate}/>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        <div className='w-full px-1 flex-rows gap-6 pt-12'>
          <button className={classNames} ref={(node) => setprevEl(node)}>
            <BsCaretLeftFill/>
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopRate
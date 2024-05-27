"use client"
import React from 'react'
import EmblaCarousel from '../utils/Emblacarousel'
import { EmblaOptionsType } from 'embla-carousel'
import Swipers from '../swiper/Swipers';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SLIDES = [
    {
      id: 1,
      image: "/master.png",
      title: "Master",
      name: `A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT, LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`,
      info: 
      `
        ABOUT THIS PLAN (A  CONTEMPORARY 4 UNITS OF 2 BEDROOM FLATS SITTING ON AN 450 SQ.M LAND)
 
        DRAWING INFO
 
        GROUND FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        FIRST FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        
        DRAWING ID NO : KAFL29
      `,
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 2,
      image: "/living.png",
      title: "Living",
      name: `A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT, LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`,
      info: 
      `
        ABOUT THIS PLAN (A  CONTEMPORARY 4 UNITS OF 2 BEDROOM FLATS SITTING ON AN 450 SQ.M LAND)
 
        DRAWING INFO
        
        GROUND FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        FIRST FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        
        DRAWING ID NO : KAFL29
      `,
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 3,
      image: "/dining.png",
      title: "Dining",
      name: `A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT, LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`,
      info: 
      `
        ABOUT THIS PLAN (A  CONTEMPORARY 4 UNITS OF 2 BEDROOM FLATS SITTING ON AN 450 SQ.M LAND)
 
        DRAWING INFO
        
        GROUND FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        FIRST FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        
        DRAWING ID NO : KAFL29
      `,
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 4,
      image: "/exterior.png",
      title: "Exterior",
      name: `A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT, LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`,
      info: 
      `
        ABOUT THIS PLAN (A  CONTEMPORARY 4 UNITS OF 2 BEDROOM FLATS SITTING ON AN 450 SQ.M LAND)
        
        DRAWING INFO
        
        GROUND FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        FIRST FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        
        DRAWING ID NO : KAFL29
      `,
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 5,
      image: "/duplex.png",
      title: "Duplex",
      name: `A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT, LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`,
      info: 
      `
        ABOUT THIS PLAN (A  CONTEMPORARY 4 UNITS OF 2 BEDROOM FLATS SITTING ON AN 450 SQ.M LAND)
        
        DRAWING INFO
        
        GROUND FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        FIRST FLOOR PLAN
        ————–
        2 UNITS OF 2 BEDROOM FLATS
        EACH ALL ROOM EN-SUITE
        WITH VISITORS TOILET
        
        
        DRAWING ID NO : KAFL29
      `,
      smallprice: 19200,
      largeprice: 950000,
    },
];

const OPTIONS: EmblaOptionsType = {}

export default function Maincontent() {
  return (
    <div className=''>
      <div className='text-center pb-4'>
        <hr className="w-20 h-2 mx-auto bg-[#451606] border-0 rounded my-3 dark:bg-gray-700"/>
        <h2 className='text-2xl font-bold uppercase tracking-1'>
          Building Showcases
        </h2>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </small>
      </div>
      <div className='shop1 h-[40em] p-1 mt-5'>
        <Swipers
            slides={SLIDES}
            inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden', position: "relative" }}
            inlineSwiperSlideStyle={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                // filter: 'brightness(10%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
            }}
            inlineImageStyle={{
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }}
            classnamebody={"w-full absolute max-w-[55em] z-[99] bg-black/10 text-white bottom-3 py-10 left-60 right-60 rounded-lg"}
            width = {1000}
            heigth = {1000}
            spaceBetween={10}
            slidesPerView={1}
            centered = {true}
            effect={'fade'}
            autoplayDelay={70000}
            loop={true}
        />
      </div>
      <div className='shop1 h-[40em] p-1 mt-5'>
        <Swipers
            slides={SLIDES}
            inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden', position: "relative" }}
            inlineSwiperSlideStyle={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                // filter: 'brightness(10%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
            }}
            inlineImageStyle={{
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }}
            classnamebody={"w-full absolute max-w-[55em] z-[99] bg-black/10 text-white bottom-3 py-10 left-60 right-60 rounded-lg"}
            width = {1000}
            heigth = {1000}
            spaceBetween={10}
            slidesPerView={1}
            centered = {true}
            effect={'fade'}
            autoplayDelay={70000}
            loop={true}
        />
      </div>
      <div className='shop1 h-[40em] p-1 mt-5'>
        <Swipers
            slides={SLIDES}
            inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden', position: "relative" }}
            inlineSwiperSlideStyle={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                // filter: 'brightness(10%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
            }}
            inlineImageStyle={{
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }}
            classnamebody={"w-full absolute max-w-[55em] z-[99] bg-black/10 text-white bottom-3 py-10 left-60 right-60 rounded-lg"}
            width = {1000}
            heigth = {1000}
            spaceBetween={10}
            slidesPerView={1}
            centered = {true}
            effect={'fade'}
            autoplayDelay={70000}
            loop={true}
        />
      </div>
      <div className='shop1 h-[40em] p-1 mt-5'>
        <Swipers
            slides={SLIDES}
            inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden', position: "relative" }}
            inlineSwiperSlideStyle={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                // filter: 'brightness(10%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
            }}
            inlineImageStyle={{
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }}
            classnamebody={"w-full absolute max-w-[55em] z-[99] bg-black/10 text-white bottom-3 py-10 left-60 right-60 rounded-lg"}
            width = {1000}
            heigth = {1000}
            spaceBetween={10}
            slidesPerView={1}
            centered = {true}
            effect={'fade'}
            autoplayDelay={70000}
            loop={true}
        />
      </div>
      <div className='shop1 h-[40em] p-1 mt-5'>
        <Swipers
            slides={SLIDES}
            inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden', position: "relative" }}
            inlineSwiperSlideStyle={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '100vh',
                // filter: 'brightness(10%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflowX: 'hidden',
            }}
            inlineImageStyle={{
                display: 'block',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
            }}
            classnamebody={"w-full absolute max-w-[55em] z-[99] bg-black/10 text-white bottom-3 py-10 left-60 right-60 rounded-lg"}
            width = {1000}
            heigth = {1000}
            spaceBetween={10}
            slidesPerView={1}
            centered = {true}
            effect={'fade'}
            autoplayDelay={70000}
            loop={true}
        />
      </div>
    </div>
  )
}

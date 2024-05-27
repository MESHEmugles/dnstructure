"use client"
import React from 'react';
import Swipers from '../swiper/Swipers';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EmblaCarousel from '../utils/Emblacarousel';
import { EmblaOptionsType } from 'embla-carousel'



const carousel = [
    {
      id: 1,
      image: "/master.png",
      title: "Master",
      name: "`A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT,LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`",
      info: "Master",
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 2,
      image: "/living.png",
      title: "Living",
      name: "`A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT,LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`",
      info: "Master",
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 3,
      image: "/dining.png",
      title: "Dining",
      name: "`A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT,LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`",
      info: "Master",
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 4,
      image: "/exterior.png",
      title: "Exterior",
      name: "`A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT,LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`",
      info: "Master",
      smallprice: 19200,
      largeprice: 950000,
    },
    {
      id: 3,
      image: "/duplex.png",
      title: "Duplex",
      name: "`A CONTEMPORARY SHOPPING MALL, WITH A MULTI PURPOSE HALL, RESTAURANT,LOUNGE/CLUB ON THE PENT FLOOR AND BASEMENT CAR PARK SITTING ON AN 2,450 SQ.M LAND`",
      info: "Master",
      smallprice: 19200,
      largeprice: 950000,
    },
];
const links = [
    {
      id: 1,
      link: "/",
      title: "Shop for architectural design plans",
    },
    {
      id: 2,
      link: "/",
      title: "Duplex",
    },
    {
      id: 3,
      link: "/",
      title: "Bungalow",
    },
    {
      id: 4,
      link: "/",
      title: "Flats",
    },
    {
      id: 5,
      link: "/",
      title: "Townhouse Terrace",
    },
    {
      id: 6,
      link: "/",
      title: "Plaza, mall, supermarket and office space",
    },
    {
      id: 7,
      link: "/",
      title: "Hotel",
    },
    {
      id: 8,
      link: "/",
      title: "Event Center",
    },
    {
      id: 9,
      link: "/",
      title: "Healthcare Buildings",
    },
    {
      id: 10,
      link: "/",
      title: "Lounge bar and clubs",
    },
    {
      id: 11,
      link: "/",
      title: "Church",
    },
    {
      id: 12,
      link: "/",
      title: "Schools",
    },
];
const land = [
    {
      id: 1,
      link: "/",
      title: "200sq.m land to 300sq.m land",
    },
    {
      id: 2,
      link: "/",
      title: "300sq.m land to 400sq.m land",
    },
    {
      id: 3,
      link: "/",
      title: "400sq.m land to 500sq.m land",
    },
    {
      id: 4,
      link: "/",
      title: "600sq.m land to 700sq.m land",
    },
    {
      id: 5,
      link: "/",
      title: "800sq.m land to 900sq.m land",
    },
    {
      id: 6,
      link: "/",
      title: "1000sq.m land to 2000sq.m land",
    },
    {
      id: 7,
      link: "/",
      title: "2000sq.m land to 3000sq.m land",
    },
    {
      id: 8,
      link: "/",
      title: "3000sq.m land to 4000sq.m land",
    }, 
];

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }


export default function Firstbody() {
  return (
    <div className="flex flex-col md:flex-row divide-x items-cente justify-center border-t border-gray-700 shadow-t">
      <div className="basis-1/3 pr-9 pt-7">
        <div className='flex flex-col items-center ml-4 w-full'>
            <form className="max-w-xl mx-auto w-full pb-8 pt-3">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>
            <EmblaCarousel slides={carousel} options={OPTIONS} />

            <div className="w-full text-sm mt-5">
                <ul className="font-medium flex flex-col gap-3.5 rounded-lg ml-2 md:bg-transparent">
                    {links.map((item) => (
                      <li key={item.id} className='w-full md:w-auto rounded-full'>
                          <Link href={item.link} className="leading-8">
                              {item.title}
                          </Link>
                      </li>

                    ))}
                </ul>
            </div>
        </div>
      </div>
      <div className="bg-rose basis-1/2">
        <div className='text-center'>
          <h2 className='uppercase font-semibold text-[41px] pt-7'>Coming soon</h2>

            <div className='shop1 max-w-[58em] h-[40em] p-1'>
                <Swipers
                  inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden' }}
                  inlineSwiperSlideStyle={{
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      height: '100vh',
                      filter: 'brightness(60%)',
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
                  width = {2000}
                  heigth = {2000}
                  classname = {'p-4'}
                  classnamebody = {'hidden'}
                  slides={carousel}
                  spaceBetween={10}
                  slidesPerView={1}
                  centered = {true}
                  effect={'fade'}
                  autoplayDelay={4500}
                  loop={true}
                />
            </div>
        </div>
      </div>
      <div className="bg-white basis-1/3 pl-2 pt-7">
        <div className='flex flex-col items-center mr-4 text-center w-full'>
            <form className="max-w-md mx-auto w-full pb-8 pt-4">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>

            {/* <div className='shop1 max-w-[30em] h-[20em] w-[18em] p-1 mt-3'>
                <Swipers
                    slides={carousel}
                    width = {10}
                    heigth = {10}
                    classname = {'p-4 m-10'}
                    spaceBetween={10}
                    slidesPerView={1}
                    centered = {false}
                    effect={'fade'}
                    autoplayDelay={4500}
                    loop={true}
                />
            </div> */}
            <EmblaCarousel slides={carousel} options={OPTIONS} />

            <div className="w-full text-sm">
                <ul className="font-medium flex flex-col mt-4 gap-4 rounded-lg ml-2 md:bg-transparent">
                    {land.map((item) => (
                        <li key={item.id} className='w-full md:w-auto rounded-full'>
                            <Link href={item.link} className="leading-8">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

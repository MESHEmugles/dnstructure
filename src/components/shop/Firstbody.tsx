"use client"
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Swipers from '../swiper/Swipers';
import Image from 'next/image';
import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const carousel = [
    {
      id: 1,
      image: "/master.png",
      title: "Master",
    },
    {
      id: 2,
      image: "/living.png",
      title: "Living",
    },
    {
      id: 3,
      image: "/dining.png",
      title: "Dining",
    },
    {
      id: 4,
      image: "/exterior.png",
      title: "Exterior",
    },
    {
      id: 3,
      image: "/duplex.png",
      title: "Duplex",
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
export default function Firstbody() {
  return (
    <div className="flex flex-row items-cente justify-center">
      <div className="basis-1/5">
        <div className='flex flex-col items-center '>
            <form className="max-w-md mx-auto w-full">
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

            <div className='shop1 max-w-[30em] h-[20em] w-[18em] p-1 mt-3'>
                <Swipers
                    slides={carousel}
                    inlineSwiper={{ width: '100%', height: '100%', overflowX: 'hidden' }}
                    inlineSwiperSlideStyle={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
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
                        padding: '3em !important'
                    }}
                    width = {10}
                    heigth = {10}
                    classname = {'p-4'}
                    spaceBetween={10}
                    slidesPerView={1}
                    centered = {false}
                    effect={'fade'}
                    autoplayDelay={1500}
                    loop={true}
                />
            </div>

            <div className="w-full text-sm">
                <ul className="font-medium flex flex-col mt-4 gap-3.5 rounded-lg ml-2 md:bg-transparent">
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
      <div className="bg-rose basis-3/4">
        <div className='text-center'>
            <h2 className='uppercase font-semibold text-3xl'>Coming soon</h2>

            <div className='shop1 max-w-[48em] h-[40em] w- p-1 mt-3'>
                <Swipers
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
      <div className="bg-[#451606] basis-1/5">
        <div className='flex flex-col items-center text-center '>
            <form className="max-w-md mx-auto w-full">
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

            <div className='shop1 max-w-[30em] h-[20em] w-[18em] p-1 mt-3'>
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
            </div>

            <div className="w-full text-sm">
                <ul className="font-medium flex flex-col mt-4 gap-10 rounded-lg ml-2 md:bg-transparent">
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

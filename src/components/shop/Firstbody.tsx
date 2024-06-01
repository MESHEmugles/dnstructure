"use client"
import React, { useEffect, useState } from 'react';
import Swipers from '../swiper/Swipers';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EmblaCarousel from '../utils/Emblacarousel';
import { EmblaOptionsType } from 'embla-carousel'
import Image from 'next/image';
import { initFlowbite } from 'flowbite';
import { motion } from "framer-motion";



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
      link: "/shop",
      title: "Shop for architectural design plans",
    },
    {
      id: 2,
      link: "/shop/duplex",
      title: "Duplex",
    },
    {
      id: 3,
      link: "/shop/bungalow",
      title: "Bungalow",
    },
    {
      id: 4,
      link: "/shop/flats",
      title: "Flats",
    },
    {
      id: 5,
      link: "/shop/townhouse",
      title: "Townhouse Terrace",
    },
    {
      id: 6,
      link: "/shop/plaza",
      title: "Plaza, mall, supermarket and office space",
    },
    {
      id: 7,
      link: "/shop/hotel",
      title: "Hotel",
    },
    {
      id: 8,
      link: "/shop/eventcenter",
      title: "Event Center",
    },
    {
      id: 9,
      link: "/shop/healthcare",
      title: "Healthcare Buildings",
    },
    {
      id: 10,
      link: "/shop/lounge",
      title: "Lounge bar and clubs",
    },
    {
      id: 11,
      link: "/shop/church",
      title: "Church",
    },
    {
      id: 12,
      link: "/shop/schools",
      title: "Schools",
    },
];
const land = [
    {
      id: 1,
      link: "/shop/sq",
      title: "200sq.m land to 300sq.m land",
    },
    {
      id: 2,
      link: "/shop/sq2",
      title: "300sq.m land to 400sq.m land",
    },
    {
      id: 3,
      link: "/shop/sq3",
      title: "400sq.m land to 500sq.m land",
    },
    {
      id: 4,
      link: "/shop/sq4",
      title: "600sq.m land to 700sq.m land",
    },
    {
      id: 5,
      link: "/shop/sq5",
      title: "800sq.m land to 900sq.m land",
    },
    {
      id: 6,
      link: "/shop/sq6",
      title: "1000sq.m land to 2000sq.m land",
    },
    {
      id: 7,
      link: "/shop/sq7",
      title: "2000sq.m land to 3000sq.m land",
    },
    {
      id: 8,
      link: "/shop/sq8",
      title: "3000sq.m land to 4000sq.m land",
    }, 
];

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const images = [
  '/master.png', "/living.png", "/exterior.png", "/duplex.png",  "/dining.png",
]

export default function Firstbody() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const nextSlideAuto = () => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % images.length);
    };

    const intervalId = setInterval(nextSlideAuto, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);
  useEffect(() => {
    initFlowbite();
  }, []);
  const [visible, setVisible] = useState(false)
  const [lands, setLands] = useState(false)

  const toggleModal = (modal: string) => {
    if (modal === 'houses') {
      setVisible(!visible);
      setLands(false);
    } else if (modal === 'lands') {
      setLands(!lands);
      setVisible(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row divide-x items-cente justify-center border-t border-gray-700 shadow-t pb-[4em]">
      <div className="basis-1/3 xl:basis-1/4 pr-9 md:pt-1 pt-6 xl:pt-7">
        <div className='flex flex-col items-center ml-4 w-full'>
            <form className="max-w-xl mx-auto w-full pb-8 pt-3 sm:block hidden">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>
            <div className="sm:block hidden">
              <EmblaCarousel slides={carousel} options={OPTIONS} />
            </div>
            {/* small screen */}
            <form className="max-w-xl mx-auto w-full pb-8 pt-3 md:hidden block">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search for land..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>
            <div className="flex items-center justify-between w-full sm:hidden block ml-9">
              <div className="w-full xl:hidden md:hidden block">
                <div className='text-xs'>
                  <button onClick={() => toggleModal('houses')} data-modal-target="houses" data-modal-toggle="houses" className="block border capitalize px-3 py-2 rounded-lg bg-[#451606] text-white" type="button">
                    View houses and plans
                  </button>
                </div>
              </div>
              <div className="w-full xl:hidden md:hidden block">
                <div className='text-xs'>
                  <button onClick={() => toggleModal('lands')} data-modal-target="lands" data-modal-toggle="lands" className="block border border-[#451606] capitalize px-3 py-2 rounded-lg bg-transparent text-[#451606]" type="button">
                    View all land sizes
                  </button>
                </div>
              </div>
            </div>
            {/* small size end */}

            <div className="w-full text-sm mt-5 z-[99]">
                <ul className="font-medium flex flex-col gap-3.5 rounded-lg ml-2 md:bg-transparent">
                  {links.map((item) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -70 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ease: "easeOut", duration: 2 }} 
                      key={item.id} 
                      className='w-full md:w-auto rounded-full xl:block hidden'>
                        <Link href={item.link} className="leading-8 text-gray-500 hover:text-[#451606] hover:underline">
                            {item.title}
                        </Link>
                    </motion.li>
                  ))}
                  <div className="w-full xl:hidden md:block hidden">
                    <div className=''>
                      <button onClick={() => toggleModal('houses')}  data-modal-target="houses" data-modal-toggle="houses" className="block border-0 uppercase text-xs px-3 py-2 rounded-lg bg-[#451606] text-white" type="button">
                        View houses and plans
                      </button>
                    </div>
                  </div>
                    {visible && (
                      <div id="houses" className="z-[100] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
                          <div className="relative p-4 w-full max-w-2xl max-h-full">
                              <div className="relative bg-white rounded-lg shadow">
                                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                          List of houses
                                      </h3>
                                      <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => toggleModal('houses')}>
                                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                          </svg>
                                          <span className="sr-only">Close modal</span>
                                      </button>
                                  </div>
                                  {links.map((item) => (
                                    <div className="p-4 md:p-5 space-y-4" key={item.id}>
                                      <Link href={item.link} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {item.title}
                                      </Link>
                                    </div>
                                  ))}
                                  <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                      <Link href="" onClick={() => toggleModal('houses')} type="button" className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Floor Plans and Summarized BOQ</Link>
                                      <Link href="" onClick={() => toggleModal('houses')} type="button" className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#451606] focus:z-10 focus:ring-4">BUY THE FULL WORKING DRAWINGS</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                    )}
                </ul>
            </div>
        </div>
      </div>
      <div className="bg-rose basis-1/2">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className='text-center relative'>
          <h2 className='uppercase font-semibold md:text-[20px] xl:text-[41px] pt-2 xl:pt-7 sm:block hidden'>Coming soon</h2>

          <div className='text-xl sm:hidden block relative top-[9em] text-[#451606] font-semibold'>
            <p>
              Coming soon
            </p>
          </div>
          <div className='shop1 max-w-[58em] h-[20em] xl:h-[40em] p-1'>
            <Image
              src={images[currentIndex]}
              alt={"images"}
              width={1200}
              height={1000}
              priority
              className="w-full max-h-[40em] h-[20em] mb-10"
            />
          </div>
        </motion.div>
      </div>
      <div className="bg-white xl:basis-1/4 basis-1/3 px-3 md:pt-1 pt-6 xl:pt-7">
        <div className='flex flex-col xl:items-center mr-4 xl:text-center w-full'>
            <form className="max-w-md mx-auto w-full pb-8 pt-3 md:block hidden">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-[#451606] focus:ring-[#451606] focus:border-[#451606] dark:placeholder-gray-400 dark:text-black" placeholder="Search for lands..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white hover:text-[#451606] hover:border-2 bg-[#451606] rounded-e-lg border border-[#451606]  hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </form>
            <div className="md:block hidden">
              <EmblaCarousel slides={carousel} options={OPTIONS} />
            </div>

            <div className="w-full text-sm z-[99]">
                <ul className="font-medium flex flex-col mt-4 gap-4 rounded-lg ml-2 md:bg-transparent">
                    {land.map((item) => (
                        <motion.li
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: "easeOut", duration: 2 }} 
                          key={item.id} 
                          className='w-full md:w-auto rounded-full xl:block hidden'>
                            <Link href={item.link} className="leading-8 hover:text-[#451606] hover:underline">
                                {item.title}
                            </Link>
                        </motion.li>
                    ))}

                  <div className="w-full xl:hidden md:block hidden">
                    <div className=''>
                      <button onClick={() => toggleModal('lands')} data-modal-target="lands" data-modal-toggle="lands" className="block text-xs border border-[#451606] capitalize px-3 py-2 rounded-lg bg-transparent text-[#451606]" type="button">
                        View land sizes
                      </button>
                    </div>
                  </div>
                  {lands && (
                    <div id="lands" className="z-[100] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                            <div className="relative bg-white rounded-lg shadow">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        List of lands
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => toggleModal('lands')}>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {land.map((item) => (
                                  <div className="p-4 md:p-5 space-y-4" key={item.id}>
                                    <Link href={item.link} className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                      {item.title}
                                    </Link>
                                  </div>
                                ))}
                                <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <Link href="" onClick={() => toggleModal('lands')} type="button" className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Floor Plans and Summarized BOQ</Link>
                                    <Link href="" onClick={() => toggleModal('lands')} type="button" className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#451606] focus:z-10 focus:ring-4">BUY THE FULL WORKING DRAWINGS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

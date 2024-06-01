"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { initFlowbite } from 'flowbite';

const imag = [
  {
    id: 1,
    image: ['/master.png', "/living.png", "/exterior.png", "/duplex.png",  "/dining.png"],
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
    smallprice: "19, 200",
    largeprice: "950, 000",
  },
  {
    id: 2,
    image: ['/master.png', "/living.png", "/exterior.png", "/duplex.png",  "/dining.png"],
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
    smallprice: "19, 200",
    largeprice: "950, 000",
  },
  {
    id: 3,
    image: ['/master.png', "/living.png", "/exterior.png", "/duplex.png",  "/dining.png"],
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
    smallprice: "19, 200",
    largeprice: "950, 000",
  }
];

export default function Maincontent() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndexes, setImageIndexes] = useState(imag.map(() => 0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        return prevIndexes.map((index, slideIndex) => {
          return (index + 1) % imag[slideIndex].image.length;
        });
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    initFlowbite();
  }, []);
  const [visible, setVisible] = useState(false)

  const toggleModal = () => {
      setVisible(!visible);
  };
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

      {imag.map((slide, index) => (
        <div key={slide.id} className="shop1 px-4 p-1 pb-7 mt-5 relative">
          <Image
            src={slide.image[imageIndexes[index]]}
            alt={slide.title}
            width={1200}
            height={1000}
            priority
            className="w-full max-h-[40em] lg:h-[35em] rounded-lg shadow-xl md:h-[20em] h-[15em] mb-10"
          />
          <div className="w-full relative max-w-[55em] -mt-[8em] lg:-mt-[15em] z-[99] bg-black/50 font-semibold text-white py-4 lg:py-10 mx-auto rounded-lg">
            <div className='mx-10'>
                <p className='font-sans max-w-[50em] pb-2 text-xs md:text-base '>
                    {slide.name}
                </p>
                <div className='flex md:flex-row flex-col item-center justify-between text-white'>
                  <button onClick={() => setVisible(true)} data-modal-target="large-modal" data-modal-toggle="large-modal" className="block text-white border-0 uppercase" type="button">
                      Drawing Info
                  </button>
                  <div className='flex flex-col'>
                    <div className='flex gap-3'>
                        <Link  href="/pricing" className='underline'>
                            <small>
                                View Floor Plans and Summarized BOQ: 
                            </small>
                        </Link>
                        <span>
                            ₦ {slide.smallprice}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <Link  href="/pricing" className='underline'>
                            <small>
                                BUY THE FULL WORKING DRAWINGS:
                            </small>
                        </Link>
                        <span>
                            ₦ {slide.largeprice}
                        </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {visible && (
            <div id="large-modal" aria-hidden={!visible} className="z-[100] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Drawing Details
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {slide.info}
                            </p>
                        </div>
                        <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <Link href="" onClick={toggleModal} type="button" className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Floor Plans and Summarized BOQ</Link>
                            <Link href="" onClick={toggleModal} type="button" className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#451606] focus:z-10 focus:ring-4">BUY THE FULL WORKING DRAWINGS</Link>
                        </div>
                    </div>
                </div>
            </div>
          )}
        </div>
      ))}

      <nav className="flex items-center justify-evenly lg:justify-between px-4 md:px-10 lg:px-20 py-8 sm:px-1"
        aria-label="Pagination">
        <div className="flex flex-1 justify-between">
          <a className="relative inline-flex items-center bg-[#451606] px-4 py-2 text-sm font-medium text-white"
              rel="prev" href="/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z">
                  </path>
              </svg> &nbsp; Previous
          </a>


          <a className="relative inline-flex items-center bg-[#451606] px-4 py-2 text-sm font-medium text-white"
              rel="next" href="/">Next &nbsp; <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                  viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                  </path>
              </svg>
          </a>
        </div>
      </nav>
    </div>
  )
}

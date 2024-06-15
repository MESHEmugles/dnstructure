"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import dynamic from 'next/dynamic'

const imag = [
  {
    id: 1,
    image: ['/NEW DUPLEX 1.jpg', "/NEW DUPLEX 2.jpg"],
    title: "Master",
    name: `A  CONTEMPORARY 5 BEDROOM DUPLEX, SITTING ON AN 600 SQ.M LAND`,
    info: 
    `
      ABOUT THIS PLAN (A  CONTEMPORARY 5 BEDROOM DUPLEX, SITTING ON AN 600 SQ.M LAND)
      <br/>
      DRAWING INFO
      <br/>
      GROUND FLOOR PLAN
      ————–
      ANTE ROOM
      MAIN LOUNGE
      DINNING
      VISITROR'S W.C
      KITCHEN WITH STORE
      MAIDS ROOM
      GUEST BEDROOM
      LAUNDRY

      
      FIRST FLOOR PLAN
      ————–
      FAMILY LIVING ROOM
      STUDY/OFFICE
      GYM
      2 BEDROOMS
      MASTER'S BEDROOM WITH BIG CLOSET
      
      
      DRAWING ID NO : HRDU41
    `,
    smallprice: "10, 200",
    largeprice: "250, 000",
  },
  {
    id: 2,
    image: ['/DUPLEX 2.jpg', "/DUPLEX 3.jpg", "/DUPLEX.jpg"],
    title: "Living",
    name: `A  CONTEMPORARY 5 BEDROOM DUPLEX WITH AN ATTACHED 3 BEDROOM DUPLEX BEHIND SITTING ON AN 600 SQ.M LAND`,
    info: 
    `
      ABOUT THIS PLAN (A  CONTEMPORARY 5 BEDROOM DUPLEX WITH AN ATTACHED 3 BEDROOM DUPLEX BEHIND SITTING ON AN 600 SQ.M LAND)

      DRAWING INFO
      
      GROUND FLOOR PLAN
      ————–
      ANTE ROOM 
      MAIN LOUNGE
      DINNING
      VISITOR'S W.C
      KITCHEN WITH STORE
      2 MAIDS ROOM
      GUEST BEDROOM
      LAUNDRY
      BOX ROOM
      SWIMMING POOL


      GROUND FLOUR BACK APARTMENT
      ___________
      MAIN LOUNGE
      DINNING
      KITCHEN WITH STORE
      VISITOR'S W.C

      
      FIRST FLOOR PLAN
      ————–
      FAMILY LIVING ROOM
      STUDY/OFFICE
      3 BEDROOMS


      FIRST FLOOR BACK APARTMENT
      ________
      FAMILY LIVING ROOM
      3 BEDROOMS


      PENT FLOOR
      _______
      MASTER'S SUITE
      
      
      DRAWING ID NO : HRDU39
    `,
    smallprice: "13, 200",
    largeprice: "250, 000",
  },
  {
    id: 3,
    image: ['/3D1.jpg', "/3D2.jpg" ],
    title: "Dining",
    name: `2 UNITS OF CONTEMPORARY 5 BEDROOM TWIN DUPLEXES SITTING ON AN 620 SQ.M LAND`,
    info: 
    `
      ABOUT THIS PLAN (2 UNITS OF CONTEMPORARY 5 BEDROOM TWIN DUPLEXES SITTING ON AN 620 SQ.M LAND)

      DRAWING INFO
      
      GROUND FLOOR PLAN
      ————–
      ANTE ROOM
      MAIN LOUNGE
      DINNING 
      VISITOR'S W.C
      KITCHEN WITH STORE
      MAIDS ROOM

      
      FIRST FLOOR PLAN
      ————–
      FAMILY LIVING ROOM
      4 BEDROOMS


      PENT FLOOR
      _________
      CINEMA
      MASTER'S BEDROOM WITH CLOSET
      
      
      DRAWING ID NO : KAFL29
    `,
    smallprice: "18, 200",
    largeprice: "280, 000",
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


  const [visible, setVisible] = useState(false)
  const [currentInfo, setCurrentInfo] = useState('')

  const toggleModal = (info = '') => {
    setCurrentInfo(info);
    setVisible(!visible);
  };
  return (
    <div className=''>
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
                <p className='font-sans max-w-[50em] pb-2 text-xs md:text-base tracking-[1.4px] md:tracking-0'>
                    {slide.name}
                </p>
                <div className='flex md:flex-row flex-col item-center justify-between text-white'>
                  <button onClick={() => toggleModal(slide.info)} data-modal-target="large-modal" data-modal-toggle="large-modal" className="tracking-[1.2px] md:tracking-0 block text-white border-0 uppercase" type="button">
                      Drawing Info
                  </button>
                  <div className='flex flex-col'>
                    <div className='flex gap-3'>
                        <Link  href="/pricing" className='tracking-[1.4px] md:tracking-0 underline'>
                            <small>
                                View Floor Plans and Summarized BOQ: 
                            </small>
                        </Link>
                        <span className='text-[13px] w-1/3 md:text-base'>
                            ₦ {slide.smallprice}
                        </span>
                    </div>

                    <div className="flex gap-3">
                        <Link  href="/pricing" className='tracking-[1px] md:tracking-0 underline'>
                            <small>
                                BUY THE FULL WORKING DRAWINGS:
                            </small>
                        </Link>
                        <span className='text-[13px] w-1/3 md:text-base'>
                            ₦ {slide.largeprice}
                        </span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      ))}
      {visible && (
        <div id="large-modal" aria-hidden={!visible} className="z-[100] overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Drawing Info
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => toggleModal('')}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[80vh]">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {currentInfo}
                      </p>
                    </div>
                    <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <Link href="" onClick={() => toggleModal('')} type="button" className="text-white bg-[#451606] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">View Floor Plans and Summarized BOQ</Link>
                      <Link href="" onClick={() => toggleModal('')} type="button" className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#451606] focus:z-10 focus:ring-4">BUY THE FULL WORKING DRAWINGS</Link>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

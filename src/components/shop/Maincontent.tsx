"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';

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
      GROUND FLOOR PLAN <br/>
      ————–<br/>
      ANTE ROOM<br/>
      MAIN LOUNGE<br/>
      DINNING<br/>
      VISITROR'S W.C<br/>
      KITCHEN WITH STORE<br/>
      MAIDS ROOM<br/>
      GUEST BEDROOM<br/>
      LAUNDRY<br/>
      <br/>
      <br/>
      FIRST FLOOR PLAN<br/>
      ————–<br/>
      FAMILY LIVING ROOM<br/>
      STUDY/OFFICE<br/>
      GYM<br/>
      2 BEDROOMS<br/>
      MASTER'S BEDROOM WITH BIG CLOSET<br/>
      <br/>
      <br/>
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
      ABOUT THIS PLAN (A  CONTEMPORARY 5 BEDROOM DUPLEX WITH AN ATTACHED 3 BEDROOM DUPLEX BEHIND SITTING ON AN 600 SQ.M LAND)<br/>
      <br/>
      DRAWING INFO
      <br/>
      GROUND FLOOR PLAN<br/>
      ————–<br/>
      ANTE ROOM <br/>
      MAIN LOUNGE<br/>
      DINNING<br/>
      VISITOR'S W.C<br/>
      KITCHEN WITH STORE<br/>
      2 MAIDS ROOM<br/>
      GUEST BEDROOM<br/>
      LAUNDRY<br/>
      BOX ROOM<br/>
      SWIMMING POOL<br/>
      <br/>
      <br/>
      GROUND FLOUR BACK APARTMENT<br/>
      ___________<br/>
      MAIN LOUNGE<br/>
      DINNING<br/>
      KITCHEN WITH STORE<br/>
      VISITOR'S W.C<br/>
      <br/>
      <br/>
      FIRST FLOOR PLAN<br/>
      ————–<br/>
      FAMILY LIVING ROOM<br/>
      STUDY/OFFICE<br/>
      3 BEDROOMS<br/>
      <br/>
      <br/>
      FIRST FLOOR BACK APARTMENT<br/>
      ________<br/>
      FAMILY LIVING ROOM<br/>
      3 BEDROOMS<br/>
      <br/>
      <br/>
      PENT FLOOR<br/>
      _______<br/>
      MASTER'S SUITE<br/>
      <br/>
      <br/>
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
      <br/>
      DRAWING INFO
      <br/>
      GROUND FLOOR PLAN<br/>
      ————–<br/>
      ANTE ROOM<br/>
      MAIN LOUNGE<br/>
      DINNING <br/>
      VISITOR'S W.C<br/>
      KITCHEN WITH STORE<br/>
      MAIDS ROOM<br/>
      <br/>
      <br/>
      FIRST FLOOR PLAN<br/>
      ————–<br/>
      FAMILY LIVING ROOM<br/>
      4 BEDROOMS<br/>
      <br/>
      <br/>
      PENT FLOOR<br/>
      _________<br/>
      CINEMA<br/>
      MASTER'S BEDROOM WITH CLOSET<br/>
      <br/>
      <br/>
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
                  <button onClick={() => toggleModal(slide.info)} data-modal-target="large-modal" data-modal-toggle="large-modal" className="block text-white border-0 uppercase" type="button">
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
        </div>
      ))}
      <Modal visible={visible} content={{ __html: currentInfo }} onClose={() => setVisible(false)} />
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
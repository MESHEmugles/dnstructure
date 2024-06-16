"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { imag, land } from './data';
import Header from '@/components/shop/Header';
import Bottom from '@/components/main/Bottom';
import Script from 'next/script';
import Modal from '@/components/shop/Modal';

type CategoryKey = keyof typeof imag | keyof typeof land;

interface Slide {
    id: number;
    image: string[];
    title: string;
    name: string;
    info: string;
    smallprice: string;
    largeprice: string;
}

const getData = (cat: CategoryKey): Slide[] => {
    if (cat in imag) {
        const data = imag[cat as keyof typeof imag]
        return data;
    } else if (cat in land) {
        const data = land[cat as keyof typeof land]
        return data;
    }
    return [];
}

export default function Page({params}:any) {
    const dat = getData(params.slug)
    const [imageIndexes, setImageIndexes] = useState<number[]>(new Array(dat.length).fill(0));

    useEffect(() => {
        setImageIndexes(new Array(dat.length).fill(0));
    }, [dat]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setImageIndexes((prevIndexes) => {
            return prevIndexes.map((index, slideIndex) => {
              return (index + 1) % dat[slideIndex]?.image.length;
            });
          });
        }, 3000);
  
        return () => clearInterval(intervalId);
    }, [dat]);

    const [visible, setVisible] = useState(false)
    const [currentInfo, setCurrentInfo] = useState('')

    const toggleModal = (info = '') => {
      setCurrentInfo(info);
      setVisible(!visible);
    };

    return (
        <>
            <nav className="flex pt-10 px-4 md:px-10 sm:px-1" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/shop" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#451606] dark:text-gray-400 dark:hover:text-[#451606]">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Shop
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 capitalize">{params.slug}</span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className=''>
                <div className='text-center pb-4'>
                    <hr className="w-20 h-2 mx-auto bg-[#451606] border-0 rounded my-3 dark:bg-gray-700"/>
                    <h2 className='text-2xl font-bold uppercase tracking-1'>
                        {params.slug} Showcases
                    </h2>
                </div>
                
                {dat.map((slide, index) => (
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
            <Bottom/>
        </>
    )
}

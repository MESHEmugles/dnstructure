"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { initFlowbite } from 'flowbite'

function Header() {
    useEffect(() => {
        initFlowbite();
    }, []);
    const [visible, setVisible] = useState(false)

    const toggleModal = () => {
        setVisible(!visible);
    };
    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="md:w-48">
                        <Link href="/shop" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={100} height={200} />
                        </Link>
                    </div>
                    {/* big screen */}
                    <form className="max-w-md mx-auto w-1/2 hidden md:block">
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
                    {/* big screen end */}

                    {/* small screen */}
                    <div className="mx-auto relative block md:hidden">
                        <button onClick={() => setVisible(true)} data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="p-2.5 text-sm font-medium h-full text-gray-600 bg-transparent rounded-e-lg">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                    {visible && (
                        <div id="large-modal" aria-hidden={!visible} className="z-[100] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-800 bg-opacity-50">
                            <div className="relative p-4 w-full max-w-2xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                                            Search
                                        </h3>
                                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={toggleModal}>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-4 md:p-5 space-y-4">
                                        <form className="max-w-xl mx-auto w-full pb-8 pt-3">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* small screen end */}

                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="/cart" className="hidden md:block">
                            <div className="relative">
                                <div className="absolute text-[#451606] rounded-full font-bold -top-2 right-0 text-sm">
                                    0
                                </div>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                                </svg>
                            </div>
                        </Link>
                        <div className="flex gap-2 font-semibold">
                            <div className="px-2">
                                <a href="/auth/register" className="text-xs md:text-sm text-gray-600 dark:text-gray-500 hover:border-[#451606] hover:bg-[#451606] hover:text-white hover:px-2 hover:py-2 hover:rounded-lg">Register</a>     
                            </div>
                            <div>
                                <a href="/auth/login" className="text-xs md:text-sm text-gray-600 dark:text-gray-500 hover:border-[#451606] hover:border hover:bg-transparent hover:text-[#451606] hover:px-2 hover:py-2 hover:rounded-lg">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 shadow-xl border-y border-[#451606] py-1.5">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="text-xs md:text-base flex flex-row font-medium mt-0 space-x-6 md:space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-[11.5px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-[11.5px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Architectural Shop</a>
                            </li>
                            <li>
                                <a href="/projects" className="text-[11.5px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Our project</a>
                            </li>
                            <li>
                                <a href="/about"className="text-[11.5px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-[11.5px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header
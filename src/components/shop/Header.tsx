"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { initFlowbite } from 'flowbite'

function Header() {
    useEffect(() => {
        initFlowbite();
    }, []);
    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <div className="w-48">
                        <Link href="/shop" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src="/logo.jpg" className="h-10" alt="dnstruture logo" width={100} height={200} />
                        </Link>
                    </div>
                    <form className="max-w-md mx-auto w-1/2 hidden md:block">
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

                    <div className="mx-auto relative block md:hidden">
                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="p-2.5 text-sm font-medium h-full text-gray-600 bg-transparent rounded-e-lg">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>

                    <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="p-4 md:p-5">
                                    <form className="max-w-md mx-auto w-1/2 hidden md:block">
                                        <div className="relative w-full">
                                            <input type="search" id="search-dropdown" className="block rounded-l-lg p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search..." required />
                                            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                </svg>
                                                <span className="sr-only">Search</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <Link href="/cart">
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
            <nav className="bg-gray-50 dark:bg-gray-700 shadow-xl border-y py-1.5">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="text-xs md:text-base flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="/" className="text-[12px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-[12px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Architectural Shop</a>
                            </li>
                            <li>
                                <a href="/projects" className="text-[12px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Our project</a>
                            </li>
                            <li>
                                <a href="/about"className="text-[12px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-[12px] md:text-base text-gray-900 font-bold md:font-medium dark:text-white md:hover:text-[#451606] hover:underline hover:decoration-[#451606]">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header
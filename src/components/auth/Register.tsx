import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <div>
            <div className="min-h-screen text-gray-900 flex justify-center">
        <div className="shadow flex justify-center flex-1 items-center">
            <div className="w-full">
                <div className='pb-7'>
                    <Link href="/shop">
                        <Image src="/logo.jpg"
                            alt='dezyns structure'
                            className="mx-auto"
                            width={140}
                            height={140} />
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-full flex-1">
                        <div className="flex flex-col items-center">
                            <button
                                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-transparent border-2 border-[#451606] text-[#451606] flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow hover:bg-[#451606] hover:text-white hover:font-medium focus:shadow-sm focus:shadow-outline">
                                <div className="bg-[#451606] text-white p-2 rounded-full">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <span className="ml-4">
                                    Register with Google
                                </span>
                            </button>
    
                        </div>
    
                        <div className="mb-12 mt-9 border-b text-center w-1/4 mx-auto">
                            <div
                                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                Or
                            </div>
                        </div>
    
                        <div className="mx-auto max-w-xs">
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[#451606] focus:ring-[#451606] focus:outline-none placeholder-[#451606]/30 text-sm"
                                type="email" placeholder="Email" />
                            <input
                                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[#451606] focus:ring-[#451606] focus:outline-none placeholder-[#451606]/30 text-sm mt-5"
                                type="password" placeholder="Password" />
                            <button
                                className="mt-5 tracking-wide font-semibold bg-[#451606] text-white w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                <span className="ml-">
                                    Register
                                </span>
                            </button>
                            <p className="mt-6 text-xs text-gray-600 text-center">
                                I agree to the
                                <a href="#" className="border-b border-gray-500 border-dotted">
                                    Terms of Service
                                </a>
                                and
                                <a href="#" className="border-b border-gray-500 border-dotted">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='text-base font-mediun p-3 '>
                        <span>Have an account?</span>
                        <Link href="/auth/login"
                            className="mt-5 tracking-wide bg-transparent text-[#451606] w-full py-2 border-2 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <span className="">
                                Login
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

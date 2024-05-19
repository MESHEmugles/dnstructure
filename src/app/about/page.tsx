"use client"
import React from 'react'
// import Top from '@/components/main/Top'
import Shopnav from '@/components/shop/Shopnav'
import Bottom from '@/components/main/Bottom'
import Aboutbody from '@/components/main/Aboutbody'

export default function page() {
  return (
    <div>
        <Shopnav/>

        <Aboutbody/>

        <Bottom/>
        
    </div>
  )
}

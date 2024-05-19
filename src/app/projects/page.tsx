import React from 'react'
import Shopnav from '@/components/shop/Shopnav'
import Bottom from '@/components/main/Bottom'
import Projectbody from '@/components/main/Projectbody'

export default function page() {
  return (
    <div>
        <Shopnav/>

        <Projectbody/>

        <Bottom/> 
    </div>
  )
}

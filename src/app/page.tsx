'use client'
import dynamic from 'next/dynamic'
const Top = dynamic(() => import('../components/main/Top'))
const Mainbody = dynamic(() => import('../components/main/Mainbody'))
const Bottom = dynamic(() => import('../components/main/Bottom'))


export default function Home() {
  return (
    <div className="bg-black">
      <Top/>

      <Mainbody/>

      <Bottom/>

    </div>
  );
}

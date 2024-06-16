import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('@/components/shop/Banner'))
const Firstbody = dynamic(() => import('@/components/shop/Firstbody'))
const Maincontent = dynamic(() => import('@/components/shop/Maincontent'))
const Cards = dynamic(() => import('@/components/shop/Cards'))
const Bottom = dynamic(() => import('@/components/main/Bottom'))

function Shop() {
    return(
        <div>
            <Banner/>
            
            <Firstbody/>

            <Maincontent/>

            <Cards/>

            <Bottom/>
        </div>
    )
}
export default Shop
import Banner from "@/components/shop/Banner"
import Firstbody from "@/components/shop/Firstbody"
import Maincontent from "@/components/shop/Maincontent"
import Bottom from "@/components/main/Bottom"
import Cards from "@/components/shop/Cards"

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
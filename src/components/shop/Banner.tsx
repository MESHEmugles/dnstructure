import Link from "next/link";
import Image from "next/image";

function Banner () {
     return(
        <div>
<section
  className="relative max-h-[400px] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>
  <div
    className="relative mx-auto max-w-screen-xl px-4 -pt-32 pb-32 sm:px-6 lg:flex lg:h-screen lg:justify-between lg:px-8"
  >
    <div className="">
      <h1 className="text-2xl py-10 font-extrabold sm:text-md text-center">
               <strong className="block font-md text-rose-700"> SHOP FOR YOUR ARCHITECTURAL DESIGN PLANS </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Welcome to architecturaldesignplan.com where you can find all kinds of building plans. Whether you are looking for a detached duplex, a hotel or something else, we have what you need. We know that building your dream home is an exciting process and we want to help you make it as easy as possible. . That’s why we offer our customers many options to purchase their home plans before construction begins. Our plans are designed by professional architects and are ready to work. No matter what type of home building plan you need, we have it here for you.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-center">
    </div>
    </div>
  </div>
</section>


        </div> 
            
     )            
     }            
export default Banner

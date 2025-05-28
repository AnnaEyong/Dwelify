'use client'
// Importing necessary modules and components
import React from 'react'
import Link from 'next/link'; 
import { useState } from "react"
import { GrSupport } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import CardComponent from '@/components/card/CardComponent';
import TestimonialsComponent from '@/components/card/TestimonialsComponent';
import FaqsComponent from '@/components/card/FaqsComponent';
import { Properties } from './utils/data';
import { Testimonials } from './utils/testimonials';
import { FAQS } from './utils/faq';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';



export default function page() {

    const [number, setNumber] = useState(3)
    const [textEntered, setTextEntered] = useState("")
    
    const increment = () => {
        setNumber(number+1)
    }

    const decrement = () => {
        setNumber(number >0 ? number-1 : 0)
    }


    const handleClick = () => {
        document.getElementByClassName('menu').classList.remove('open');
        document.body.classList.remove('no-scroll'); 
      }
  return (
    <div>
      <>
{/* HERO */}
    <main onClick={handleClick} className='hidden md:grid grid-cols-2 pt-14'>
        <section className='hidden md:flex flex-col bg-[#141414] pl-[10%] pr-[6%] pt-[8%] h-fit'>
        <div>
            <h1 className='animated-gradient-text font-medium text-[4.2vw] leading-[4vw] text-white'>Discover Your Dream Property with Dwelify</h1>
            <p className='text-[#999999] text-[.9rem] py-4'>Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.</p>
        </div>

        <div className='text-[.8rem] text-white flex gap-3'>
            <Link href='/about' className='bg-[#141414] py-2 px-3 border-1 border-[#262626] rounded-lg cursor-pointer'>Learn More</Link>
            <Link href='/properties' className='bg-[#703BF7] py-2 px-3 border-1 border-[#703BF7] rounded-lg cursor-pointer'>Browse Properties</Link>
        </div>

        <article className='flex justify-between mt-[2rem]'>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-[32%]'>
                <h1 className='text-white text-xl font-semibold'>200+</h1>
                <p className='text-[#999999] text-[13px]'>Happy Customers</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-[32%]'>
                <h1 className='text-white text-xl font-semibold'>10k+</h1>
                <p className='text-[#999999] text-[13px]'>Properties For Clients</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-[32%]'>
                <h1 className='text-white text-xl font-semibold'>16+</h1>
                <p className='text-[#999999] text-[13px]'>Years of Experience</p>
            </div>
        </article>
        </section>

        <section className='hidden md:flex h-[25rem]'>
            <img src='/Container.png' alt='hero image' className='w-full h-full object-fit-cover' />
        </section>
    </main>
    
        {/* HERO RESPONSIVENESS */}
    <main className='md:hidden sm:grid grid-cols-1 pt-[2.5rem]'> 

        {/* RESPONSIVE HERO IMAGE    */}
        <section className='px-[2%] pt-[5%] bg-[#141414]'>
            <img src='/Container.png' alt='hero image' className='w-full h-full object-fit-cover rounded-lg' />
        </section>

        {/* RESPONSIVE HERO TEXT   */}
        <section className='bg-[#141414] px-[5%] py-[5%] h-fit'>
        <div>
            <h1 className='animated-gradient-text font-meduim text-[8vw] leading-[8vw] text-white'>Discover Your Dream Property with Dwelify</h1>
            <p className='text-[#999999] text-[.84rem] py-4'>Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.</p>
        </div>

        <div className='text-[15px] text-white flex flex-col gap-3'>
            <button className='bg-[#141414] py-2 px-3 border-1 border-[#262626] rounded-lg cursor-pointer'>Learn More</button>
            <button className='bg-[#703BF7] py-2 px-3 border-1 border-[#703BF7] rounded-lg cursor-pointer'>Browse Properties</button>
        </div>

    <div className='flex flex-col gap-3'>
        <article className='flex gap-3 mt-[2rem]'>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-[49%] flex flex-col items-center justify-center'>
                <h1 className='text-white text-xl font-semibold'>200+</h1>
                <p className='text-[#999999] text-[.85rem]'>Happy Customers</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-[49%] flex flex-col items-center justify-center'>
                <h1 className='text-white text-xl font-semibold'>10k+</h1>
                <p className='text-[#999999] text-[.85rem]'>Properties For Clients</p>
            </div>
        </article>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 w-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-xl font-semibold'>16+</h1>
                <p className='text-[#999999] text-[.85rem]'>Years of Experience</p>
            </div>
    </div>
        </section>
    </main>
{/* HERO END */}

<section className='bg-[#141414] hidden md:flex '>
    <div className='border-5 border-[#1a1a1a] w-full h-[9rem]'>
        <div className='h-full flex justify-between py-3 px-3'>

            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                {/* <GrSupport size={25} className='text-purple-400 shadow-xl' /> */}
                <h1 className='text-white text-xl font-semibold text-center'>24/7 Support</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>Assistance round the clock</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                {/* <GrSecure /> */}
                <h1 className='text-white text-xl font-semibold text-center'>Secure Transactions</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>Your information is protected</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Worldwide Coverage</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>Properties around the globe</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Unwavering Reliability</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>Expect nothing less than shown</p>
            </div>
        </div>
    </div>
</section>


{/* RESPONSIVE SECTION */}
<section className='bg-[#141414] py-[5%] px-[5%] md:hidden sm:flex '>
    <div className='border-5 border-[#1a1a1a] w-full h-fit rounded-xl'>
        <div className='h-fit grid grid-cols-2 gap-3 py-3 px-3'>

            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>24/7 Support</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Always available</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold flex text-center'>Security</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Your data is protected</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Worldwide</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Properties abroad</p>
            </div>
            <div className='bg-[#1a1a1a] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Reliability</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Get it as seen</p>
            </div>
        </div>
    </div>
</section>


    {/* FEATURED PROPERTIES */}
    <main className='px-[5%] pt-[5%] pb-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Some Feartured Properties</h1>
        <div className='flex justify-between gap-8'>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Explore our handpicked selection of featured
                properties. Each listing offers a glimpse into exceptional homes and investments available
                through Dwelify. Click "View Details" for more information.</p>
            <Link href='/properties' className='hidden lg:flex justify-center bg-[#141414] text-[1vw] py-2 px-2 w-[12vw] h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All Properties</Link>
        </div>
        </div>
    </main>

    {/* <div className='px-[5%] flex gap-5 overflow-x-auto overflow-y-hidden w-full'>
       {Properties.slice(0, 15).map((item, index) => <CardComponent key={item.id} property={item} />)}
    </div> */}

    <Swiper
        modules={[ Scrollbar, Navigation, FreeMode, Mousewheel ]}
         navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={3}
            breakpoints= {{
                 0: {slidesPerView: 1 },
                320: {slidesPerView: 1 },
                440: {slidesPerView: 1.1 },
                500: {slidesPerView: 1.3 },
                540: {slidesPerView: 1.4 },
                585: {slidesPerView: 1.45 },
                600: {slidesPerView: 1.8 },
                800: {slidesPerView: 2 },
                900: {slidesPerView: 2.3 },
                1000: {slidesPerView: 2.5},
                1100: {slidesPerView: 2.8},
                1200: {slidesPerView: 3},
            }}
        scrollbar={{ draggable: true,
                      hide: true, }}
        // allowSlidePrev={true}
        // touchRatio={1}
        // threshold-={5}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
         className="mySwiper cursor-pointer relative">

        {Properties.slice(0, 10).map((item, index) => (
          <SwiperSlide>
            <CardComponent key={item.id} property={item} />
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
    <div className='hidden md:flex justify-between mt-[3%] py-3 border-t-1 border-[#262626]'>
            <button  onClick={decrement} className='swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    </div>
     {/* NAVIGATION END */}

        {/* RESPONSIVE NAVIGATION */}
    <div className='flex md:hidden justify-between items-center mt-[3%] py-3 border-t-1 border-[#262626]'>
        <button className='flex justify-center bg-[#141414] text-[14px] py-3 px-3 w-fit h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All Properties</button>
        <div className='flex gap-4 items-center'>
            <button  onClick={decrement} className='swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
        </div>
    </div>
    {/* RESPONSIVE NAVIGATION END */}
      </Swiper> 


    {/* WHAT CLIENTS SAY */}
     <main className='px-[5%] py-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>What Our Clients Say</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Read the success stories
                and heartfelf testimonials from our valued clients. Discover why they chose Dwelify for their
                real estate needs.
            </p>
            <button className='hidden lg:flex justify-center bg-[#141414] text-[1vw] py-2 px-2 w-[12vw] h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All Testimonials</button>
        </div>
        </div>
    </main>
        {/* TESTMONIALS SWIPER */}
            <Swiper
        modules={[ Scrollbar, Navigation, FreeMode, Mousewheel ]}
         navigation={{
          nextEl: '.tes-swiper-button-next',
          prevEl: '.tes-swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={3}
             breakpoints= {{
                0: {slidesPerView: 1 },
                320: {slidesPerView: 1 },
                440: {slidesPerView: 1.1 },
                500: {slidesPerView: 1.3 },
                540: {slidesPerView: 1.4 },
                585: {slidesPerView: 1.45 },
                600: {slidesPerView: 1.8 },
                800: {slidesPerView: 2 },
                900: {slidesPerView: 2.3 },
                1000: {slidesPerView: 2.5},
                1100: {slidesPerView: 2.8},
                1200: {slidesPerView: 3},
            }}
        scrollbar={{ draggable: true,
                      hide: true, }}
        // allowSlidePrev={true}
        // touchRatio={1}
        // threshold-={5}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
         className="mySwiper cursor-pointer">

        {Testimonials.slice(0, 10).map((item, index) => (
          <SwiperSlide>
            <TestimonialsComponent key={item.id} testimony={item} />
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
    <div className='hidden md:flex justify-between mt-[3%] py-3 border-t-1 border-[#262626]'>
            <button  onClick={decrement} className='tes-swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='tes-swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    </div>
     {/* NAVIGATION END */}

        {/* RESPONSIVE NAVIGATION */}
    <div className='flex md:hidden justify-between items-center mt-[3%] py-3 border-t-1 border-[#262626]'>
        <button className='flex justify-center bg-[#141414] text-[14px] py-3 px-3 w-fit h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All Testimonials</button>
        <div className='flex gap-4 items-center'>
            <button  onClick={decrement} className='tes-swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='tes-swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
        </div>
    </div>
    {/* RESPONSIVE NAVIGATION END */}
      </Swiper> 
      {/* TESTMONIALS END */}

    {/* FREQUENTLY ASKED QUESTIONS */}
    <main className='px-[5%] py-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Frequently Asked Questions</h1>
        <div className='flex justify-between gap-15'>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Find answers to common questions about
                Dwelify's services, property listings, and the real estate process. We're here to provide clarity and
                assist you every step of the way.
            </p>
            <button className='hidden lg:flex justify-center bg-[#141414] text-[1vw] py-2 px-2 w-[12vw] h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All FAQ's</button>
        </div>
        </div>
    </main>

{/* FAQS */}
        <Swiper
        modules={[ Scrollbar, Navigation, FreeMode, Mousewheel ]}
         navigation={{
          nextEl: '.faq-swiper-button-next',
          prevEl: '.faq-swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={3}
             breakpoints= {{
                0: {slidesPerView: 1 },
                320: {slidesPerView: 1 },
                440: {slidesPerView: 1.1 },
                500: {slidesPerView: 1.3 },
                540: {slidesPerView: 1.4 },
                585: {slidesPerView: 1.45 },
                600: {slidesPerView: 1.8 },
                800: {slidesPerView: 2 },
                900: {slidesPerView: 2.3 },
                1000: {slidesPerView: 2.5},
                1100: {slidesPerView: 2.8},
                1200: {slidesPerView: 3},
            }}
        scrollbar={{ draggable: true,
                      hide: true, }}
        // allowSlidePrev={true}
        // touchRatio={1}
        // threshold-={5}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
         className="mySwiper cursor-pointer">

        {FAQS.slice(0, 10).map((item, index) => (
          <SwiperSlide>
            <FaqsComponent key={item.id} faq={item} />
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
    <div className='hidden md:flex justify-between mt-[3%] py-3 border-t-1 border-[#262626]'>
            <button  onClick={decrement} className='faq-swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='faq-swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    </div>
     {/* NAVIGATION END */}

        {/* RESPONSIVE NAVIGATION */}
    <div className='flex md:hidden justify-between items-center mt-[3%] py-3 border-t-1 border-[#262626]'>
        <button className='flex justify-center bg-[#141414] text-[14px] py-3 px-3 w-fit h-fit border-1 border-[#262626] rounded-lg cursor-pointer'>View All Testimonials</button>
        <div className='flex gap-4 items-center'>
            <button  onClick={decrement} className='faq-swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='faq-swiper-button-next  cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
        </div>
    </div>
    {/* RESPONSIVE NAVIGATION END */}
      </Swiper> 
      {/* FAQS END */}


      <div className='hidden md:flex w-full h-[15rem] border-y-1 border-[#262626] relative'>
        <img src='/globe.jpg' alt='image' className='w-full h-full object-bottom'/>
        <div className='absolute mx-[5%] top-[6vw] grid grid-cols-[3fr_1fr] gap-5'>
             <div>
                <h1 className='font-semibold text-3xl'>Start Your Real Estate Journey Today</h1>
                <p className='text-[#999999] text-[.8rem] py-4'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Dwelify is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <div className='flex items-center justify-end'>
                <Link href='/properties' className='bg-[#703BF7] text-[.8rem] py-2 px-3 border-1 border-[#703BF7] rounded-lg cursor-pointer'>Explore Properties</Link>
            </div>
        </div>
      </div>

      {/* RESPONSIVE */}
      <div className='flex md:hidden w-full h-[18rem] border-y-1 border-[#262626] relative'>
        <img src='/globe.jpg' alt='image' className='w-full h-full object-bottom'/>
        <div className='absolute mx-[5%] top-[7vw] grid grid-cols-1 gap-5'>
             <div>
                <h1 className='font-semibold text-2xl'>Start Your Real Estate Journey</h1>
                <p className='text-[#999999] text-[.87rem] py-2'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Dwelify is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties.</p>
            </div>
            <div className='flex items-center'>
                <Link href='/properties' className='bg-[#703BF7] text-[1rem] text-center py-2 px-3 border-1 border-[#703BF7] rounded-lg cursor-pointer w-full'>Explore Properties</Link>
            </div>
        </div>
      </div>

      </>
 
    </div>
  )
}

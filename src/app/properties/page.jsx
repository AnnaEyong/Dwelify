'use client'
import React, { useEffect } from 'react'
import { Search } from 'lucide-react';
import CardComponent from '@/components/card/CardComponent';
import FilterComponent from '@/components/filter/FilterComponent';
import { Properties, Types } from '../utils/data';
import { useState } from "react"
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function page() {

    const [searchTerm, setSearchTerm] = useState('')
    let searchResult = searchTerm.length > 0 ? Properties?.filter(property => property?.location?.toLowerCase().includes(searchTerm.toLowerCase())) : Properties;
  
    const [selectedType, setSelectedType] = useState(null)
     const filteredItems = selectedType ? searchResult.filter(item => item?.category?.toLowerCase() == selectedType.toLowerCase()) : searchResult;
     searchResult = filteredItems;


    //  useEffect(() => {
    //   const handleLoad = () => {
    //     document.getElementById('all').classList.add('allTypes');
    //   };
    //   document.addEventListener('DOMContentLoaded', handleLoad);
    //   return () => {
    //     document.removeEventListener('DOMContentLoaded', handleLoad);
    //   };
    //   }, []);

      const handleTypeClick = () => {
          document.getElementById('all').classList.add('allTypes');
      }

  return (
    <>
      {/* HERO */}
      <section className='px-[5%] h-fit pb-[5%] pt-[10%] hidden md:flex flex-col bg-gradient-to-l from-[#141414] to-[#262626]'>
        <h1 className='text-3xl font-semibold pt-3 px-2'>Find Your Dream Property</h1>
        <p className='text-[#999999] text-[.9rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
      </section>

    {/* RESPONSIVE HERO */}
      <section className='px-[5%] h-fit pb-[10%] pt-[18%] flex md:hidden flex-col bg-gradient-to-l from-[#141414] to-[#262626]'>
        <h1 className='text-[1.9rem] font-semibold pt-3 px-2'>Find Your Dream Property</h1>
        <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
      </section>
    {/* HERO END */}

    {/* SEARCH AND PROPERTIES DISPLAY */}
        <section className='px-[5%] border-t-1 border-[#262626]'>
            <div className='hidden lg:flex justify-between items-center gap-4 border-t-6 border-x-6 border-[#262626] bg-[#141414] rounded-t-xl px-2 py-2 mt-[-33px] w-[90%] m-auto'>
                <input value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} type='text' placeholder='Search location'  className='text-[.9rem] w-full flex-8/3'/>

                <div className='flex flex-1/3 gap-1 items-center bg-[#703BF7] w-full text-[.8rem] py-1 px-2 border-1 border-[#703BF7] rounded-lg cursor-pointer'>
                    <Search size={15}/>
                    <p>Find Property</p>
                </div>
            </div>

          {/* RESPONSIVE SEARCH */}
          <div className='flex lg:hidden justify-between items-center border-t-6 border-x-6 border-[#262626] bg-[#141414] rounded-t-xl px-2 py-2 mt-[-33px] w-[80%] m-auto'>
                <input value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} type='text' placeholder='Search location' className='text-[.9rem]'/>

                <div className='flex items-center justify-center bg-[#703BF7] w-7 h-7 border-1 border-[#703BF7] rounded-full cursor-pointer'>
                    <Search size={16}/>
                </div>
            </div>
            {/* SEARCH END */}
          </section>

        
            {/* FILTER */}
         <section className='px-[5%] hidden lg:flex'>
            <div className='flex justify-between gap-1.5 py-1.5 px-2 bg-[#262626] rounded-lg'>
                 <button onClick={() => setSelectedType(null)} className='bg-[#141414] text-[#999999] flex gap-2 items-center justify-center py-2 px-5 text-[.8rem] cursor-pointer rounded-md hover:text-purple-700 focus:text-purple-700 ease-in-out' id='all'>All</button>
            {Types.map((item) => 
                <button onClick={() => {setSelectedType(item.type); handleTypeClick;}} key={item.id} className='bg-[#141414] flex gap-2 items-center justify-center py-2 px-5 text-[.8rem] cursor-pointer rounded-md hover:text-purple-700 focus:text-purple-700 ease-in-out'> 
                  {item.icon}
                  {item.type}
                </button>
            )}
            </div>
          </section>
{/* {Types.map((item) => <FilterComponent key={item.id} filter={item} /> )} */}
            {/* RESPONSIVE */}
    
      <section className='flex  items-center justify-center lg:hidden w-full border-t-4 border-[#262626] rounded-2xl px-[5%] pt-[2%] pb-[1%]'>
        <button onClick={() => setSelectedType(null)}  className='bg-[#141414] border-1 text-[#999999] mt-[-1rem] flex gap-2 items-center justify-center py-1.5 px-3 text-[.8rem] cursor-pointer rounded-md hover:text-purple-700 focus:text-purple-700 ease-in-out' id='all'>All</button>
            <Swiper
        modules={[ Scrollbar, Navigation, FreeMode, Mousewheel ]}
        //  navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
         spaceBetween={20}
        slidesPerView={3}
            breakpoints= {{
                 0: {slidesPerView: 3 },
                320: {slidesPerView: 3.5 },
                440: {slidesPerView: 3.8 },
                500: {slidesPerView: 4 },
                540: {slidesPerView: 4.5 },
                585: {slidesPerView: 4.8 },
                600: {slidesPerView: 5 },
                800: {slidesPerView: 4.9 },
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
         className="mySwiper flex cursor-pointer w-full m-auto">

        {Types.map((item) => (
          <SwiperSlide>
            <button onClick={() => {setSelectedType(item.type); handleTypeClick;}} key={item.id} className='bg-[#141414] border-1 border-transparent flex gap-2 items-center justify-center py-2 px-3 text-[.8rem] cursor-pointer rounded-md hover:text-purple-700 focus:text-purple-700 ease-in-out'> 
                  {item.icon}
                  {item.type}
                </button>
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
    {/* <div className='absolute top-10 flex justify-between mt-[3%] py-3 border-t-1 border-[#262626] w-full'>
            <button  className='swiper-button-prev cursor-pointer bg-white border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  className='swiper-button-next  cursor-pointer bg-white border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    </div> */}
     {/* NAVIGATION END */}
      </Swiper> 
</section>

        <section className='px-[5%]'>
            <div className='md:border-t-1 py-[5%] border-[#262626] lg:border-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
                {searchResult.map((item, index) => <CardComponent key={item.id} property={item} /> )}
            </div>
        </section>

    {/* SEARCH AND PROPERTIES DISPLAY END */}
    </>
  )
}

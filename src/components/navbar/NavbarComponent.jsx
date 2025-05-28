"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from "react"
import { Heart, Bell, Settings, House } from 'lucide-react'
// import { Urbanist } from 'next/font/google';
import about from '../../app/about/page';
import { useStoreFavorite } from '@/store/favorite.store';

export default function NavbarComponent() {

   const [isOpen, setIsOpen] = useState(false)
  
      const toggleMenu = () => {
          setIsOpen(!isOpen)
      }

      const closeMenu = () => {
        setIsOpen(false)
      }

      useEffect(() => {
        if (isOpen) {
          document.body.classList.add('menu-open');
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('menu-open');
          document.body.classList.remove('no-scroll');
        }
      }, [isOpen]);
    
    // const urbanist = Urbanist({
    //     subsets: ['latin'],
    //     display: 'swap',
    // })

    const  {selectedFavoriteIds} = useStoreFavorite()
  const  favoriteSize = selectedFavoriteIds.length

      const handleClick = () => {
        document.getElementByClassName('menu').classList.remove('open');
        document.body.classList.remove('no-scroll'); 
      }

      // body.addEventLister('click', () => {
      //   document.getElementByClassName('menu').classList.remove('open');
      // })

  return (
    <div>
    <div className='bg-[#1a1a1a] flex justify-between items-center py-2 px-[5%] text-white border-b-1 border-[#262626] fixed top-0 left-0 right-0 z-5 '>
      <div className='flex gap-0.5'>
        <img src='/D.png' alt='logo' className='w-10'/><span className='text-xl font-semibold flex  items-end'>WELIFY</span>
      </div>

      <ul className='hidden md:flex gap-2 text-[14px]'>
        <Link href='/' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>Home</Link>
       <Link href='/about' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>About Us</Link>
        <Link href='/properties' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>Properties</Link>
        <Link href='/contact' className='hidden md:flex hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] rounded-lg cursor-pointer text-[.8rem]'>Contact Us</Link>
      </ul>

      <div className='hidden md:flex items-center justify-center gap-6'>
        <div className='hidden md:flex relative'>
          <Heart size={21}/>
          <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-2.5 h-2.5 bottom-0.5 right-0 rounded-full'>{favoriteSize}</p>
        </div>
        <div className='hidden md:flex relative'>
          <Bell size={21}/>
          <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-2.5 h-2.5 bottom-0.5 right-0 rounded-full'>8</p>
        </div>
        <Settings size={21}/>
        </div>
      
      <img src='/Icon.png' alt='icon' className='md:hidden sm:flex cursor-pointer' onClick={toggleMenu} id='open'/>
    </div>

    {/* SLIDEBAR */}
<div className={`menu ${isOpen ? 'open' : ''} py-10 h-fit`}>
    <div onClick={closeMenu} className='absolute top-0 right-0 cursor-pointer py-3 pr-2'>
        <Heart size={21}/>
    </div>

    <div className='flex flex-col text-[1rem] w-inherit'>
        <Link href='/' onClick={handleClick} className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626] flex gap-4 items-center'><House />Home</Link>
        <Link href='/about' onClick={handleClick} className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626]'>About Us</Link>
        <Link href='/properties' onClick={handleClick} className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626]'>Properties</Link>
        <Link href='/contact' onClick={handleClick} className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626]'>Contact Us</Link>
        <button className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'>
            <div className='relative'>
              <Bell size={23}/>
              <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-3 h-3 bottom-0 right-[-1px] rounded-full'>8</p>
            </div>
              Notifications
        </button>
        <button className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'>
            <div className='relative'>
              <Heart size={23}/>
              <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-3 h-3 bottom-0 right-[-1px] rounded-full'>{favoriteSize}</p>
            </div>
              Favorites
        </button>
        <button className=' pl-8 bg-[#1a1a1a] py-3 focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'><Settings size={21}/> Settings</button>
    </div>
</div>
    </div>
  )
}

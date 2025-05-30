"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from "react"
import { Heart, Bell, Settings, House, CircleAlert, Phone, ChevronUp } from 'lucide-react'
// import { Urbanist } from 'next/font/google';
import about from '../../app/about/page';
import { useStoreFavorite } from '@/store/favorite.store';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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
        <img src='/dwelifyLogo.png' alt='dwelifyLogo' className='w-30'/>
      </div>

      <ul className='hidden md:flex gap-2 text-[14px]'>
        <Link href='/' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>Home</Link>
       <Link href='/about' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>About Us</Link>
        <Link href='/properties' className='hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] focus:border-1 focus:border-[#262626] focus:bg-[#141414] rounded-lg cursor-pointer'>Properties</Link>
        <Link href='/contact' className='hidden md:flex hover:bg-[#141414] py-2 px-3 border-1 border-transparent hover:border-1 hover:border-[#262626] rounded-lg cursor-pointer'>Contact Us</Link>
      </ul>

      <div className='hidden md:flex items-center justify-center gap-6'>
        <div className='hidden md:flex relative'>
          <Heart size={21}/>
          <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-2.5 h-2.5 bottom-0.5 right-0 rounded-full'>{favoriteSize}</p>
        </div>
        <div className='hidden md:flex relative'>
          <Bell size={21}/>
          <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-2.5 h-2.5 bottom-0.5 right-0 rounded-full'>0</p>
        </div>
        <div className='border-r-1 border-white/20 pr-3 '>
          <Settings size={21}/>
        </div>

            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      
      <img src='/Icon.png' alt='icon' className='md:hidden sm:flex cursor-pointer' onClick={toggleMenu} id='open'/>
    </div>

    {/* SLIDEBAR */}
<div className={`menu ${isOpen ? 'open' : ''}`}>
    

    <div className='flex flex-col w-inherit'>
        <Link href='/' onClick={handleClick} className='button pl-8 bg-[#1a1a1a] focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626] flex gap-4 items-center'><House />Home</Link>
        <Link href='/about' onClick={handleClick} className='button pl-8 bg-[#1a1a1a] focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626] flex gap-4 items-center'><CircleAlert />About Us</Link>
        <Link href='/properties' onClick={handleClick} className='button pl-8 bg-[#1a1a1a] focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626] flex gap-4 items-center'><House />Properties</Link>
        <Link href='/contact' onClick={handleClick} className='button pl-8 bg-[#1a1a1a] focus:bg-white/10 text-left cursor-pointer border-b-1 border-[#262626] flex gap-4 items-center'><Phone />Contact Us</Link>
        <button className='button pl-8 bg-[#1a1a1a] border-b-1 border-[#262626] focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'>
            <div className='relative'>
              <Bell size={23}/>
              <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-3 h-3 bottom-0 right-[-1px] rounded-full'>0</p>
            </div>
              Notifications
        </button>
        <button className='button pl-8 bg-[#1a1a1a] border-b-1 border-[#262626] focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'>
            <div className='relative'>
              <Heart size={23}/>
              <p className='bg-red-500 flex items-center justify-center text-[.5rem] absolute w-3 h-3 bottom-0 right-[-1px] rounded-full'>{favoriteSize}</p>
            </div>
              Favorites
        </button>
        <button className='button pl-8 bg-[#1a1a1a] focus:bg-white/10 text-left cursor-pointer flex items-center gap-4'><Settings size={21}/> Settings</button>
    </div>
</div>
    </div>
  )
}

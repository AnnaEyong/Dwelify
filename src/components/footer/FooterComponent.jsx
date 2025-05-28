import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MailPlus } from 'lucide-react';

export default function CardComponent({property}) {
  return (
<>
    <div className='hidden md:flex gap-15 w-full px-[5%] py-[5%] text-[.85rem] border-t-1 border-[#262626] mt-[3rem] relative z-2'>
        <div  className='lg:flex flex-col hidden'>
            <div className='flex gap-0.5'>
                <img src='/D.png' alt='logo' className='w-10'/><span className='text-xl font-semibold flex  items-end'>WELIFY</span>
            </div>
            <div className='border-1 border-[#262626] flex items-center gap-3 rounded-lg py-2 px-3 mt-[8%]'>
               <MailPlus className='text-[#999999]'/>
                <div className='flex items-center justify-between rounded-lg w-full'>
                    <input text='email' placeholder='Enter Your Email' className='text-sm'/>
                     <IoIosSend size={20}/>
                </div>
            </div>
        </div>

    <div className='grid grid-cols-[1fr_1fr_1fr_1.5fr_1fr] w-full'>
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-[#999999]'>Home</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Hero Section</li>
                <li className='cursor-pointer hover:text-[#999999]'>Features</li>
                <li className='cursor-pointer hover:text-[#999999]'>Properties</li>
                <li className='cursor-pointer hover:text-[#999999]'>Testimonials</li>
                <li className='cursor-pointer hover:text-[#999999]'>FAQ's</li>
            </ul>
        </div>

         <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-[#999999]'>About Us</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Our Story</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Works</li>
                <li className='cursor-pointer hover:text-[#999999]'>How it Works</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Team</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Clients</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-[#999999]'>Properties</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Portfolio</li>
                <li className='cursor-pointer hover:text-[#999999]'>Categories</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-[#999999]'>Services</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Valuation Mastery</li>
                <li className='cursor-pointer hover:text-[#999999]'>Strategic Marketing</li>
                <li className='cursor-pointer hover:text-[#999999]'>Negotiation Wizardy</li>
                <li className='cursor-pointer hover:text-[#999999]'>Closing Success</li>
                <li className='cursor-pointer hover:text-[#999999]'>Property Management</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-[#999999]'>Contact Us</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Contact Form</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Clients</li>
            </ul>
        </div>
    </div>
    </div>

    <article className='relative z-2hidden md:flex flex-col items-center justify-center w-full px-[5%] text-[.85rem]'>
        <div className='flex flex-col justify-center items-center lg:hidden w-full'>
            <div className='flex gap-0.5'>
                <img src='/D.png' alt='logo' className='w-10'/><span className='text-xl font-semibold flex  items-end'>WELIFY</span>
            </div>
            <div className='border-1 border-[#262626] bg-[#1a1a1a] flex items-center gap-3 rounded-lg py-2 px-3 w-[80%] my-[4%]'>
               <MailPlus className='text-[#999999]'/>
                <div className='flex items-center justify-between rounded-lg py-3 w-full'>
                    <input text='email' placeholder='Enter Your Email' className='text-[1rem]'/>
                     <IoIosSend size={25}/>
                </div>
            </div>
        </div>
    </article>

    <div className='relative z-2 bg-[#1a1a1a] hidden md:flex items-center justify-between py-3 px-[5%] text-[12px]'>
        <p>&copy; 2025 Dwelify. All Rights Reserved. Terms & Conditions</p>
        <div className='flex gap-2'>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaFacebookF size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaLinkedin size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaTwitter size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaYoutube size={20}/>
            </div>
        </div>
    </div>
    

{/* RESPONSIVE */}

    <div className='relative z-2 px-[5%] py-[5%] md:hidden sm:flex w-full mt-[2rem]'>
        <hr className='border-t-1 border-[#262626]' />
        <div className='flex flex-col justify-center items-center pt-[2rem]'>
            <div className='flex gap-0.5'>
                <img src='/D.png' alt='logo' className='w-10'/><span className='text-xl font-semibold flex  items-end'>WELIFY</span>
            </div>
            <div className='border-1 border-[#262626] flex items-center gap-3 rounded-lg py-2.5 px-3 mt-[3%] w-full'>
               <MailPlus className='text-[#999999]'/>
                <div className='flex items-center justify-between rounded-lg w-full'>
                    <input text='email' placeholder='Enter Your Email' className='text-[.85rem]'/>
                     <IoIosSend size={25}/>
                </div>
            </div>
        </div>
    </div>


<footer className=' relative z-2 grid grid-cols-2 gap-6 md:hidden px-[8%] py-[5%] text-[.85rem]'>
    <div className='flex flex-col gap-4 border-r-1 border-[#262626] pr-6'>
        <div className='flex flex-col gap-3 w-full border-b-1 border-[#262626] pb-[8%]'>
            <h3 className='text-[#999999]'>Home</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Hero Section</li>
                <li className='cursor-pointer hover:text-[#999999]'>Features</li>
                <li className='cursor-pointer hover:text-[#999999]'>Properties</li>
                <li className='cursor-pointer hover:text-[#999999]'>Testimonials</li>
                <li className='cursor-pointer hover:text-[#999999]'>FAQ's</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full border-b-1 border-[#262626] pb-[8%]'>
            <h3 className='text-[#999999]'>Properties</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Portfolio</li>
                <li className='cursor-pointer hover:text-[#999999]'>Categories</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full border-b-1 border-[#262626] pb-[8%]'>
            <h3 className='text-[#999999]'>Contact Us</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Contact Form</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Clients</li>
            </ul>
        </div>
    </div>

    <div  className='flex flex-col gap-4'>
        <div className='flex flex-col gap-3 w-full border-b-1 border-[#262626] pb-[8%]'>
            <h3 className='text-[#999999]'>About Us</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Our Story</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Works</li>
                <li className='cursor-pointer hover:text-[#999999]'>How it Works</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Team</li>
                <li className='cursor-pointer hover:text-[#999999]'>Our Clients</li>
            </ul>
        </div>

        <div className='flex flex-col gap-3 w-full border-b-1 border-[#262626] pb-[8%]'>
            <h3 className='text-[#999999]'>Services</h3>
            <ul className='flex flex-col gap-3'>
                <li className='cursor-pointer hover:text-[#999999]'>Valuation Mastery</li>
                <li className='cursor-pointer hover:text-[#999999]'>Strategic Marketing</li>
                <li className='cursor-pointer hover:text-[#999999]'>Negotiation Wizardy</li>
                <li className='cursor-pointer hover:text-[#999999]'>Closing Success</li>
                <li className='cursor-pointer hover:text-[#999999]'>Property Management</li>
            </ul>
        </div>
    </div>

</footer>


    <div className='relative z-2 bg-[#1a1a1a] md:hidden sm:flex flex-col gap-3 justify-center items-center py-5 text-[12px]'>
       <div className='flex gap-2 justify-center items-center pb-3'>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaFacebookF size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaLinkedin size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaTwitter size={18}/>
            </div>
            <div className='flex gap-3 justify-center items-center w-10 h-10 bg-[#141414] rounded-full'>
                <FaYoutube size={20}/>
            </div>
        </div>
         <p className='flex flex-col gap-3 justify-center items-center'>&copy; 2025 Dwelify. All Rights Reserved. Terms & Conditions</p>
    </div>
</>

)
}
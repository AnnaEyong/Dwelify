'use client'
import React, { useRef, useState } from 'react'
import { BedDouble, Bath, House } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../utils/constants';


export default function page() {

    const form = useRef();
    const handleSendEmail = () => {
        
        emailjs
      .sendForm('service_bnq0374', 'template_2gyoz1m', form.current, {
        publicKey: '6U0wn5PpKOAIQPf_m',
      })
      .then(
        () => {
          toast.success('Email Sent Successfully!', toastConfig)
        },
        (error) => {
          toast.error('Opps!! Something went wrong', toastConfig)
        },
      );
    }

     const [isSubmitting, setIsSubmitting]= useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsSubmitting(true);

            //simulate sending the message

            setTimeout(() => {
                //clear the form fields
                e.target.reset();
                setIsSubmitting(false);
            }, 2000);
        
        }

  return (
    <div>
        <ToastContainer />
      {/* HERO */}
      <section className='px-[5%] h-fit pb-[5%] pt-[10%] hidden md:flex flex-col bg-gradient-to-l from-[#141414] to-[#262626]'>
        <h1 className='text-3xl font-semibold pt-3 px-2'>Get in Touch with Etatein</h1>
        <p className='text-[#999999] text-[.9rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
      </section>

    {/* RESPONSIVE HERO */}
      <section className='px-[5%] h-fit pb-[10%] pt-[18%] flex md:hidden flex-col bg-gradient-to-l from-[#141414] to-[#262626]'>
        <h1 className='text-[1.9rem] font-semibold pt-3 px-2'>Get in Touch with Etatein</h1>
        <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
      </section>
    {/* HERO END */}

    <section className='bg-[#141414] hidden md:flex '>
    <div className='border-5 border-[#262626] w-full h-[9rem]'>
        <div className='h-full flex justify-between py-3 px-3'>

            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                {/* <GrSupport size={25} className='text-purple-400 shadow-xl' /> */}
                <h1 className='text-white text-xl font-semibold text-center'>24/7 Support</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>info@dwelify.com</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                {/* <GrSecure /> */}
                <h1 className='text-white text-xl font-semibold text-center'>Secure Transactions</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>+1(123) 456-7890</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Worldwide Coverage</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>Main Headquaters</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-[2vw] px-3 w-[24%] flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Unwavering Reliability</h1>
                <p className='text-[#999999] text-[.8rem] text-center'>instagram LinkedIn Facebook</p>
            </div>
        </div>
    </div>
</section>


{/* RESPONSIVE SECTION */}
<section className='bg-[#141414] md:hidden sm:flex '>
    <div className='border-5 border-[#262626] w-full h-fit'>
        <div className='h-fit grid grid-cols-2 gap-3 py-3 px-3'>

            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>24/7 Support</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Always available</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold flex text-center'>Security</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Your data is protected</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Worldwide</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Properties abroad</p>
            </div>
            <div className='bg-[#262626] border-1 border-[#262626] rounded-lg py-4 px-3 flex flex-col justify-center items-center'>
                <h1 className='text-white text-xl font-semibold text-center'>Reliability</h1>
                <p className='text-[#999999] text-[.85rem] text-center'>Get it as seen</p>
            </div>
        </div>
    </div>
</section>


{/* LETS CONNECT */}
<section className='px-[5%] '>
    <main className='pt-[5%] pb-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Let's Connect</h1>
        <div className='flex justify-between gap-8'>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Explore our handpicked selection of featured
                properties. Each listing offers a glimpse into exceptional homes and investments available
                through Dwelify. Click "View Details" for more information.</p>
        </div>
        </div>
    </main>


    <form ref={form} onSubmit={handleSubmit} className='flex flex-col gap-4 md:gap-8 border-1 border-[#262626] rounded-2xl px-[5%] py-[5%]'>
        <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 text-[.85rem]'>
            <div className='flex flex-col gap-2'>
                <label>First Name</label>
                <input type='text' name='firstName' placeholder='Enter First Name' className='bg-[#1a1a1a] border-1 border-[#262626] rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Last Name</label>
                <input type='text' name='lastName' placeholder='Enter Last Name' className='bg-[#1a1a1a] border-1 border-[#262626] rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter Your Email' className='bg-[#1a1a1a] border-1 border-[#262626] rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Phone</label>
                <input type='number' name='phone' placeholder='Enter Phone Number' className='bg-[#1a1a1a] border-1 border-[#262626] rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Inquiry Type</label>
                <input name='inquiryType' type='text' className='bg-[#1a1a1a] border-1 border-[#262626] text-[#999999] rounded-md py-2.5 px-2 w-full' placeholder='Enter Inquiry Type' />
            </div>

            <div className='flex flex-col gap-2'>
                <label>How Did You Hear About Us?</label>
                <input name='howDidYou' type='text'  className='bg-[#1a1a1a] border-1 border-[#262626] text-[#999999] rounded-md py-2.5 px-2.5 w-full' />
            </div>
        </article>

        <div className='flex flex-col gap-2 text-[.85rem]'>
            <label>Message</label>
            <textarea type='text' name='message' placeholder='Enter your Message here' className='bg-[#1a1a1a] border-1 border-[#262626] flex items-start justify-start rounded-md py-2.5 px-2.5 w-full h-[7rem]'/>
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex gap-2 text-[.75rem] text-[#999999]'>
                <input type='checkbox' className='bg-[#1a1a1a]'/>
                <p>I agree with <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span>.</p>
            </div>
            <button onClick={handleSendEmail} type="submit" disabled={isSubmitting} className='hidden md:flex bg-[#703BF7] text-[.8rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>{isSubmitting ? 'Sending...' : 'Send Your Message'}</button>
        </div>
            <button  onClick={handleSendEmail} type="submit" disabled={isSubmitting} className='flex md:hidden justify-center bg-[#703BF7] text-[.8rem] py-3 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>{isSubmitting ? 'Sending...' : 'Send Your Message'}</button>
    </form>
</section>
{/* LETS CONNECT END */}


{/* OFFICE LOCATIONS */}
<section className='px-[5%]'>
    <main className='pt-[5%] pb-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Discover Our Office Locations</h1>
        <div className='flex justify-between gap-8'>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Explore our handpicked selection of featured
                properties. Each listing offers a glimpse into exceptional homes and investments available
                through Dwelify. Click "View Details" for more information.</p>
        </div>
        </div>
    </main>


    <section className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
        <article className='relative rounded-lg border-1 border-[#262626] w-fit h-fit px-[5%] py-[5%] flex-shrink-0'>
        <div>
            <p className='font-semibold text-[.82rem] text-[#999999]'>Main Headquarters</p>
            <h2 className='font-semibold text-[1.3rem] py-1'>123 Dwelify Plaza, City Center, Metropolis</h2>
            <p className='text-[#999999] text-[.85rem]'>Our main headquarters serve as the heart of ESstatein. Located in the bustling
                city center, this is where our core team of experts operate, driving the excellence and
                innovation that define us.
            </p>
        </div>

      <div className='flex justify-between gap-2 text-[.7rem] w-full pt-[4%] pb-[5%]'>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><BedDouble size={12}/>info@dwelify.com</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><Bath size={12}/>+1(123) 456-7890</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><House size={12}/>Metropolis</p>
      </div>

      <div className='flex justify-center items-center'>
         <button className='bg-[#703BF7] text-[.8rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer w-full'>Get Direction</button>
      </div>
      </article>

      <article className='relative rounded-lg border-1 border-[#262626] w-fit h-fit px-[5%] py-[5%] flex-shrink-0'>
        <div>
            <p className='font-semibold text-[.82rem] text-[#999999]'>Regional Office</p>
            <h2 className='font-semibold text-[1.3rem] py-1'>456 Urban Avenue, Downtown District, Metropolis</h2>
            <p className='text-[#999999] text-[.85rem]'>Our main headquarters serve as the heart of ESstatein. Located in the bustling
                city center, this is where our core team of experts operate, driving the excellence and
                innovation that define us.
            </p>
        </div>

      <div className='flex justify-between gap-2 text-[.65rem] w-full pt-[4%] pb-[5%]'>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><BedDouble size={12}/>info@dwelify.com</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><Bath size={12}/>+1(123) 456-7890</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1.5 px-2 flex-1'><House size={12}/>Metropolis</p>
      </div>

      <div className='flex justify-center items-center'>
         <button className='bg-[#703BF7] text-[.8rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer w-full'>Get Direction</button>
      </div>
      </article>
    </section>

</section>
{/* OFFICE LOCATIONS END */}
    </div>
  )
}

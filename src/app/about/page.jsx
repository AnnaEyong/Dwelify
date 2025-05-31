import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import Link from 'next/link';

export default function page() {
  return (
    <div>
      {/* HERO */}
    <main className='hidden md:grid md:grid-cols-1 md:gap-6 xl:grid-cols-2 mt-14 px-[5%] py-[5%]'>
        <section className='hidden md:flex flex-col bg-[#141414] xl:pr-[6%] pt-[8%] h-fit'>
        <main className=''>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-3xl font-semibold pt-3 px-2'>Our Journey</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.9rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
        </div>
        </div>
    </main>

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
            <img src='/about.png' alt='hero image' className='w-full h-full object-fit-cover' />
        </section>
    </main>
    
        {/* HERO RESPONSIVENESS */}
    <main className='md:hidden sm:grid grid-cols-1 pt-[6rem] px-[5%]'> 

        {/* RESPONSIVE HERO IMAGE    */}
        <section className='bg-[#141414]'>
            <img src='/about.png' alt='hero image' className='w-full h-full object-fit-cover rounded-lg' />
        </section>

        {/* RESPONSIVE HERO TEXT   */}
    <section className='bg-[#141414] py-[5%] h-fit'>
        <main className=''>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-3xl font-semibold pt-3'>Our Journey</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary. Over the years, we've expanded our reach, forged
                valuable partnerships, and gained the trust of countless clients.
            </p>
        </div>
        </div>
        </main>


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

{/* VALUES */}
    <section className='md:flex md:flex-col md:gap-3 xl:flex xl:flex-row items-center xl:gap-10 px-[5%]'>
        <main className='pt-[5%] pb-[3%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Our Values</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary.
            </p>
        </div>
        </div>
    </main>

{/* shadow-[0_0_15px_rgba(64,64,64,1)] */}

    <section className='bg-[#141414] w-[100%] flex-4/3'>
    <div className='border-6 border-[#262626] shadow-[0_0_15px_rgba(40,40,40,1)] rounded-xl w-full'>
        <div className='grid grid-cols-1 rounded-xl w-full py-[3%] px-[4%] relative'>

    <div className='grid grid-col-1 md:grid-cols-2 py-[1%]'>
        <div className='pr-4 border-b-1 border-[#262626] md:border-0'>
            <div className='flex gap-4 items-center'>
                <div className='border-1 border-[#703BF7] text-[#703BF7] w-10 h-10 rounded-full flex justify-center items-center'><TiStarFullOutline size={20}/></div>
                <h3 className='font-semibold text-[1.05rem]'>Trust</h3>
            </div>
            <p className='text-[#999999] text-[.85rem] py-3'>Trust is the cornerstone of every successfull real estate transaction.</p>
        </div>

        <div className=' md:border-l-1 border-[#262626] md:pl-5 py-3 md:py-0'>
            <div className='flex gap-4 items-center'>
                <div className='border-1 border-[#703BF7] text-[#703BF7] w-10 h-10 rounded-full flex justify-center items-center'><GiGraduateCap size={22}/></div>
                <h3 className='font-semibold text-[1.05rem]'>Excellence</h3>
            </div>
            <p className='text-[#999999] text-[.85rem] pt-3'>We set the bar high for ourselves. From the properties we list to the services
                we provide.
            </p>
        </div>
    </div>

    <hr className='border-1 border-[#262626] absolute left-0 right-0 top-[50%] mx-[4%]' />

    <div className='grid grid-col-1 md:grid-cols-2 border-[#262626] pt-[4%]'>
        <div className='pr-4 border-b-1 border-[#262626] md:border-0 py-3 md:py-0'>
            <div className='flex gap-4 items-center'>
                <div className='border-1 border-[#703BF7] text-[#703BF7] w-10 h-10 rounded-full flex justify-center items-center'><PiUsersThreeFill size={20}/></div>
                <h3 className='font-semibold text-[1.05rem]'>Client-Centric</h3>
            </div>
            <p className='text-[#999999] text-[.85rem] py-3'>Your dreams and needs are at the center of our universe. We listen,
                we understand.
            </p>
        </div>
        <div className=' md:border-l-1 border-[#262626] md:pl-5 py-3 md:py-0'>
            <div className='flex gap-4 items-center'>
                <div className='border-1 border-[#703BF7] text-[#703BF7] w-10 h-10 rounded-full flex justify-center items-center'><TiStarFullOutline size={20}/></div>
                <h3 className='font-semibold text-[1.05rem]'>Our Commitment</h3>
            </div>
            <p className='text-[#999999] text-[.85rem] pt-3'>We are dedicated to providing you with the highest level
                of services, professionalism, and support.
            </p>
        </div>
    </div>

        </div>
    </div>
    </section>
</section>
{/* VALUES END */}


{/* ACHIEVEMENTS */}
<section className='px-[5%]'>
<main className='pt-[5%] pb-[2%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Our Achievements</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Our story is one of continuous
                growth and evolution. We started as a small team with big dreams determined to create a real estate
                platform that transcended the ordinary.
            </p>
        </div>
        </div>
    </main>

    <section className='w-[100%] grid grid-cols-1 md:grid-cols-3 gap-5'>
    <div className='border-4 border-[#262626] rounded-xl w-full py-[6%] px-[6%]'>
        <h3 className='font-semibold text-[1.2rem]'>3+ Years of Excellence</h3>
        <p className='text-[#999999] text-[.85rem] pt-3'>With over 3 years in the industry, we've acquired a wealth of knowledge
            and experience, becoming a go-to resource for all things real estate.
        </p>
    </div>

      <div className='border-4 border-[#262626] rounded-xl w-full py-[6%] px-[6%]'>
        <h3 className='font-semibold text-[1.2rem]'>Happy Clients</h3>
        <p className='text-[#999999] text-[.85rem] pt-3'>Our greatest achievement is the satisfaction of our clients. Their success
            stories fuel our passion for what we do.
        </p>
    </div>

      <div className='border-4 border-[#262626] rounded-xl w-full py-[6%] px-[6%]'>
        <h3 className='font-semibold text-[1.2rem]'>Industry Recognition</h3>
        <p className='text-[#999999] text-[.85rem] pt-3'>We've earned the respect of our peers and industry leaders, with accolades
            and awards that reflect our commitment to excellence.
        </p>
    </div>
    </section>
</section>
{/* ACHIEVEMENTS END */}

{/* EXPERIENCE */}
<section className='px-[5%]'>
<main className='pt-[5%] pb-[2%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Navigating the Dwelify Experience</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>At Dwelify, we've designed a straightforward process to
                help you find and purchase your dream property with ease. Here's a step-by-step guide
                to how it all works.
            </p>
        </div>
        </div>
    </main>

    <section className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 01</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] py-[7%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>Discover a World of Possibilities</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>Your journey begins with exploring our carefully
                curated property listings. Use our intuitive search tools to filter properties based on your
                preferences, including location, type, size, and budget.
            </p>
            </div>
        </div>
    
         <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 02</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] py-[7%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>Narrowin Down Your Choices</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>Once you've found properties that catch your eye,
                save them to your account or make a shortlist. This allows you to compare and revisit your favorites
                as you make your decision.
            </p>
            </div>
        </div>

         <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 03</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] pt-[7%] pb-[12.5%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>Personalised Guidance</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>Have questions about a property or need more information?
                Our dedicated team of real estate experts is just a call or message away.
            </p>
            </div>
        </div>

         <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 04</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] py-[7%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>See it for Yourself</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>Arrange viewings of the properties you're interested in. We'll
                coordinate with the property owners and accompany you to ensure you get a firsthand look at your 
                potential new home.
            </p>
            </div>
        </div>

         <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 05</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] py-[7%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>Making Informed Decisions</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>Before making an offer, our team will assist you with due deligence.
                Including property inspections, legal checks and market analyses. We want you to be fully informed
                and confident in your choice.
            </p>
            </div>
        </div>

         <div className='border-gradient'>
            <div className='px-[2.5%] py-[2%] text-[.85rem] font-medium'>Step 06</div>
            <div className='element border-1 border-[#262626] rounded-r-lg px-[7%] pt-[7%] pb-[12.5%] h-[11rem]'>
                <h3 className='font-semibold text-[1.2rem]'>Getting the Best Deal</h3>
            <p className='text-[#999999] md:text-[.8rem] text-[.85rem] pt-3'>We'll help you negotiate the best terms and prepare your
                offer. Our goal is to secure the property at the right price and on favorable terms.
            </p>
            </div>
        </div>
    </section>
</section>
{/* EXPERIENCE END */}

{/* ESTATEIN TEAM */}
<section className='px-[5%] pb-[5%]'>
    <main className='pt-[5%] pb-[2%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Meet the Dwelify Team</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>At Dwelify, we've designed a straightforward process to
                help you find and purchase your dream property with ease. Here's a step-by-step guide
                to how it all works.
            </p>
        </div>
        </div>
    </main>

    <section className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://img.freepik.com/premium-photo/handsome-black-successful-clever-american-student-with-glasses-university-dark-suit-studio-fashion-shot-isolated-black-background_175356-1999.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Max Mitchell</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Founder</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://www.justheadshots.photo/wp-content/uploads/2020/04/Dark-background-headshots-022.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Sarah Johnson</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Chief Real Estate Officer</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                        <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://www.shutterstock.com/image-photo/handsome-confident-businessman-wearing-suit-600nw-1417281476.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>David Brown</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Head of Property Management</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://i.pinimg.com/736x/44/b0/e6/44b0e6c60ea3f4055d03707df1ad39f5.jpg" alt='photo' className='w-full h-full object-cover rounded-lg' />
               <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Michelle Turner</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Legal Counsel</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</section>
{/* ESTATEIN TEAM END */}

{/* RESPONSIVE TEAM*/}
<section className='grid md:hidden grid-cols-1 gap-5 px-[12%] mb-[5%]'>
        <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://img.freepik.com/premium-photo/handsome-black-successful-clever-american-student-with-glasses-university-dark-suit-studio-fashion-shot-isolated-black-background_175356-1999.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Max Mitchell</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Founder</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://www.justheadshots.photo/wp-content/uploads/2020/04/Dark-background-headshots-022.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Sarah Johnson</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Chief Real Estate Officer</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                        <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://www.shutterstock.com/image-photo/handsome-confident-businessman-wearing-suit-600nw-1417281476.jpg" alt='photo' className='w-full h-full object-cover object-top rounded-lg' />
                <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>David Brown</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Head of Property Management</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

         <div className='h-[410px] border-1 border-[#262626] rounded-lg p-4'>
            <div className='h-[60%] w-full rounded-lg relative'>
                <img src="https://i.pinimg.com/736x/44/b0/e6/44b0e6c60ea3f4055d03707df1ad39f5.jpg" alt='photo' className='w-full h-full object-cover rounded-lg' />
               <button className='w-15 h-8 rounded-full bg-[#703BF7] absolute top-[92.5%] left-[37%] flex justify-center items-center'><FaTwitter size={20}/></button>
                <div className='flex flex-col items-center w-full pt-[12%]'>
                    <h3 className='text-lg font-semibold'>Michelle Turner</h3>
                    <p className='text-[#999999] text-[.85rem] px-2'>Legal Counsel</p>
                    <div className='flex justify-between p-2 mt-[6%] w-full rounded-full border-1 border-[#262626] bg-[#1a1a1a]'>
                        <input type='text' placeholder='Say Hello' className='text-[.9rem] text-white'/>
                         <button className='w-8 h-8 rounded-full bg-[#703BF7] flex justify-center items-center'><IoIosSend size={20}/></button>
                    </div>
                </div>
            </div>
        </div>

    </section>

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
   
    </div>
  )
}

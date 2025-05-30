'use client'
// import NavbarComponent from '@/components/navbar/NavbarComponent';
import React, { useRef, useState } from 'react'
import { Properties } from '@/app/utils/data';
import { Heart, Phone, MailPlus } from 'lucide-react';
import { BedDouble, Bath, House, ThumbsUp, ThumbsDown, Ellipsis } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, FreeMode, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { MdLocationPin } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";


// export async function generateMetadata({ params }) {
//   const { id } = params;
//   const property = Properties.find(item => item.id == id);

//   if (!property) {
//     return {
//       title: "Property Not Found",
//     };
//   }

//   return {
//     title: `${property.title} - Dwelify`,
//     description: `Discover information about ${property.title}, including stats, types, and more.`,
//     icons: {
//         icon: "/D.png",
//         apple: "/D.png",
//         shortcut: "/D.png",
//   },
//     openGraph: {
//       title: `${property.title} - Dwelify`,
//       description: `Explore detailed information about ${property.title} in our modern Real Estate Site.`,
//       url: `${property.exteriorImage}`,
//       siteName: "Dwelify",
//       images: [
//         {
//           url: property.exteriorImage,
//           width: 1200,
//           height: 630,
//           alt: `${property.title} Dwelify`,
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${property.title} - Dwelify`,
//       description: `Explore ${property.title} on Dwelify powered by Nextjs.`,
//       images: [property.exteriorImage],
//     },
//   };
// }


const page = async({params}) => {
    const {slug } = await params;
    const decodedSlug = decodeURIComponent(slug);
    let  property = Properties?.find((item) => item.title.toLowerCase().split(' ').join('-') === decodedSlug)

return (
<>
    {/* // style={{ backgroundImage: `url(${property.exteriorImage})` }} */}
    <img src='/Sub Container (1).png' alt='BG' className='h-screen w-full fixed top-0 blur-[60px] '/>
    <div className='px-[5%] py-[4.3rem] relative z-2'>
        {/* HERO IMAGE */}
        <div className='hidden lg:grid lg:grid-cols-[2fr_1fr] gap-2 h-[27rem]'>
            <img src={property.exteriorImage} alt='image' className='w-full h-[27rem] rounded-l-2xl object-cover'/>
            <div className='grid grid-cols-1 gap-1.5 h-[27rem]'>
                <img src='https://www.compass-pools.co.uk/wp-content/uploads/2022/08/Tranquil-Outdoor-XL-Trainer-Pool-in-Wells-Somerset-Case-Study-Gallery-Image-6.jpg' alt='image' className='w-full rounded-tr-2xl h-[13.3rem] object-cover'/>
                <img src='https://images.homify.com/v1457694745/p/photo/image/1394610/IMG_20151227_125848277_HDR_1.jpg' alt='image' className='w-full rounded-br-2xl h-[13.3rem] object-cover'/>
            </div>
        </div>
        {/* HERO IMAGE END */}

        {/* RESPONSIVE HERO */}
        <section className='flex lg:hidden'>
                   <Swiper
        modules={[ Scrollbar, Navigation, Pagination, FreeMode, Mousewheel ]}
        pagination={{ clickable: true }}
        //  navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
         spaceBetween={20}
        slidesPerView={1}
        style={{ width: '100%', height: '24rem' }}
           
        scrollbar={{ draggable: true,
                      hide: true, }}
        // allowSlidePrev={true}
        // touchRatio={1}
        // threshold-={5}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
         className="Swiper cursor-pointer w-full m-auto">

          <SwiperSlide>
                <img src={property.exteriorImage} alt='image' className='w-full h-full rounded-lg object-cover'/>
          </SwiperSlide>
          <SwiperSlide>
                <img src='https://www.compass-pools.co.uk/wp-content/uploads/2022/08/Tranquil-Outdoor-XL-Trainer-Pool-in-Wells-Somerset-Case-Study-Gallery-Image-6.jpg' alt='image' className='w-full rounded-lg h-full object-cover'/>
          </SwiperSlide>
          <SwiperSlide>
                <img src='https://images.homify.com/v1457694745/p/photo/image/1394610/IMG_20151227_125848277_HDR_1.jpg' alt='image' className='w-full rounded-lg h-full object-cover'/>
          </SwiperSlide>
        
        {/* NAVIGATION */}
    {/* <div className='absolute top-10 flex justify-between mt-[3%] py-3 border-t-1 border-[#262626] w-full'>
            <button  className='swiper-button-prev cursor-pointer bg-white border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  className='swiper-button-next  cursor-pointer bg-white border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    </div> */}
     {/* NAVIGATION END */}
      </Swiper> 
    </section>
        {/* RESPONSIVE HERO END*/}

        <div className=' pt-2 flex justify-between items-center text-[1.5rem]'>
            <h3 className='font-medium'>{property.title}</h3>
            <h3 className='font-medium'>{property.price}</h3>
        </div>

        <div className='flex justify-between items-center py-1'>
            <p className='text-[1rem] text-purple-700'>{property.location}</p>
            <div className='text-[.85rem] flex gap-4 items-center'>
                <div className='flex gap-3 items-center border-1 border-white/10 px-3 py-2 rounded-lg'>
                    <ThumbsUp size={16}/>
                    <ThumbsDown size={16}/>
                    <Ellipsis size={16}/>
                </div>
            </div>
        </div>

        {/* CTA BUTTONS */}
        <div className='flex justify-between items-center'>
            <div className='flex gap-3 text-[.85rem] py-4'>
                <button className='bg-[#703BF7] py-2 px-5 border-1 border-[#703BF7] rounded-sm cursor-pointer'>Schedule a Visit</button>
                <button className='py-2 px-5 border-1 border-white/10 rounded-sm cursor-pointer'>Contact Agent</button>
            </div>
        </div>
        {/* CTA BUTTONS END */}

        {/* DESCRIPTION */}
        <section className='gap-[3%] border-t-1 border-white/10 pt-[2%] mt-[2%]'>
            <article className='text-[.85rem] flex flex-col'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-15'>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <h2 className='font-medium py-5 text-[1.3rem]'>Description</h2>
                            <p className='text-[#999999]'>{property.description}</p>
                        </div>
                        <div className='flex justify-between gap-2 text-[.85rem] pb-3 border-t-1 border-white/10 pt-4'>
                            <div className='pr-4'>
                                <p className='text-[#999999] flex items-center gap-2'><BedDouble size={12}/>Bedrooms</p>
                                <p className='font-semibold text-[1.1rem]'>{property.bedrooms}</p>
                            </div>

                            <div className='border-l-1 border-white/10 px-4'>
                                <p className='text-[#999999] flex items-center gap-2'><Bath size={12}/>Bathrooms</p>
                                <p className='font-semibold text-[1.1rem]'>{property.bathrooms}</p>
                            </div>

                            <div className='border-l-1 border-white/10 px-4'>
                                <p className='text-[#999999] flex items-center gap-2'><BedDouble size={12}/>Area</p>
                                <p className='font-semibold text-[1.1rem]'>2.500 Square Feet</p>
                            </div>  
                        </div>
                    </div>
                <aside className='flex flex-col gap-4'>
                    <h2 className='font-medium py-3 text-[1.3rem]'>Key Features And Amenities</h2>
                    <div className='border-l-1 border-[#703BF7] py-2 px-3 bg-gradient-to-l from-transparent via-transparent to-[#262626]'>
                        <div className='text-[#999999] text-[.85rem]  flex gap-2 items-center '><BsFillLightningChargeFill color='white' />Expansive oceanfront terrace for outdoor entertaining</div>
                    </div>

                    <div className='border-l-1 border-[#703BF7] py-2 px-3 bg-gradient-to-l from-transparent via-transparent to-[#262626]'>
                        <div className='text-[#999999] text-[.85rem] flex gap-2 items-center '><BsFillLightningChargeFill color='white' />Gourmet kitchen with top-of-the-line appliances</div>
                    </div>

                    <div className='border-l-1 border-[#703BF7] py-2 px-3 bg-gradient-to-l from-transparent via-transparent to-[#262626]'>
                        <div className='text-[#999999] text-[.85rem] flex gap-2 items-center '><BsFillLightningChargeFill color='white' />Private beach access for morning strolls and sunset views</div>
                    </div>

                    <div className='border-l-1 border-[#703BF7] py-2 px-3 bg-gradient-to-l from-transparent via-transparent to-[#262626]'>
                        <div className='text-[#999999] text-[.85rem] flex gap-2 items-center '><BsFillLightningChargeFill color='white' />Master suite with a spa-inspired bathroom and ocean-facing balcony</div>
                    </div>

                    <div className='border-l-1 border-[#703BF7] py-2 px-3 bg-gradient-to-l from-transparent via-transparent to-[#262626]'>
                        <div className='text-[#999999] text-[.85rem] flex gap-2 items-center '><BsFillLightningChargeFill color='white' />Private garage and ample storage space</div>
                    </div>
                    
                </aside>
                </div>
        </article>

        {/* start */}
        <section className='grid grid-cols-1 md:grid md:grid-cols-[3.5fr_1fr] gap-[3%]'>
                <article>
                    <h2 className='font-medium py-3 text-[1.3rem]'>Rooms</h2>
                <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-2'>
                    <div className='grid grid-cols-2 gap-2'>
                        <img src='https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2023/09/Indulge-In-Opulence-50-Luxurious-Bedroom-Decor-Ideas-17-791x1024.jpeg' alt='image' className='w-full rounded-tl-2xl h-[15rem] object-cover'/>
                        <img src='https://www.granitetransformations.com/wp-content/uploads/2019/09/100284_0_8-3001-contemporary-bathroom.jpg' alt='image' className='w-full h-[15rem] rounded-tr-2xl md:rounded-tr-[0px] object-cover'/>
                        <img src='https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg' alt='image' className='w-full md:rounded-bl-2xl h-[15rem] object-cover'/>
                        <img src='https://i.pinimg.com/originals/be/79/57/be7957a50941e9c002da33d311f85c57.jpg' alt='image' className='w-full h-[15rem] object-cover'/>
                    </div> 
                    <div className='grid grid-cols-1 gap-2'> 
                        <img src='https://images.unsplash.com/photo-1628744876497-eb30460be9f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D' alt='image' className='w-full md:rounded-tr-2xl h-[15rem] object-cover'/>
                        <img src='https://a0.muscache.com/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODUwOTcw/original/e4419c1d-a5a1-4da1-a6f6-4c4077f15b7c.jpeg' alt='image' className='w-full rounded-b-2xl md:rounded-bl-[1px] h-[15rem] object-cover'/>
                    </div>
                </div>

                </article>

            <article>
                 <h1 className='font-medium py-3 text-[1.4rem]'>Owner's Information</h1>
                <div className='pb-6 md:pb-3 border-b-1 border-white/10 flex gap-8 items-center md:flex-col md:items-start'>
                    <div>
                        <img src="https://fortune.com/img-assets/wp-content/uploads/2015/04/purdie-vaughns-photo.jpeg?w=1440&q=75" alt='image' className='w-[10rem] rounded-lg h-[10rem] object-cover'/>
                    </div>
                    <div>
                        <h1  className='font-medium pb-2 text-[1.1rem] md:mt-[-1.3rem]'>Michelle Turner</h1>
                        <h1  className='font-medium pb-3 text-[.9rem] flex gap-1 items-center text-[#999999]'><Phone size={18}/>123 966-7590</h1>
                        <h1  className='font-medium pb-3 text-[.9rem] flex gap-1 items-center text-[#999999]'><MailPlus size={18}/>michelleturner@gmail.com</h1>
                        <h1  className='font-medium pb-3 text-[.9rem] flex gap-1 items-center text-[#999999]'><Phone size={18}/>123 966-7590</h1>
                    </div>
                </div>

                <div>
                    <h1 className='font-medium py-3 text-[1.2rem]'>Message from Owner</h1>
                    <p className='text-[#999999] italic'>“I’ve lovingly maintained this home for over 8 years. It’s been a peaceful, cozy place and I hope it brings as much joy to its next owner.”</p>
                    <p className='text-right'> — Michelle Turner</p>
                </div>
            </article>
        </section>
            {/* end */}
        </section>
        {/* DESCRIPTION END */}

        {/* PROPERTY FEATURES */}
        <section  className='grid grid-cols-1 mt-[23%] md:mt-0 h-fit md:h-[30rem] pt-[5%]'>
             <article className='rounded-lg flex flex-col'>
                <h1 className='font-medium text-[1.3rem] pb-4'>Property Location</h1>
                <iframe className="w-full rounded-lg h-[23.4rem]"        
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0911851175213!2d-122.4194156846814!3d37.774929779759886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c83b63b27%3A0x808f24b0b76cc6cd!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1682027359463!5m2!1sen!2sus"       
                    allowFullscreen=""       
                    loading="lazy"      
                    referrerPolicy="no-referrer-when-downgrade">       
                </iframe>
            </article>
        </section>
        {/* PROPERTY FEATURES END */}
    </div>

{/* INQUIRE ABOUT */}
<section className='relative z-2 grid grid-cols-1 md:grid-cols-[1fr_2fr] px-[5%] gap-6'>
    <main className='pb-[2%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-3xl font-semibold pt-3 px-2'>Inquire About {property.title}</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>Interested in this property? Fill out the form below,
                and our real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you may have.</p>
            </div>
        </div>
    </main>

    <form className='flex flex-col gap-4 md:gap-5 border-1 border-white/10 rounded-2xl px-[5%] py-[5%]'>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 text-[.85rem]'>
            <div className='flex flex-col gap-2'>
                <label>First Name</label>
                <input type='text' name='firstName' placeholder='Enter First Name' className='bg-[#1a1a1a] border-1 border-white/10 rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Last Name</label>
                <input type='text' name='lastName' placeholder='Enter Last Name' className='bg-[#1a1a1a] border-1 border-white/10 rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter Your Email' className='bg-[#1a1a1a] border-1 border-white/10 rounded-md py-2.5 px-2.5 w-full'/>
            </div>

            <div className='flex flex-col gap-2'>
                <label>Phone</label>
                <input type='number' name='phone' placeholder='Enter Phone Number' className='bg-[#1a1a1a] border-1 border-white/10 rounded-md py-2.5 px-2.5 w-full'/>
            </div>

        </article>

    <div className='flex flex-col gap-2'>
        <label>Selected Property Type</label>
        <div className='flex items-center justify-between bg-[#1a1a1a] border-1 border-white/10 rounded-md py-2.5 px-2.5 w-full'>
            <p className='text-[.9rem]'>{property.title}</p>
            <MdLocationPin />
        </div>
    </div>

        <div className='flex flex-col gap-2 text-[.85rem]'>
            <label>Message</label>
            <textarea type='text' name='message' placeholder='Enter your Message here' className='bg-[#1a1a1a] border-1 border-white/10 flex items-start justify-start rounded-md py-2.5 px-2.5 w-full h-[7rem]'/>
        </div>

        <div className='flex justify-between items-center'>
            <div className='flex gap-2 text-[.75rem] text-[#999999]'>
                <input type='checkbox' className='bg-[#1a1a1a]'/>
                <p>I agree with <span className='underline'>Terms of Service</span> and <span className='underline'>Privacy Policy</span>.</p>
            </div>
            <button type="submit" className='hidden md:flex bg-[#703BF7] text-[.8rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>Send Your Message</button>
        </div>
            <button type="submit" className='flex md:hidden justify-center bg-[#703BF7] text-[.8rem] py-3 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>Send Your Message</button>
    </form>
</section>
{/* INQUIRE ABOUT END */}


    {/* Comprehensive Pricing Details */}
<section className='relative z-2 px-[5%] py-[3%]'>
     <main className='pb-[2%]'>
        <div>
            <img src='/Abstract Design.png' alt='icon' className='w-[2.5rem]' />
            <h1 className='text-2xl font-semibold pt-3 px-2'>Comprehensive Pricing Details</h1>
        <div className='flex justify-between '>
            <p className='text-[#999999] text-[.85rem] py-4 px-2  mt-[-.5rem]'>At Estatein, transparency is key. We want you to have a clear
                understanding of all costs associated with your property investment. Below, we break down the
                pricing for Seaside Serenity Villa to help you make an informed decision</p>
            </div>
        </div>
    </main>

    <div className='flex gap-4 bg-[#1a1a1a] px-4 py-4 rounded-lg border-1 border-white/10'>
        <h1 className='font-semibold'>Note</h1>
        <p className='text-[#999999] text-[.85rem] px-4 border-l-1 border-white/10'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
    </div>

    <article className='grid grid-cols-1 md:grid-cols-[1fr_5.3fr] gap-4 py-[3%]'>
        <div>
            <p className='text-[#999999] text-[.8rem] py-[1%]'>Listing Price</p>
            <h3 className='font-semibold text-[1.5rem]'>{property.price}</h3>
        </div>

    <section className='flex flex-col gap-6'>
        {/*ADDITIONAL FEES */}
        <section className='border-1 border-white/10 rounded-xl px-[3%] py-[3%]'>
                <div className='font-semibold'>Additional Fees</div>
                <hr className='border-l-1 border-white/10 my-[2%]'/>
        <div>
            <aside className='grid grid-cols-1 md:grid-cols-2'>
                <div className='py-2 flex flex-col gap-2'>
                    <p className='text-[#999999] text-[.85rem]'>Property Transfer Tax</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$25,000</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Based on the sale price and local regulations</p>
                    </div>
                </div>
                
                <div className='py-2 flex flex-col gap-2 md:mt-0 mt-2 border-t-1 md:border-t-0 md:pl-4 md:border-l-1 border-white/10'>
                    <p className='text-[#999999] text-[.85rem]'>Legal Fees</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$3,000</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Approximate cost for legal services, including title transfer</p>
                    </div>
                </div>
            </aside>
            <hr className='border-l-1 border-white/10 my-[2%]'/>
            <aside className='grid grid-cols-1 md:grid-cols-2'>
                <div className='py-2 flex flex-col gap-2'>
                    <p className='text-[#999999] text-[.85rem]'>Home Inspection</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$500</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Recommended for due diligence</p>
                    </div>
                </div>
                
                <div className='py-2 flex flex-col gap-2 md:mt-0 mt-2 border-t-1 md:border-t-0 md:pl-4 md:border-l-1 border-white/10'>
                    <p className='text-[#999999] text-[.85rem]'>Property Insurance</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$1,200</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Annual cost for comprehensive property insurance</p>
                    </div>
                </div>
            </aside>

                <hr className='border-l-1 border-white/10 my-[2%]'/>
            <aside className='grid grid-cols-1 md:grid-cols-2'>
                <div className='py-2 flex flex-col gap-2'>
                    <p className='text-[#999999] text-[.85rem]'>Mortgage Fees</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>Varies</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>If applicable, consult with your lender for specific details</p>
                    </div>
                </div>
            </aside>
        </div>
        </section>
        {/* END OF ADDITIONAL FEES */}

        {/* MONTHLY COSTS */}
        <section className='border-1 border-white/10 rounded-xl px-[3%] py-[3%]'>
                <div className='font-semibold'>Monthly Costs</div>
                <hr className='border-l-1 border-white/10 my-[2%]'/>
        <div>
            <aside>
                <div className='py-2 flex flex-col gap-2 border-b-1 border-white/10 pb-6 '>
                    <p className='text-[#999999] text-[.85rem]'>Property Taxes</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$1.250</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Approximate monthly property tax based on the sale price and local rates</p>
                    </div>
                </div>
                
                <div className='py-2 flex flex-col gap-2 pt-6'>
                    <p className='text-[#999999] text-[.85rem]'>Homeowners' Association Fee</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$300</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Monthly fee for common area maintenance and security</p>
                    </div>
                </div>
            </aside>
        </div>
    </section>
    {/* MONTHLY COSTS END*/}

    {/*TOTAL COSTS */}
        <section className='border-1 border-white/10 rounded-xl px-[3%] py-[3%]'>
                <div className='font-semibold'>Total Initial Costs</div>
                <hr className='border-l-1 border-white/10 my-[2%]'/>
        <div>
            <aside className='grid grid-cols-1 md:grid-cols-2'>
                <div className='py-2 flex flex-col gap-2'>
                    <p className='text-[#999999] text-[.85rem]'>Listing Price</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>{property.price}</h3>
                    </div>
                </div>
                
                <div className='py-2 flex flex-col gap-2  md:mt-0 mt-2 border-t-1 md:border-t-0 md:pl-4 md:border-l-1 border-white/10'>
                    <p className='text-[#999999] text-[.85rem]'>Additional Fees</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$29,700</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>Property transfer tax, legal fees, inspection, insurance</p>
                    </div>
                </div>
            </aside>
            <hr className='border-l-1 border-white/10 my-[2%]'/>
            <aside className='grid grid-cols-1 md:grid-cols-2'>
                <div className='py-2 flex flex-col gap-2'>
                    <p className='text-[#999999] text-[.85rem]'>Down Payment</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$1,000,000</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>2%</p>
                    </div>
                </div>
                
                <div className='py-2 flex flex-col gap-2  md:mt-0 mt-2 border-t-1 md:border-t-0 md:pl-4 md:border-l-1 border-white/10'>
                    <p className='text-[#999999] text-[.85rem]'>Mortgage Amount</p>
                    <div className='flex items-center gap-4'>
                        <h3 className='font-medium text-[1.1rem]'>$1,800,000</h3>
                        <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-white/10 text-[#999999] text-[.8rem] rounded-full py-1 px-4'>If aplicable</p>
                    </div>
                </div>
            </aside>
        </div>
        </section>
        {/* END OF TOTAL COSTS */}
    </section>
    </article>

</section>
    {/* Comprehensive Pricing Details end */}
</>
);
}
export default page;
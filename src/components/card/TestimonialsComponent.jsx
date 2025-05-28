import React, { useState } from 'react'
import { BedDouble, Bath, House } from 'lucide-react'
import { Testimonials } from '@/app/utils/data'
import { TiStarFullOutline } from "react-icons/ti";


export default function CardComponent({testimony}) {
  // const [imageError, setImageError] = useState(false);
  // if (!property.exterior || imageError) return null;
  return (
    <div className='rounded-lg border-1 border-[#262626] w-fit h-70 px-4 py-4 flex-shrink-0'>
    <div className='w-full h-[65%]'>
        <div className='flex gap-1'>
            <TiStarFullOutline size={20} color='yellow'/>
            <TiStarFullOutline size={20} color='yellow'/>
            <TiStarFullOutline size={20} color='yellow'/>
            <TiStarFullOutline size={20} color='yellow'/>
            <TiStarFullOutline size={20} color='yellow'/>
        </div>
        <div>
            <h3 className='font-semibold py-4'>{testimony.topic}</h3>
            <p className='text-[.85rem] text-[#999999]'>{testimony.whatClientSays}</p>
        </div>
    </div>
       <div className='flex gap-4 items-center mt-5'>
            <img src={testimony.image} alt='user' className='w-15 h-15 rounded-full'/>
            <div>
                <p className='font-semibold'>{testimony.name}</p>
                <p className='text-[#999999] text-[.85rem]'>{testimony.location}</p>
            </div>
        </div> 
        
    </div>
  )
}

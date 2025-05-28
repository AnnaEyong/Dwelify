import React, { useState } from 'react'
import { BedDouble, Bath, House } from 'lucide-react'
import { TiStarFullOutline } from "react-icons/ti";


export default function CardComponent({faq}) {
  // const [imageError, setImageError] = useState(false);
  // if (!property.exterior || imageError) return null;
  return (
    <div className='rounded-lg border-1 border-[#262626] w-fit min-h-50 px-4 py-4 flex-shrink-0'>
        <div className='w-full h-[130px]'>
            <h3 className='font-semibold py-4'>{faq.question}</h3>
            <p className='text-[.85rem] text-[#999999] '>{faq.answer}</p>
        </div>
        <button className='bg-[#141414] py-2 px-3 border-1 border-[#262626] rounded-lg cursor-pointer text-[.8rem]'>Read More</button>
    </div>
  )
}

import React, { useState } from 'react'
import { BedDouble, Bath, House } from 'lucide-react'
import { Properties } from '@/app/utils/data'

export default function CardComponent({property}) {
  // const [imageError, setImageError] = useState(false);
  // if (!property.exterior || imageError) return null;
  return (
    <div className='rounded-lg border-1 border-[#262626] h-125 px-4 py-4 flex-shrink-0'>
        <img src={property.exteriorImage} alt='image' className='w-full h-[60%] border-1 object-cover rounded-lg'/>
        <div className='py-3'>
            <p className='font-semibold'>{property.title}</p>
            <p className='text-[#999999] text-[13px]'>{property.description.slice(0,75)} ... <span className='underline font-medium text-white cursor-pointer'>Read More</span></p>
            <p className='text-sm flex items-center pt-2'><span>{property.city}</span>, {property.country}</p>
        </div>
        
      <div className='flex justify-between gap-2 text-[.7rem] pb-3 w-full'>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2'><BedDouble size={12}/>{property.bedrooms}-Bedrooms</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2'><Bath size={12}/>{property.bathrooms}-Bathrooms</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2 flex-2'><House size={12}/>{property.category}</p>
      </div>

      <div className='flex justify-between items-center'>
        <div>
            <p className='text-[11px] text-[#999999]'>Price</p>
            <p className='font-semibold text-[14px]'>{property.price}</p>
        </div>
         <button className='bg-purple-700 text-[.7rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>View Property Details</button>
      </div>
    </div>
  )
}

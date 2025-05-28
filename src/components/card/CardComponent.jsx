import React, { useState } from 'react'
import { BedDouble, Bath, House, Heart } from 'lucide-react'
import { FaHeart } from "react-icons/fa";
import { useStoreFavorite } from '@/store/favorite.store';
import Link from 'next/link'; 

export default function CardComponent({property}) {
  // const [imageError, setImageError] = useState(false);
  // if (!property.exterior || imageError) return null;
  const { selectedFavoriteIds, toggleHeartIcon} = useStoreFavorite()
    let isSelected =  selectedFavoriteIds.includes(property.id)

    const  customSlug = property.title?.toLowerCase().split(' ').join('-')

  return (
    <div className='relative rounded-lg border-1 border-[#262626] w-fit h-fit px-4 py-4 flex-shrink-0'>
        <Link href={`/property/${customSlug}`}>
          <img src={property.exteriorImage} alt='image' className='w-full h-[15rem] rounded-lg object-cover'/>
        </Link>
        <div className='py-3'>
            <p className='font-semibold'>{property.title}</p>
            <p className='text-[#999999] text-[.85rem]'>{property.description.slice(0,75)} ... <span className='underline font-medium text-white cursor-pointer'>Read More</span></p>
            <p className='text-sm text-purple-700 flex items-center pt-2'>{property.location}</p>
        </div>
        {isSelected ? <FaHeart onClick={() => toggleHeartIcon(property.id)} color='red' className='absolute top-6 right-6 text-white cursor-pointer text-[1.2rem]' /> : <Heart size={20} onClick={() => toggleHeartIcon(property.id)} className='absolute top-6 right-6 text-white cursor-pointer' />}

      <div className='flex justify-between gap-2 text-[.7rem] pb-3 w-full'>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2'><BedDouble size={12}/>{property.bedrooms}-Bedrooms</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2'><Bath size={12}/>{property.bathrooms}-Bathrooms</p>
         <p className='flex items-center justify-center gap-1 bg-[#1a1a1a] border-1 border-[#262626] rounded-full py-1 px-2 flex-2'><House size={12}/>{property.category}</p>
      </div>

      <div className='flex justify-between items-center'>
        <div>
            <p className='text-[10px] md:text-[11px] text-[#999999]'>Price</p>
            <p className='font-semibold text-[13px] md:text-[14px]'>{property.price}</p>
        </div>
         <Link href={`/property/${customSlug}`} className='bg-[#703BF7] text-[.6rem] md:text-[.7rem] py-2 px-3 border-1 border-purple-700 rounded-lg cursor-pointer'>View Property Details</Link>
      </div>
    </div>
  )
}

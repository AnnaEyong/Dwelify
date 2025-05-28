import React from 'react'

export default function FilterComponent({filter}) {
  return (
    <button className='bg-[#141414] flex gap-2 items-center justify-center py-2 px-5 text-[.8rem] cursor-pointer rounded-md hover:text-purple-700 focus:text-purple-700 ease-in-out'>
        <p>{filter.icon}</p>
        <p>{filter.type}</p>
    </button>
  )
}

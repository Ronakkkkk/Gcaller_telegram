"use client"
import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className="h-[40px] w-full bg-[#9747FF] opa rounded-lg mt-3 flex items-center px-3" style={{ backgroundColor: "rgba(151, 71, 255, 0.3)" }}>
     <Image
        src={'/assets/search.png'}
        height={15}
        width={15}
        alt='search'
        objectFit='contain'
        className='mr-4'
     />   
    <input
      type="text"
      placeholder='Search'
      className="bg-transparent w-full h-full text-white placeholder-gray-200 outline-none"
      onChange={(e) => console.log(e.target.value)}
    />
  </div>
  )
}

export default Search
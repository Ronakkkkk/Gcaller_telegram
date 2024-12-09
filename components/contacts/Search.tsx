"use client"
import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div className="h-[44px] w-full sm:w-[24.375rem] bg-[#9747FF] bg-opacity-30 rounded-lg mt-3 flex items-center px-3">
      <Image
        src="/icons/contacts/search.png"
        height={15}
        width={15}
        alt="search"
        style={{ objectFit: 'contain' }}
        className="mr-4"
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-full h-full text-white placeholder-gray-200 outline-none"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export default Search

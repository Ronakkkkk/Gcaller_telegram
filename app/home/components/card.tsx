import React from 'react'
import Image from 'next/image'

interface CardProps {
    imageurl : string,
    smallText : string,
    biggerText : string,
    numberOfSpamOrContacts : number
}


const Card : React.FC<CardProps> = ({imageurl, smallText, biggerText, numberOfSpamOrContacts}) => {
  return (
    <div className=" bg-[#9747FF1A] h-[159px] w-full rounded-2xl border border-gray-500">
    <div className="flex justify-center p-2">
      <Image
        src={imageurl}
        width={30}
        height={30}
        style={{ objectFit: 'contain' }}
        alt="Phone"
      />

      <div className=" flex flex-col text-xl p-2 text-white  ">
        <span className=" text-sm">{smallText}</span>
        <span>{biggerText}</span>
      </div>


    </div>
    <div className=" text-3xl ml-6 text-white">{numberOfSpamOrContacts}</div>
  </div>
  
  )
}

export default Card
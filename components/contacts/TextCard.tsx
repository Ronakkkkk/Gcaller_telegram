"use client"
import React, { useState } from 'react'

interface TextCardProps {
    text : string,
    style : object
}


const TextCard : React.FC <TextCardProps> = ({text, style}) => {

    const [clicked, setClicked] = useState(false);



  return (
    <>
    
    <div className=' h-[44px] w-[120px] flex justify-center items-center bg-[#9747FF] rounded-lg text-[12px] cursor-pointer' style={style} onClick={() => setClicked(!clicked)}>{text}</div>
    </>
    
  )
}

export default TextCard
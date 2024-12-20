import React from 'react'
import Image from 'next/image'
const TopBar = () => {
  return (
<div className="w-full max-w-[390px] flex justify-around items-center h-6 mt-4">
    <Image
        src="icons/reward/back.png"
        height={18}
        width={14}
        className="object-contain"
        alt="Back Icon"
    />

    <h1 className="leading-6 text-[20px] font-medium">Rewards</h1>

    <Image
        src="icons/reward/questionMark.png"
        height={18}
        width={18}
        className="object-contain"
        alt="Question Mark Icon"
    />
</div>

  )
}

export default TopBar
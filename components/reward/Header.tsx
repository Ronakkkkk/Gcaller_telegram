import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
        <div className="relative w-full max-w-[390px] pl-2 mt-10 sm:px-6 md:max-w-[500px]">
                  <div className="relative w-full h-[200px]">
                      <Image
                          src={'/icons/reward/rewardHeader.png'}
                          layout="fill"
                          objectFit="cover"
                          alt="Header"
                          className="rounded-lg"
                      />
                      <h1 className="absolute text-white text-[6vw] sm:text-[28px] top-[40%] left-[5%] font-medium">
                          Kash Dhandha
                      </h1>
                      <h1 className="absolute text-white text-[13.96px] sm:text-[20px] sm:top-[66%] top-[64.4%] left-[12%] font-semibold">
                          202
                      </h1> 

                  </div>
              </div>
  )
}

export default Header
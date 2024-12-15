import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='bg-black min-h-[1203px] w-full flex flex-col pt-[98px] px-4 text-white items-center'>
        {/*Header Card */}
        
        <Image
            src={'icons/reward/rewardHeader.png'}
            width={384}
            height={197}
            alt=''
            className=' absolute top-[50px]'
          />
          <div className=' flex flex-start'>
           <h1 className=' text-white relative max-w-[212px] text-[28.79px]  top-[50px]'>Hello</h1>
          </div>
   
    </div>
  )
}

export default page
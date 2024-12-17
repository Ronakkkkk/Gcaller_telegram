import React from 'react'
import Image from 'next/image'
import router from 'next/router'

const BottomNavBar = () => {
  return (
    <div className='fixed bottom-3 left-1/2 transform -translate-x-1/2 border w-[90%] max-w-[400px] h-[75px] rounded-[90px]'>
      {/* Background Div */}
      <div className='bg-[#9747FF4D] w-full h-full opacity-30 rounded-[90px]'></div>

      {/* Image Container */}
      <div className='flex justify-around items-center absolute top-0 left-0 w-full h-full z-10'>
        {/* Home */}
        <div
          className='flex flex-col items-center cursor-pointer'
          onClick={() => router.push('/home')}
        >
          <Image
            src={'/icons/reward/home.png'}
            height={22}
            width={22}
            alt='Home'
            className='sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]'
          />
          <span className='text-[10px] md:text-[12px] mt-1'>Home</span>
        </div>

        {/* Reward */}
        <div
          className='flex flex-col items-center cursor-pointer'
          onClick={() => router.push('/rewards')}
        >
          <Image
            src={'/icons/reward/rewards.png'}
            height={22}
            width={22}
            alt='Rewards'
            className='sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]'
          />
          <span className='text-[10px] md:text-[12px] mt-1'>Reward</span>
        </div>

        {/* Contact */}
        <div
          className='flex flex-col items-center cursor-pointer'
          onClick={() => router.push('/contact')}
        >
          <Image
            src={'/icons/reward/contact.png'}
            height={22}
            width={22}
            alt='Contact'
            className='sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]'
          />
          <span className='text-[10px] md:text-[12px] mt-1'>Contact</span>
        </div>

        {/* Profile */}
        <div
          className='flex flex-col items-center cursor-pointer'
          onClick={() => router.push('/profile')}
        >
          <Image
            src={'/icons/reward/profile.png'}
            height={22}
            width={22}
            alt='Profile'
            className='sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]'
          />
          <span className='text-[10px] md:text-[12px] mt-1'>Profile</span>
        </div>
      </div>
    </div>
  )
}

export default BottomNavBar

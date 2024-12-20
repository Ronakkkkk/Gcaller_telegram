import React from 'react';
import Image from 'next/image';
import router from 'next/router';
import Link from 'next/link';

const BottomNavBar = () => {
  // Navigation items array
  const navItems = [
    {
      label: 'Home',
      icon: '/icons/reward/home.png',
      route: '/home',
    },
    {
      label: 'Reward',
      icon: '/icons/reward/rewards.png',
      route: '/reward',
    },
    {
      label: 'Contact',
      icon: '/icons/reward/contact.png',
      route: '/contacts',
    },
    {
      label: 'Profile',
      icon: '/icons/reward/profile.png',
      route: '/dashboard',
    },
  ];
  
  return (
    <div className='fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] h-[75px] rounded-[90px] border border-[rgba(151, 71, 255, 0.3)] overflow-hidden'>
      {/* Background Blur */}
      <div className='absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.06)] backdrop-blur-lg'></div>

      {/* Content Layer */}
      <div className='relative flex justify-around items-center w-full h-full z-10'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            className='flex flex-col items-center cursor-pointer'
          href={`${item.route}`}
          >
            <Image
              src={item.icon}
              height={22}
              width={22}
              alt={item.label}
              className='sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px]'
            />
            <span className='text-[10px] md:text-[12px] mt-1'>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;

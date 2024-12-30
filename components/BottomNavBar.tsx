import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
const BottomNavBar = () => {
  const pathname = usePathname()
  // State for active item
  const [activeItem, setActiveItem] = useState(pathname); 
 


  // Navigation items array 
  const navItems = [
    {
      label: 'Home',
      icon: '/icons/home.png',
      route: '/home',
    },
    {
      label: 'Reward',
      icon: '/icons/reward.png',
      route: '/reward',
    },
    {
      label: 'Contact',
      icon: '/icons/contact.png',
      route: '/contacts',
    },
    {
      label: 'Profile',
      icon: '/icons/profile.png',
      route: '/dashboard',
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] max-w-[500px] h-[75px]">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-gradient-to-b from-[#141026] to-[#1F1B32]"></div>

      {/* Content Layer */}
      <div className="relative flex justify-around items-center w-full h-full z-10">
        {navItems.map((item, index) => (
          <Link
            key={index}
            className="flex flex-col items-center cursor-pointer"
            href={item.route}
            onClick={() => setActiveItem(item.route)}
          >
            <Image
              src={item.icon}
              height={22}
              width={22}
              alt={item.label}
              className={`sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] ${
                activeItem === item.route ? 'opacity-100' : 'opacity-10'
              }`}
            />
            <span
              className={`text-[10px] md:text-[12px] mt-1 ${
                activeItem === item.route ? 'text-white' : 'text-gray-500'
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;

"use client"
import React from 'react';
import Image from 'next/image';
import CallBalance from './components/callBalance';
import DashedBorder from './components/border';
import RewardBar from './components/rewardbar';
import FAQSection from './components/faq';
// import ClipboardComponent from './components/ClipboardComponent'; // Import the ClipboardComponent

const Home = () => {
  const spamDetected = 30;
  const totalContacts = 100;
  const callBalacneamount = 500;
  const address = "4Uj3En..........m1toot"; // Store the address as a constant

  return (
    <div className="bg-black w-96 min-h-screen text-white overflow-hidden mx-auto">
      <Image
        src="/home/pfp.png"
        alt="Profile Picture"
        height={306}
        width={390}
        className="w-full object-cover"
        priority
      />
      
      <div className="-mt-10 relative z-10">
        <div className="bg-[#21172C] rounded-t-3xl border-2 border-[#9747FF99] px-5 py-4 space-y-5">
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <h1 className="text-2xl font-normal leading-9">Welcome Kash</h1>
            <div className='w-full flex items-center justify-center gap-3'>
              <p className="text-sm font-normal leading-4 text-white/60">{address}</p>
              {/* <ClipboardComponent value={address} message="Address copied to clipboard!" /> */}
            </div>
          </div>

          <DashedBorder/>

          <CallBalance
            amount={callBalacneamount}
          />

          <RewardBar
            amount={70}
          />

          <FAQSection/>
        </div>
      </div>
    </div>
  );
};

export default Home;
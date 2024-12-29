"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import CallBalance from './components/callBalance';
import DashedBorder from './components/border';
import RewardBar from './components/rewardbar';
import FAQSection from './components/faq';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import BottomNavBar from '@/components/BottomNavBar';
// import ClipboardComponent from './components/ClipboardComponent'; // Import the ClipboardComponent

const Home = () => {
  const {toast} = useToast();
  const [copied, setCopied] = useState(false)
  const callBalacneamount = 500;
  const address = "4BmQuXK4wJdLEULMvzwyiNE9p7Rj3Pg4pgFfoB1SY53pj";

  const copyAddress = () => {
    navigator.clipboard.writeText(address)
    .then(() => {
      setCopied(true)
    })  
  }
  setTimeout(() => {
    setCopied(false)
  }, 3000)
  return (
    <div className="bg-black max-w-[500px] w-full min-h-screen text-white overflow-hidden mx-auto z-0">
      <Image
        src="/home/pfp.png"
        alt="Profile Picture"
        height={306}
        width={390}
        className="w-full object-cover z-0"
        priority
      />

      <div className="-mt-10 relative z-10">
        <div className="bg-[#21172C] rounded-t-3xl border-2 border-[#9747FF99] px-5 py-4 space-y-5">
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <h1 className="text-2xl font-normal leading-9">Welcome Kash</h1>
            <div className='w-full flex items-center justify-center gap-3'>
              <p className="text-sm font-normal leading-4 text-white/60">
                {`${address.slice(0, 6)}..........${address.slice(-6)}`}
              </p>
              <div onClick={copyAddress} className="shareicon" >
                {!copied ?  <p>    <Copy size={15} /> </p> : <p className=' flex items-center justify-between w-full'>copied <span className=' mr-2'></span> <Copy size={15} /> </p>}
               
              </div>
            </div>
          </div>

          <DashedBorder />

          <CallBalance
            amount={callBalacneamount} totalContactsCount={0} spamDetectedCount={0}          />

          <RewardBar
            amount={70}
          />
          <div className=' mb-10'>
          <FAQSection />
          </div>
          
          {/* Bottom Navigation Bar */}
        
                <BottomNavBar />
      
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
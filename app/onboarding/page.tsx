'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Onboarding() {
  const steps = [
    {
      titleText: 'Your Trusted Identity Powered by Blockchain',
      subtitleText: 'Experience secure, decentralized caller identification with blockchain technology',
    },
    {
      titleText: 'Get rewards for identifying spam',
      subtitleText: 'Help the community by identifying spam callers and messages.',
    },
    {
      titleText: 'Get rewards for identifying spam',
      subtitleText: 'Help the community by identifying spam callers and messages.',
    },
  ];
  // const [step, setStep] = useState(0);

  // function incrementStep() {
  //   setStep(step >= steps.length - 1 ? steps.length - 1 : step + 1);
  // }

  // function decrementStep() {
  //   setStep(step <= 0 ? 0 : step - 1);
  // }

  return (
    <div className="flex flex-col items-center justify-start px-8 py-16 h-[100vh] bg-black text-white">
      <div className="h-10" />
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        renderIndicator={(_, isSelected) => {
          return <div className={`h-1.5 w-full ${isSelected ? 'bg-violet-600' : 'bg-violet-300'}`}></div>;
        }}
      >
        {steps.map(({ titleText, subtitleText }, i) => (
          <div key={i}>
            <img src={'onboarding1.png'} alt="onboarding1" height={308} width={308}></img>
            <div className="h-10" />
            <p className="text-lg font-bold text-center">{titleText}</p>
            <div className="h-8" />
            <p className="text-xs text-center">{subtitleText}</p>
          </div>
        ))}
      </Carousel>

      <div>
        <button></button>
        <button></button>
      </div>

      <button className="bg-violet-600 py-4 px-12 rounded-full">Launch App</button>
    </div>
  );
}

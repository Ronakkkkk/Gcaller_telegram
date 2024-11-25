'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // for carousel

export default function Onboarding() {
  const steps = [
    {
      image: 'onboarding1.png',
      titleText: 'Your Trusted Identity Powered by Blockchain',
      subtitleText: 'Experience secure, decentralized caller identification with blockchain technology',
    },
    {
      image: 'onboarding1.png',
      titleText: 'Get rewards for identifying spam',
      subtitleText: 'Help the community by identifying spam callers and messages.',
    },
    {
      image: 'onboarding1.png',
      titleText: 'Get rewards for identifying spam (Need to change)',
      subtitleText: 'Help the community by identifying spam callers and messages.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start px-8 py-16 h-[100vh] bg-black text-white">
      <div className="h-10" />
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        renderIndicator={(_, isSelected) => {
          return <div className={`h-1.5 w-full bg-[#9747FF] rounded ${isSelected ? 'opacity-100' : 'opacity-20'}`}></div>;
        }}
      >
        {steps.map(({ image, titleText, subtitleText }, i) => (
          <div key={i}>
            <img src={image} alt={titleText} height={308} width={308}></img>
            <div className="h-10" />
            <p className="text-lg font-bold text-center">{titleText}</p>
            <div className="h-8" />
            <p className="text-xs text-center">{subtitleText}</p>
          </div>
        ))}
      </Carousel>

      <div className='h-10'></div>
      <button className="bg-violet-600 py-4 px-12 rounded-full">Launch App</button>
    </div>
  );
}

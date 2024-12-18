import React from 'react';
import Image from 'next/image';


const Home: React.FC = () => {
  const callBalance = 25;
  const spamDetected = 30;
  const totalContacts = 100;
  // const faqs = [
  //   {
  //     question: 'What is ZK Verification?',
  //     answer: 'ZK Verification is a cryptographic technique that allows you to prove certain statements without revealing any additional information.'
  //   },
  //   {
  //     question: 'What is CallNetwork?',
  //     answer: 'CallNetwork is a service that provides secure and reliable voice communication capabilities.'
  //   },
  //   {
  //     question: 'What is Network State?',
  //     answer: 'Network State refers to the current condition and status of a communication network.'
  //   }
  // ];

  return (
    <div className="bg-black flex flex-col items-start justify-start w-full">
      <Image
        src="/home/pfp.png"
        alt="Profile Picture"
        height={306}
        width={306}
        className="h-[306px] w-full object-contain"
        priority
      />

      <div className="w-[390px] h-[952px] gap-0 rounded-t-[30px] bg-gradient-to-r from-white/[0.06] to-white/[0.06] border border-purple-500/60 backdrop-blur-xl">
        <div className="p-6 space-y-6">
          <h1 className="text-white text-2xl font-bold">Welcome Kash</h1>
          {/* <CallBalance balance={callBalance} /> */}
          <div className="flex justify-between">
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-white font-bold">Total Contacts</span>
              <span className="text-white font-bold">{totalContacts}</span>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg">
              <span className="text-white font-bold">Spam Detected</span>
              <span className="text-white font-bold">{spamDetected}</span>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-white font-bold">Reward Progress</h2>
            <div className="w-full h-4 bg-gray-700 rounded-full mt-2">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
          {/* <FAQs faqs={faqs} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
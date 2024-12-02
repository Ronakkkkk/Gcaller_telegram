'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTelegram } from '@/components/TelegramProvider';

export default function SplashPage() {
  const router = useRouter();
  const { ready } = useTelegram();
  const [showContinue, setShowContinue] = useState(false);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 3000); // 3-second delay for the loading simulation

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    router.push('/step1');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#0F172A] p-4">
      <div className="text-center max-w-md w-full">
        {/* Animated Icon */}
        <div className="mb-8 animate-pulse">
          <svg
            className="mx-auto mb-6 w-32 h-32 text-[#6366F1] opacity-80"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
          CryptoApp
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-8 px-4">
          Your gateway to the future of digital finance
        </p>

        {/* Conditional: Loading or Continue Button */}
        {!showContinue ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin w-6 h-6 border-4 border-t-4 border-gray-200 border-t-[#6366F1] rounded-full"></div>
            <span className="text-gray-400">Loading experience...</span>
          </div>
        ) : (
          <button
            onClick={handleContinue}
            className="w-full py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] 
            text-white font-bold rounded-xl 
            hover:from-[#5850EC] hover:to-[#7D5FFF] 
            transition-all duration-300 
            transform hover:scale-105 
            focus:outline-none focus:ring-2 
            focus:ring-[#6366F1] focus:ring-opacity-50"
          >
            Continue to Onboarding
          </button>
        )}

        {/* Development Shortcut: Skip Loading */}
        {ready && !showContinue && (
          <button
            onClick={() => setShowContinue(true)}
            className="mt-4 text-gray-400 hover:text-white transition"
          >
            Skip Loading
          </button>
        )}
      </div>
    </div>
  );
}

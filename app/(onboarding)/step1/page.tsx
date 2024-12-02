'use client'

import { useOnboarding } from '@/hooks/useOnboarding'

export default function Step1Page() {
  const { nextStep, prevStep } = useOnboarding()

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 space-y-6">
      <h2 className="text-2xl font-bold text-center">
        Welcome to Our App
      </h2>
      <p className="text-center">
        Discover amazing features that will transform your experience.
      </p>
      
      <div className="flex space-x-4">
        <button 
          onClick={prevStep}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Back
        </button>
        <button 
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
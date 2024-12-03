'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTelegram } from '@/components/TelegramProvider'

export function useOnboarding() {
  const router = useRouter()
  const { webApp } = useTelegram()
  const [currentStep, setCurrentStep] = useState(0)

  // Check if onboarding is complete in local storage
  useEffect(() => {
    const completed = localStorage.getItem('onboardingCompleted')
    if (completed === 'true') {
      router.push('/dashboard')
    }
  }, [router])

  const nextStep = () => {
    switch(currentStep) {
      case 0:
        router.push('/step1')
        break
      case 1:
        router.push('/step2')
        break
      case 2:
        completeOnboarding()
        break
    }
    setCurrentStep(prev => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
      switch(currentStep) {
        case 1:
          router.push('/splash')
          break
        case 2:
          router.push('/step1')
          break
      }
    }
  }

  const completeOnboarding = () => {
    localStorage.setItem('onboardingCompleted', 'true')
    webApp?.close() // Optional: close WebApp or navigate to main app
    router.push('/dashboard')
  }

  return { currentStep, nextStep, prevStep }
}
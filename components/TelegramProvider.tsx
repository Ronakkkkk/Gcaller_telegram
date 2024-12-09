'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface TelegramContextType {
  webApp: any // eslint-disable-line @typescript-eslint/no-explicit-any
  ready: boolean
}

const TelegramContext = createContext<TelegramContextType>({
  webApp: null,
  ready: false
})

export function TelegramProvider({ children }: { children: React.ReactNode }) {
  const [webApp, setWebApp] = useState<any>(null) // eslint-disable-line @typescript-eslint/no-explicit-any
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) { // eslint-disable-line @typescript-eslint/no-explicit-any
      const app = (window as any).Telegram.WebApp // eslint-disable-line @typescript-eslint/no-explicit-any
      
      // Configure WebApp
      app.ready()
      app.expand()
      
      // Optional: Set appearance
      app.setHeaderColor('#YOUR_HEADER_COLOR')
      app.setBackgroundColor('#YOUR_BG_COLOR')
      
      setWebApp(app)
      setReady(true)
    }
  }, [])

  return (
    <TelegramContext.Provider value={{ webApp, ready }}>
      {children}
    </TelegramContext.Provider>
  )
}

export function useTelegram() {
  return useContext(TelegramContext)
}
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TelegramProvider } from '@/components/TelegramProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telegram Mini App Onboarding',
  description: 'Onboarding flow for Telegram Mini App'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  )
}

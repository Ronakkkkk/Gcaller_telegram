import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { TelegramProvider } from '@/components/TelegramProvider'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '700'], display:'swap' })

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
      <body className={poppins.className }>
        <TelegramProvider>
          {children}
        </TelegramProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forget FOMO | Bangalore Social Events Community',
  description: 'Bangalore-Based Social Events Community: We make plans so you don\'t have to ;)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}


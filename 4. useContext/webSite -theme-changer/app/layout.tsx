import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalContextProvider } from './context/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React-Next Tutorial',
  description: 'Create by Lakshay Bogal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}

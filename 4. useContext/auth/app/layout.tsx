import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from './Auth/AuthContext/context'

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

          <AuthProvider>
            {children}
          </AuthProvider>

      </body>
    </html>
  )
}

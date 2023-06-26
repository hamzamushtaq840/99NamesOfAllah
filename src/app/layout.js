
'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { PageProvider } from '@/context/pageContext'
import Navbar from '@/components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '99 Names of Allah',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageProvider>
          <Navbar />
          {children}
        </PageProvider>
      </body>
    </html>
  )
}

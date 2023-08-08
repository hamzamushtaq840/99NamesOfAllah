'use client'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './Navbar'
import { PageProvider } from '@/context/pageContext'

const Children = ({ children }) => {
  return (
    <PageProvider>
      <Navbar />
      {children}
      <Analytics />
    </PageProvider>
  )
}

export default Children
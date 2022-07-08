import React from 'react'
import { Header } from './'

interface LayoutProps {
  children: any
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main className="w-full lg:my-[90px] flex flex-col lg:flex-row items-center justify-evenly max-w-[1144px] mx-auto">
        {children}
      </main>
    </div>
  )
}

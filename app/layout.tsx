import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Purely Solutions - Premium Water Filtration Systems",
  description: "Redefining home life through pure, clean water filtration system",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f5f0eb] text-center py-2 text-sm">
          <div className="container mx-auto">
            <div className="text-3xl font-bold mb-1">84,187,920</div>
            <p>Watch your contribution in real time.</p>
            <p>Every under-sink filter sold eliminates the need for 120,000 plastic bottles.</p>
          </div>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
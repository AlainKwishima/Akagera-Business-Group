import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Preloader } from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akagera Business Group - Your Trusted Business Partner",
  description:
    "Leading business conglomerate operating across multiple industries with commitment to excellence and innovation.",
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
        <Preloader />
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}

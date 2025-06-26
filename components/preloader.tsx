"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="relative w-48 h-32 mx-auto mb-8 animate-pulse">
          <Image src="/images/akagera-logo.png" alt="Akagera Business Group" fill className="object-contain" priority />
        </div>
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-100" />
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200" />
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading Excellence...</p>
      </div>
    </div>
  )
}

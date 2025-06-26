"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false)

  const divisions = [
    { name: "Akagera Motors", href: "/divisions/motors" },
    { name: "Akagera Auto Zone", href: "/divisions/auto-zone" },
    { name: "Akagera Car Rentals", href: "/divisions/car-rentals" },
    { name: "Akagera Electronics", href: "/divisions/electronics" },
    { name: "Akagera Trading", href: "/divisions/trading" },
    { name: "Akagera Hardware & Plastic", href: "/divisions/hardware" },
    { name: "Akagera Media", href: "/divisions/media" },
    { name: "Akagera Design & Construction", href: "/divisions/construction" },
    { name: "Akagera Security & Safety", href: "/divisions/security" },
    { name: "Antler Jay Vix", href: "/divisions/antler-jay-vix" },
    { name: "Akagera Healthcare", href: "/divisions/healthcare" },
  ]

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About ABG" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-12 transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/akagera-logo.png"
                alt="Akagera Business Group"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 transition-all duration-300 ${
                  pathname === item.href ? "text-red-600 font-medium" : "text-gray-700 hover:text-blue-600"
                } group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-blue-600 transform transition-transform duration-300 ${
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}

            {/* Divisions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                className={`flex items-center px-3 py-2 transition-all duration-300 ${
                  pathname.startsWith("/divisions") ? "text-red-600 font-medium" : "text-gray-700 hover:text-blue-600"
                } group`}
              >
                Divisions
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${isDivisionsOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-blue-600 transform transition-transform duration-300 ${
                    pathname.startsWith("/divisions") ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>

              {isDivisionsOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {divisions.map((division) => (
                    <Link
                      key={division.href}
                      href={division.href}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        pathname === division.href
                          ? "text-red-600 bg-red-50 font-medium"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsDivisionsOpen(false)}
                    >
                      {division.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-red-600 font-medium bg-gray-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="px-3 py-2">
              <p className="text-sm font-medium text-gray-500 mb-2">Divisions</p>
              {divisions.map((division) => (
                <Link
                  key={division.href}
                  href={division.href}
                  className={`block px-3 py-1 text-sm transition-colors duration-300 ${
                    pathname === division.href ? "text-red-600 font-medium" : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {division.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          Amir Majeed
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            Services
          </Link>
        </div>
      </div>
    </nav>
  )
}

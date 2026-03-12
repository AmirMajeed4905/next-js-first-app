'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import useAuthStore from '@/store/useAuthStore'

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuthStore()
  const [mounted, setMounted] = useState(false)

  // Client pe mount hone ke baad hi render karo
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight">
          Amir Majeed
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300">
            About
          </Link>
          <Link href="/services" className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300">
            Services
          </Link>

          {/* Mounted hone ke baad hi dikhao */}
          {!mounted ? null : isLoggedIn ? (
            <div className="flex items-center gap-4">
              <p className="text-gray-700 font-medium">Welcome, {user?.name}</p>
              <button
                onClick={logout}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
              Login
            </Link>
          )}
        </div>
        <Link href="/todos" className="text-gray-700 font-medium hover:text-indigo-600 transition duration-300">
          Todos
        </Link>

      </div>
    </nav>
  )
}

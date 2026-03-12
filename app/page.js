"use client";

import useCounterStore from '@/store/userCounterStore'


export default function Home() {

  const { count, increment, decrement } = useCounterStore()

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6">
          Welcome to My Next.js App 🚀
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a modern, fast, and scalable web app built with Next.js and Tailwind CSS.
          Whether you're building blogs, portfolios, dashboards, or full-stack apps — you're in the right place!
        </p>
        <p className="text-md text-gray-600 mb-6">
          Start exploring pages, add features, and deploy with confidence. 💡
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
        >
          Learn More About Us
        </a>
        <div>
          <p className="inline-block mt-5 px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition"
          >Count: {count}</p>
          <div className="mt-5 space-x-4">
             <button onClick={increment} className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
          >
            increment
          </button>
          <button onClick={decrement} className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-700 transition"
          >
            decrement
          </button>
            </div>        
         
        </div>
      </div>
    </main>
  )
}

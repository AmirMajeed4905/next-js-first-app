'use client'

import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-6">Our Services</h1>
        <p className="text-gray-700 mb-6">
          We offer a wide range of web development and design services using the latest technologies. Click on any service to learn more.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/services/web-development"
            className="block p-6 bg-indigo-50 rounded-xl shadow hover:bg-indigo-100 transition"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">💻 Web Development</h2>
            <p className="text-gray-600">Modern websites using MERN, Next.js, and REST APIs.</p>
          </Link>

          <Link
            href="/services/ui-ux-design"
            className="block p-6 bg-indigo-50 rounded-xl shadow hover:bg-indigo-100 transition"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🎨 UI/UX Design</h2>
            <p className="text-gray-600">Beautiful and user-friendly interfaces tailored to your users.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

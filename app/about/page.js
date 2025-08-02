export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome! We're a passionate team of developers, designers, and tech enthusiasts focused on building modern web applications using the MERN stack and cutting-edge technologies like Next.js.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission 🎯</h2>
            <p className="text-gray-600">
              To create user-friendly, fast, and scalable web solutions that empower businesses and individuals to thrive in the digital world.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision 🔭</h2>
            <p className="text-gray-600">
              We envision a future where innovation meets simplicity, and every user enjoys an exceptional digital experience.
            </p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Meet the Team 👥</h2>
          <ul className="space-y-2 text-gray-700">
            <li>👨‍💻 Amir Majeed – Full Stack Developer</li>
            <li>🎨 UI/UX Designer – Creative genius behind our designs</li>
            <li>🧠 Backend Expert – Ensuring performance and security</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

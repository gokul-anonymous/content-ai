import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-50">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center">
          {/* Logo */}
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="ml-3 text-lg font-bold text-gray-700">ROT HACKERS</span>
        </div>
        <Link href="/dashboard" className="text-gray-700 hover:text-gray-900 font-semibold">
          Get Started
        </Link>
      </nav>

      {/* Main Container to center the Hero Section */}
      <div className="flex flex-grow flex-col items-center justify-center text-center px-6 py-10">
        {/* Main Hero Section */}
        <p className="bg-blue-50 px-4 py-1 rounded-full text-sm font-medium text-blue-700 mb-4">
          ROT HACKERS
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          AI Content <span className="text-blue-600">Generator</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/dashboard" className="mt-6 px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
          Get started
        </Link>
      </div>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4568/4568920.png"
              alt="Templates"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-blue-600">25+ Templates</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">Responsive, and mobile-first project on the web</p>
            <Link href="#" className="mt-4 text-blue-600 font-medium hover:underline">
              Learn more
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3384/3384799.png"
              alt="Customizable"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-blue-600">Customizable</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">Components are easily customized and extendable</p>
            <Link href="#" className="mt-4 text-blue-600 font-medium hover:underline">
              Learn more
            </Link>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
              alt="Free to Use"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-blue-600">Free to Use</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">Every component and plugin is well documented</p>
            <Link href="#" className="mt-4 text-blue-600 font-medium hover:underline">
              Learn more
            </Link>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3192/3192069.png"
              alt="Support"
              width={60}
              height={60}
            />
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-blue-600">24/7 Support</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 text-center">Contact us 24 hours a day</p>
            <Link href="#" className="mt-4 text-blue-600 font-medium hover:underline">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

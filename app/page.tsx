import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-red-600 h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWklMjBkZXNrdG9wfGVufDB8fDB8fHww"
            alt="AI Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative z-10 text-center p-5">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            ROT HACKERS CONTENT CREATION AI
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Create AI-driven content with just a few clicks
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-800 rounded-lg p-8">
              <Image
                src="https://source.unsplash.com/400x400/?artificial-intelligence"
                alt="AI-Powered Feature"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Experience the power of AI to generate high-quality content with ease.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <Image
                src="https://source.unsplash.com/400x400/?workflow"
                alt="Effortless Workflow"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">Effortless Workflow</h3>
              <p className="text-gray-400">
                Create and manage content effortlessly with our intuitive platform.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <Image
                src="https://source.unsplash.com/400x400/?templates,design"
                alt="Customizable Templates"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">Customizable Templates</h3>
              <p className="text-gray-400">
                Use customizable templates to tailor content to your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-purple-700">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Creating Today</h2>
          <p className="text-lg mb-8">
            Join the AI revolution and elevate your content to the next level.
          </p>
          <Link href="/dashboard">
            <Button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-gray-400">&copy; 2024 ROT HACKERS CONTENT CREATION AI. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

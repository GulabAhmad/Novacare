"use client"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Component() {
  const router = useRouter()

  const handleLogin = () => {
    // Navigate to the login page instead of directly to dashboard
    router.push('/login')
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 font-[Outfit,sans-serif]">
      {/* Background Image */}
      <Image
        src="/assets/images/webmetacura/metacura splash screen.png"
        alt="Abstract landscape with purple mountains and a reflective lake"
        fill
        priority
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#9577CA] md:text-4xl font-[Outfit,sans-serif]">Enter Mycare ID</h1>
        
        {/* Main Card - Exact Figma Specifications */}
        <div
          className="flex flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-6 shadow-lg backdrop-blur-sm md:p-8"
          style={{
            width: "min(100%, 511px)",
            height: "min(279px, 60vh)",
            borderColor: "#9577CA",
            borderWidth: "2px",
            borderRadius: "17px",
            opacity: 1
          }}
        >
          <div className="w-full max-w-sm space-y-6">
            {/* Mycare ID Input Field */}
            <div className="space-y-2">
              <label htmlFor="mycare-id" className="block text-sm font-medium text-gray-900 font-[Outfit,sans-serif]">
                Mycare ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="mycare-id"
                  type="text"
                  placeholder="Enter your Mycare ID"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900 font-[Outfit,sans-serif]"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full h-12 rounded-lg text-white font-medium transition-colors font-[Outfit,sans-serif]"
              style={{ backgroundColor: "#9577CA" }}
            >
              <strong>Continue to Login</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

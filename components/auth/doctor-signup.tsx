"use client"

import Image from "next/image"
import { useState } from "react"
import { User, Phone, Mail, Lock, Eye, EyeOff, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [selectedUserType, setSelectedUserType] = useState<"patient" | "doctor" | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your signup logic here (API call, validation, etc.)
    
    // If signup is successful:
    router.push("/verify-email");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      {/* Background Image */}
      <Image
        src="/assets/images/webmetacura/metacura splash screen.png"
        alt="Abstract landscape with purple mountains and a reflective lake"
        fill
        priority
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#9577CA] mb-2">Sign up Account</h1>
          <p className="text-xs sm:text-sm md:text-base text-white italic">
            Allows users to register for a new MetaCura account and gain access to EHR services
          </p>
        </div>

        {/* Main Card - Frosted Glass Effect */}
        <div
          className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 shadow-xl overflow-y-auto w-full"
          style={{
            borderRadius: '17px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderWidth: '2px',
            opacity: 1,
            minHeight: '600px',
            maxHeight: '120vh',
          }}
        >
          <form className="w-full space-y-3 sm:space-y-4" onSubmit={handleSignup}>
            {/* Name Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="name" className="text-xs sm:text-sm font-medium text-black">
                Name
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Name"
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="email" className="text-xs sm:text-sm font-medium text-black">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-black">
                Enter Phone Number
              </label>
              <PhoneInput
                country={'us'}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                inputClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900 text-sm sm:text-base"
                containerClass="w-full"
                buttonClass="rounded-l-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent"
                dropdownClass="bg-white border border-gray-300 rounded-md shadow-lg"
                searchClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                placeholder="Enter Phone Number"
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  fontSize: '14px',
                  paddingLeft: '45px'
                }}
                buttonStyle={{
                  width: '45px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px 0 0 6px',
                  backgroundColor: 'white'
                }}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1 sm:space-y-2">
              <label htmlFor="password" className="text-xs sm:text-sm font-medium text-black">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 bg-white focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" /> : <Eye className="h-3 w-3 sm:h-4 sm:w-4" />}
                </button>
              </div>
              <p className="text-xs text-white italic leading-relaxed">
                Password must be at least <span className="text-[#9577CA] font-medium">8 characters</span> and contain <br className="hidden sm:block" /> <span className="text-white font-medium">1 number</span>, <span className="text-white font-medium">1 uppercase letter</span>, <span className="text-[#9577CA] font-medium">1 lowercase letter</span>, and <span className="text-white font-medium">1 symbol</span>.
              </p>
            </div>

            {/* Phone Number Field */}
            {/* <div className="space-y-1 sm:space-y-2">
              <label htmlFor="phone" className="text-xs sm:text-sm font-medium text-black">
                Enter Phone Number
              </label>
              <PhoneInput
                country={'us'}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                inputClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900 text-sm sm:text-base"
                containerClass="w-full"
                buttonClass="rounded-l-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent"
                dropdownClass="bg-white border border-gray-300 rounded-md shadow-lg"
                searchClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                placeholder="Enter Phone Number"
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  fontSize: '14px',
                  paddingLeft: '45px'
                }}
                buttonStyle={{
                  width: '45px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px 0 0 6px',
                  backgroundColor: 'white'
                }}
              />
            </div> */}

            {/* User Type Selection */}
            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
              <div
                className={`flex cursor-pointer flex-col items-center space-y-1 sm:space-y-2 rounded-lg border-2 p-2 sm:p-3 md:p-4 transition-all ${
                  selectedUserType === "patient"
                    ? "border-[#9577CA] bg-[#9577CA]"
                    : "border-transparent hover:border-gray-400"
                }`}
                onClick={() => {
                  setSelectedUserType("patient");
                  router.push("/signup");
                }}
              >
                <Image src="/assets/images/webmetacura/patient icon.png" alt="Patient icon" width={64} height={64} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                <span className="text-xs sm:text-sm font-medium text-gray-100 text-center">I am a Patient</span>
              </div>
              
              <div
                className={`flex cursor-pointer flex-col items-center space-y-1 sm:space-y-2 rounded-lg border-2 p-2 sm:p-3 md:p-4 transition-all ${
                  selectedUserType === "doctor"
                    ? "border-[#9577CA] bg-[#9577CA]"
                    : "border-transparent hover:border-gray-400"
                }`}
                onClick={() => setSelectedUserType("doctor")}
              >
                <Image src="/assets/images/webmetacura/doctor icons.png" alt="Doctor icon" width={64} height={64} className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16" />
                <span className="text-xs sm:text-sm font-medium text-gray-100 text-center">I am a Doctor</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                defaultChecked
                className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-[#9577CA] border-gray-300 rounded focus:ring-[#9577CA]"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm text-white italic leading-relaxed"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-white hover:underline"
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-white hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <button 
              type="submit" 
              className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md text-white font-bold text-sm sm:text-base md:text-lg transition-colors"
              style={{ 
                backgroundColor: "#9577CA"
              }}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

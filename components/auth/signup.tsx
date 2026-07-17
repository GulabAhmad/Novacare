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
  const [selectedUserType, setSelectedUserType] = useState<"mycare" | "doctor" | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only proceed with signup if Mycare (patient) is selected
    if (selectedUserType === "mycare") {
      // TODO: Add your signup logic here (API call, validation, etc.)
      // If signup is successful:
      router.push("/verify-email");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      {/* Background Image */}
      <Image
        src="/assets/images/webmetacura/metacura splash screen.png"
        alt="Abstract landscape with purple mountains and a reflective lake"
        fill
        priority
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-1 flex flex-col items-center justify-center space-y-6 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#9577CA] mt-10 md:text-4xl">Sign up Account</h1>
          <p className="text-sm text-white mt-4">
            Allows users to register for a new MetaCurra account and gain access to EHR services
          </p>
        </div>

        {/* Main Card */}
        <div
          className="flex flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg w-full max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto min-h-[400px]"
          style={{
            borderColor: "#9577CA",
          }}
        >
          <form className="w-full max-w-none space-y-6" onSubmit={handleSignup}>
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
              {/* First Name */}
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-black">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-black">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone-number" className="text-sm font-medium text-black">
                  Phone Number
                </label>
                <PhoneInput
                  country={'us'}
                  value={phoneNumber}
                  onChange={(phone) => setPhoneNumber(phone)}
                  inputClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  containerClass="w-full"
                  buttonClass="rounded-l-md border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent"
                  dropdownClass="bg-white border border-gray-300 rounded-md shadow-lg"
                  searchClass="w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  placeholder="Enter Phone Number"
                  inputStyle={{
                    width: '100%',
                    height: '40px',
                    fontSize: '14px',
                    paddingLeft: '50px'
                  }}
                  buttonStyle={{
                    width: '50px',
                    height: '40px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px 0 0 6px',
                    backgroundColor: 'white'
                  }}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-black">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-black">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent text-gray-900"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <p className="text-xs text-white font-albert-sans font-bold">
                  Password must be at least <span style={{ color: "#9577CA" }}>8 characters</span> and contain 1 number, 1 uppercase letter, <span style={{ color: "#9577CA" }}>1 lowercase letter</span>,
                  and 1 symbol.
                </p>
              </div>

              {/* Relationship */}
              <div className="space-y-2">
                  <label htmlFor="relationship" className="text-sm font-medium text-black">
                  Relationship
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <select
                    id="relationship"
                    className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 text-gray-900 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent"
                  >
                    <option value="" style={{ color: "#6B7280" }}></option>
                    <option value="patient">Parents</option>
                    <option value="doctor">Son</option>
                    <option value="other">Daughter</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" style={{display:'none'}} />
                </div>
              </div>
            </div>

            {/* User Type Selection */}
            <div className="flex justify-center gap-8  " >
              <div
                className={`flex cursor-pointer flex-col items-center space-y-2 rounded-lg border-2 p-4 transition-all ${
                  selectedUserType === "mycare"
                    ? "border-[#9577CA] bg-[#9577CA]"
                    : "border-transparent hover:border-gray-400"
                }`}
                onClick={() => setSelectedUserType("mycare")}
              >
                <Image src="/assets/images/webmetacura/patient icon.png" alt="Mycare user icon" width={64} height={64} className="h-16 w-16" />
                <span className="text-sm font-medium text-gray-100">Mycare</span>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-center space-y-2 rounded-lg border-2 p-4 transition-all ${
                  selectedUserType === "doctor"
                    ? "border-[#9577CA] bg-[#9577CA]"
                    : "border-transparent hover:border-gray-400"
                }`}
                onClick={() => {
                  setSelectedUserType("doctor");
                  router.push("/doctor-signup");
                }}
              >
                <Image src="/assets/images/webmetacura/doctor icons.png" alt="Doctor user icon" width={64} height={64} className="h-16 w-16" />
                <span className="text-sm font-medium text-gray-100">I am a Doctor</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center justify-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="border-gray-300 focus:ring-[#9577CA] accent-[#9577CA]"
                // accent-[#9577CA] sets the check/tick color in modern browsers
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-200 font-albert-sans italic font-normal"
                style={{ fontFamily: "'Albert Sans', sans-serif", fontStyle: "italic" }}
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-white hover:underline font-albert-sans italic"
                  style={{ fontFamily: "'Albert Sans', sans-serif", fontStyle: "italic" }}
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-white hover:underline font-albert-sans italic"
                  style={{ fontFamily: "'Albert Sans', sans-serif", fontStyle: "italic" }}
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <div className="flex justify-center" style={{margin:'5px'}}>
              <button 
                type="submit" 
                className="rounded-md text-white" 
                style={{ 
                  backgroundColor: "#9577CA",
                  width: "435px",
                  height: "48px"
                }}
              >
                <strong>Signup</strong>
              </button>
            </div>

            {/* Google Sign in Button */}
            <div className="flex justify-center mb-1">
              <button 
                type="button" 
                className="rounded-md text-gray-900 border border-gray-300 bg-white flex items-center justify-center gap-3" 
                style={{ 
                  width: "435px",
                  height: "48px"
                }}
                onClick={() => router.push('/relationship')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <strong>Sign in with Google</strong>
              </button>
            </div>
          </form>
          
        
        </div>
      </div>
    </div>
  )
}

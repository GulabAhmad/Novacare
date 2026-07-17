"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useRef, type ChangeEvent, type KeyboardEvent } from "react"

export default function Component() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showAlert, setShowAlert] = useState(false)
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  
  // Check if user came from forgot password flow
  const isForgotPassword = searchParams.get('flow') === 'forgot-password'
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Move to next input if a digit is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    // Check if all OTP digits are filled
    const isComplete = otp.every(digit => digit !== "")
    if (isComplete) {
      if (isForgotPassword) {
        // For forgot password flow, redirect to forgot password page
        router.push('/forgot-password')
      } else {
        // For signup flow, show success alert
        setShowAlert(true)
        
        // Hide alert after 3 seconds and redirect
        setTimeout(() => {
          setShowAlert(false)
          router.push('/login')
        }, 3000)
      }
    } else {
      // Show error alert
      setShowErrorAlert(true)
      
      // Hide error alert after 3 seconds
      setTimeout(() => {
        setShowErrorAlert(false)
      }, 3000)
    }
  }

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

      {/* Success Alert */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 rounded-lg shadow-lg bg-white text-black"
          style={{
            width: "300px",
            height: "200px",
            opacity: 1
          }}>
            <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
              <h3 className="text-lg font-bold text-center">
                Your Mycare ID has been Created
              </h3>
              <div className="text-3xl font-bold text-[#9577CA] tracking-wider">
                7 8 6 7 8 6
              </div>
              <button
                className="w-full py-3 px-6 rounded-lg text-white font-medium"
                style={{ backgroundColor: "#9577CA" }}
                onClick={() => {
                  setShowAlert(false)
                  router.push('/login')
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {showErrorAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="mx-4 rounded-lg shadow-lg bg-white text-black"
          style={{
            width: "300px",
            height: "200px",
            opacity: 1
          }}>
            <div className="flex flex-col items-center justify-center h-full p-6 space-y-4">
              <h3 className="text-lg font-bold text-center text-red-600">
                Enter your verification code
              </h3>
              <div className="text-sm text-gray-600 text-center">
                Please enter all 6 digits to verify your account.
              </div>
              <button
                className="w-full py-3 px-6 rounded-lg text-white font-medium"
                style={{ backgroundColor: "#9577CA" }}
                onClick={() => {
                  setShowErrorAlert(false)
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-1 flex flex-col items-center justify-center space-y-6">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-[#9577CA] md:text-4xl mb-3">Verify Code</h1>
          <p className="text-sm text-white md:text-base mt-3">Enter Verification Code</p>
        </div>

        {/* Main Card */}
        <div
          className="flex w-full max-w-[511px] flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-6 shadow-lg md:h-[337px] md:p-8 lg:p-10"
          style={{
            borderColor: "#9577CA",
          }}
        >
          <div className="w-full max-w-sm space-y-6">
            {/* OTP Input Fields */}
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="h-12 w-12 text-center text-2xl font-bold text-gray-900 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent"
                />
              ))}
            </div>

            {/* Resend Code Link */}
            <div className="text-center text-sm">
              <p className="text-white">
                Didn't receive OTP?{" "}
                <br />
                <a href="#" className="text-white hover:underline">
                  Resend code
                </a>
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="button"
              className="h-12 w-full max-w-[435px] rounded-lg text-white"
              onClick={handleVerify}
              style={{ backgroundColor: "#9577CA" }}
            >
              <strong>Verify</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
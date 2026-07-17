
"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Check } from "lucide-react" // Using Check for the checkmark icon

export default function Component() {
  const [verificationMethod, setVerificationMethod] = useState("sms")
  const router = useRouter();
  const searchParams = useSearchParams();
  const flow = searchParams.get('flow');

  return (
    <div className="relative flex min-h-screen items-center justify-center p-4 font-outfit">
      {/* Background Image */}
      <Image
        src="/assets/images/webmetacura/metacura splash screen.png"
        alt="Abstract landscape with purple mountains and a reflective lake"
        fill
        priority
        className="object-cover"
      />

      {/* Content Container */}
      <div className="relative z-1 flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-3xl font-bold text-[#9577CA] md:text-4xl font-outfit">Verification</h1>
          <p className="text-sm text-white md:text-base font-outfit">
            A verification code will be sent to your email and phone number
          </p>
        </div>

        {/* Main Card */}
        <div
          className="flex w-full max-w-[511px] flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-6 shadow-lg md:h-[396px] md:p-8 lg:p-10"
          style={{
            borderColor: "#9577CA", // Border color from button color, consistent with theme
          }}
        >
          <div className="w-full max-w-sm space-y-6">
            {/* Radio Group Replacement */}
            <div className="space-y-4 mx-auto" style={{width:'240px'}}>
              {/* SMS Option */}
              <label
                className={`flex items-center justify-between rounded-full px-6 py-3 transition-all cursor-pointer font-outfit ${
                  verificationMethod === "sms"
                    ? "bg-[#9577CA] text-white"
                    : "bg-transparent border-2 border-[#9577CA] text-[#9577CA]"
                }`}
              >
                <span className="text-lg font-medium font-outfit w-full text-center text-white">SMS</span>
                <span className={`h-6 w-6 rounded-full border-2 flex items-center justify-center 
                  ${verificationMethod === "sms" ? "bg-[#9577CA] border-white" : "bg-white border-white"}`}>
                  <input
                    type="radio"
                    name="verificationMethod"
                    value="sms"
                    checked={verificationMethod === "sms"}
                    onChange={() => setVerificationMethod("sms")}
                    className="sr-only"
                  />
                  {verificationMethod === "sms" && (
                    <Check className="h-5 w-5 text-white" />
                  )}
                </span>
              </label>

              {/* Email Option */}
              <label
                className={`flex items-center justify-between rounded-full px-6 py-3 transition-all cursor-pointer font-outfit ${
                  verificationMethod === "email"
                    ? "bg-[#9577CA] text-white"
                    : "bg-transparent border-2 border-[#9577CA] text-[#9577CA]"
                }`}
              >
                <span className="text-lg font-medium font-outfit w-full text-center text-white">Email</span>
                <span className={`h-6 w-6 rounded-full border-2 flex items-center justify-center 
                  ${verificationMethod === "email" ? "bg-[#9577CA] border-white" : "bg-white border-white"}`}>
                  <input
                    type="radio"
                    name="verificationMethod"
                    value="email"
                    checked={verificationMethod === "email"}
                    onChange={() => setVerificationMethod("email")}
                    className="sr-only"
                  />
                  {verificationMethod === "email" && (
                    <Check className="h-5 w-5 text-white" />
                  )}
                </span>
              </label>
            </div>

            {/* Next Button */}
            <button
              type="button"
              className="h-12 w-full max-w-[435px] rounded-lg text-white font-outfit"
              style={{ backgroundColor: "#9577CA" }}
              onClick={() => {
                const flowParam = flow === 'forgot-password' ? '?flow=forgot-password' : '';
                router.push(`/verification-code${flowParam}`);
              }}
            >
              <strong>Next</strong>
            </button>

            {/* Skip Button */}
            <button type="button" className="w-full text-white hover:text-[#B09CDD] bg-transparent font-bold font-outfit">
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
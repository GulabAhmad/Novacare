"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ChevronDown, Mail } from "lucide-react"

export default function Component() {
  const [relationship, setRelationship] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)

  const relationshipOptions = [
    "Doctor",
    "Children",
    "Family",
    "Parents",
    "It's Complicated"
  ]

  const handleCompleteSignup = () => {
    if (relationship.trim() === "") {
      return
    }
    
    setShowAlert(true)
    
    // Hide alert after 3 seconds and redirect
    setTimeout(() => {
      setShowAlert(false)
      router.push('/login')
    }, 3000)
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
              <h3 className="text-lg font-semibold text-center">
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

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md space-y-6 mb-16">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-[#9577CA] md:text-4xl font-[Outfit,sans-serif]">Enter Relationship</h1>
        </div>

        {/* Main Card */}
        <div
          className="flex w-full flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-6 shadow-lg backdrop-blur-sm md:p-8"
          style={{
            borderColor: "#9577CA",
          }}
        >
          <div className="w-full space-y-6">
            {/* Relationship Input Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-900 font-[Outfit,sans-serif]">
                Relationship
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full h-12 pl-10 pr-10 text-left bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#9577CA] focus:border-transparent flex items-center justify-between font-[Outfit,sans-serif]"
                >
                  <span className={relationship ? "text-gray-900" : "text-gray-500"}>
                    {relationship || "Select your relationship status"}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {relationshipOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setRelationship(option)
                          setShowDropdown(false)
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none font-[Outfit,sans-serif]"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Complete Sign up Button */}
            <button
              type="button"
              className="h-12 w-full rounded-lg text-white font-medium transition-colors font-[Outfit,sans-serif]"
              onClick={handleCompleteSignup}
              disabled={!relationship.trim()}
              style={{ 
                backgroundColor: "#9577CA",
                opacity: relationship.trim() ? 1 : 0.6,
                cursor: relationship.trim() ? "pointer" : "not-allowed"
              }}
            >
              <strong>Complete Sign up</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
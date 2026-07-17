"use client"
import Image from "next/image"
import { useState } from "react"

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("vps")

  const plans = [
    {
      id: "cloud",
      name: "Cloud Hosting",
      description: "cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.",
      price: "$25",
      period: "monthly",
      features: ["Single Domain", "50 GB SSD", "1 TB Premium Bandwidth"],
      isPopular: false
    },
    {
      id: "vps",
      name: "VPS Hosting",
      description: "cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.",
      price: "$70",
      period: "monthly",
      features: ["5 Domains", "100 GB SSD", "2 TB Premium Bandwidth"],
      isPopular: true
    },
    {
      id: "business",
      name: "Business Hosting",
      description: "cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.",
      price: "$115",
      period: "monthly",
      features: ["Unlimited Domains", "1 TB SSD", "5 TB Premium Bandwidth"],
      isPopular: false
    }
  ]

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Header Text - Outside the Card */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8 px-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl  text-[#9577CA] mb-2 font-semibold -mt-16 font-montserrat">Simple, Straight Forward Pricing</h1>
          <p className="text-white text-sm sm:text-base lg:text-lg font-nunito">14 Day risk Free Trial With Every Plan</p>
        </div>

        {/* Subscription Card */}
        <div 
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-visible w-full max-w-xs sm:max-w-md lg:max-w-4xl xl:max-w-6xl mx-auto"
          style={{ 
            minHeight: '300px',
            maxHeight: '600px'
          }}
        >
          {/* Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer ${
                    selectedPlan === plan.id
                      ? "shadow-xl transform scale-110 z-10"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute -top-2 sm:-top-3 left-0 right-0">
                      <div className="bg-[#9577CA] text-white text-center py-1 px-2 sm:px-3 rounded-t-lg text-xs sm:text-sm font-bold font-nunito">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Plan Card */}
                  <div className={`rounded-lg sm:rounded-xl p-4 sm:p-6 bg-white ${
                    selectedPlan === plan.id
                      ? "border-2 border-[#9577CA] shadow-2xl"
                      : "border border-gray-200"
                  }`}>
                    {/* Plan Header */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2 font-nunito">
                        {plan.name}
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm font-nunito">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-baseline">
                        <span className={`text-2xl sm:text-3xl font-bold font-nunito ${
                          selectedPlan === plan.id ? "text-[#9577CA]" : "text-gray-800"
                        }`}>
                          {plan.price}
                        </span>
                        <span className="ml-1 text-xs sm:text-sm text-gray-500 font-nunito">
                          / {plan.period}
                        </span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3 font-nunito">
                        {plan.name} Features
                      </h4>
                      <div className="space-y-1 sm:space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                            <span className="text-gray-600 text-xs sm:text-sm font-nunito">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buy Now Button */}
                    <button
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-colors font-nunito text-xs sm:text-sm ${
                        selectedPlan === plan.id
                          ? "bg-[#9577CA] text-white hover:bg-[#8B6BC0]"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

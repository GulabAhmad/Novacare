"use client"

import Image from "next/image"
import { useState } from "react"
import { Search, Filter, Mail, Phone, MapPin, MoreVertical, ChevronDown, Heart, ArrowRight } from "lucide-react"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import MedicalHistory from '../profile/MedicalHistory'

export default function HospitalForm() {
  const [selectedHospitalType, setSelectedHospitalType] = useState<"all" | "prefer">("all")
  const [favoriteHospitals, setFavoriteHospitals] = useState<Set<number>>(new Set())
  const [showHospitalView, setShowHospitalView] = useState(false)
  const [showMedicalHistory, setShowMedicalHistory] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("+15559876543")

  const hospitalCards = [
    { name: "City General Hospital", specialty: "General Hospital" },
    { name: "Metro Medical Center", specialty: "Specialized Hospital" },
    { name: "Community Health Hospital", specialty: "Community Hospital" },
    { name: "Regional Medical Center", specialty: "Regional Hospital" },
  ]

  const toggleFavorite = (index: number) => {
    setFavoriteHospitals(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleViewHospital = () => {
    setShowHospitalView(true)
  }

  const handleMedicalHistoryClick = () => {
    setShowMedicalHistory(true)
  }

  const handleBackFromMedicalHistory = () => {
    setShowMedicalHistory(false)
  }

  if (showMedicalHistory) {
    return <MedicalHistory onBack={handleBackFromMedicalHistory} />
  }

  if (showHospitalView) {
    return (
      <div className="relative min-h-screen w-full bg-cover bg-center">
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/assets/images/webmetacura/metacura splash screen.png"
            alt="Abstract landscape with purple mountains and a reflective lake"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Main Container */}
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="w-full max-w-7xl">
            {/* Hospital Profile Header Card */}
            <div 
              className="mx-auto mb-4 sm:mb-6 bg-white rounded-[15px] shadow-lg"
              style={{
                width: "100%",
                maxWidth: "900px",
                height: "120px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <div className="flex items-center justify-center h-full px-4">
                <div className="text-center">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#9577CA] mb-1 sm:mb-2">City General Hospital</h1>
                  <p className="text-sm sm:text-base text-gray-600">General Hospital</p>
                </div>
              </div>
            </div>

            {/* Content Cards Container */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center">
              {/* Hospital Information Card */}
              <div 
                className="bg-white rounded-[15px] shadow-lg p-4 sm:p-6 w-full lg:w-auto"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "320px",
                  minHeight: "280px",
                  borderWidth: "0.5px",
                  borderColor: "#E5E7EB"
                }}
              >
                <h2 className="text-lg sm:text-xl font-bold text-[#9577CA] mb-4 sm:mb-6">Hospital Information</h2>
                <form className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-sm sm:text-base">Owner Name:</span>
                    <input
                      type="text"
                      placeholder="Owner Name"
                      className="flex-1 px-3 sm:px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-sm sm:text-base"
                      defaultValue="Dr. Sarah Johnson"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-sm sm:text-base">Email:</span>
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 px-3 sm:px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-sm sm:text-base"
                      defaultValue="info@cityhospital.com"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-sm sm:text-base">Phone Number:</span>
                    <div className="flex-1">
                      <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone)}
                        inputClass="!w-full !px-3 !sm:px-4 !py-2 !bg-white/50 !border-2 !border-purple-200 !rounded-lg !text-gray-700 !placeholder-gray-500 !focus:outline-none !focus:border-purple-400 !focus:ring-2 !focus:ring-purple-100 !transition-all !duration-200 !hover:border-purple-300 !text-sm !sm:text-base"
                        containerClass="!w-full"
                        buttonClass="!bg-purple-200 !border-purple-200 !rounded-l-lg"
                        dropdownClass="!bg-white !border-purple-200 !rounded-lg"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-sm sm:text-base">Location:</span>
                    <input
                      type="text"
                      placeholder="Location"
                      className="flex-1 px-3 sm:px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-sm sm:text-base"
                      defaultValue="456 Medical Center Blvd, City"
                    />
                  </div>
                </form>
              </div>

              {/* Hospital Services Card */}
              <div 
                className="bg-white rounded-[15px] shadow-lg p-4 sm:p-6 flex flex-col w-full lg:w-auto"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  minHeight: "420px",
                  borderWidth: "0.5px",
                  borderColor: "#E5E7EB"
                }}
              >
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Hospital Services</h2>
                
                <div className="flex-1 space-y-3 sm:space-y-4">
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Emergency Services</h3>
                    <p className="text-xs sm:text-sm text-gray-600">24/7 emergency care available</p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Specialized Departments</h3>
                    <p className="text-xs sm:text-sm text-gray-600">Cardiology, Neurology, Pediatrics</p>
                  </div>
                  
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Registration ID</h3>
                    <p className="text-xs sm:text-sm text-gray-600">HOS-2024-001</p>
                  </div>
                </div>

                {/* Create Reminder Button */}
                <button
                  className="w-full py-2 sm:py-3 bg-[#9577CA] text-white font-medium hover:bg-[#8B6BC0] transition-colors mt-2 sm:mt-4 text-sm sm:text-base"
                  style={{ borderRadius: "58px" }}
                >
                  Create Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Abstract landscape with purple mountains and a reflective lake"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Search Bar */}
        <div className="mb-4 sm:mb-6 w-full">
          <div className="flex w-full items-center rounded-full bg-[#FAFAFA] p-2 sm:p-3 shadow-md" style={{ height: '40px', borderRadius: '500px' }}>
            <Search className="ml-2 sm:ml-3 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-none bg-transparent px-2 sm:px-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-0 focus:border-none"
            />
            <button type="button" className="mr-1 sm:mr-2 rounded-full bg-transparent hover:bg-gray-100 p-1 sm:p-2">
              <Filter className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex w-full flex-1 flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-8">
          {/* Add Hospital Form - Mobile First */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg border bg-white p-3 sm:p-4 md:p-6 shadow-lg">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-bold text-[#9577CA]">Add Hospital</h2>
              <form className="space-y-3 sm:space-y-4">
                {/* Hospital Name */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Hospital Name"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>
                
                {/* Owner Name */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Owner Name"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputClass="!w-full !h-10 !sm:h-12 !rounded-lg !border !border-gray-300 !pl-8 !sm:pl-10 !pr-3 !sm:pr-4 !text-xs !sm:text-sm !text-gray-900 !focus:border-transparent !focus:ring-2 !focus:ring-[#9577CA]"
                    containerClass="!w-full"
                    buttonClass="!rounded-l-lg !border !border-gray-300 !bg-white !text-xs !sm:text-sm !text-gray-900 !focus:ring-2 !focus:ring-[#9577CA] !focus:border-transparent"
                    dropdownClass="!bg-white !border !border-gray-300 !rounded-lg"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Contact Help Desk/Doctor name */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Contact Help Desk/Doctor name"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA] cursor-pointer"
                    onClick={handleMedicalHistoryClick}
                    readOnly
                  />
                  <ArrowRight className="absolute right-2 sm:right-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>

                {/* Hospital Registration ID */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Hospital Registration ID"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>

                {/* Medical History - Clickable field */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Medical History"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA] cursor-pointer"
                    onClick={handleMedicalHistoryClick}
                    readOnly
                  />
                  <ArrowRight className="absolute right-2 sm:right-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                </div>

                {/* Location (Google Maps link) */}
                <div className="relative">
                  <MapPin className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location (Google Maps link)"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>

                {/* Map Display */}
                <div className="relative h-24 sm:h-32 md:h-40 w-full rounded-lg border border-gray-300 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d39.8579!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzIxLjAiTiAzOcKwNTEnMjguNCJF!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none">
                    <MapPin className="absolute top-1/2 left-1/2 h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-red-500 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Submit Button - now inside the form, aligned right */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="h-8 w-auto px-4 sm:px-6 rounded-lg text-white text-xs sm:text-sm mt-3 sm:mt-4"
                    style={{ backgroundColor: "#9577CA" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Hospital List Section */}
          <div className="w-full lg:w-1/2">
            {/* Toggle Buttons */}
            <div className="mb-4 sm:mb-6 flex justify-center space-x-2 sm:space-x-4">
              <button
                type="button"
                className={`h-8 sm:h-10 w-24 sm:w-32 rounded-full text-xs sm:text-sm font-medium ${
                  selectedHospitalType === "all" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA]"
                }`}
                onClick={() => setSelectedHospitalType("all")}
              >
                All Hospital
              </button>
              <button
                type="button"
                className={`h-8 sm:h-10 w-24 sm:w-32 rounded-full text-xs sm:text-sm font-medium ${
                  selectedHospitalType === "prefer" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA]"
                }`}
                onClick={() => setSelectedHospitalType("prefer")}
              >
                Prefer Hospital
              </button>
            </div>

            {/* Hospital Cards List */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {(() => {
                const filteredHospitals = hospitalCards.filter((hospital, index) => {
                  return selectedHospitalType === "all" || favoriteHospitals.has(index);
                });

                if (selectedHospitalType === "prefer" && filteredHospitals.length === 0) {
                  return (
                    <div key="no-favorites" className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                      <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-medium text-white mb-2">No Favorite Hospitals</h3>
                      {/* <p className="text-xs sm:text-sm text-gray-500 px-3 sm:px-4">Click the heart icon on any hospital card to add them to your favorites.</p> */}
                    </div>
                  );
                }

                return filteredHospitals.map((hospital, index) => {
                  const originalIndex = hospitalCards.findIndex(h => h === hospital);
                  return (
                    <div
                      key={originalIndex}
                      className="flex w-full flex-col rounded-lg bg-white p-3 sm:p-4 shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">{hospital.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{hospital.specialty}</p>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div
                            className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 bg-white cursor-pointer transition-all duration-200 hover:scale-110"
                            style={{ 
                              borderColor: "#9577CA",
                              backgroundColor: favoriteHospitals.has(originalIndex) ? "#9577CA" : "white"
                            }}
                            onClick={() => toggleFavorite(originalIndex)}
                          >
                            <Heart 
                              className={`h-4 w-4 sm:h-6 sm:w-6 transition-colors duration-200 ${
                                favoriteHospitals.has(originalIndex) ? "text-white fill-white" : "text-[#9577CA]"
                              }`}
                            />
                          </div>
                          <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 cursor-pointer" />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="h-10 sm:h-12 w-full rounded-full text-white text-xs sm:text-sm"
                        style={{
                          backgroundColor: "#9577CA",
                        }}
                        onClick={handleViewHospital}
                      >
                        View
                      </button>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
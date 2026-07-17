"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, Filter, Mail, Phone, MapPin, MoreVertical, ChevronDown, Heart, Edit3 } from "lucide-react"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Component() {
  const [selectedDoctorType, setSelectedDoctorType] = useState<"all" | "prefer">("all")
  const [favoriteDoctors, setFavoriteDoctors] = useState<Set<number>>(new Set())
  const [showDoctorView, setShowDoctorView] = useState(false)
  const [selectedDate, setSelectedDate] = useState("14 MON")
  const [selectedTime, setSelectedTime] = useState("12.00")
  const [phoneNumber, setPhoneNumber] = useState("+15551234567")
  const [showDropdown, setShowDropdown] = useState<number | null>(null)
  const router = useRouter()

  const doctorCards = [
    { name: "Hanson Deck", specialty: "Cardiologist" },
    { name: "Hanson Deck", specialty: "Cardiologist" },
    { name: "Hanson Deck", specialty: "Cardiologist" },
    { name: "Hanson Deck", specialty: "Cardiologist" },
  ]

  const toggleFavorite = (index: number) => {
    setFavoriteDoctors(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleViewDoctor = () => {
    router.push('/doctor-prescription')
  }

  const toggleDropdown = (index: number) => {
    setShowDropdown(showDropdown === index ? null : index)
  }

  if (showDoctorView) {
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
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4">
          <div className="w-full max-w-7xl">
            {/* Doctor Profile Header Card */}
            <div 
              className="mx-auto mb-6 bg-white rounded-[15px] shadow-lg"
              style={{
                width: "900px",
                height: "150px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-[#9577CA] mb-2">Dr. Niles Peppertrout</h1>
                  <p className="text-gray-600">Cardiologist</p>
                </div>
              </div>
            </div>

            {/* Content Cards Container */}
            <div className="flex gap-6 justify-center">
              {/* Doctor Information Card */}
              <div 
                className="bg-white rounded-[15px] shadow-lg p-6"
                style={{
                  width: "450px",
                  height: "300px",
                  borderWidth: "0.5px",
                  borderColor: "#E5E7EB"
                }}
              >
                <h2 className="text-xl font-bold text-[#9577CA] mb-6">Doctor Information</h2>
                <form className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-gray-600 w-32">Practicing Hospital:</span>
                    <input
                      type="text"
                      placeholder="Practicing Hospital"
                      className="flex-1 px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300"
                      defaultValue="City General Hospital"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 w-32">Email:</span>
                    <input
                      type="email"
                      placeholder="Email"
                      className="flex-1 px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300"
                      defaultValue="dr.niles@hospital.com"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 w-32">Phone Number:</span>
                    <div className="flex-1">
                      <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone)}
                        inputClass="!w-full !px-4 !py-2 !bg-white/50 !border-2 !border-purple-200 !rounded-lg !text-gray-700 !placeholder-gray-500 !focus:outline-none !focus:border-purple-400 !focus:ring-2 !focus:ring-purple-100 !transition-all !duration-200 !hover:border-purple-300"
                        containerClass="!w-full"
                        buttonClass="!bg-purple-200 !border-purple-200 !rounded-l-lg"
                        dropdownClass="!bg-white !border-purple-200 !rounded-lg"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600 w-32">Location:</span>
                    <input
                      type="text"
                      placeholder="Location"
                      className="flex-1 px-4 py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300"
                      defaultValue="123 Medical Center Dr, City"
                    />
                  </div>
                </form>
              </div>

              {/* Create Reminder Card */}
              <div 
                className="bg-white rounded-[15px] shadow-lg p-6"
                style={{
                  width: "450px",
                  height: "400px",
                  borderWidth: "0.5px",
                  borderColor: "#E5E7EB"
                }}
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Create Reminder</h2>
                
                {/* Date Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Select Date</h3>
                  <div className="flex gap-2">
                    {["14 MON", "16 WED", "17 THU", "18 FRI", "19 SAT"].map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`px-4 py-2 text-sm font-medium transition-colors ${
                          selectedDate === date
                            ? "bg-[#9577CA] text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        style={{ borderRadius: "10px" }}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Select Time</h3>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    {["08.00", "10.00", "11.00", "12.00"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-full text-sm font-medium border transition-colors ${
                          selectedTime === time
                            ? "bg-[#9577CA] text-white border-[#9577CA]"
                            : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {["14.00", "16.00", "18.00", "22.00"].map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-full text-sm font-medium border transition-colors ${
                          selectedTime === time
                            ? "bg-[#9577CA] text-white border-[#9577CA]"
                            : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Update Button */}
                <button
                  className="w-full py-3 bg-[#9577CA] text-white font-medium hover:bg-[#8B6BC0] transition-colors"
                  style={{ borderRadius: "58px" }}
                >
                  Update
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
      <div className="relative z-10 flex min-h-screen w-full flex-col p-4 sm:p-6 md:p-8">
        {/* Search Bar */}
        <div className="mb-6 w-full">
          <div className="flex w-full items-center rounded-full bg-[#FAFAFA] p-3 shadow-md" style={{ height: '40px', borderRadius: '500px' }}>
            <Search className="ml-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border-none bg-transparent px-3 text-sm text-gray-900 focus:outline-none focus:ring-0 focus:border-none"
            />
            <button type="button" className="mr-2 rounded-full bg-[#9577CA] hover:bg-[#8B6BC0] p-2">
              <Edit3 className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="flex w-full flex-1 flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Add Mycare Form - Left Panel */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg border bg-white p-4 shadow-lg sm:p-6">
              <h2 className="mb-4 text-xl font-bold text-[#9577CA] sm:text-2xl">Add Mycare</h2>
              <form className="space-y-4">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>
                {/* Last Name */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>
                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>
                {/* Phone Number */}
                <div className="relative">
                  <PhoneInput
                    country={'us'}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber(phone)}
                    inputClass="!w-full !h-12 !rounded-lg !border !border-gray-300 !px-4 !text-sm !text-gray-900 !focus:border-transparent !focus:ring-2 !focus:ring-[#9577CA]"
                    containerClass="!w-full"
                    buttonClass="!rounded-l-lg !border !border-gray-300 !bg-white !text-sm !text-gray-900 !focus:ring-2 !focus:ring-[#9577CA] !focus:border-transparent"
                    dropdownClass="!bg-white !border !border-gray-300 !rounded-lg"
                    placeholder="Phone Number"
                  />
                </div>
                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="h-8 w-auto px-6 rounded-lg text-white text-sm sm:text-base mt-4"
                    style={{ backgroundColor: "#9577CA" }}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Mycare List Section - Right Panel */}
          <div className="w-full lg:w-1/2">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl text-white">Mycare</h2>
              <span className="text-sm text-white">See All</span>
            </div>

            {/* Mycare Cards List */}
            <div className="flex flex-col space-y-4">
              {doctorCards.map((doctor, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col rounded-lg bg-white p-4 shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                      <p className="text-sm text-gray-600">{doctor.specialty}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white cursor-pointer transition-all duration-200 hover:scale-110"
                        style={{ 
                          borderColor: "#9577CA",
                          backgroundColor: favoriteDoctors.has(index) ? "#9577CA" : "white"
                        }}
                        onClick={() => toggleFavorite(index)}
                      >
                        <Heart 
                          className={`h-6 w-6 transition-colors duration-200 ${
                            favoriteDoctors.has(index) ? "text-white fill-white" : "text-[#9577CA]"
                          }`}
                        />
                      </div>
                      <div className="relative">
                        <MoreVertical 
                          className="h-5 w-5 text-gray-500 cursor-pointer" 
                          onClick={() => toggleDropdown(index)}
                        />
                                                 {showDropdown === index && (
                           <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[120px]">
                             <div 
                               className="px-4 py-2 text-sm text-[#9577CA] hover:bg-gray-50 cursor-pointer"
                               onClick={() => {
                                 setShowDropdown(null);
                                 router.push('/doctor/medical-history');
                               }}
                             >
                               Medical History
                             </div>
                             <div 
                               className="px-4 py-2 text-sm text-[#9577CA] hover:bg-gray-50 cursor-pointer"
                               onClick={() => {
                                 setShowDropdown(null);
                                 router.push('/doctor-prescription');
                               }}
                             >
                               Add Prescription
                             </div>
                             <div className="px-4 py-2 text-sm text-[#9577CA] hover:bg-gray-50 cursor-pointer">
                               Delete
                             </div>
                           </div>
                         )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="h-12 w-full rounded-full text-white text-sm"
                    style={{
                      backgroundColor: "#9577CA",
                    }}
                    onClick={handleViewDoctor}
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

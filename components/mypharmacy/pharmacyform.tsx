"use client"

import Image from "next/image"
import { useState } from "react"
import { Upload, Search, Filter, Mail, Phone, MapPin, MoreVertical, ChevronDown, Heart, Eye, Download, Trash2 } from "lucide-react"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function PharmacyComponent() {
  const [selectedPharmacyType, setSelectedPharmacyType] = useState<"all" | "prefer">("all")
  const [favoritePharmacies, setFavoritePharmacies] = useState<Set<number>>(new Set())
  const [showClinicView, setShowClinicView] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("+15559876543")

  const pharmacyCards = [
    { name: "City Pharmacy", specialty: "General Pharmacy" },
    { name: "Metro Drug Store", specialty: "Specialized Pharmacy" },
    { name: "Community Pharmacy", specialty: "Community Pharmacy" },
    { name: "Regional Medical Pharmacy", specialty: "Regional Pharmacy" },
  ]

  const medicalDocuments = [
    { type: "Blood Test", date: "11 Jun 2025", status: "AI Summary", statusColor: "bg-purple-100 text-purple-700" },
    { type: "MRI", date: "2 Jun 2025", status: "Reviewed", statusColor: "bg-orange-100 text-orange-700" },
    { type: "Consultation Notes", date: "29 May 2025", status: "Reviewed", statusColor: "bg-orange-100 text-orange-700" },
  ]

  const toggleFavorite = (index: number) => {
    setFavoritePharmacies(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const handleViewClinic = () => {
    setShowClinicView(true)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Here you can add logic to upload the file to your server
      console.log('Selected file:', file.name)
    }
  }

  const triggerFileInput = () => {
    const fileInput = document.getElementById('file-upload') as HTMLInputElement
    fileInput?.click()
  }

  if (showClinicView) {
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
          <div className="w-full max-w-7xl mx-auto space-y-6">
            
            {/* Clinic Information Section - Top Card */}
            <div 
              className="bg-white rounded-[14px] shadow-lg p-3 sm:p-4 md:p-6"
              style={{
                width: "100%",
                maxWidth: "1240px",
                height: "120px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#9577CA]">Healthy Life Clinic</h1>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">Cardiologist</p>
                </div>
              </div>
            </div>

            {/* Contact and Ordering Information Section - Second Card */}
            <div 
              className="bg-white rounded-[15px] shadow-lg p-3 sm:p-4 md:p-6"
              style={{
                width: "100%",
                maxWidth: "1270px",
                height: "250px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#9577CA] mb-3 sm:mb-4">Contact & Ordering Information</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-xs sm:text-sm">Owner Name:</span>
                    {/* <input
                      type="text"
                      placeholder="Owner Name"
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-xs sm:text-sm"
                    /> */}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-xs sm:text-sm">Pharmacist Name:</span>
                    {/* <input
                      type="text"
                      placeholder="Pharmacist Name"
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-xs sm:text-sm"
                    /> */}
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-xs sm:text-sm">Ordering contact phone:</span>
                    <div className="flex-1">
                      {/* <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone)}
                        inputClass="!w-full !px-2 !sm:px-3 !py-1 !sm:py-2 !bg-white/50 !border-2 !border-purple-200 !rounded-lg !text-gray-700 !placeholder-gray-500 !focus:outline-none !focus:border-purple-400 !focus:ring-2 !focus:ring-purple-100 !transition-all !duration-200 !hover:border-purple-300 !text-xs !sm:text-sm"
                        containerClass="!w-full"
                        buttonClass="!bg-purple-200 !border-purple-200 !rounded-l-lg"
                        dropdownClass="!bg-white !border-purple-200 !rounded-lg"
                        placeholder="Phone Number"
                      /> */}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-xs sm:text-sm">Ordering contact whatsapp:</span>
                    <div className="flex-1">
                      {/* <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={(phone) => setPhoneNumber(phone)}
                        inputClass="!w-full !px-2 !sm:px-3 !py-1 !sm:py-2 !bg-white/50 !border-2 !border-purple-200 !rounded-lg !text-gray-700 !placeholder-gray-500 !focus:outline-none !focus:border-purple-400 !focus:ring-2 !focus:ring-purple-100 !transition-all !duration-200 !hover:border-purple-300 !text-xs !sm:text-sm"
                        containerClass="!w-full"
                        buttonClass="!bg-purple-200 !border-purple-200 !rounded-l-lg"
                        dropdownClass="!bg-white !border-purple-200 !rounded-lg"
                        placeholder="WhatsApp Number"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-600 w-full sm:w-32 text-xs sm:text-sm">Location (Google Maps link):</span>
                    {/* <input
                      type="text"
                      placeholder="Google Maps Link"
                      className="flex-1 px-2 sm:px-3 py-1 sm:py-2 bg-white/50 border-2 border-purple-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all duration-200 hover:border-purple-300 text-xs sm:text-sm"
                    /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Upload & Store Medical Record Section - Third Card */}
            <div 
              className="bg-white rounded-[14px] shadow-lg p-3 sm:p-4 md:p-6"
              style={{
                width: "100%",
                maxWidth: "1270px",
                height: "140px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#9577CA] mb-3 sm:mb-4">Upload & Store Medical Record</h2>
              <div className="flex items-center h-12 sm:h-16 w-full">
                {/* Hidden file input */}
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button 
                  onClick={triggerFileInput}
                  className="flex items-center w-full space-x-2 sm:space-x-3 px-3 sm:px-6 py-2 sm:py-3 bg-[#9577CA] text-white rounded-lg hover:bg-[#8B6BC0] transition-colors ml-0"
                >
                  <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div className="text-left">
                    <div className="font-medium text-xs sm:text-sm">
                      {selectedFile ? selectedFile.name : "Upload File"}
                    </div>
                    <div className="text-xs opacity-90">
                      {selectedFile ? "File selected successfully" : "Analyze and store medical documents"}
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* View, Search & Manage Medical Documents Section - Bottom Card */}
            <div 
              className="bg-white rounded-[14px] shadow-lg p-3 sm:p-4 md:p-6"
              style={{
                width: "100%",
                maxWidth: "1270px",
                height: "333px",
                borderWidth: "0.5px",
                borderColor: "#E5E7EB"
              }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#9577CA] mb-3 sm:mb-4">View, Search & Manage Medical Documents</h2>
              
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-4 pb-2 border-b border-gray-200">
                <div className="font-medium text-gray-700 text-xs sm:text-sm">Document Type</div>
                <div className="font-medium text-gray-700 text-xs sm:text-sm">Date</div>
                <div className="font-medium text-gray-700 text-xs sm:text-sm">Status</div>
                <div className="font-medium text-gray-700 text-xs sm:text-sm">Actions</div>
              </div>

              {/* Table Body */}
              <div className="space-y-2 sm:space-y-3">
                {medicalDocuments.map((doc, index) => (
                  <div key={index} className="grid grid-cols-4 gap-2 sm:gap-4 items-center py-1 sm:py-2">
                    <div className="text-gray-800 text-xs sm:text-sm">{doc.type}</div>
                    <div className="text-gray-600 text-xs sm:text-sm">{doc.date}</div>
                    <div>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${doc.statusColor}`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
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
      <div className="relative z-10 flex min-h-screen w-full flex-col p-2 sm:p-4 md:p-6 lg:p-8">
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
          {/* Add Pharmacy Form - Mobile First */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg border bg-white p-3 sm:p-4 md:p-6 shadow-lg">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl lg:text-2xl font-bold text-[#9577CA]">Add Pharmacy</h2>
              <form className="space-y-3 sm:space-y-4">
                {/* Pharmacy Name */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pharmacy Name"
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

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
                </div>

                {/* Pharmacy Registration ID */}
                <div className="relative">
                  <Mail className="absolute left-2 sm:left-3 top-1/2 h-3 w-3 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pharmacy Registration ID"
                    className="h-10 sm:h-12 w-full rounded-lg border border-gray-300 pl-8 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#9577CA]"
                  />
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

          {/* Pharmacy List Section */}
          <div className="w-full lg:w-1/2">
            {/* Toggle Buttons */}
            <div className="mb-4 sm:mb-6 flex justify-center space-x-2 sm:space-x-4">
              <button
                type="button"
                className={`h-8 sm:h-10 w-24 sm:w-32 rounded-full text-xs sm:text-sm font-medium ${
                  selectedPharmacyType === "all" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA]"
                }`}
                onClick={() => setSelectedPharmacyType("all")}
              >
                All Pharmacy
              </button>
              <button
                type="button"
                className={`h-8 sm:h-10 w-24 sm:w-32 rounded-full text-xs sm:text-sm font-medium ${
                  selectedPharmacyType === "prefer" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA]"
                }`}
                onClick={() => setSelectedPharmacyType("prefer")}
              >
                Prefer Pharmacy
              </button>
            </div>

            {/* Pharmacy Cards List */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {(() => {
                const filteredPharmacies = pharmacyCards.filter((pharmacy, index) => {
                  return selectedPharmacyType === "all" || favoritePharmacies.has(index);
                });

                if (selectedPharmacyType === "prefer" && filteredPharmacies.length === 0) {
                  return (
                    <div key="no-favorites" className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                      <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mb-3 sm:mb-4" />
                      <h3 className="text-base sm:text-lg font-medium text-white mb-2">No Favorite Pharmacies</h3>
                      {/* <p className="text-xs sm:text-sm text-gray-500 px-3 sm:px-4">Click the heart icon on any pharmacy card to add them to your favorites.</p> */}
                    </div>
                  );
                }

                return filteredPharmacies.map((pharmacy, index) => {
                  const originalIndex = pharmacyCards.findIndex(p => p === pharmacy);
                  return (
                    <div
                      key={originalIndex}
                      className="flex w-full flex-col rounded-lg bg-white p-3 sm:p-4 shadow-md"
                    >
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">{pharmacy.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{pharmacy.specialty}</p>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div
                            className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 bg-white cursor-pointer transition-all duration-200 hover:scale-110"
                            style={{ 
                              borderColor: "#9577CA",
                              backgroundColor: favoritePharmacies.has(originalIndex) ? "#9577CA" : "white"
                            }}
                            onClick={() => toggleFavorite(originalIndex)}
                          >
                            <Heart 
                              className={`h-4 w-4 sm:h-6 sm:w-6 transition-colors duration-200 ${
                                favoritePharmacies.has(originalIndex) ? "text-white fill-white" : "text-[#9577CA]"
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
                        onClick={handleViewClinic}
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
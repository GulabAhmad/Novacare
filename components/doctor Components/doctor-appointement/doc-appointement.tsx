"use client"
import Image from "next/image"
import { useState } from "react"

export default function Appointment() {
  const [selectedDate, setSelectedDate] = useState(14)
  const [selectedTime, setSelectedTime] = useState("12.00")

  const dates = [
    { day: 14, label: "MON" },
    { day: 16, label: "WED" },
    { day: 17, label: "THU" },
    { day: 18, label: "FRI" },
    { day: 19, label: "SAT" },
  ]

  const timeSlots = ["08.00", "10.00", "11.00", "12.00", "14.00", "16.00", "18.00", "22.00"]

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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-start justify-start p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* First Doctor Card and Reminder */}
        <div className="w-full max-w-md space-y-4">
          {/* Doctor Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg px-4 sm:px-8 md:px-16 py-6 sm:py-10 md:py-14 text-center w-full sm:w-[900px] mx-auto">
            <h1 className="font-outfit text-base sm:text-lg md:text-xl font-medium text-[#9577CA] mb-1 sm:mb-2 mt-1 sm:mt-2">Dr. Niles Peppertrout</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">Cardiologist</p>
          </div>

          {/* Create Reminder Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-white px-4 py-3">
              <h2 className="text-[#9577CA] font-medium text-sm sm:text-base">Create Reminder</h2>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Date Selection */}
              <div className="flex justify-between gap-1">
                {dates.map((date) => (
                  <button
                    key={date.day}
                    onClick={() => setSelectedDate(date.day)}
                    className={`flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedDate === date.day
                        ? "bg-[#9577CA] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span className="font-bold">{date.day}</span>
                    <span className="text-xs">{date.label}</span>
                  </button>
                ))}
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedTime === time ? "bg-[#9577CA] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* Update Button */}
              <button className="w-full py-3 bg-[#9577CA] text-white font-medium rounded-full text-sm sm:text-base hover:bg-[#8B6BC0] transition-colors">
                Update
              </button>
            </div>
          </div>
        </div>

        {/* Second Doctor Card and Reminder (Duplicate) */}
        <div className="w-full max-w-md space-y-4">
          {/* Doctor Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg px-4 sm:px-8 md:px-16 py-6 sm:py-10 md:py-14 text-center w-full sm:w-[900px] mx-auto">
            <h1 className="font-outfit text-base sm:text-lg md:text-xl font-medium text-[#9577CA] mb-1 sm:mb-2 mt-1 sm:mt-2">Dr. Niles Peppertrout</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400">Cardiologist</p>
          </div>

          {/* Create Reminder Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-white px-4 py-3">
              <h2 className="text-[#9577CA] font-medium text-sm sm:text-base">Create Reminder</h2>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              {/* Date Selection */}
              <div className="flex justify-between gap-1">
                {dates.map((date) => (
                  <button
                    key={`second-${date.day}`}
                    onClick={() => setSelectedDate(date.day)}
                    className={`flex flex-col items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedDate === date.day
                        ? "bg-[#9577CA] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span className="font-bold">{date.day}</span>
                    <span className="text-xs">{date.label}</span>
                  </button>
                ))}
              </div>

              {/* Time Selection */}
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={`second-${time}`}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedTime === time ? "bg-[#9577CA] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              {/* Update Button */}
              <button className="w-full py-3 bg-[#9577CA] text-white font-medium rounded-full text-sm sm:text-base hover:bg-[#8B6BC0] transition-colors">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
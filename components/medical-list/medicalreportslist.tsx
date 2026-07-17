"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Search, Pencil, MoreVertical, Folder } from "lucide-react"
import { useState } from "react"

const medicalreportslistcomponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState("Clinical Records")

  // Data for categories and records to populate the UI
  const categories = [
    { title: "Clinical Records", colorClass: "text-purple-400" },
    { title: "Lab Reports", colorClass: "text-blue-500" },
    { title: "Imaging & Diagnostic Reports", colorClass: "text-green-500" },
    { title: "Prescription Records", colorClass: "text-red-500" },
    { title: "Others", colorClass: "text-orange-500" },
  ]

  const clinicalRecords = [
    { title: "Record Vitals", doctor: "Dr.Omary Fahim", date: "Nov 03, 2025" },
    { title: "Doctor Consultation Notes", doctor: "Dr.Omary Fahim", date: "Nov 03, 2025" },
    { title: "Progress notes and follow-ups", doctor: "Dr.Omary Fahim", date: "Nov 03, 2025" },
  ]

  const labReports = [
    { title: "Blood tests", doctor: "Dr.Omary Fahim", date: "Nov 08, 2025" },
    { title: "Urine", doctor: "Dr.Omary Fahim", date: "Nov 08, 2025" },
    { title: "Biopsy or pathology reports", doctor: "Dr.Omary Fahim", date: "Nov 08, 2025" },
    { title: "Stool analysis", doctor: "Dr.Omary Fahim", date: "Nov 03, 2025" },
  ]

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName)
  }

  return (
    <div className="min-h-screen w-full font-sans flex flex-col items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Search Bar */}
        <div 
          className="bg-white shadow-sm flex items-center mb-8 mt-8 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16"
          style={{
            width: 'calc(100% - 2rem)',
            maxWidth: '1100px',
            height: '53px',
            borderRadius: '400px',
            fontFamily: 'Poppins, sans-serif'
          }}
        >
        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 ml-4 sm:ml-6" />
        <Input
          type="text"
          placeholder="Search"
          className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base px-3 sm:px-6 py-2 sm:py-4 bg-transparent"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white mr-2 sm:mr-4"
        >
          <Pencil className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
        </Button>
      </div>

      {/* Category Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8 px-4">
        {categories.map((category, index) => (
          <Card key={index} className="p-4 rounded-xl shadow-sm bg-white border-0">
            <CardContent className="p-0 flex justify-center items-center w-full">
              <h4 
                className={`text-lg font-semibold ${category.colorClass}`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {category.title}
              </h4>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="w-full max-w-6xl flex flex-wrap gap-3 mb-8 px-4">
        <Button 
          className="px-6 py-2 text-white shadow-sm"
          style={{ 
            backgroundColor: activeButton === "Clinical Records" ? '#9577CA' : 'white',
            color: activeButton === "Clinical Records" ? 'white' : '#9577CA',
            borderRadius: '500px',
            fontFamily: 'Poppins, sans-serif',
            border: activeButton === "Clinical Records" ? 'none' : '1px solid #9577CA'
          }}
          onClick={() => handleButtonClick("Clinical Records")}
        >
          Clinical Records
        </Button>
        <Button 
          className="px-6 py-2 text-white shadow-sm"
          style={{ 
            backgroundColor: activeButton === "Lab Reports" ? '#9577CA' : 'white',
            color: activeButton === "Lab Reports" ? 'white' : '#9577CA',
            borderRadius: '500px',
            fontFamily: 'Poppins, sans-serif',
            border: activeButton === "Lab Reports" ? 'none' : '1px solid #9577CA'
          }}
          onClick={() => handleButtonClick("Lab Reports")}
        >
          Lab Reports
        </Button>
        <Button 
          className="px-6 py-2 text-white shadow-sm"
          style={{ 
            backgroundColor: activeButton === "Others" ? '#9577CA' : 'white',
            color: activeButton === "Others" ? 'white' : '#9577CA',
            borderRadius: '500px',
            fontFamily: 'Poppins, sans-serif',
            border: activeButton === "Others" ? 'none' : '1px solid #9577CA'
          }}
          onClick={() => handleButtonClick("Others")}
        >
          Others
        </Button>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-6xl px-4">
        {/* Clinical Records Section */}
        <div className="mb-8">
          <h3 
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Clinical Records
          </h3>
          <Card className="rounded-xl shadow-sm p-0 bg-white border-0">
            {clinicalRecords.map((record, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 ${
                  index < clinicalRecords.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Folder className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p 
                      className="font-medium text-base"
                      style={{ color: '#9577CA', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {record.title}
                    </p>
                    <p 
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {record.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {record.date}
                  </span>
                  <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </div>

        {/* Lab Reports Section */}
        <div className="mb-8">
          <h3 
            className="text-xl font-semibold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Lab Reports
          </h3>
          <Card className="rounded-xl shadow-sm p-0 bg-white border-0">
            {labReports.map((record, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 ${
                  index < labReports.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Folder className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p 
                      className="font-medium text-base"
                      style={{ color: '#9577CA', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {record.title}
                    </p>
                    <p 
                      className="text-sm text-gray-500"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {record.doctor}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {record.date}
                  </span>
                  <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </Button>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
}

export default medicalreportslistcomponent;
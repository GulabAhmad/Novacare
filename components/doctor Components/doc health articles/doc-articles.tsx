"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Pencil } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import HealthBlog from "./doc-healthblog"

export default function HealthDashboard() {
  const [showHealthBlog, setShowHealthBlog] = useState(false);
  const [activeButton, setActiveButton] = useState('All Notes');

  const recommendations = [
    {
      id: 1,
      image: "/assets/images/webmetacura/blood pressure.jpg",
      title: "5 Proven Ways to Lower Blood Pressure Without Medication",
      source: <span style={{ color: "#000" }}>MetaCura Health</span>,
      date: <span style={{ color: "#000" }}>May 27</span>,
    },
    {
      id: 2,
      image: "/assets/images/webmetacura/sleep icon.jpg",
      title: "The Power of Sleep: Why 8 Hours Matter More",
      source: <span style={{ color: "#000" }}>MetaCura Health</span>,
      date: <span style={{ color: "#000" }}>May 27</span>,
    },
    {
      id: 3,
      image: "/assets/images/webmetacura/diabaties.jpg",
      title: "Managing Diabetes Naturally with Diet & Movement",
      source: <span style={{ color: "#000" }}>MetaCura Health</span>,
      date: <span style={{ color: "#000" }}>May 27</span>,
    },
  ]

  const handleTitleClick = () => {
    setShowHealthBlog(true);
  };

  const handleBackToArticles = () => {
    setShowHealthBlog(false);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  if (showHealthBlog) {
    return (
      <div className="relative min-h-screen">
        <div className="pt-16 pb-20">
          <HealthBlog onBackToArticles={handleBackToArticles} />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full font-sans p-0 sm:p-0 flex flex-col items-start overflow-hidden" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
      {/* Background image absolutely positioned to cover entire screen */}
      <div
        className="fixed inset-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/assets/images/webmetacura/metacura splash screen.png')",
        }}
        aria-hidden="true"
      />
      {/* Header/Greeting */}
      <div className="w-full max-w-4xl flex flex-col items-start mb-6 mt-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl font-semibold text-gray-800" style={{ fontFamily: 'Albert Sans, sans-serif' }}>Good Morning</h1>
        <span className="text-xl font-medium text-[#9577CA]" style={{ fontFamily: 'Albert Sans, sans-serif' }}>Ashraf</span>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-4xl mb-6 px-4 sm:px-6 md:px-8 lg:px-12">
        <div
          className="bg-white shadow-md p-1 flex items-center rounded-full overflow-hidden"
        >
          <Input
            type="text"
            placeholder="Search health topics, wellness tips, or updates..."
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-lg px-4 py-3 bg-transparent"
            style={{ fontFamily: 'Albert Sans, sans-serif' }}
          />
          <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 hover:bg-gray-100">
            <Pencil className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="w-full max-w-4xl flex flex-wrap justify-start gap-3 mb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <Button
          onClick={() => handleButtonClick('All Notes')}
          className="px-6 py-2 hover:opacity-90 transition-all duration-200"
          style={{ 
            fontFamily: 'Albert Sans, sans-serif', 
            borderRadius: '500px',
            backgroundColor: activeButton === 'All Notes' ? '#9577CA' : 'white',
            color: activeButton === 'All Notes' ? 'white' : '#9577CA',
            border: activeButton === 'All Notes' ? 'none' : '1px solid #9577CA'
          }}
        >
          All Notes
        </Button>
        <Button
          onClick={() => handleButtonClick('Self Notes')}
          className="px-6 py-2 hover:opacity-90 transition-all duration-200"
          style={{ 
            fontFamily: 'Albert Sans, sans-serif', 
            borderRadius: '500px',
            backgroundColor: activeButton === 'Self Notes' ? '#9577CA' : 'white',
            color: activeButton === 'Self Notes' ? 'white' : '#9577CA',
            border: activeButton === 'Self Notes' ? 'none' : '1px solid #9577CA'
          }}
        >
          Self Notes
        </Button>
        <Button
          onClick={() => handleButtonClick('Doctor Notes')}
          className="px-6 py-2 hover:opacity-90 transition-all duration-200"
          style={{ 
            fontFamily: 'Albert Sans, sans-serif', 
            borderRadius: '500px',
            backgroundColor: activeButton === 'Doctor Notes' ? '#9577CA' : 'white',
            color: activeButton === 'Doctor Notes' ? 'white' : '#9577CA',
            border: activeButton === 'Doctor Notes' ? 'none' : '1px solid #9577CA'
          }}
        >
          Doctor Notes
        </Button>
        <Button
          onClick={() => handleButtonClick('Doctor Notes 2')}
          className="px-6 py-2 hover:opacity-90 transition-all duration-200"
          style={{ 
            fontFamily: 'Albert Sans, sans-serif', 
            borderRadius: '500px',
            backgroundColor: activeButton === 'Doctor Notes 2' ? '#9577CA' : 'white',
            color: activeButton === 'Doctor Notes 2' ? 'white' : '#9577CA',
            border: activeButton === 'Doctor Notes 2' ? 'none' : '1px solid #9577CA'
          }}
        >
          Doctor Notes
        </Button>
      </div>

      {/* Recommendations Section */}
      <div className="w-full max-w-4xl mb-8 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Albert Sans, sans-serif' }}>Recommendations</h3>
          <Button variant="ghost" className="text-white hover:text-v0-purple/90 px-0" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            See All
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          {recommendations.map((item) => (
            <Card key={item.id} className="rounded-xl shadow-md p-4 bg-white flex items-center gap-4 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={handleTitleClick}>
              <Image
                src={item.image}
                alt={item.title}
                width={64}
                height={64}
                className="rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-1 cursor-pointer hover:text-purple-600 transition-colors" style={{ fontFamily: 'Albert Sans, sans-serif', color: '#9577CA', fontWeight: 'bold' }}>
                  {item.title}
                </h4>
                <div className="flex items-center text-sm text-gray-500" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
                  <span>{item.source}</span>
                  <span className="mx-2">•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Notepad() {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const [showTodoNotepad, setShowTodoNotepad] = useState(false)

  const handleGetStarted = () => {
    setShowTodoNotepad(true)
  }

  // Import and render TodoNotepad component when showTodoNotepad is true
  if (showTodoNotepad) {
    const TodoNotepad = require('./todo-notepad').default
    return <TodoNotepad />
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Splash Screen"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Notepad Image */}
        <div className="relative mb-8">
          <Image
            src="/assets/images/webmetacura/notepad image.png"
            alt="Notepad Illustration"
            width={320}
            height={320}
            className="object-contain"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center mb-8">
          <h1 className="font-inter font-semibold text-[35px] leading-[100%] tracking-[0px] text-[#9577CA] mb-2 drop-shadow-lg">
            What's your mind
          </h1>
          <p className="mt-8 font-albert-sans font-normal text-[20px] leading-[100%] tracking-[0%] text-white text-center drop-shadow-lg">
            Write it down
          </p>
        </div>

        {/* Get Started Button */}
        <button 
          onClick={handleGetStarted}
          className="w-[200px] h-[42px] bg-[#9577CA] hover:bg-[#8A6BB8] text-white font-semibold rounded-[15px] text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}
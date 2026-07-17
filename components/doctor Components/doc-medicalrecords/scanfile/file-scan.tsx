'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const filescan: React.FC = () => {
  const router = useRouter();
  
  const handleGetStarted = () => {
    router.push('/doctor/medical-records/scan-mobile');
  };
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Audio Image - Main Front Element */}
        <div className="relative mb-6 sm:mb-8 md:mb-10 flex items-center justify-center">
          {/* Audio image */}
          <Image
            src="/assets/images/webmetacura/scan file image.png"
            alt="Audio Files"
            width={400}
            height={250}
            className="object-contain opacity-90 z-10"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1
            className="mb-3 sm:mb-4 md:mb-6 text-[#9577CA] text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '35px',
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            Scan Files
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
          Scan prescriptions, lab reports, or any medical file using your camera
          </p>
          
          {/* Get Started Button */}
          <button 
            className="bg-[#9577CA] text-white font-semibold shadow-lg  transition-all duration-300 transform hover:scale-105"
            style={{
              width: '240px',
              height: '42px',
              borderRadius: '15px',
              opacity: 1
            }}
            onClick={handleGetStarted}
          >
            <span className="text-xs sm:text-sm md:text-base">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default filescan;
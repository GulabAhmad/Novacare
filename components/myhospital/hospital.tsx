'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import HospitalForm from './HospitalForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const HospitalComponent: React.FC = () => {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const [showHospitalForm, setShowHospitalForm] = useState(false);

  const handleGetStarted = () => {
    setShowHospitalForm(true);
  };

  if (showHospitalForm) {
    return <HospitalForm />;
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Hospital Image - Main Front Element */}
        <div className="relative mb-6 sm:mb-8 md:mb-10 flex items-center justify-center">
          {/* Background hospital image 2, behind and slightly larger */}
          <Image
            src="/assets/images/webmetacura/hospital image 2.png"
            alt="Hospital Background"
            width={340}
            height={230}
            className="object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 z-0"
            priority
          />
          {/* Foreground hospital image 1, shifted a little to the bottom, no drop shadow */}
          <Image
            src="/assets/images/webmetacura/hospital image.png"
            alt="Hospital"
            width={300}
            height={200}
            className="object-contain relative z-10 mt-40"
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
            Add Hospital
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
            You can add your hospital to stay connected and share your health records effortlessly
          </p>
          
          {/* Get Started Button */}
          <button 
            className="text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            style={{
              width: '240px',
              height: '42px',
              borderRadius: '15px',
              opacity: 1,
              backgroundColor: '#9577CA'
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

export default HospitalComponent;

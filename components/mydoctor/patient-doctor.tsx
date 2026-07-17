'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PreferredDoctor from '../profile/PreferredDoctor';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const DoctorComponent: React.FC = () => {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const [showPreferredDoctor, setShowPreferredDoctor] = useState(false);

  const handleGetStarted = () => {
    setShowPreferredDoctor(true);
  };

  if (showPreferredDoctor) {
    return <PreferredDoctor />;
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
        {/* Doctor Image - Main Front Element */}
        <div className="relative mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/assets/images/webmetacura/doctor img.png"
            alt="Doctor"
            width={300}
            height={200}
            className="object-contain drop-shadow-2xl"
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
            Add Doctor
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
            You can add your doctor to stay connected and share your health records effortlessly
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

export default DoctorComponent;

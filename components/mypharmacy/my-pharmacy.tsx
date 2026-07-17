'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PharmacyForm from './pharmacyform';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const HospitalComponent: React.FC = () => {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const [showHospitalForm, setShowHospitalForm] = useState(false);

  const handleGetStarted = () => {
    setShowHospitalForm(true);
  };

  if (showHospitalForm) {
    return <PharmacyForm />;
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
         
          <Image
            src="/assets/images/webmetacura/pharmacy image.png"
            alt="Hospital"
            width={300}
            height={200}
            className="object-contain relative z-10 mt-20"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1
            className="mb-3 sm:mb-4 md:mb-6 text-[#9577CA] text-center font-inter font-semibold text-[35px] leading-[100%] tracking-[0px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontStyle: 'Semi Bold',
              fontSize: '35px',
              lineHeight: '100%',
              letterSpacing: '0px',
              textAlign: 'center',
            }}
          >
            Add Pharmacy
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
          Add your pharmacy to order via WhatsApp and share prescriptions instantly

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

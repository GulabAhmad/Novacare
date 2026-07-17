'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const getstartedcomponent: React.FC = () => {
  const router = useRouter();
  const themeConfig = useSelector((state: RootState) => state.themeConfig);

  const handleCallClick = () => {
    router.push('/patient-agents/call');
  };

  const handleChatClick = () => {
    router.push('/patient-agents/chat');
  };

  return (
    <div className="relative min-h-screen w-full  bg-cover bg-center">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Splash Screen"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen  w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center space-y-8 text-center font-inter">
          {/* Microphone Icon with Ellipse Background */}
          <div className="relative">
            <div 
              className="flex h-[120px] w-[120px] items-center justify-center rounded-full"
              style={{ backgroundColor: '#9577CA' }}
            >
              <Image
                src="/assets/images/webmetacura/Mic.png"
                alt="Microphone Icon"
                width={64}
                height={64}
                className="text-white"
              />
            </div>
          </div>

          {/* Agent Name */}
          <div className="space-y-2">
            <h1
              className="font-inter font-semibold text-[35px] leading-[100%] tracking-[0px] text-center text-white"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, letterSpacing: '0px' }}
            >
              Mycare Doctor Agent
            </h1>
            <p className="text-lg text-white/90 md:text-xl lg:text-2xl">
              Let's chat with AI
            </p>
          </div>

          {/* Action Buttons */}
          <div className="h-[120px] flex flex-col justify-end px-4">
            <div className="flex flex-col justify-end space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <button 
                onClick={handleChatClick}
                className="h-[42px] w-[140px] rounded-[15px] bg-red-500 text-lg font-semibold text-white transition-all duration-300 hover:bg-red-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Chat
              </button>
              <button 
                onClick={handleCallClick}
                className="h-[42px] w-[140px] rounded-[15px] bg-green-500 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getstartedcomponent;

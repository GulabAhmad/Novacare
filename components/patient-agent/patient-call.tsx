'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

const patientcallcomponent: React.FC = () => {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const router = useRouter();
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [callStatus, setCallStatus] = useState('Ringing');

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isCallActive) {
      interval = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCallActive]);

  const handleStartCall = async () => {
    try {
      setCallStatus('Connecting...');
      // Simulate call connection delay
      setTimeout(() => {
        setIsCallActive(true);
        setCallStatus('Connected');
        setCallDuration(0);
      }, 2000);
    } catch (error) {
      console.error('Failed to start call:', error);
      setCallStatus('Failed to connect');
    }
  };

  const handleEndCall = async () => {
    try {
      setIsCallActive(false);
      setCallStatus('Call ended');
      setCallDuration(0);
      
      // Navigate to call history after a short delay
      setTimeout(() => {
        router.push('/patient-agents/callhistory');
      }, 1500);
    } catch (error) {
      console.error('Failed to end call:', error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Auto-start call when component mounts
  useEffect(() => {
    handleStartCall();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center">
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
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="flex flex-col items-center space-y-8 text-center font-inter">
          {/* Microphone Icon with Ellipse Background */}
          <div className="relative">
            <div 
              className={`flex h-[120px] w-[120px] items-center justify-center rounded-full transition-all duration-300 ${
                isCallActive ? 'animate-pulse' : ''
              }`}
              style={{ backgroundColor: '#9577CA' }}
            >
              <Image
                src="/assets/images/webmetacura/Mic.png"
                alt="Microphone Icon"
                width={48}
                height={48}
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
              Let's chat with AI Agent
            </p>
          </div>

          {/* Call Status Indicator */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center">
              <div 
                className="flex h-[52px] w-[335px] items-center justify-center rounded-[15px] border border-white/20 bg-white/10 backdrop-blur-sm"
                style={{ opacity: 0.44 }}
              >
                <span className="text-lg font-semibold text-white font-inter">
                  {callStatus}
                </span>
              </div>
            </div>

            {/* Call Duration */}
            {isCallActive && (
              <div className="text-white text-xl font-semibold">
                {formatTime(callDuration)}
              </div>
            )}

            {/* Call Controls */}
            <div className="flex space-x-4">
              {!isCallActive ? (
                <button
                  onClick={handleStartCall}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  Start Call
                </button>
              ) : (
                <button
                  onClick={handleEndCall}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
                >
                  End Call
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default patientcallcomponent;



"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/webmetacura/metacura splash screen.png')"
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="w-[165px] h-[165px] flex items-center justify-center mx-auto mb-8">
          <Image
            src="/assets/images/webmetacura/metacuraicon.png"
            alt="Metacura Icon"
            width={120}
            height={120}
            className="object-contain w-[120px] h-[120px] opacity-100 rotate-0"
            priority
          />
        </div>

        {/* Headings */}
        <div className="space-y-4 mb-12">
          <div className="text-white/50 text-xl font-light tracking-widest uppercase">
            
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-[-20px] font-[Outfit,sans-serif]">
            Welcome to Metacura
          </h1>
          <div className="text-white/70 md:text-2xl font-medium font-semibold mt-4">
            Your Smart Health Companion
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-8 m-0 p-0">
          <button
            onClick={() => router.push('/signup')}
            className="px-10 py-3 font-medium text-white rounded-full"
            style={{ background: '#9577CA' }}
          >
            Signup
          </button>
          <button
            onClick={() => router.push('/login')}
            className="px-10 py-3 font-medium text-white rounded-full"
            style={{ background: '#9577CA' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
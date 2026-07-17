'use client';

import React from 'react';
import Image from 'next/image';
import { Eye, Heart, ThumbsUp, ArrowLeft } from 'lucide-react';

interface HealthBlogProps {
  onBackToArticles?: () => void;
}

export default function HealthBlog({ onBackToArticles }: HealthBlogProps) {
  return (
    <div className="relative min-h-screen w-full font-[Plus_Jakarta_Sans,sans-serif]">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Purple mountain landscape background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Article Content */}
        <div className="flex-1 p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
            {/* Article Header */}
            <div className="mb-8 px-4">
              <h1 className="text-4xl font-semibold text-[#9577ca] mb-6 leading-tight">
                5 Proven Ways to Lower Blood <br /> Pressure Without Medication
              </h1>

              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 bg-[#9577ca] rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-[#888ea8] font-medium">MetaCura Insights</span>
                <span className="text-[#888ea8]">•</span>
                <span className="text-[#888ea8]">May 26</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-6 px-4">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src="/assets/images/webmetacura/blood pressure.jpg"
                  alt="Medical equipment including blood pressure monitor, tablet, and stethoscope on wooden surface"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-[#888ea8] mt-3 text-center">
                Photo by Lewis Sekrup (Closing goal in the match).
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-[#2b3340] leading-relaxed mb-6 text-left px-4">
                In today's fast-paced world, hypertension is becoming increasingly common — even among young adults. The
                good news? Many cases can be managed without medication.
              </p>
              <p className="text-[#2b3340] leading-relaxed mb-6 text-left px-4">
                From daily walking and stress management to diet adjustments and salt reduction, this article shares
                five evidence-backed strategies to lower your blood pressure naturally.
              </p>
              <p className="text-[#2b3340] leading-relaxed mb-8 text-left px-4">
                Learn how small lifestyle tweaks can lead to big improvements — and when it's time to consult your
                doctor.
              </p>
            </div>

            {/* Engagement Bar */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#9577ca] rounded-full px-8 py-3 flex items-center gap-6 shadow-lg">
                <div className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="font-medium">2.4K</span>
                </div>
                <div className="w-px h-6 bg-white/30"></div>
                <div className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity cursor-pointer">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">500</span>
                </div>
              </div>
            </div>

            {/* Back to Articles Button */}
            {onBackToArticles && (
              <div className="flex justify-end mt-8">
                <button 
                  onClick={onBackToArticles}
                  className="px-4 py-2 bg-[#9577CA] shadow-lg text-white hover:bg-[#9577CA]/90 transition-all duration-300 flex items-center gap-2"
                  style={{ fontFamily: 'Albert Sans, sans-serif', borderRadius: '400px' }}
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

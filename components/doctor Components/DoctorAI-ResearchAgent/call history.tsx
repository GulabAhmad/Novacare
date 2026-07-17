'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const callhistorycomponent: React.FC = () => {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

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
                <div className="w-full max-w-4xl grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          {/* Total Call Time Card */}
          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#FAE6FA' }}>
            <div className="text-xs font-medium text-gray-700 mb-1">Total Call Time</div>
            <div className="text-2xl font-bold text-[#9577CA]">10 min</div>
          </div>
     
          {/* Total Questions Card */}
          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#F8F4FF' }}>
            <div className="text-xs font-medium text-gray-700 mb-1">Total Questions</div>
            <div className="text-2xl font-bold text-[#9577CA]">9</div>
          </div>
     
          {/* Total Words Card */}
          <div className="rounded-lg p-4 shadow-sm" style={{ backgroundColor: '#E6E6F8' }}>
            <div className="text-xs font-medium text-gray-700 mb-1">Total Words</div>
            <div className="text-2xl font-bold text-[#9577CA]">145 words</div>
          </div>
        </div>
    
        {/* Call Detail Summary Card */}
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-lg font-semibold text-[#9577CA] mb-6">Call Detail Summary</h2>
    
          <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Who is experienced in treating various</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones,
              joints, muscles and other musculoskeletal systems..
            </p>
          </div>
    
          <div className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">Who is experienced in treating various</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones,
              joints, muscles and other musculoskeletal systems..
            </p>
          </div>
    
          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Who is experienced in treating various</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones,
              joints, muscles and other musculoskeletal systems..
            </p>
          </div>
        </div>

        {/* Back Button - Positioned below and on the right */}
        <div className="w-full max-w-4xl flex justify-end mt-6">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#9577CA] text-white hover:bg-[#7e5fcf] transition-colors"
          >
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export  default callhistorycomponent;
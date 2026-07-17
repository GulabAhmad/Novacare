'use client';

import React from 'react';
import Image from 'next/image';

const Prescription = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Full Screen Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Patient Information */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 space-y-6">
          {/* Patient Info Card */}
          <div className="bg-white backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              {/* <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-lg">A</span>
              </div> */}
              <div>
                <h2 className="text-xl font-semibold text-[#9577CA]">Ashraf</h2>
                <p className="text-black">ashraf@metacura.com</p>
              </div>
            </div>
          </div>

          {/* Vital Signs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Vital Signs</h3>
            
                         <div className="flex flex-col xl:flex-row gap-4 max-w-full">
                               {/* Blood Pressure - Larger Card */}
                <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-lg w-full xl:w-[280px] h-[340px] flex-shrink-0">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#9577CA' }}>
                      <Image
                        src="/assets/images/webmetacura/blood_pressure.png"
                        alt="Blood Pressure"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <p className="text-black text-sm mb-2">Blood Pressure</p>
                    <p className="text-2xl font-bold text-black mb-3">130/85 mmHg</p>
                    <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      Normal
                    </span>
                  </div>
                </div>

                {/* Right Side Cards Container */}
                <div className="flex flex-col gap-4 flex-1 min-w-0">
                                     {/* Heart Rate - Wider Card */}
                   <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-lg w-full max-w-[342px] h-[156px] flex-shrink-0">
                     <div className="flex flex-col items-center text-center h-full justify-center">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#9577CA' }}>
                         <Image
                           src="/assets/images/webmetacura/cardiology.png"
                           alt="Heart Rate"
                           width={24}
                           height={24}
                           className="w-8 h-8"
                         />
                       </div>
                       <p className="text-black text-sm mb-1">Heart Rate</p>
                       <p className="text-xl font-bold text-black mb-2">130/85 mmHg</p>
                       <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                         Normal
                       </span>
                     </div>
                   </div>

                   {/* Respiratory Rate - Wider Card */}
                   <div className="bg-white backdrop-blur-sm rounded-xl p-6 shadow-lg w-full max-w-[342px] h-[156px] flex-shrink-0">
                     <div className="flex flex-col items-center text-center h-full justify-center">
                       <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: '#9577CA' }}>
                         <Image
                           src="/assets/images/webmetacura/pulmonology.png"
                           alt="Respiratory Rate"
                           width={24}
                           height={24}
                           className="w-8 h-8"
                         />
                       </div>
                       <p className="text-black text-sm mb-1">Respiratory Rate</p>
                       <p className="text-xl font-bold text-black mb-2">130/85 mmHg</p>
                       <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                         Normal
                       </span>
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* This Month Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">This Month</h3>
            
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
               {/* On Pills */}
               <div 
                 className="bg-white shadow-lg flex flex-col items-center justify-center p-6"
                 style={{
                   width: "150px",
                   height: "200px",
                   borderRadius: "12px",
                   opacity: 1
                 }}
               >
                 <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#9577CA" }}>
                   <Image
                     src="/assets/images/webmetacura/Icon (1).png"
                     alt="Pill Icon"
                     width={32}
                     height={32}
                     className="w-8 h-8"
                   />
                 </div>
                 <div className="text-center">
                   <p className="text-2xl font-bold text-[#9577CA]">2</p>
                   <p className="text-sm text-gray-600">On Pills</p>
                 </div>
               </div>

               {/* In Appointment */}
               <div 
                 className="bg-white shadow-lg flex flex-col items-center justify-center p-6"
                 style={{
                   width: "150px",
                   height: "200px",
                   borderRadius: "12px",
                   opacity: 1
                 }}
               >
                 <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#9577CA" }}>
                   <Image
                     src="/assets/images/webmetacura/Icon.png"
                     alt="Peace Icon"
                     width={32}
                     height={32}
                     className="w-8 h-8"
                   />
                 </div>
                 <div className="text-center">
                   <p className="text-2xl font-bold text-[#9577CA]">14</p>
                   <p className="text-sm text-gray-600">In Appointment</p>
                 </div>
               </div>

               {/* Days Off */}
               <div 
                 className="bg-white shadow-lg flex flex-col items-center justify-center p-6"
                 style={{
                   width: "150px",
                   height: "200px",
                   borderRadius: "12px",
                   opacity: 1
                 }}
               >
                 <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#9577CA" }}>
                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <div className="text-center">
                   <p className="text-2xl font-bold text-[#9577CA]">3</p>
                   <p className="text-sm text-gray-600">Days Off</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Panel - Prescription */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8 flex items-center justify-center">
          <div className="w-full max-w-2xl">
           
             
              
              {/* Prescription Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/assets/images/webmetacura/prescription.png"
                  alt="Medical Prescription"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Prescription;

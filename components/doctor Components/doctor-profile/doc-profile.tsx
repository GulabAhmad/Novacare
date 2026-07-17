"use client"
import React, { useState } from 'react';

const ProfileDetails: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    medicalLicense: '',
    nationality: '',
    speciality: '',
    qualifications: '',
    experienceSummary: '',
    email: '',
    phone: '',
    practicingHospital: '',
    language: '',
    location: '',
  });

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          className="w-full h-full object-cover"
        />
      </div>
      
            {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl text-inter font-semibold text-[#9577CA] mb-8">Profile details</h2>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="First Name" 
              value={form.firstName} 
              onChange={(e) => setForm({...form, firstName: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              value={form.lastName} 
              onChange={(e) => setForm({...form, lastName: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
          <select 
            value={form.gender} 
            onChange={(e) => setForm({...form, gender: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          >
              <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
              <option value="Other">Other</option>
          </select>
            <input 
              type="text" 
              placeholder="Medical License No." 
              value={form.medicalLicense} 
              onChange={(e) => setForm({...form, medicalLicense: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Nationality" 
              value={form.nationality} 
              onChange={(e) => setForm({...form, nationality: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Speciality (3 Option)" 
              value={form.speciality} 
              onChange={(e) => setForm({...form, speciality: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Qualifications" 
              value={form.qualifications} 
              onChange={(e) => setForm({...form, qualifications: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <textarea 
              placeholder="Experience Summary" 
              value={form.experienceSummary} 
              onChange={(e) => setForm({...form, experienceSummary: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition resize-none" 
              
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={form.email} 
              onChange={(e) => setForm({...form, email: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
              </div>

          {/* Right Column */}
          <div className="space-y-4">
            <input 
              type="tel" 
              placeholder="Phone" 
              value={form.phone} 
              onChange={(e) => setForm({...form, phone: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Practicing Hospital" 
              value={form.practicingHospital} 
              onChange={(e) => setForm({...form, practicingHospital: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Language" 
              value={form.language} 
              onChange={(e) => setForm({...form, language: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            <input 
              type="text" 
              placeholder="Location" 
              value={form.location} 
              onChange={(e) => setForm({...form, location: e.target.value})} 
              className="w-full rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" 
            />
            
            {/* Map Display */}
            <div className="w-full h-42 rounded-lg overflow-hidden bg-white/90">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119425.828438!2d39.825183!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21d4c818deaa1%3A0xe15b4fb0d5a0b5e1!2sMecca%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
              </div>
            
            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <button 
                type="submit" 
                className="bg-[#9577CA] text-white font-semibold rounded-lg px-8 py-3 transition duration-200"
              >
                Submit
              </button>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

"use client"
import React, { useState } from 'react';
import Image from "next/image";

interface MedicalHistoryProps {
  onBack?: () => void;
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    allergies: '',
    smoking: '',
    diabetes: '',
    alcohol: '',
    hypertension: '',
    asthma: '',
    familyIllness: '',
    kidneyDisease: '',
    otherIllness: '',
    vaccinationHistory: '' as string | string[],
    immunizationHistory: '',
    immunizationHistoryList: [] as string[]
  });

  const [buttonStates, setButtonStates] = useState({
    allergies: 'yes',
    smoking: 'yes',
    diabetes: 'yes',
    alcohol: 'yes',
    hypertension: 'yes',
    asthma: 'yes',
    familyIllness: 'yes',
    kidneyDisease: 'yes',
    otherIllness: 'yes',
    vaccinationHistory: 'yes',
    immunizationHistory: 'yes'
  });

  const handleButtonClick = (field: string, value: 'yes' | 'no') => {
    setButtonStates(prev => ({ ...prev, [field]: value }));
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

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
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-8 bg-transparent">
        {/* Medical History Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Medical History</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-black font-semibold mb-2">Allergies?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('allergies', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.allergies === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('allergies', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.allergies === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Describe allergies"
                  value={formData.allergies}
                  onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Smoking?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('smoking', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.smoking === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('smoking', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.smoking === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="For how many years"
                  value={formData.smoking}
                  onChange={(e) => setFormData({...formData, smoking: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Diabetes?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('diabetes', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.diabetes === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('diabetes', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.diabetes === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Describe"
                  value={formData.diabetes}
                  onChange={(e) => setFormData({...formData, diabetes: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Alcohol?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('alcohol', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.alcohol === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('alcohol', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.alcohol === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="For how many years"
                  value={formData.alcohol}
                  onChange={(e) => setFormData({...formData, alcohol: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Hypertension readings?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('hypertension', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.hypertension === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('hypertension', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.hypertension === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Describe"
                  value={formData.hypertension}
                  onChange={(e) => setFormData({...formData, hypertension: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-black font-semibold mb-2">Asthma?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('asthma', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.asthma === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('asthma', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.asthma === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="For how many years"
                  value={formData.asthma}
                  onChange={(e) => setFormData({...formData, asthma: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Any Family illness?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('familyIllness', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.familyIllness === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('familyIllness', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.familyIllness === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Describe"
                  value={formData.familyIllness}
                  onChange={(e) => setFormData({...formData, familyIllness: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Kidney Disease?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('kidneyDisease', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.kidneyDisease === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('kidneyDisease', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.kidneyDisease === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="For how many years"
                  value={formData.kidneyDisease}
                  onChange={(e) => setFormData({...formData, kidneyDisease: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              <div>
                <label className="block text-black font-semibold mb-2">Any Other illness?</label>
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => handleButtonClick('otherIllness', 'yes')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.otherIllness === 'yes' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleButtonClick('otherIllness', 'no')}
                    className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                      buttonStates.otherIllness === 'no' 
                        ? 'bg-[#9577CA] text-white' 
                        : 'bg-white text-[#9577CA] border border-[#9577CA]'
                    }`}
                  >
                    No
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Describe"
                  value={formData.otherIllness}
                  onChange={(e) => setFormData({...formData, otherIllness: e.target.value})}
                  className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vaccination Section */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Vaccination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vaccination History */}
            <div>
              <label className="block text-black font-semibold mb-2">Vaccination History</label>
              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => handleButtonClick('vaccinationHistory', 'yes')}
                  className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                    buttonStates.vaccinationHistory === 'yes'
                      ? 'bg-[#9577CA] text-white'
                      : 'bg-white text-[#9577CA] border border-[#9577CA]'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleButtonClick('vaccinationHistory', 'no')}
                  className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                    buttonStates.vaccinationHistory === 'no'
                      ? 'bg-[#9577CA] text-white'
                      : 'bg-white text-[#9577CA] border border-[#9577CA]'
                  }`}
                >
                  No
                </button>
                <input
                  type="text"
                  placeholder="18 / 05 / 25"
                  className="w-42 rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              {/* Multiple Vaccination Inputs with Add Button */}
              {Array.isArray(formData.vaccinationHistory) ? (
                formData.vaccinationHistory.map((vaccine: string, idx: number) => (
                  <div key={idx} className="mb-2">
                    <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Vaccine"
                      value={vaccine}
                      onChange={(e) => {
                        const updated = Array.isArray(formData.vaccinationHistory) 
                          ? [...formData.vaccinationHistory]
                          : [formData.vaccinationHistory || ''];
                        updated[idx] = e.target.value;
                        setFormData({ ...formData, vaccinationHistory: updated });
                      }}
                      className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                    />
                    {formData.vaccinationHistory.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          const currentHistory = Array.isArray(formData.vaccinationHistory) 
                            ? formData.vaccinationHistory 
                            : [formData.vaccinationHistory || ''];
                          const updated = currentHistory.filter((_: string, i: number) => i !== idx); 
                          setFormData({ ...formData, vaccinationHistory: updated });
                        }}
                        className="text-red-500 px-2 py-1 rounded hover:bg-red-100"
                        title="Remove"
                      >
                        &times;
                      </button>
                    )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Vaccine"
                    value={formData.vaccinationHistory || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        vaccinationHistory: e.target.value,
                      })
                    }
                    className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                  />
                  <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => {
                  if (Array.isArray(formData.vaccinationHistory)) {
                    setFormData({
                      ...formData,
                      vaccinationHistory: [...formData.vaccinationHistory, ""],
                    });
                  } else if (formData.vaccinationHistory) {
                    setFormData({
                      ...formData,
                      vaccinationHistory: [formData.vaccinationHistory, ""],
                    });
                  } else {
                    setFormData({
                      ...formData,
                      vaccinationHistory: [""],
                    });
                  }
                }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9577CA] text-white text-xl focus:outline-none hover:bg-[#8B6BC0] transition"
                      title="Add"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {Array.isArray(formData.vaccinationHistory) && formData.vaccinationHistory.length > 0 && (
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Vaccine"
                    value=""
                    onChange={(e) => {
                      const currentHistory = Array.isArray(formData.vaccinationHistory) 
                        ? formData.vaccinationHistory 
                        : [formData.vaccinationHistory || ''];
                      const updated = [...currentHistory, e.target.value];
                      setFormData({ ...formData, vaccinationHistory: updated });
                    }}
                    className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={() => {
                        const currentHistory = Array.isArray(formData.vaccinationHistory) 
                          ? formData.vaccinationHistory 
                          : [formData.vaccinationHistory || ''];
                        setFormData({
                          ...formData,
                          vaccinationHistory: [...currentHistory, ""],
                        });
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9577CA] text-white text-xl focus:outline-none hover:bg-[#8B6BC0] transition"
                title="Add"
              >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3V13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
                  </div>
                </div>
              )}
            </div>
            {/* Immunization History */}
            <div>
              <label className="block text-black font-semibold mb-2">Immunization History</label>
              <div className="flex gap-2 mb-2">
                <button
                  onClick={() => handleButtonClick('immunizationHistory', 'yes')}
                  className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                    buttonStates.immunizationHistory === 'yes'
                      ? 'bg-[#9577CA] text-white'
                      : 'bg-white text-[#9577CA] border border-[#9577CA]'
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handleButtonClick('immunizationHistory', 'no')}
                  className={`w-[60px] h-[42px] rounded-[32px] font-medium transition ${
                    buttonStates.immunizationHistory === 'no'
                      ? 'bg-[#9577CA] text-white'
                      : 'bg-white text-[#9577CA] border border-[#9577CA]'
                  }`}
                >
                  No
                </button>
                <input
                  type="text"
                  placeholder="18 / 05 / 25"
                  className="w-42 rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                />
              </div>
              {/* Multiple Immunization Inputs with Add Button Below */}
              {Array.isArray(formData.immunizationHistoryList) && formData.immunizationHistoryList.length > 0 ? (
                formData.immunizationHistoryList.map((immunization: string, idx: number) => (
                  <div key={idx} className="mb-2">
                    <input
                      type="text"
                      placeholder="Immunization"
                      value={immunization}
                      onChange={(e) => {
                        const updated = [...formData.immunizationHistoryList];
                        updated[idx] = e.target.value;
                        setFormData({ ...formData, immunizationHistoryList: updated });
                      }}
                      className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                    />
                  </div>
                ))
              ) : (
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Immunization"
                    value={formData.immunizationHistory || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        immunizationHistoryList: [e.target.value],
                        immunizationHistory: '', // clear single value if switching to list
                      })
                    }
                    className="w-full rounded-lg px-4 py-3 bg-white/90 text-gray-800 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9577CA] focus:border-[#9577CA]"
                  />
                </div>
              )}
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (Array.isArray(formData.immunizationHistoryList)) {
                      setFormData({
                        ...formData,
                        immunizationHistoryList: [...formData.immunizationHistoryList, ''],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        immunizationHistoryList: [formData.immunizationHistory || '', ''],
                        immunizationHistory: '', // clear single value if switching to list
                      });
                    }
                  }}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#9577CA] text-white text-xl focus:outline-none hover:bg-[#8B6BC0] transition"
                  title="Add"
                >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M8 3V13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end space-x-4">
          <button 
            className="px-6 py-3 text-white hover:text-gray-700 transition border border-gray-300 rounded-[32px] bg-transparent hover:bg-[#9577CA] hover:text-white font-semibold"
            onClick={handleBack}
          >
            Back
          </button>
          <button className="px-6 py-3 bg-[#9577CA] hover:bg-[#8B6BC0] text-white font-semibold rounded-[32px] transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;

'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Check, Mic, Copy, Save } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Swal from 'sweetalert2';

const VoiceScriptComponent: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [hasRecording, setHasRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleStartRecording = async () => {
    try {
      // Start speech recognition
      SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
      setIsRecording(true);
      setRecordingTime(0);
      setTranscribedText('');
      resetTranscript();
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 0.01);
      }, 10);
      
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const handleStopRecording = () => {
    // Stop speech recognition
    SpeechRecognition.stopListening();
    setIsRecording(false);
    setHasRecording(true);
    
    // Save the transcribed text
    setTranscribedText(transcript);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handlePlayRecording = () => {
    // Play functionality would go here
    console.log('Playing recording...');
  };

  const handleCopyText = () => {
    const textToCopy = transcribedText || `Who is experienced in treating various

Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones, joints, muscles and other musculoskeletal systems..`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      console.log('Text copied to clipboard');
    });
  };

  const handleSaveText = () => {
    // Show confirmation dialog first
    Swal.fire({
      title: 'Would you like to save this text?',
      text: "Please confirm if you'd like to proceed with saving this text",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#9577CA',
      cancelButtonColor: '#9577CA',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        popup: 'rounded-xl shadow-2xl',
        confirmButton: 'rounded-lg bg-[#9577CA] border-[#9577CA] text-white px-6 py-2 font-medium ml-3',
        cancelButton: 'rounded-lg bg-white border-[#9577CA] text-[#9577CA] px-6 py-2 font-medium border-2 mr-3',
        icon: 'text-[#9577CA] !text-[#9577CA]',
        title: 'text-gray-800 font-semibold text-lg',
        htmlContainer: 'text-gray-600 text-sm'
      },
      showClass: {
        popup: 'animate__animated animate__fadeIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut animate__faster'
      },
      buttonsStyling: false,
      reverseButtons: true,
      iconColor: '#9577CA'
    }).then((result) => {
      if (result.isConfirmed) {
        // User clicked "Yes", proceed with save
        console.log('Saving text:', transcribedText);
        
        // Show success notification
        Swal.fire({
          title: 'Success!',
          text: 'Text has been saved successfully.',
          icon: 'success',
          confirmButtonColor: '#9577CA',
          customClass: {
            popup: 'rounded-xl shadow-2xl',
            confirmButton: 'rounded-lg bg-[#9577CA] text-white px-6 py-2 font-medium',
            icon: 'text-[#9577CA] !text-[#9577CA]',
            title: 'text-gray-800 font-semibold text-lg'
          },
          iconColor: '#9577CA'
        })
      }
    });
  };

  // Update transcribed text when transcript changes
  useEffect(() => {
    if (listening) {
      setTranscribedText(transcript);
    }
  }, [transcript, listening]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Check if browser supports speech recognition
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="relative min-h-screen w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        {/* Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/assets/images/webmetacura/metacura splash screen.png"
            alt="Purple mountain landscape with reflective lake"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Browser Not Supported</h2>
            <p className="text-gray-600">Your browser doesn't support speech recognition. Please use Chrome, Edge, or Safari.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Purple mountain landscape with reflective lake"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-start justify-start px-4 sm:px-6 md:px-8 lg:px-12 pt-20">
        
        {/* Voice Recording Bar - Top Component */}
        <div 
          className="relative mb-2 sm:mb-4 md:mb-6 lg:mb-8"
          style={{
            width: '90vw',
            maxWidth: '1000px',
            height: '92px',
            borderRadius: '19px',
            backgroundColor: 'white',
            border: '1px solid rgba(229, 231, 235, 0.5)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            marginTop: '-60px' // Move the card a little to the top
          }}
        >
          <div className="flex items-center justify-center h-full px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 w-full">
              
              {/* Play Button */}
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#9577CA] rounded-full flex items-center justify-center hover:bg-[#8A6BB8] transition-colors flex-shrink-0 shadow-lg"
                onClick={handlePlayRecording}
                disabled={!hasRecording}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white ml-0.5 sm:ml-1" />
              </button>

              {/* Audio Waveform Visualization */}
              <div className="flex items-center justify-center flex-1 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
                  {Array.from({ length: 40 }, (_, i) => (
                    <div
                      key={i}
                      className="w-1 sm:w-1.5 md:w-2 rounded-full"
                      style={{
                        height: `${Math.random() * 30 + 5}px`,
                        backgroundColor: '#9577CA',
                        animation: isRecording ? 'voiceWave 0.8s infinite ease-in-out' : 'none',
                        animationDelay: `${i * 0.02}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Recording Time */}
              <div 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 flex-shrink-0"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {recordingTime.toFixed(2)}
              </div>

              {/* Record/Stop Button */}
              <button 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#9577CA] rounded-full flex items-center justify-center hover:bg-[#8A6BB8] transition-colors flex-shrink-0 shadow-lg"
                onClick={isRecording ? handleStopRecording : handleStartRecording}
              >
                {isRecording ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                ) : (
                  <Mic className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Speech to Text Card - Left Component */}
        <div 
          className="relative"
          style={{
            width: '90vw',
            maxWidth: '600px',
            minHeight: '500px',
            borderRadius: '15px',
            backgroundColor: 'white',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(229, 231, 235, 0.5)'
          }}
        >
          <div className="flex flex-col h-full p-8 sm:p-10 md:p-12">
            
            {/* Title */}
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9577CA] mb-8"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Speech to Text
            </h2>

            {/* Text Content */}
            <div className="flex-1 space-y-8 overflow-y-auto">
              {/* Real-time Transcription */}
              {isRecording && (
                <div className="space-y-4">
                  <h3 
                    className="text-lg sm:text-xl font-semibold text-gray-800"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Live Transcription
                  </h3>
                  <p 
                    className="text-base sm:text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {transcript || 'Start speaking...'}
                  </p>
                </div>
              )}

              {/* Saved Transcription */}
              {!isRecording && transcribedText && (
                <div className="space-y-4">
                  <h3 
                    className="text-lg sm:text-xl font-semibold text-gray-800"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Transcribed Text
                  </h3>
                  <p 
                    className="text-base sm:text-lg text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {transcribedText}
                  </p>
                </div>
              )}

              {/* Default Content when no transcription */}
              {!isRecording && !transcribedText && (
                <>
                  <div className="space-y-4">
                    <h3 
                      className="text-lg sm:text-xl font-semibold text-gray-800"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Who is experienced in treating various
                    </h3>
                    <p 
                      className="text-base sm:text-lg text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones, joints, muscles and other musculoskeletal systems..
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 
                      className="text-lg sm:text-xl font-semibold text-gray-800"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Who is experienced in treating various
                    </h3>
                    <p 
                      className="text-base sm:text-lg text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Dr. Citra Wulan is an orthopaedic specialist who is experienced in treating various problems of the bones, joints, muscles and other musculoskeletal systems..
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Buttons - Outside the card */}
        <div className="flex items-center justify-end space-x-4 mt-6" style={{ width: '90vw', maxWidth: '600px' }}>
          
          {/* Copy Button */}
          <button 
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors rounded-full shadow-sm"
            style={{
              width: '140px',
              height: '48px',
              fontFamily: 'Poppins, sans-serif'
            }}
            onClick={handleCopyText}
          >
            <Copy className="w-4 h-4" />
            <span className="text-sm font-medium">
              Copy
            </span>
          </button>

          {/* Save Button */}
          <button 
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#9577CA] text-white hover:bg-[#8A6BB8] transition-colors rounded-full shadow-lg"
            style={{
              width: '140px',
              height: '48px',
              fontFamily: 'Poppins, sans-serif'
            }}
            onClick={handleSaveText}
          >
            <Save className="w-4 h-4" />
            <span className="text-sm font-medium">
              Save
            </span>
          </button>
        </div>
      </div>

      {/* Custom CSS for voice wave animation */}
      <style jsx>{`
        @keyframes voiceWave {
          0%, 100% {
            height: 5px;
          }
          50% {
            height: 35px;
          }
        }
      `}</style>
    </div>
  );
};

export default VoiceScriptComponent;

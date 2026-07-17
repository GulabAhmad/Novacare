'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Check, Mic } from 'lucide-react';
import Swal from 'sweetalert2';
import { AudioVisualizer } from 'react-audio-visualize';

const AudioFile: React.FC = () => {
  const [showRecording, setShowRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const visualizerRef = useRef<HTMLCanvasElement>(null);

  const handleGetStarted = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        } 
      });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: Blob[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setShowRecording(true);
      setRecordingTime(0);
      
      // Start timer
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 0.01);
      }, 10);
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      Swal.fire({
        title: 'Error',
        text: 'Unable to access microphone. Please check permissions.',
        icon: 'error',
        confirmButtonColor: '#9577CA'
      });
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleConfirmRecording = () => {
    if (audioBlob) {
      Swal.fire({
        title: 'Would you like to upload this audio recording?',
        text: "Tap 'Yes' to save the audio file, or 'No' to record again.",
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
          Swal.fire({
            title: 'Success!',
            text: 'Audio recording has been saved successfully.',
            icon: 'success',
            confirmButtonColor: '#9577CA',
            customClass: {
              popup: 'rounded-xl shadow-2xl',
              confirmButton: 'rounded-lg bg-[#9577CA] text-white px-6 py-2 font-medium',
              icon: 'text-[#9577CA] !text-[#9577CA]',
              title: 'text-gray-800 font-semibold text-lg'
            },
            iconColor: '#9577CA'
          });
          setAudioBlob(null);
          setAudioUrl(null);
          setShowRecording(false);
        } else {
          // User clicked No, start recording again
          handleGetStarted();
        }
      });
    }
  };

  const handlePlayRecording = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
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
      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Audio Image - Main Front Element */}
        <div className="relative mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex items-center justify-center">
          {/* Audio image */}
          <Image
            src="/assets/images/webmetacura/audio image.png"
            alt="Audio Files"
            width={300}
            height={225}
            className="object-contain opacity-90 z-10 w-64 h-48 sm:w-80 sm:h-60 md:w-96 md:h-72 lg:w-[400px] lg:h-[300px]"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4">
          <h2
            className="mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-[#9577CA] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontStyle: 'semibold',
              fontSize: '35px',
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            Audio Files
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4 md:px-6 lg:px-8">
          Audio notes help you save important voice memos for quick access.Try recording a consultation or reminder
          </p>
          
          {/* Get Started Button */}
          <button 
            className="bg-[#9577CA] text-white font-semibold shadow-lg  transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg"
            style={{
              width: '240px',
              height: '42px',
              borderRadius: '15px',
              opacity: 1
            }}
            onClick={handleGetStarted}
          >
            <span>Get Started</span>
          </button>
        </div>
      </div>

      {/* Voice Recording Overlay */}
      {showRecording && (
        <>
          {/* Background Overlay with Opacity */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20"></div>
          
          {/* Voice Recording Interface */}
          <div 
            className="fixed z-30 bg-white rounded-[24px] shadow-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto"
            style={{
              width: '90vw',
              maxWidth: '700px',
              height: 'auto',
              minHeight: '150px',
              maxHeight: '200px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 1,
              borderRadius: '24px'
            }}
          >
            {/* Recording Title */}
            <div className="absolute top-3 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Recording an audio clip...
              </h3>
            </div>

            {/* Recording Interface Container */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-4 sm:pb-6 md:pb-8">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 w-full">
                {/* Play Button */}
                <button 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#9577CA] rounded-full flex items-center justify-center hover:bg-[#8A6BB8] transition-colors flex-shrink-0"
                  onClick={handlePlayRecording}
                  disabled={!audioUrl}
                >
                  <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white ml-0.5 sm:ml-1" />
                </button>

                {/* Audio Visualizer */}
                <div className="flex items-center justify-center bg-white rounded-[19px] border border-gray-300 p-2 sm:p-3 md:p-4 flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" style={{ borderWidth: '0.5px' }}>
                  {audioBlob && (
                    <AudioVisualizer
                      ref={visualizerRef}
                      blob={audioBlob}
                      width={Math.min(window.innerWidth * 0.4, 400)}
                      height={40}
                      barWidth={1}
                      gap={0.5}
                      barColor={'#9577CA'}
                      barPlayedColor={'#8A6BB8'}
                    />
                  )}
                  {!audioBlob && isRecording && (
                    <div className="flex items-center space-x-0.5 sm:space-x-1">
                      {Array.from({ length: Math.min(Math.floor(window.innerWidth / 20), 30) }, (_, i) => (
                        <div
                          key={i}
                          className="w-1 sm:w-1.5 bg-[#9577CA] rounded-full"
                          style={{
                            height: `${Math.random() * 30 + 6}px`,
                            animation: 'voiceWave 0.8s infinite ease-in-out',
                            animationDelay: `${i * 0.03}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Recording Time */}
                <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 flex-shrink-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {recordingTime.toFixed(2)}
                </div>

                {/* Stop/Confirm Button */}
                <button 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#9577CA] rounded-full flex items-center justify-center hover:bg-[#8A6BB8] transition-colors flex-shrink-0"
                  onClick={isRecording ? handleStopRecording : handleConfirmRecording}
                >
                  {isRecording ? (
                    <Mic className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  ) : (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Custom CSS for voice wave animation */}
      <style jsx>{`
        @keyframes voiceWave {
          0%, 100% {
            height: 6px;
          }
          50% {
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default AudioFile;
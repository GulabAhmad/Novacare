"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { ArrowUpRight, CheckCircle, Mic } from "lucide-react"
import { AudioVisualizer } from "react-audio-visualize"

export default function DashboardUI() {
  const [activeNoteFilter, setActiveNoteFilter] = useState<"all" | "self" | "doctor">("all")
  const [isRecording, setIsRecording] = useState(false)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      audioChunksRef.current = []

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
        setAudioBlob(audioBlob)
        const url = URL.createObjectURL(audioBlob)
        setAudioUrl(url)
        stream.getTracks().forEach(track => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleVoiceCardClick = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  // Create a mock blob for the audio visualizer when no recording
  const mockBlob = new Blob([''], { type: 'audio/wav' })

  return (
    <div className="relative min-h-screen w-full font-albert-sans">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Splash Screen"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center p-3 sm:p-4 md:p-6 lg:p-8">
        {/* Today To-Do Card */}
        <div
          className="w-full max-w-4xl lg:max-w-5xl rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 lg:p-8 mb-4 sm:mb-6 md:mb-8"
          style={{ background: "#9577CA" }}
        >
          <div className="flex justify-between items-start mb-3 sm:mb-4">
            <div>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-normal font-albert-sans">Today To-Do</h2>
              <p className="text-purple-100 text-xs sm:text-sm md:text-base font-albert-sans">Today is Sunday Fav I</p>
            </div>
            <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white cursor-pointer" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                className="flex items-center justify-center gap-1 sm:gap-2 bg-white/80 text-black px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium whitespace-nowrap min-w-[120px] sm:min-w-[144px] h-[40px] sm:h-[48px] font-albert-sans"
              >
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#9577CA]" />
                <span className="hidden sm:inline">Wake up, stretch, drink water</span>
                <span className="sm:hidden">Wake up</span>
              </button>
            ))}
          </div>
        </div>

        {/* Notes Filter Buttons */}
        <div className="flex justify-start gap-1 sm:gap-2 md:gap-4 mb-4 sm:mb-6 md:mb-8 w-full max-w-4xl lg:max-w-5xl">
          <button
            onClick={() => setActiveNoteFilter("all")}
            className={`px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors font-albert-sans ${
              activeNoteFilter === "all" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA] hover:bg-gray-50"
            }`}
          >
            All Notes
          </button>
          <button
            onClick={() => setActiveNoteFilter("self")}
            className={`px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors font-albert-sans ${
              activeNoteFilter === "self" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA] hover:bg-gray-50"
            }`}
          >
            Self Notes
          </button>
          <button
            onClick={() => setActiveNoteFilter("doctor")}
            className={`px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-colors font-albert-sans ${
              activeNoteFilter === "doctor" ? "bg-[#9577CA] text-white" : "bg-white text-[#9577CA] hover:bg-gray-50"
            }`}
          >
            Doctor Notes
          </button>
        </div>

        {/* Content Cards (Meeting Notes & Voice) */}
        <div className="w-full max-w-4xl lg:max-w-5xl flex flex-col gap-3 sm:gap-4 md:gap-6">
          {/* Meeting Notes & Action Items Card 1 */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] md:min-h-[157px]">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0">
              <Image
                src="/assets/images/webmetacura/notepadicons.png"
                alt="Notebook icon"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 truncate font-albert-sans">Meeting Notes & Action Items</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 font-albert-sans">Meeting Notes & Action Items - Never Forget</p>
            </div>
          </div>

          {/* Voice Card */}
          <div 
            className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] md:min-h-[157px] cursor-pointer hover:shadow-lg transition-shadow"
            onClick={handleVoiceCardClick}
          >
            <div className={`relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0 flex items-center justify-center rounded-full transition-colors ${
              isRecording ? 'bg-red-100 animate-pulse' : 'bg-[#9577CA]'
            }`}>
              <Mic className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 transition-colors ${
                isRecording ? 'text-red-600' : 'text-white'
              }`} />
            </div>
            <div className="flex-1 h-12 sm:h-16 md:h-20 flex items-center min-w-0">
              <div className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]">
                <AudioVisualizer
                  blob={audioBlob || mockBlob}
                  width={200}
                  height={40}
                  barWidth={2}
                  gap={1}
                  barColor="#9577CA"
                  barPlayedColor="#8A6BB8"
                />
              </div>
            </div>
            {isRecording && (
              <div className="text-red-600 text-xs sm:text-sm font-medium whitespace-nowrap font-albert-sans">
                Recording...
              </div>
            )}
          </div>

          {/* Meeting Notes & Action Items Card 2 */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 md:p-6 flex items-center gap-3 sm:gap-4 min-h-[120px] sm:min-h-[140px] md:min-h-[157px]">
            <div className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-shrink-0">
              <Image
                src="/assets/images/webmetacura/notepadicons.png"
                alt="Notebook icon"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 truncate font-albert-sans">Meeting Notes & Action Items</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 line-clamp-2 font-albert-sans">Meeting Notes & Action Items - Never Forget</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

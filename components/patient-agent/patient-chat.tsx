'use client';

import Image from "next/image"
import { Send } from "lucide-react"
import { useState } from "react"
import EmojiPicker from "emoji-picker-react"
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';

const patientchatcomponent: React.FC = () => {
  const router = useRouter();
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I am back from vacation",
      sender: "ai",
      timestamp: <span className="text-gray-600">5h ago</span>
    },
    {
      id: 2,
      text: "How are you?",
      sender: "ai",
      timestamp: <span className="text-gray-600">5h ago</span>
    },
    {
      id: 3,
      text: "Welcome Back",
      sender: "user",
      timestamp: <span className="text-gray-600">5h ago</span>
    },
    {
      id: 4,
      text: "I am all well",
      sender: "user",
      timestamp: <span className="text-gray-600">5h ago</span>
    },
    {
      id: 5,
      text: "Coffee?",
      sender: "ai",
      timestamp: <span className="text-gray-600">5h ago</span>
    }
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage, 
        sender: "user",
        timestamp: <span className="text-gray-600">Just now</span>
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const onEmojiClick = (emojiObject: any) => {
    setInputMessage(prev => prev + emojiObject.emoji);
  };

  const handleBack = () => {
    router.push('/patient-agents');
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
        <div className="bg-white/30 backdrop-blur-lg rounded-xl shadow-lg w-full max-w-3xl h-[80vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center p-4 border-b border-gray-200/50">
            <Image
              src="/assets/images/webmetacura/chatgirl.jpg"
              alt="Doctor AI Agent"
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <div>
              <h1 className="text-white text-lg font-semibold font-nunito">Doctor AI Agent</h1>
              <p className="text-gray-600 text-sm font-nunito">Active Now</p>
            </div>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            <div className="text-center text-sm text-gray-600 my-4 font-nunito">Today 2:00 PM</div>

            {messages.map((message) => (
              <div key={message.id} className={`flex items-start gap-3 ${message.sender === "user" ? "justify-end" : ""}`}>
                {message.sender === "ai" && (
                  <Image
                    src="/assets/images/webmetacura/chatgirl.jpg"
                    alt="Doctor AI Agent"
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                )}
                
                <div className={`flex flex-col ${message.sender === "user" ? "items-end" : ""} min-w-0 flex-1`}>
                  <div className={`p-3 rounded-lg break-words w-fit max-w-[70%] font-nunito ${
                    message.sender === "user" 
                      ? "bg-[#9577CA]/70 text-white" 
                      : "bg-white/70 text-gray-800"
                  }`}>
                    {message.text}
                  </div>
                  <span className="text-xs text-gray-500/80 mt-1 font-nunito">{message.timestamp}</span>
                </div>
                
                {message.sender === "user" && (
                  <Image
                    src="/assets/images/webmetacura/chatboy.jpg"
                    alt="Current User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center p-4 border-t border-gray-200/50 relative">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full bg-white/70 rounded-full px-12 py-2 text-gray-800 placeholder-gray-500 focus:outline-none font-nunito"
              />
              {/* Emoji Button Inside Input */}
              <button
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                😊
              </button>
            </div>
            
            <button 
              onClick={handleSendMessage}
              className="ml-3 p-2 rounded-full bg-[#9577CA]/70 text-white hover:bg-[#9577CA] focus:outline-none focus:ring-2 focus:ring-[#9577CA]/50"
            >
              <Send className="w-5 h-5" />
            </button>
            
            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute bottom-full left-4 mb-2 z-50">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>
        </div>

        {/* Back Button - Outside the chat container, bottom right */}
        {/* <div className="absolute bottom-4 right-40">
          <button 
            onClick={handleBack}
            className="px-6 py-3 text-white hover:text-gray-700 transition border border-gray-300 rounded-[32px] bg-transparent hover:bg-[#9577CA] hover:text-white font-semibold"
          >
            Back
          </button> */}
          <div className="w-full max-w-4xl flex justify-end mt-6">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-4 mr-16 py-2 rounded-lg bg-[#9577CA] text-white hover:bg-[#7e5fcf] transition-colors"
            >
              <span>Back</span>
            </button>
          </div>
      </div>
    </div>
  )
}
export default patientchatcomponent;
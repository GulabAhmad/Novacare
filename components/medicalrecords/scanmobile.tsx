"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import Swal from "sweetalert2"

export default function MedicalReportView() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid File Type',
          text: 'Please select an image file (JPG, PNG, GIF, etc.)',
          confirmButtonColor: '#9577CA',
          customClass: {
            popup: 'rounded-xl shadow-2xl',
            confirmButton: 'rounded-lg bg-[#9577CA] text-white px-6 py-2 font-medium',
            icon: 'text-[#9577CA] !text-[#9577CA]',
            title: 'text-gray-800 font-semibold text-lg'
          },
          iconColor: '#9577CA'
        })
        return
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'Please select an image smaller than 5MB',
          confirmButtonColor: '#9577CA',
          customClass: {
            popup: 'rounded-xl shadow-2xl',
            confirmButton: 'rounded-lg bg-[#9577CA] text-white px-6 py-2 font-medium',
            icon: 'text-[#9577CA] !text-[#9577CA]',
            title: 'text-gray-800 font-semibold text-lg'
          },
          iconColor: '#9577CA'
        })
        return
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setSelectedImage(result)
        
        Swal.fire({
          icon: 'success',
          title: 'Image Scanned Successfully!',
          text: 'Your medical document has been scanned and uploaded.',
          confirmButtonColor: '#9577CA',
          cancelButtonColor: '#9577CA',
          showCancelButton: true,
          cancelButtonText: 'Scan Another',
          confirmButtonText: 'Process Document',
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
            // Handle document processing here
            Swal.fire({
              icon: 'info',
              title: 'Processing Document',
              text: 'Your medical document is being processed...',
              timer: 2000,
              showConfirmButton: false,
              customClass: {
                popup: 'rounded-xl shadow-2xl',
                icon: 'text-[#9577CA] !text-[#9577CA]',
                title: 'text-gray-800 font-semibold text-lg'
              },
              iconColor: '#9577CA'
            })
          }
        })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
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

      {/* Centered Mobile Image - Clickable */}
      <div className="relative z-10">
        <Image
          src="/assets/images/webmetacura/Scaned File.png"
          alt="Mobile phone with medical prescription"
          width={300}
          height={550}
          className="rounded-[15px] shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200"
          priority
          onClick={handleImageClick}
        />
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Preview Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Scanned Document Preview</h3>
            <img 
              src={selectedImage} 
              alt="Scanned document" 
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedImage(null)}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null)
                  Swal.fire({
                    icon: 'success',
                    title: 'Document Saved',
                    text: 'Your medical document has been saved successfully!',
                    confirmButtonColor: '#9577CA',
                    customClass: {
                      popup: 'rounded-xl shadow-2xl',
                      confirmButton: 'rounded-lg bg-[#9577CA] text-white px-6 py-2 font-medium',
                      icon: 'text-[#9577CA] !text-[#9577CA]',
                      title: 'text-gray-800 font-semibold text-lg'
                    },
                    iconColor: '#9577CA'
                  })
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Save Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
  
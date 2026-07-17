"use client"

import Image from "next/image"
import { Upload, Search, Star, Archive, Trash2, FileText } from "lucide-react"
import { useState, useRef } from "react"
import Swal from 'sweetalert2'

interface FileItem {
  file: File;
  id: string;
  isFavorite: boolean;
  isArchived: boolean;
  uploadedAt: Date;
}

export default function MedicalRecordsManagement() {
  const [activeTab, setActiveTab] = useState<"all" | "archived" | "favorites">("all")
  const [uploadedFiles, setUploadedFiles] = useState<FileItem[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Show confirmation dialog first
      Swal.fire({
        title: 'Would you like to upload this file?',
        text: "Please confirm if you'd like to proceed with uploading this file",
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
          // User clicked "Yes", proceed with upload
          const newFiles: FileItem[] = Array.from(files).map(file => ({
            file,
            id: Math.random().toString(36).substr(2, 9),
            isFavorite: false,
            isArchived: false,
            uploadedAt: new Date()
          }))
          setUploadedFiles(prev => [...prev, ...newFiles])
          console.log('Files selected:', newFiles)
          
          // Show success notification
          Swal.fire({
            title: 'Success!',
            text: 'File has been uploaded successfully.',
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
        // If user clicks "No", do nothing and reset the file input
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      })
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const toggleFavorite = (fileId: string) => {
    setUploadedFiles(prev => 
      prev.map(file => 
        file.id === fileId 
          ? { ...file, isFavorite: !file.isFavorite }
          : file
      )
    )
  }

  const toggleArchive = (fileId: string) => {
    setUploadedFiles(prev => 
      prev.map(file => 
        file.id === fileId 
          ? { ...file, isArchived: !file.isArchived }
          : file
      )
    )
  }

  const deleteFile = (fileId: string) => {
    // Show confirmation dialog before deleting
    Swal.fire({
      title: 'Would you like to delete this file?',
      text: "Please confirm if you'd like to proceed with deleting this file",
      icon: 'warning',
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
        // User clicked "Yes", proceed with deletion
        setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
        
        // Show success notification
        Swal.fire({
          title: 'Success!',
          text: 'File has been deleted successfully.',
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
    })
  }

  const getFilteredFiles = () => {
    switch (activeTab) {
      case "favorites":
        return uploadedFiles.filter(file => file.isFavorite)
      case "archived":
        return uploadedFiles.filter(file => file.isArchived)
      default:
        return uploadedFiles // Show all files in All section
    }
  }

  const filteredFiles = getFilteredFiles()

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
      <div className="relative z-10 flex min-h-screen w-full flex-col p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <h1 className="text-[#9577CA] text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Medical Records Management.
        </h1>

        {/* Upload & Store Medical Record Section */}
        <div className="w-full max-w-5xl bg-purple-100 rounded-[14px] shadow-lg p-4 sm:p-6 mb-8 sm:mb-10 ml-0 mr-auto">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Upload & Store Medical Record
          </h2>
          <div
            className="bg-[#9577CA] rounded-[14px] flex items-center space-x-4 cursor-pointer hover:opacity-90 transition-opacity"
            style={{ height: "60px" }}
            onClick={handleUploadClick}
          >
            <div className="p-4 sm:p-6 flex items-center">
              <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <div>
              <p className="text-white text-base sm:text-lg font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Upload File
              </p>
              <p className="text-purple-200 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Analyze and store medical documents
              </p>
            </div>
          </div>
          
          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>

        {/* View, Search & Manage Medical Documents Section */}
        <div className="w-full max-w-2xl bg-white rounded-[14px] shadow-lg p-4 sm:p-6 flex flex-col ml-0 mr-auto" style={{ minHeight: "400px", maxHeight: "600px" }}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              View, Search & Manage Medical Documents
            </h2>
            <button className="bg-[#9577CA] text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Filter
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#9577CA] text-white placeholder-purple-200 rounded-lg py-3 pl-10 pr-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-400"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-200" />
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`pb-2 text-sm sm:text-base font-medium transition-colors ${
                activeTab === "all" ? "text-[#9577CA] border-b-2 border-[#9577CA]" : "text-gray-600 hover:text-gray-800"
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("archived")}
              className={`pb-2 text-sm sm:text-base font-medium transition-colors ${
                activeTab === "archived"
                  ? "text-[#9577CA] border-b-2 border-[#9577CA]"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Archived
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={`pb-2 text-sm sm:text-base font-medium transition-colors ${
                activeTab === "favorites"
                  ? "text-[#9577CA] border-b-2 border-[#9577CA]"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Favorites
            </button>
          </div>

          {/* Files List or No Records Message */}
          <div className="flex-1 overflow-y-auto">
            {filteredFiles.length > 0 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {activeTab === "all" ? "Uploaded Files" : 
                   activeTab === "favorites" ? "Favorite Files" : "Archived Files"}
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {filteredFiles.map((fileItem) => (
                    <div key={fileItem.id} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="bg-[#9577CA] rounded-lg p-2">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-gray-700 truncate block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {fileItem.file.name}
                          </span>
                          <span className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {(fileItem.file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-2">
                        <button
                          onClick={() => toggleFavorite(fileItem.id)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            fileItem.isFavorite 
                              ? 'bg-green-500 text-white' 
                              : 'bg-white text-purple-600 border border-purple-600 hover:bg-green-50'
                          }`}
                          title={fileItem.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Star className={`h-4 w-4 ${fileItem.isFavorite ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => toggleArchive(fileItem.id)}
                          className={`p-2 rounded-lg transition-all duration-200 ${
                            fileItem.isArchived 
                              ? 'bg-yellow-500 text-white' 
                              : 'bg-white text-purple-600 border border-purple-600 hover:bg-yellow-50'
                          }`}
                          title={fileItem.isArchived ? "Unarchive" : "Archive"}
                        >
                          <Archive className={`h-4 w-4 ${fileItem.isArchived ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => deleteFile(fileItem.id)}
                          className="p-2 rounded-lg bg-white text-purple-600 border border-purple-600 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                          title="Delete file"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center text-center text-gray-500 text-base sm:text-lg h-32">
                <p style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {activeTab === "all" ? "You don't have any medical records yet" :
                   activeTab === "favorites" ? "No favorite files yet" :
                   "No archived files yet"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HospitalComponent: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/medical-Records/upload-file/records');
  };

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
      <div className="relative z-10 w-full mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Hospital Image - Main Front Element */}
        <div className="relative mb-6 sm:mb-8 md:mb-10 flex items-center justify-center">
         
          <Image
            src="/assets/images/webmetacura/uploadfile records.png"
            alt="Hospital"
            width={300}
            height={200}
            className="object-contain relative z-10 mt-20"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1
            className="mb-3 sm:mb-4 md:mb-6 text-[#9577CA] text-center"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontStyle: 'semibold',
              fontSize: '24px',
              lineHeight: '100%',
              letterSpacing: '0px',
            }}
          >
            Upload Documents
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-8">
          Upload your medical documents to keep all your health records in one place.

          </p>
          
          {/* Get Started Button */}
          <button 
            className="bg-gradient-to-r from-[#9577CA] to-[#9577CA] text-white font-semibold shadow-lg"
            style={{
              width: '240px',
              height: '42px',
              borderRadius: '15px',
              opacity: 1
            }}
            onClick={handleGetStarted}
          >
            <span className="text-xs sm:text-sm md:text-base">Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalComponent;

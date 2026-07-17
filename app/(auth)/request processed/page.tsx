import Image from "next/image"
import { Check } from "lucide-react"

export default function Component() {
  return (
    <div className="relative flex min-h-screen items-center justify-center p-4">
      {/* Background Image */}
      <Image
        src="/metacura splash screen.png"
        alt="Abstract landscape with purple mountains and a reflective lake"
        fill
        priority
        className="object-cover"
        width={1920}
        height={1080}
      />

      {/* Content Container */}
      <div className="relative z-1 flex flex-col items-center justify-center space-y-6">
        {/* Main Card */}
        <div
          className="flex w-full max-w-[595px] flex-col items-center justify-center rounded-[17px] border-2 bg-white/20 p-6 text-center shadow-lg md:h-[375px] md:p-8 lg:p-10"
          style={{
            borderColor: "#9577CA", // Consistent with other designs
          }}
        >
          {/* Checkmark Icon */}
          <div
            className="mb-6 flex items-center justify-center rounded-full border-2 border-[#9577CA] bg-white"
            style={{
              width: "100.65789794921875px", // Exact width
              height: "102px", // Exact height
            }}
          >
            <Check className="h-12 w-12 text-[#9577CA]" />
          </div>

          {/* Title */}
          <h2 className="mb-2 text-3xl font-bold text-[#9577CA] md:text-4xl">Your Request has been processed</h2>

          {/* Subtitle */}
          <p className="text-base text-gray-200 md:text-lg">You will get response with in next 24 hours</p>
        </div>
      </div>
    </div>
  )
}

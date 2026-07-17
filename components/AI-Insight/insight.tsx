'use client';

import { DashboardCard } from "@/components/dashboard-card"
import { Button } from "@/components/ui/button"
import { Heart, Droplets, TreesIcon as Lungs, Filter, Share2 } from "lucide-react"
import { Plus } from "lucide-react"
import { LargeVitalSignCard } from "@/components/large-vital-sign-card"
import { SmallVitalSignCard } from "@/components/small-vital-sign-card"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

export default function DashboardPage() {
  const themeConfig = useSelector((state: RootState) => state.themeConfig);
  
  return (
    <div className="min-h-screen w-full font-poppins relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Filter and Share Buttons */}
            <div className="flex justify-end gap-2 absolute top-16 sm:top-20 md:top-24 right-4 sm:right-8 md:right-12">
              <Button className="!bg-[#9577CA] text-white rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm shadow-md hover:opacity-90 font-poppins">
                Filter
              </Button>
              <Button className="!bg-[#9577CA] text-white rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm shadow-md hover:opacity-90 font-poppins">
                Share
              </Button>
            </div>

          <div className="space-y-4 sm:space-y-6">
            {/* Top Section - Patient Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl ml-2 sm:ml-4 font-bold text-[#9577CA] font-poppins">Ashraf</h2>
                <div className="text-text-dark-primary font-poppins">
                  <div className="text-xs ml-2 sm:ml-4 text-white font-bold">Mycare ID</div>
              
                </div>
                <div className="text-text-dark-primary font-poppins">
                  <div className="text-xs ml-2 sm:ml-4 text-white font-bold">Email</div>

                </div>
              </div>
              <div className="space-y-2">
                <div className="text-text-dark-primary font-poppins">
                  <div className="text-xs -ml-8 sm:-ml-16 md:-ml-32 text-white font-bold">Date of birth</div>
                  
                </div>  
                <div className="text-text-dark-primary font-poppins">
                  <div className="text-xs -ml-8 sm:-ml-16 md:-ml-32 text-white font-bold">Report Date</div>
                
                </div>
                <div className="text-text-dark-primary font-poppins">
                  <div className="text-xs -ml-8 sm:-ml-16 md:-ml-32 text-white font-bold">Gender</div>
                  
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column - Clinical Information */}
              <div className="xl:col-span-2 space-y-3 sm:space-y-4">
                {/* Clinical Complaints */}
                <DashboardCard title="Chief Complaint" titleColor="text-[#9577CA]">
                  <p className="text-text-dark-primary font-poppins">
                    Patient complains of persistent chest pain and shortness of breath for the past 3 days.
                  </p>
                </DashboardCard>

                {/* Key Clinical Notes */}
                <DashboardCard title="Key Clinical Notes" titleColor="text-[#9577CA]">
                  <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4 text-text-dark-primary font-poppins">
                    <div className="text-xs text-text-muted-dark font-poppins">Present illness</div>
                    <div className="font-medium font-poppins">
                      Chest pain started 3 days ago, worsens on exertion, partially relieved with rest.
                    </div>
                    <div className="text-xs text-text-muted-dark font-poppins">Medical History</div>
                    <div className="font-medium font-poppins">Hypertension, Diabetes Mellitus</div>
                    <div className="text-xs text-text-muted-dark font-poppins">Medication</div>
                    <div className="font-medium font-poppins">Metformin, Amlodipine</div>
                  </div>
                </DashboardCard>

                {/* Bottom Sections - Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                  {/* Left Column */}
                  <div className="space-y-3 sm:space-y-4">
                    <DashboardCard title="Lab Investigations" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[1fr_1fr_auto] gap-y-2 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">System</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Findings</div>
                        <div className="text-xs text-text-muted-dark font-poppins"></div>
                        <div className="font-medium font-poppins">CBC</div>
                        <div className="font-medium font-poppins">Findings</div>
                        <div className="text-yellow-500 font-medium font-poppins">Pending</div>
                        <div className="font-medium font-poppins">Lipid Profile</div>
                        <div className="font-medium font-poppins">Findings</div>
                        <div className="text-yellow-500 font-medium font-poppins">Pending</div>
                      </div>
                    </DashboardCard>

                    <DashboardCard title="Radiology / Imaging Reports" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[1fr_1fr] gap-y-2 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">Test</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Result</div>
                        <div className="font-medium font-poppins">Chest X-Ray</div>
                        <div className="font-medium font-poppins">Chest (06-28): Normal</div>
                        <div className="font-medium font-poppins">ECG</div>
                        <div className="font-medium font-poppins">Sinus Rhythm, on STT Elevation</div>
                      </div>
                    </DashboardCard>

                    <DashboardCard title="Follow-up Instructions" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">Next Visit</div>
                        <div className="font-medium font-poppins">July 10, 2025</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Alerts</div>
                        <div className="font-medium font-poppins">Before visit / Report visit</div>
                      </div>
                    </DashboardCard>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-3 sm:space-y-4">
                    <DashboardCard title="Treatment Plan" titleColor="text-[#9577CA]">
                      <ul className="space-y-2 text-text-dark-primary font-poppins">
                        <li className="flex items-center gap-2 font-poppins">
                          <Plus className="h-4 w-4 text-purple-accent" />
                          <span className="font-poppins">Continue Beta-blocker</span>
                        </li>
                        <li className="flex items-center gap-2 font-poppins">
                          <Plus className="h-4 w-4 text-purple-accent" />
                          <span className="font-poppins">Start aspirin 81 mg</span>
                        </li>
                        <li className="flex items-center gap-2 font-poppins">
                          <Plus className="h-4 w-4 text-purple-accent" />
                          <span className="font-poppins">Diet and exercise advice</span>
                        </li>
                      </ul>
                    </DashboardCard>


                    <DashboardCard title="Diagnosis / Impression Reports" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[1fr_1fr] gap-y-2 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">Type</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Diagnosis</div>
                        <div className="font-medium font-poppins">Chest X-Ray</div>
                        <div className="font-medium font-poppins">Chest (06-28): Normal</div>
                        <div className="font-medium font-poppins">ECG</div>
                        <div className="font-medium font-poppins">Sinus Rhythm, on STT Elevation</div>
                      </div>
                    </DashboardCard>

                    {/* <DashboardCard title="Diagnosis / Impression" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[1fr_1fr] gap-y-2 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">Type</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Diagnosis</div>
                        <div className="font-medium font-poppins">Primary</div>
                        <div className="font-medium font-poppins">Stable Angina</div>
                        <div className="font-medium font-poppins">Differentials</div>
                        <div className="font-medium font-poppins">GERD, Costochondritis</div>
                      </div>
                    </DashboardCard> */}

                    <DashboardCard title="Doctor's Notes / AI Summary" titleColor="text-[#9577CA]">
                      <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4 text-text-dark-primary font-poppins">
                        <div className="text-xs text-text-muted-dark font-poppins">Next Visit</div>
                        <div className="font-medium font-poppins">July 10, 2025</div>
                        <div className="text-xs text-text-muted-dark font-poppins">Alerts</div>
                        <div className="font-medium font-poppins">Before visit / Report visit</div>
                      </div>
                    </DashboardCard>
                  </div>
                </div>
              </div>

                            {/* Right Column - Vital Signs and Physical Info */}
              <div className="xl:col-span-1 space-y-3 sm:space-y-4">
                {/* Vital Signs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="w-full">
                    <LargeVitalSignCard
                      title="Blood Pressure"
                      value="130/85 mmHg"
                      status="Normal"
                      icon={Droplets}
                      titleColor="text-[#9577CA]"
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <SmallVitalSignCard
                      title="Heart Rate"
                      value="72 bpm"
                      status="Normal"
                      icon={Heart}
                      titleColor="text-[#9577CA]"
                    />
                    <SmallVitalSignCard
                      title="Respiratory Rate"
                      value="16 breaths/min"
                      status="Normal"
                      icon={Lungs}
                      titleColor="text-[#9577CA]"
                    />
                  </div>
                </div>

                {/* Physical Information */}
                <DashboardCard title="Physical Examination Summary">
                  <div className="grid grid-cols-[auto_1fr] gap-y-2 gap-x-4 text-text-dark-primary font-poppins">
                    <div className="text-xs text-text-muted-dark font-poppins">Cardiovascular</div>
                    <div className="font-medium font-poppins">Normal S1, S2, no murmurs</div>
                    <div className="text-xs text-text-muted-dark font-poppins">Respiratory</div>
                    <div className="font-medium font-poppins">Clear breath sounds, no rales/wheezing</div>
                    <div className="text-xs text-text-muted-dark font-poppins">Abdomen</div>
                    <div className="font-medium font-poppins">Soft, non-tender, no masses</div>
                    <div className="text-xs text-text-muted-dark font-poppins">Neurological</div>
                    <div className="font-medium font-poppins">Alert, oriented, no focal deficits</div>
                  </div>
                </DashboardCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

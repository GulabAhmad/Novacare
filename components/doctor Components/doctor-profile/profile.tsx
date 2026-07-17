import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, HeartPulse, TreesIcon as Lungs, Pill, Hospital, CalendarOff } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div
      className="min-h-screen p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/background-pattern.jpg")' }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Ashraf Profile Card */}
          <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">Ashraf</h2>
            <p className="text-gray-600">ashraf@metacura.com</p>
          </Card>

          {/* Health Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Blood Pressure Card */}
            <Card className="bg-white/90 backdrop-blur-sm w-[250px] h-[250px] rounded-xl shadow-lg p-4 flex flex-col justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <div className="text-gray-600 text-sm">Blood Pressure</div>
                <Button
                  variant="outline"
                  className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 border-green-300"
                >
                  Normal
                </Button>
              </div>
              <div className="text-3xl font-bold text-gray-900">130/85 mmHg</div>
            </Card>

            {/* Heart Rate Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-gray-600 text-sm">Heart Rate</div>
              </div>
              <div className="flex items-end justify-between w-full">
                <div className="text-2xl font-bold text-gray-900">130/85 mmHg</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">Butt...</span>
                  <Button
                    variant="outline"
                    className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 border-green-300"
                  >
                    Normal
                  </Button>
                </div>
              </div>
            </Card>

            {/* Respiratory Rate Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Lungs className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-gray-600 text-sm">Respiratory Rate</div>
              </div>
              <div className="flex items-end justify-between w-full">
                <div className="text-2xl font-bold text-gray-900">130/85 mmHg</div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-500">Butt...</span>
                  <Button
                    variant="outline"
                    className="rounded-full px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 border-green-300"
                  >
                    Normal
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* This Month Section */}
          <h3 className="text-xl font-semibold text-white mt-4">This Month</h3>

          {/* Monthly Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* On Pills Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center">
              <div className="w-16 h-16 rounded-xl bg-purple-100 flex flex-col items-center justify-center mx-auto mb-2 relative">
                <Pill className="w-8 h-8 text-purple-600" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-medium text-purple-700 bg-purple-200 px-1 rounded-sm">
                  55.95 x 57.45
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-gray-600 text-sm">On Pills</div>
            </Card>

            {/* In Appointment Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center">
              <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-2">
                <Hospital className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">14</div>
              <div className="text-gray-600 text-sm">In Appointment</div>
            </Card>

            {/* Days Off Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center">
              <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-2">
                <CalendarOff className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-gray-600 text-sm">Days Off</div>
            </Card>
          </div>
        </div>

        {/* Right Column - See Prescriptions Card */}
        <Card className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 overflow-hidden">
          <div className="flex flex-row items-center justify-between p-0 mb-4">
            <h3 className="text-lg font-semibold text-purple-700">See Prescriptions</h3>
            {/* Placeholder for the "SMS hospital" logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="SMS Hospital Logo"
                width={40}
                height={40}
                className="object-contain"
              />
                          <span className="text-lg font-bold text-gray-800">SMS hospital</span>
          </div>
        </div>
        <CardContent className="p-0 text-sm text-gray-700">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4">
              <div>
                <p className="font-semibold">Dr. Akshara</p>
                <p className="text-xs">M.S</p>
                <p className="text-xs">Reg. No: NMC 2018</p>
              </div>
              <div className="text-right">
                <p className="text-xs">B/203, Business Center, MG Road, Pune</p>
                <p className="text-xs">- 411008.</p>
                <p className="text-xs">Ph: 946647658, Timing: 09:00 AM -</p>
                <p className="text-xs">01:00 PM, 06:00 PM - 08:00 PM |</p>
                <p className="text-xs">Closed: Sunday</p>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-3 mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">ID: 11 - OPD6 PATIENT (M) / 13 Y</p>
                <p className="font-bold">Mob. No: 9423380390</p>
                <p className="font-bold">Date: 30-Aug-2023</p>
              </div>
              <p className="text-xs">Address: Pune</p>
              <p className="text-xs">Weight (Kg): 80, Height (Cm): 200 (B.M.I. = 20.00), BP: 120/80 mmHg</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-bold mb-1">Chief Complaints</p>
                <ul className="list-disc list-inside text-xs space-y-0.5">
                  <li>FEVER WITH CHILLS (4 DAYS)</li>
                  <li>HEADACHE (2 DAYS)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-1">Clinical Findings</p>
                <ul className="list-disc list-inside text-xs space-y-0.5">
                  <li>THESE ARE TEST FINDINGS FOR A TEST</li>
                  <li>PATIENT</li>
                  <li>REFERRING SAMPLE DIAGNOSIS AND SAMPLE</li>
                  <li>PRESCRIPTION</li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-1">Diagnosis:</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>MALARIA</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 font-bold border-b border-gray-200 pb-1 mb-2">
                <span>#</span>
                <span>Medicine Name</span>
                <span>Dosage</span>
                <span>Duration</span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span>1)</span>
                <span>TAB. ABCIXIMAB</span>
                <span>1 Morning</span>
                <span>
                  8 Days
                  <br />
                  (Tot: 8 Tab)
                </span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span>2)</span>
                <span>TAB. VOMILAST</span>
                <span>
                  1 Morning, 1 Night
                  <br />
                  (After Food)
                </span>
                <span>
                  8 Days
                  <br />
                  (Tot: 16 Tab)
                </span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span></span>
                <span>DOXYLAMINE 10MG + PYRIDOXINE 10 MG +</span>
                <span></span>
                <span></span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span></span>
                <span>FOLIC ACID 2.5 MG</span>
                <span></span>
                <span></span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span>3)</span>
                <span>CAP. ZOCLAR 500</span>
                <span>1 Morning</span>
                <span>
                  3 Days
                  <br />
                  (Tot: 3 Cap)
                </span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span></span>
                <span>CLARITHROMYCIN IP 500MG</span>
                <span></span>
                <span></span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span>4)</span>
                <span>TAB. GESTAKIND 10/SR</span>
                <span>1 Night</span>
                <span>
                  4 Days
                  <br />
                  (Tot: 4 Tab)
                </span>
              </div>
              <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-x-2 text-xs mb-1">
                <span></span>
                <span>ISOXSUPRINE 10 MG</span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-bold mb-1">Advice:</p>
              <ul className="list-disc list-inside text-xs space-y-0.5">
                <li>TAKE BED REST</li>
                <li>DO NOT EAT OUTSIDE FOOD</li>
                <li>EAT EASY TO DIGEST FOOD LIKE BOILED RICE WITH DAAL</li>
              </ul>
            </div>

            <p className="font-bold text-sm">Follow Up: 04-09-2023</p>
            <p className="text-[10px] text-gray-500 mt-2 text-right">
              Substitute with equivalent Generics as required.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

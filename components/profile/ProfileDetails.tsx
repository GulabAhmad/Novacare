"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProfileDetails: React.FC = () => {
  const [isDark] = useState(false);
  const [form, setForm] = useState({
    name: '',
    dob: '',
    gender: 'Male',
    nhid: '',
    emergency: '',
    insurance: '',
    policyNo: '',
    issueDate: '',
    expiryDate: '',
  });

  const dobRef = React.useRef<HTMLInputElement>(null);
  const hiddenDobRef = React.useRef<HTMLInputElement>(null);
  const issueDateRef = React.useRef<HTMLInputElement>(null);
  const expiryDateRef = React.useRef<HTMLInputElement>(null);
  const hiddenIssueDateRef = React.useRef<HTMLInputElement>(null);
  const hiddenExpiryDateRef = React.useRef<HTMLInputElement>(null);

  const salesByCategory: any = {
    series: [985, 737, 270],
    options: {
      chart: {
        type: 'donut',
        height: 320,
        fontFamily: 'Nunito, sans-serif',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 25,
        colors: isDark ? '#0e1726' : '#fff',
      },
      colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
             legend: {
         position: 'bottom',
         horizontalAlign: 'center',
         fontSize: '14px',
         markers: {
           width: 10,
           height: 10,
           offsetX: -2,
         },
         height: 50,
         offsetY: 0,
         containerHeight: 50,
         floating: false,
       },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '29px',
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: '26px',
                color: isDark ? '#bfc9d4' : undefined,
                offsetY: 16,
                formatter: (val: any) => {
                  return val;
                },
              },
              total: {
                show: true,
                label: 'Total',
                color: '#888ea8',
                fontSize: '29px',
                formatter: (w: any) => {
                  return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      labels: ['Apparel', 'Sports', 'Others'],
      states: {
        hover: {
          filter: {
            type: 'none',
            value: 0.15,
          },
        },
        active: {
          filter: {
            type: 'none',
            value: 0.15,
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-2 py-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/assets/images/webmetacura/metacura splash screen.png"
          alt="Metacura Background"
          className="w-full h-full object-cover"
        />
      </div>
      
            {/* Content */}
      <div className="relative z-10 w-full mx-auto flex flex-col md:flex-row gap-8 md:gap-12 bg-transparent" style={{ marginLeft: '10px' }}>
        {/* Left: Form */}
        <form className="flex-1 flex flex-col gap-4 md:gap-6" style={{ marginLeft: '40px' }}>
          <h2 className="text-lg md:text-xl font-semibold text-[#9577CA] mb-2 md:mb-4">Profile details</h2>
                     <input type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" />
          
          {/* DOB Input with Calendar Icon */}
          <div className="relative w-full">
            <input 
              ref={dobRef}
              type="text" 
              placeholder="Enter your Date of Birth" 
              value={form.dob} 
              onChange={(e) => setForm({...form, dob: e.target.value})} 
              className="rounded-lg px-4 py-3 w-full bg-white/90 text-gray-800 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition pr-10" 
            />
            <input 
              ref={hiddenDobRef}
              type="date" 
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                if (e.target.value) {
                  const date = new Date(e.target.value);
                  const formattedDate = date.toLocaleDateString('en-GB'); // dd/mm/yyyy format
                  setForm({...form, dob: formattedDate});
                }
              }}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={() => {
              if (hiddenDobRef.current) {
                hiddenDobRef.current.showPicker();
              }
            }}>
              <img src="/assets/images/webmetacura/Vector.png" alt="Calendar" className="w-5 h-5" />
            </span>
          </div>

          <select 
            value={form.gender} 
            onChange={(e) => setForm({...form, gender: e.target.value})} 
            className="rounded-lg px-4 py-3 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300 transition appearance-none pr-10 relative"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em'
            }}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Preferred not to say">Preferred not to say</option>
          </select>
                     <input type="text" placeholder="National Health ID" value={form.nhid} onChange={(e) => setForm({...form, nhid: e.target.value})} className="rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" />
                     <input type="text" placeholder="Emergency contact" value={form.emergency} onChange={(e) => setForm({...form, emergency: e.target.value})} className="rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" />
                     <input type="text" placeholder="Insurance Name" value={form.insurance} onChange={(e) => setForm({...form, insurance: e.target.value})} className="rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" />
                     <input type="text" placeholder="Insurance Policy No." value={form.policyNo} onChange={(e) => setForm({...form, policyNo: e.target.value})} className="rounded-lg px-4 py-3 bg-white/90 text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition" />
                     <div className="flex flex-col gap-4">
                                                       <div className="relative w-full">
                                                                   <input 
                                   ref={issueDateRef}
                                   type="text" 
                                   placeholder="Policy issue date" 
                                   value={form.issueDate} 
                                   onChange={(e) => setForm({...form, issueDate: e.target.value})} 
                                   className="rounded-lg px-4 py-3 w-full bg-white/90 text-gray-800 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition pr-10" 
                                 />
                <input 
                  ref={hiddenIssueDateRef}
                  type="date" 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.value) {
                      const date = new Date(e.target.value);
                      const formattedDate = date.toLocaleDateString('en-GB'); // dd/mm/yyyy format
                      setForm({...form, issueDate: formattedDate});
                    }
                  }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={() => {
                  if (hiddenIssueDateRef.current) {
                    hiddenIssueDateRef.current.showPicker();
                  }
                }}>
                  <img src="/assets/images/webmetacura/Vector.png" alt="Calendar" className="w-5 h-5" />
                </span>
              </div>
                             <div className="relative w-full">
                                                                   <input 
                                   ref={expiryDateRef}
                                   type="text" 
                                   placeholder="Policy expiry Date" 
                                   value={form.expiryDate} 
                                   onChange={(e) => setForm({...form, expiryDate: e.target.value})} 
                                   className="rounded-lg px-4 py-3 w-full bg-white/90 text-gray-800 placeholder:text-black focus:outline-none focus:ring-2 focus:ring-purple-300 transition pr-10" 
                                 />
                <input 
                  ref={hiddenExpiryDateRef}
                  type="date" 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.value) {
                      const date = new Date(e.target.value);
                      const formattedDate = date.toLocaleDateString('en-GB'); // dd/mm/yyyy format
                      setForm({...form, expiryDate: formattedDate});
                    }
                  }}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer z-10" onClick={() => {
                  if (hiddenExpiryDateRef.current) {
                    hiddenExpiryDateRef.current.showPicker();
                  }
                }}>
                  <img src="/assets/images/webmetacura/Vector.png" alt="Calendar" className="w-5 h-5" />
                </span>
              </div>
           </div>
                     <button type="submit" className="mt-2 md:mt-4 w-full md:w-40 self-end bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg py-2 transition">Submit</button>
        

        </form>
        {/* Right: Sales by Category Card */}
                 <div className="flex-1 flex items-start justify-center mt-16">
           <div className="w-full max-w-md bg-white rounded-[6px] shadow-xl p-6 md:p-8 flex flex-col border border-white/20">
             <h3 className="text-lg font-semibold text-gray-700 mb-2">Sales by Category</h3>
             <div className="flex-1 flex items-center justify-center pb-4">
               <ReactApexChart series={salesByCategory.series} options={salesByCategory.options} type="donut" height={280} width={'100%'} />
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

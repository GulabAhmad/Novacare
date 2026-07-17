'use client';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { toggleSidebar } from '@/store/themeConfigSlice';
import { IRootState } from '@/store';
import { useState, useEffect } from 'react';
import IconCaretsDown from '@/components/icon/icon-carets-down';
import IconMenuDashboard from '@/components/icon/menu/icon-menu-dashboard';
import IconMinus from '@/components/icon/icon-minus';
import { MessageSquarePlus, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getTranslation } from '@/i18n';
import IconTrendingUp from '@/components/icon/icon-trending-up';
import { BarChart, BookOpen, Brain, Calendar, ChartBar, Package, PhoneCall, Settings, Target, Users } from 'lucide-react';
import IconMail from '@/components/icon/icon-mail';
import IconEdit from '@/components/icon/icon-edit';
import IconFile from '@/components/icon/icon-file';
import IconPlus from '@/components/icon/icon-plus';
import IconMapPin from '@/components/icon/icon-map-pin';
import IconDollarSign from '@/components/icon/icon-dollar-sign';
import IconCalendar from '@/components/icon/icon-calendar';
import IconLogout from '@/components/icon/icon-logout';
import { authService } from '@/lib/api/auth';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { t } = getTranslation();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    
    // Check if current route is doctor-related
    const isDoctorRoute = pathname.startsWith('/doctor') || (pathname.includes('doctor') && !pathname.startsWith('/profiles') && !pathname.startsWith('/patient-doctor'));
    
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

    const handleLogout = async () => {
        try {
            await authService.logout();
            window.location.href = '/login';
        } catch (error) {
            console.error('Logout error:', error);
            // Fallback logout
            window.location.href = '/login';
        }
    };

    // Patient Sidebar Items
    const PatientSidebarItems = () => (
        <>
            {/* Metacura Header */}
            <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>Metacura</span>
                </h2>
            </li>

            {/* Dashboard Button */}
            <li className="nav-item">
                <Link href="/dashboardmetacura" className="group">
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 group-hover:!text-white" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Dashboard')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item group relative">
                <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-2 text-left focus:outline-none"
                    onClick={() => toggleMenu('profile')}
                >
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Profile')}</span>
                    </div>
                    <svg className={`w-4 h-4 text-white/60 group-hover:text-white transition-transform ${currentMenu === 'profile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <ul className={`mt-2 ml-7 space-y-1 transition-all duration-300 ${currentMenu === 'profile' ? 'block' : 'hidden'}`}>
                    <li>
                        <Link href="/profiles/details" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Profile details')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/profiles/medicalhistory" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Medical History')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/profiles/doctor" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Preferred Doctor')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/profiles/pharmacy" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Preferred Pharmacy')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/profiles/hospital" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Preferred Hospital')}
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item group relative">
                <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-2 text-left focus:outline-none"
                    onClick={() => toggleMenu('medicalRecords')}
                >
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Medical Records')}</span>
                    </div>
                    <svg className={`w-4 h-4 text-white/60 group-hover:text-white transition-transform ${currentMenu === 'medicalRecords' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <ul className={`mt-2 ml-7 space-y-1 transition-all duration-300 ${currentMenu === 'medicalRecords' ? 'block' : 'hidden'}`}>
                    <li>
                        <Link href="/medical-Records/upload-file" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Medical Records')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/medical-Records/speech-to-text" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Speech to Text')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/medical-Records/scan-file" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Scan File')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/medical-Records/add-audio" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Add Audio')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/medical-Records/add-images" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Upload File')}
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <Link href="/health-insight" className="group">
                    <div className="flex items-center">
                        <IconMail className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('AI Health Insights')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/appointment" className="group">
                    <div className="flex items-center">
                        <IconEdit className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Appointment')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/patient-doctor" className="group">
                    <div className="flex items-center">
                        <IconFile className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('My Doctor')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/pharmacy" className="group">
                    <div className="flex items-center">
                        <IconMapPin className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('My Pharmacy')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/hospital" className="group">
                    <div className="flex items-center">
                        <IconMapPin className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('My Hospital')}</span>
                    </div>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/allrecords-list" className="group">
                    <div className="flex items-center">
                        <IconCalendar className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Medical Record List')}</span>
                    </div>
                </Link>
                
            </li>

            <li className="nav-item">
                <Link href="/notepad" className="group">
                    <div className="flex items-center">
                        <IconCalendar className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('My Notepad')}</span>
                    </div>
                </Link>
                
            </li>

            <li className="nav-item">
                <Link href="/patient-agents" className="group">
                    <div className="flex items-center">
                        <IconCalendar className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Doctor Agent')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/subscription" className="group">
                    <div className="flex items-center">
                        <IconCalendar className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('My Subscription')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/AI-health-articles" className="group">
                    <div className="flex items-center">
                        <IconDollarSign className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Health Articles')}</span>
                    </div>
                </Link>
            </li>

            {/* Logout Button */}
            <li className="nav-item">
                <button
                    onClick={handleLogout}
                    className="w-full group text-left"
                >
                    <div className="flex items-center">
                        <IconLogout className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">Logout</span>
                    </div>
                </button>
            </li>
        </>
    );

    // Doctor Sidebar Items
    const DoctorSidebarItems = () => (
        <>
            {/* Doctor Header */}
            <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>Doctor Portal</span>
                </h2>
            </li>

            <li className="nav-item">
                <Link href="/doctor/doc-dashboard" className="group">
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Dashboard')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doctor/profile" className="group">
                    <div className="flex items-center">
                        <IconEdit className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Profile')}</span>
                    </div>
                </Link>
            </li>


            <li className="nav-item group relative">
                <button
                    type="button"
                    className="flex w-full items-center justify-between px-2 py-2 text-left focus:outline-none"
                    onClick={() => toggleMenu('doctorMedicalRecords')}
                >
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Medical Records')}</span>
                    </div>
                    <svg className={`w-4 h-4 text-white/60 group-hover:text-white transition-transform ${currentMenu === 'doctorMedicalRecords' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <ul className={`mt-2 ml-7 space-y-1 transition-all duration-300 ${currentMenu === 'doctorMedicalRecords' ? 'block' : 'hidden'}`}>
                    <li>
                        <Link href="/doctor/medical-records/upload-medicalrecords" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Medical Records')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/doctor/medical-records/speech" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Speech to Text')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/doctor/medical-records/scan-docs" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Scan File')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/doctor/medical-records/audio-file" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Add Audio')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/doctor/medical-records/upload-files" className="flex items-center px-2 py-2 rounded text-white/70 hover:bg-white/5 hover:text-white text-sm">
                            <IconMinus className="w-4 h-4 mr-2 text-white/60" />
                            {t('Upload File')}
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <Link href="/doctor/doc-appointement" className="group">
                    <div className="flex items-center">
                        <IconEdit className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Appointment')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doctor/medical-history" className="group">
                    <div className="flex items-center">
                        <IconEdit className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Medical History')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/mycare-doctoragent" className="group">
                    <div className="flex items-center">
                        <IconMail className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Doctor Research Agent')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doctor/add-mycare" className="group">
                    <div className="flex items-center">
                        <IconEdit className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Add MyCare')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doctor-prescription" className="group">
                    <div className="flex items-center">
                        <IconFile className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Add Prescription')}</span>
                    </div>
                </Link>
            </li>

            <li className="nav-item">
                <Link href="/doctor/doc-healtharticles" className="group">
                    <div className="flex items-center">
                        <IconMapPin className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">{t('Health Articles')}</span>
                    </div>
                </Link>
            </li>

            {/* Sales Management Section for Doctors */}
            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Overview')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/sales-dashboard" className="group">
                    <div className="flex items-center">
                        <IconMenuDashboard className="shrink-0 group-hover:!text-white" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Sales Dashboard')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Products Management')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/products" className="group">
                    <div className="flex items-center">
                        <Package className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Products')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Training')}</span>
                </h2>
            </li> */}
{/* 
            <li className="nav-item">
                <Link href="/doctor/live-calls" className="group">
                    <div className="flex items-center">
                        <PhoneCall className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Live Calls')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/progress" className="group">
                    <div className="flex items-center">
                        <BarChart className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Progress')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Chat')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/chat" className="group">
                    <div className="flex items-center">
                        <MessageSquarePlus className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Chat')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Coaching & Goals')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/coaching" className="group">
                    <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Coaching')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/goals" className="group">
                    <div className="flex items-center">
                        <Target className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Goals')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/schedule" className="group">
                    <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Schedule')}</span>
                    </div>
                </Link>
            </li> */}
{/* 
            <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Team & Analytics')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/team" className="group">
                    <div className="flex items-center">
                        <Users className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Team Management')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/team-insight" className="group">
                    <div className="flex items-center">
                        <ChartBar className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 text-sm rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('Team Insights')}</span>
                    </div>
                </Link>
            </li> */}

            {/* <li className="menu nav-item">
                <h2 className="-mx-4 mb-1 flex items-center text-xs px-7 py-3 uppercase">
                    <IconMinus className="hidden h-5 w-4 flex-none" />
                    <span>{t('Settings')}</span>
                </h2>
            </li> */}

            {/* <li className="nav-item">
                <Link href="/doctor/settings" className="group">
                    <div className="flex items-center">
                        <Settings className="w-5 h-5 text-black dark:text-[#506690] dark:group-hover:text-white-dark" />
                        <span className="text-black ltr:pl-3 rtl:pr-3 text-sm dark:text-[#506690] dark:group-hover:text-white-dark">{t('Settings')}</span>
                    </div>
                </Link>
            </li> */}

            {/* Logout Button */}
            <li className="nav-item">
                <button
                    onClick={handleLogout}
                    className="w-full group text-left"
                >
                    <div className="flex items-center">
                        <IconLogout className="shrink-0 text-white/70 group-hover:text-white" />
                        <span className="ltr:pl-3 rtl:pr-3 text-sm text-white/80 group-hover:text-white">Logout</span>
                    </div>
                </button>
            </li>
        </>
    );

    return (
        <div className="dark">
            <nav
                className={`sidebar fixed bottom-0 top-0 z-40 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 text-white-dark`}
            >
                <div className="h-full bg-black">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img src="/assets/images/webmetacura/metacuraicon.png" alt="Metacura" className="w-8 h-8" />
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                                {isDoctorRoute ? 'Metacura Doctor' : 'Metacura'}
                            </span>
                        </Link>

                        <button
                            type="button"
                            className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconCaretsDown className="m-auto rotate-90" />
                        </button>
                    </div>
                    <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
                        <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                            {/* Conditionally render sidebar items based on route */}
                            {isDoctorRoute ? <DoctorSidebarItems /> : <PatientSidebarItems />}
                        </ul>
                        <div className="sticky p-4">
                            <div className="rounded-lg bg-[#1E2436] p-4">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <IconTrendingUp className="p-1 w-6 h-6 bg-gray-700 rounded text-blue-500 " />
                                            <h3 className="text-white font-semibold">Pro Features</h3>
                                        </div>
                                        <p className="text-[#506690] text-sm">Unlock advanced AI coaching and team analytics</p>
                                    </div>
                                </div>
                                <button className="w-full mt-3 bg-[#282E3F] text-white text-sm py-2 rounded-lg hover:bg-[#323847] transition-colors">
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;

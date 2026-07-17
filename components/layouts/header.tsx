'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleTheme, toggleSidebar, toggleRTL } from '@/store/themeConfigSlice';
import IconLaptop from '@/components/icon/icon-laptop';
import IconBellBing from '@/components/icon/icon-bell-bing';
import IconUser from '@/components/icon/icon-user';
import IconMail from '@/components/icon/icon-mail';
import IconMenu from '@/components/icon/icon-menu';
import IconInfoCircle from '@/components/icon/icon-info-circle';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import Cookies from 'js-cookie';
import { getUserEmailFromToken, getUserNameFromToken } from '@/utils/auth';
import { authService } from '@/lib/api/auth';
import { Switch } from "@/components/ui/switch";

const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();
    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState({ firstName: '', lastName: '' });
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
    const [notificationSettings, setNotificationSettings] = useState({
        general: true,
        medicine: true,
        appointment: false
    });

    useEffect(() => {
        const email = getUserEmailFromToken();
        if (email) {
            setUserEmail(email);
        }
        
        const { firstName, lastName } = getUserNameFromToken();
        if (firstName || lastName) {
            setUserName({ 
                firstName: firstName || '', 
                lastName: lastName || '' 
            });
        }
    }, []);

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [pathname]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
        router.refresh();
    };

    function createMarkup(messages: any) {
        return { __html: messages };
    }
    const [messages, setMessages] = useState([
        {
            id: 1,
            image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
            title: 'Congratulations!',
            message: 'Your OS has been updated.',
            time: '1hr',
        },
        {
            id: 2,
            image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
            title: 'Did you know?',
            message: 'You can switch between artboards.',
            time: '2hr',
        },
        {
            id: 3,
            image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
            title: 'Something went wrong!',
            message: 'Send Reposrt',
            time: '2days',
        },
        {
            id: 4,
            image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
            title: 'Warning',
            message: 'Your password strength is low.',
            time: '5days',
        },
    ]);

    const removeMessage = (value: number) => {
        setMessages(messages.filter((user) => user.id !== value));
    };

    const [notifications, setNotifications] = useState([
        {
            id: 1,
            profile: 'user-profile.jpeg',
            message: '<strong class="text-sm mr-1">John Doe</strong>invite you to <strong>Prototyping</strong>',
            time: '45 min ago',
        },
        {
            id: 2,
            profile: 'profile-34.jpeg',
            message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
            time: '9h Ago',
        },
        {
            id: 3,
            profile: 'profile-16.jpeg',
            message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
            time: '9h Ago',
        },
    ]);

    const removeNotification = (value: number) => {
        setNotifications(notifications.filter((user) => user.id !== value));
    };

    const [search, setSearch] = useState(false);
    const handleLogout = async () => {
        try {
            await authService.logout();
            router.push('/login');
        } catch (error) {
            console.error('Logout error:', error);
            // Fallback logout
            Cookies.remove('access_token');
            Cookies.remove('refresh_token');
            Cookies.remove('user_type');
            router.push('/login');
        }
    }

    const handleNotificationClick = () => {
        setShowNotificationDropdown(!showNotificationDropdown);
    };

    return (
        <header className={`z-50 ${themeConfig.semidark && themeConfig.menu === 'horizontal' ? 'dark' : ''}`}>
            <div className="shadow-sm">
                <div className="relative flex w-full items-center justify-between bg-transparent px-5 py-2.5 backdrop-blur-[17.7px]" style={{ height: '61px' }}>
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img src="/assets/images/webmetacura/metacuraicon.png" alt="Metacura" className="w-8 h-8" />
                            <span className="hidden align-middle text-2xl font-semibold transition-all duration-300 ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light md:inline">Metacura</span>
                        </Link>
                        <button
                            type="button"
                            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/20 transition-all duration-200"
                            onClick={() => dispatch(toggleSidebar())}
                        >
                            <IconMenu className="w-5 h-5 text-gray-700" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-2">
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                            <IconUser className="w-4 h-4 text-gray-700" />
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                            <IconLaptop className="w-4 h-4 text-gray-700" />
                        </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                            <img src="/assets/images/flags/US.svg" alt="US" className="w-4 h-4" />
                                    </button>
                        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow">
                            <IconMail className="w-4 h-4 text-gray-700" />
                                    </button>
                        <div className="relative">
                            <button
                                className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                                onClick={handleNotificationClick}
                            >
                                <IconBellBing className="w-4 h-4 text-gray-700" />
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gray-800 text-xs text-white">3</span>
                            </button>
                            
                            {/* Notification Dropdown */}
                            {showNotificationDropdown && (
                                <div className="absolute right-0 top-10 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-lg font-semibold text-[#9577CA]">Notification</h3>
                                            <span className="bg-[#9577CA] text-white text-xs px-2 py-1 rounded-full">3New</span>
                        </div>
                                        
                                        <div className="space-y-4">
                                            {/* General Notifications */}
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <IconInfoCircle className="w-5 h-5 text-gray-400" />
                        <div>
                                                            <h4 className="font-semibold text-gray-800">General Notifications</h4>
                                                            <p className="text-sm text-gray-600">Allow the app to send push notification to your lock screen</p>
                                                        </div>
                                                    </div>
                                <Switch
                                                         checked={notificationSettings.general}
                                                         onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, general: checked }))}
                                                         className="data-[state=checked]:bg-[#9577CA] data-[state=unchecked]:bg-gray-300"
                                                     />
                                                </div>
                        </div>
                       
                                            {/* Medicine Reminders */}
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <IconInfoCircle className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">Medicine Reminders</h4>
                                                            <p className="text-sm text-gray-600">Allow the app to send push notification to your lock screen</p>
                                                                </div>
                                                                </div>
                                                                <Switch
                                                         checked={notificationSettings.medicine}
                                                         onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, medicine: checked }))}
                                                         className="data-[state=checked]:bg-[#9577CA] data-[state=unchecked]:bg-gray-300"
                                                     />
                                                            </div>
                                            </div>

                                            {/* Appointment Alerts */}
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <IconInfoCircle className="w-5 h-5 text-gray-400" />
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800">Appointment Alerts</h4>
                                                            <p className="text-sm text-gray-600">Allow the app to send push notification to your lock screen</p>
                                                        </div>
                                                </div>
                                                    <Switch
                                                        checked={notificationSettings.appointment}
                                                        onCheckedChange={(checked) => setNotificationSettings(prev => ({ ...prev, appointment: checked }))}
                                                        className="data-[state=checked]:bg-[#9577CA] data-[state=unchecked]:bg-gray-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

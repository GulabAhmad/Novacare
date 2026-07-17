'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/api/auth';

interface RouteProtectionProps {
    children: React.ReactNode;
    allowedUserTypes?: string[];
    redirectTo?: string;
}

export default function RouteProtection({ 
    children, 
    allowedUserTypes = ['patient', 'doctor'], 
    redirectTo 
}: RouteProtectionProps) {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        if (!authService.isAuthenticated()) {
            router.push('/login');
            return;
        }

        // Get user type
        const userType = authService.getUserType();
        
        // Check if user type is allowed
        if (!allowedUserTypes.includes(userType)) {
            // Redirect based on user type
            if (userType === 'patient') {
                router.push('/dashboardmetacura');
            } else if (userType === 'doctor') {
                router.push('/doctor/doc-dashboard');
            } else {
                // Default redirect
                router.push(redirectTo || '/login');
            }
            return;
        }
    }, [router, allowedUserTypes, redirectTo]);

    // Show loading or children based on authentication status
    if (!authService.isAuthenticated()) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#9577CA] mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return <>{children}</>;
} 
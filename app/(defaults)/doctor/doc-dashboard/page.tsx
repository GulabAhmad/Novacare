import React from "react";
import DocDashboard from "@/components/doctor Components/doctor-dashboard/doc-dashboard";
import RouteProtection from '@/components/auth/RouteProtection';

export default function DocDashboardPage() {
    return (
        <RouteProtection allowedUserTypes={['doctor']}>
            <div>
                <DocDashboard />
            </div>
        </RouteProtection>
    )
} 
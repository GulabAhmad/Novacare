import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LargeVitalSignCardProps {
  title: string;
  value: string;
  status: string;
  icon: LucideIcon;
  titleColor?: string;
}

export const LargeVitalSignCard: React.FC<LargeVitalSignCardProps> = ({ title, value, status, icon: Icon, titleColor = 'text-gray-700' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 w-full h-full">
      <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
            <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
          </div>
          <h3 className={`text-xs sm:text-sm font-medium ${titleColor}`}>{title}</h3>
        </div>
      </div>
      <div className="mb-2 sm:mb-3 mt-8 sm:mt-12 md:mt-16 lg:mt-24">
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="inline-block bg-gray-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
        {status}
      </div>
    </div>
  );
}; 
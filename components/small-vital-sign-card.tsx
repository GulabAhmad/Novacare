import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SmallVitalSignCardProps {
  title: string;
  value: string;
  status: string;
  icon: LucideIcon;
  titleColor?: string;
}

export const SmallVitalSignCard: React.FC<SmallVitalSignCardProps> = ({ title, value, status, icon: Icon, titleColor = 'text-gray-700' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 w-full">
      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
        <div className="p-1.5 sm:p-2 bg-purple-100 rounded-lg">
          <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
        </div>
        <h3 className={`text-xs sm:text-sm font-medium ${titleColor}`}>{title}</h3>
      </div>
      <div className="mb-1 sm:mb-2">
        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900">{value}</p>
      </div>
      <div className="inline-block bg-gray-900 text-white px-1.5 sm:px-2 py-1 rounded-full text-xs font-medium">
        {status}
      </div>
    </div>
  );
}; 
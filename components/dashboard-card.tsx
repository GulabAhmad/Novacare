import React from 'react';

interface DashboardCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleColor?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, children, className = '', titleColor = 'text-gray-800' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${className}`}>
      {title && (
        <h3 className={`text-lg font-semibold mb-4 ${titleColor}`}>{title}</h3>
      )}
      {children}
    </div>
  );
}; 
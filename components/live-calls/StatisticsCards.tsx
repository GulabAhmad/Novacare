import React from 'react';

interface StatCard {
  title: string;
  value: number;
  color: string;
  icon?: React.ReactNode;
}

interface StatisticsCardsProps {
  stats: StatCard[];
}

const StatisticsCards: React.FC<StatisticsCardsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="rounded-xl shadow-sm overflow-hidden"
          style={{ backgroundColor: stat.color }}
        >
          <div className="p-5 flex justify-between items-center">
            <div>
              <p className="text-white text-opacity-80 text-sm font-medium">{stat.title}</p>
              <h3 className="text-3xl font-bold mt-1 text-white">{stat.value}</h3>
            </div>
            <div 
              className="p-3 rounded-full"
              style={{ backgroundColor: `${stat.color}80` }}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCards; 
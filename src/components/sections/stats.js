import React from 'react';

const StatBar = ({ label, value }) => {
  // Set a maximum width for the bar
  const maxWidth = 100;
  // Calculate the width of the bar based on the value
  const width = `${(value / 50 ) * maxWidth}px`; // Assuming the maximum stat value is 50

  return (
    <div className="flex items-center mb-2">
      <div className="w-128 ">{label}</div>
      <div className="bg-gray-200 h-4 flex-grow relative">
        <div className="bg-blue-500 h-full" style={{ width }}></div>
        <span className="absolute right-1 mr-2">{value}</span>
      </div>
    </div>
  );
};

const Stats = ({ pokemon }) => (
  <div>
    <h3 className="text-lg font-semibold border-b pb-2">Stats</h3>
    <div className="mt-2">
      {pokemon.stats.map((statInfo) => (
        <StatBar key={statInfo.stat.name} label={statInfo.stat.name} value={statInfo.base_stat} />
      ))}
    </div>
  </div>
);

export default Stats;

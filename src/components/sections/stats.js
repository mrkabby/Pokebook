import React from 'react';
import { useTheme } from '../themecontext';

const StatBar = ({ label, value, }) => {
  const { themeColor } = useTheme();
  // Set a maximum width for the bar
  const maxWidth = 200;
  // Calculate the width of the bar based on the value
  const width = `${(value / 255) * maxWidth}px`; // Assuming the maximum stat value is 255

  return (
    <div className="flex items-center mb-2">
      <div className="w-12 ">{label}</div>
      <div className="bg-gray-200 h-4 flex-grow relative ">
        <div className=" h-full" style={{ 
          width,
          backgroundColor :themeColor
          
          }}></div>
        <span className="absolute right-1 mr-2">{value}</span>
      </div>
    </div>
  );
};

const Stats = ({ pokemon, themeColor }) => (
  <div>
    <h3 className="text-lg font-semibold border-b pb-2">Stats</h3>
    <div className="mt-2">
      {pokemon.stats.map((statInfo) => (
        <StatBar
          key={statInfo.stat.name}
          label={statInfo.stat.name}
          value={statInfo.base_stat}
          themeColor={themeColor} // Pass the themeColor prop to the StatBar component
        />
      ))}
    </div>
  </div>
);

export default Stats;

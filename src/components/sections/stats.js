import React from 'react';

const Stats = ({ pokemon }) => {

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center pb-4 pt-2">
          <h1 className="font-bold text-xl">Stats</h1>
        </div>
        <div className="px-6 py-4 bg-gradient-to-r from-[#FFFFFF] via-[#F1F1F1] to-[#FFFFFF] rounded-lg shadow">
          <div className="space-y-6 flex flex-col">
            {pokemon.stats.map((pokestats) => (
              <div key={pokestats.stat.name} className="flex items-center h-6">
                <span className="w-40 text-zinc-700 capitalize text-base">{pokestats.stat.name.replace('special-', 'Special ')}</span>
                <div className="flex-1 mx-2 bg-zinc-300 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full"
                    style={{
                      width: `${pokestats.base_stat > 100 ? 100 : pokestats.base_stat}%`,
                      background: '#FF4081',
                    }}
                  ></div>
                </div>
                <span className="w-8 text-right font-bold text-zinc-700">{pokestats.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
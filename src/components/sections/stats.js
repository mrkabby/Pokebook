import React from 'react';
import { useTheme } from '../themecontext';

const Stats = ({ pokemon }) => {
  const { themeColor } = useTheme();

  return (
    <>
      <div className="w-[95%]">
        <div className="flex justify-center pb-4 pt-2">
          <h1 className="font-bold text-xl">Stats</h1>
        </div>
        <div className="flex w-full px-3 py-4 bg-gradient-to-r from-[#FFFFFF] via-[#e4e1e1] to-[#FFFFFF]">
          <div className="space-y-5 w-[80%] justify-center ml-5 flex flex-col">
            {pokemon.stats.map((pokestats) => (
              <div className="flex h-4">
                <p className="w-44 lg:w-">{pokestats.stat.name}</p>
                <div className="w-full mt-2 bg-zinc-400 h-2.5 ml-1 mr-2">
                  <div
                    className="h-2.5 "
                    style={{
                      width: `${pokestats.base_stat}%`,
                      backgroundColor: themeColor,
                    }}
                  ></div>
                </div>
                <p className="w-5 ml-5">{pokestats.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
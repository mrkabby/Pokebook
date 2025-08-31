import React from "react";


const About = ({ pokemon }) => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div className="flex justify-center pb-5 pt-2">
            <h1 className="font-bold text-xl">About</h1>
          </div>
          <div className="flex w-full px-6 py-5 bg-gradient-to-r from-[#FFFFFF] via-[#F1F1F1] to-[#FFFFFF] rounded-lg shadow">
            <div className="space-y-3 px-10 flex flex-col text-zinc-500 font-medium">
              <p>Height</p>
              <p>Weight</p>
              <p>Abilities</p>
            </div>
            <div className="space-y-3 px-10 flex flex-col">
              <p className="font-bold">{pokemon.height / 10}m</p>
              <p className="font-bold">{pokemon.weight / 10}kg</p>
              <ul className="list-disc pl-5 font-bold">
                {pokemon.abilities.map((poke_ability) => (
                  <li key={poke_ability.ability.name} className="capitalize">
                    {poke_ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
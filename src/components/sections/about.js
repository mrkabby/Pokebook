const About = ({ pokemon }) => (
    <div>
      <h3 className="text-lg font-semibold border-b pb-2">About</h3>
      <div className="mt-2">
        <div className="flex justify-between">
          <span>Height</span>
          <span>{pokemon.height / 10} m</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Weight</span>
          <span>{pokemon.weight / 10} kg</span>
        </div>
        <div className="mt-2">
          <span>Abilities</span>
          <ul className="list-disc pl-5">
            {pokemon.abilities.map((abilityInfo) => (
              <li key={abilityInfo.ability.name}>{abilityInfo.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
  export default About;
  
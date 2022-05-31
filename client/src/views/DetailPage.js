import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
  const { pokemonName } = useParams();
  const [pokemonImage, setPokemonImage] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonImage(response.data.sprites.front_default);
        setPokemon(response.data);
      });
  }, []);

  if (Object.keys(pokemon).length === 0) {
    return <p>Loading</p>;
  }

  return (
    <div className="w-full h-screen p-20">
      <div className="flex flex-row bg-white rounded-lg border shadow-md h-full p-10">
        <div className="h-full border-r-2 flex justify-center">
          <img
            className="object-contain w-full h-96 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={pokemonImage}
          />
        </div>
        <div className="flex flex-col pl-20 leading-normal w-full h-full">
          <h1 className="mb-2 pt-5 text-2xl font-bold tracking-tight uppercase text-[50px] text-center text-gray-700">
            {pokemon.name}
          </h1>
          <div className="font-normal text-gray-500 flex flex-col justify-center h-full text-[30px]">
            {pokemon.stats.map((stat, index) => {
              return (
                <p className="uppercase" key={index}>
                  {stat.stat.name} : {stat.base_stat}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

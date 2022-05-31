import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=18")
      .then((response) => {
        setPokemons(response.data.results);
      });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold underline my-10">Pokemon World!</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
    </div>
  );
}

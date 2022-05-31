import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  const [pokemonImage, setPokemonImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(pokemon.url).then((result) => {
      setPokemonImage(result.data.sprites.front_default);
    });
  }, []);

  function detailButton() {
    navigate(`/${pokemon.name}`);
  }

  return (
    // <div>
    //   <h1>{pokemon.name}</h1>
    //   <img src={pokemonImage} />
    // </div>
    <div
      className="w-auto bg-white rounded-lg shadow-md border-2 m-2"
      onClick={detailButton}
    >
      <img
        className="rounded-t-lg h-48 object-cover"
        src={pokemonImage}
        alt="product image"
      />
    </div>
  );
}

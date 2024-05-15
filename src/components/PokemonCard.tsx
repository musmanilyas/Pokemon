import React from "react";
import "./PokemonCard.css";
import type { Pokemon } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  onPokemonSelect: (pokemon: string) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  onPokemonSelect,
}) => {
  return (
    <div className="pokemon-card" onClick={() => onPokemonSelect(pokemon.url)}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  );
};

export default PokemonCard;

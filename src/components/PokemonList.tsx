import React, { useEffect } from "react";
import { useGetPokemonsQuery } from "../store/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "../hooks/selectors";
import {
  selectAllPokemons,
  selectPokemon,
  selectSelectedPokemon,
  setPokemons,
} from "../store/pokemon/pokemonSlice";
import "./PokemonList.css";
import PokemonCard from "./PokemonCard";
import Header from "./Header";

const PokemonList: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector(selectAllPokemons);
  const selectedPokemon = useAppSelector(selectSelectedPokemon);

  const { data, error, isLoading } = useGetPokemonsQuery();

  useEffect(() => {
    if (data) {
      console.log("useEffect", data);
      dispatch(setPokemons(data));
      console.log("pokemons", pokemons);
    }
  }, [dispatch, data]);
  const handleClick = (url: string) => {
    const idList = url.split("/");
    console.log("id", idList);
    dispatch(selectPokemon(idList[idList.length - 2]));
    const val = selectedPokemon;
    console.log("sele", val);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="pokemon-list">
      <Header title={"PokeReact"} />
      {pokemons?.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          onPokemonSelect={handleClick}
        />
      ))}
    </div>
  );
};

export default PokemonList;

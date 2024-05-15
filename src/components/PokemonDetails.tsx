import React, { useEffect } from "react";
import "./PokemonDetail.css";
import Header from "./Header"; // Assuming Header component is in the same directory
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  selectSelectedPokemon,
  selectAllPokemons,
} from "../store/pokemon/pokemonSlice";
import { useGetPokemonByIdQuery } from "../store/pokemon/pokemonApi";

const PokemonDetail: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedPokemon = useAppSelector(selectSelectedPokemon);
  const pokemons = useAppSelector(selectAllPokemons);
  const { data, error, isLoading } = useGetPokemonByIdQuery(
    selectedPokemon ? Number(selectedPokemon) : 0
  );

  useEffect(() => {
    if (data) {
      console.log("useEffect", data);

      console.log("PokemonDetail", selectedPokemon);
    }
  }, [dispatch, data]);
  if (!data) return <></>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div className="pokemon-detail">
      <Header title={data.name} />
      <div className="detail-content">
        <img
          src={pokemons.find((pokemon) => pokemon.name == data.name)?.image}
          alt={data.name}
        />

        <table>
          <tbody>
            <tr>
              <td className="heading-font">Name</td>
              <td>{data?.name}</td>
            </tr>
            <tr>
              <td className="heading-font">Height</td>
              <td>{parseInt(data?.height) * 10} cm</td>
            </tr>
            <tr>
              <td className="heading-font">Weight</td>
              <td>{Number(data?.weight) / 10} kg</td>
            </tr>
            <tr>
              <td className="heading-font">Types</td>
              <td>
                {data?.types.map((val) => {
                  return <div>{val.type.name + " "}</div>;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PokemonDetail;

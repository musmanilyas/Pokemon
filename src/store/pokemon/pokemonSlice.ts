import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { Pokemon } from "../../types/pokemon";

interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null | string;
}

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
    selectPokemon: (state, action: PayloadAction<string>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemons, selectPokemon } = pokemonSlice.actions;

export const selectAllPokemons = (state: RootState) => state.pokemon.pokemons;
export const selectSelectedPokemon = (state: RootState) =>
  state.pokemon.selectedPokemon;

export default pokemonSlice.reducer;

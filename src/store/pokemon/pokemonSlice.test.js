import pokemonReducer, { setPokemons, selectPokemon } from "./pokemonSlice";

describe("pokemon reducer", () => {
  it("should handle setPokemons", () => {
    const initialState = {
      pokemons: [],
      selectedPokemon: null,
    };

    const pokemonData = [
      {
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
        image: "",
      },
    ];

    const action = setPokemons(pokemonData);
    const state = pokemonReducer(initialState, action);

    expect(state.pokemons).toEqual(pokemonData);
  });
});
describe("pokemon reducer", () => {
  it("should handle selectPokemon", () => {
    const initialState = {
      pokemons: [],
      selectedPokemon: null,
    };

    const selectedPokemonId = "25";

    const action = selectPokemon(selectedPokemonId);
    const state = pokemonReducer(initialState, action);

    expect(state.selectedPokemon).toEqual(selectedPokemonId);
  });
});

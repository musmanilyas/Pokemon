import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "../../types/pokemon";
import type { PokemonDetails } from "../../types/pokemonDetails";
const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Pokemon"],
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      queryFn: async (_, ___, __, baseQuery) => {
        try {
          const response = await baseQuery({ url: "/pokemon" });

          const result = response.data as Record<string, []> | undefined;

          const imagePromises = result?.results.map((_, index) =>
            fetch(
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1 //to fetch images
              }.png`
            )
          );

          const imageResponses = await Promise.all(imagePromises || []);

          const imageUrls = await Promise.all(
            imageResponses.map((response) => response.url)
          );
          const finalRes = result?.results as Pokemon[];

          const pokemonsWithImages = finalRes.map((pokemon, index) => ({
            ...pokemon,
            image: imageUrls[index],
          }));

          return { data: pokemonsWithImages };
        } catch (error) {
          throw error;
        }
      },
    }),
    getPokemonById: builder.query<PokemonDetails, number>({
      query: (id) => `pokemon/${id}`,
      providesTags: (_, __, id) => [{ type: "Pokemon", id }],
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;

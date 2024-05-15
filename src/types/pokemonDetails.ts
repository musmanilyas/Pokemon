export interface PokemonDetails {
  name: string;
  height: string;
  weight: string;
  types: Type[];
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

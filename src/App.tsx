import React from "react";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetails";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="main">
      <div className="pokemon-list">
        <PokemonList />
      </div>
      <div className="pokemon-details ">
        <PokemonDetail />
      </div>
    </div>
  );
};

export default App;

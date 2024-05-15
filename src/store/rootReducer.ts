import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;

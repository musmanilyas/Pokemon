import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { pokemonApi } from "./pokemon/pokemonApi";

import pokemonReducer from "./pokemon/pokemonSlice";
const rootReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  pokemon: pokemonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;

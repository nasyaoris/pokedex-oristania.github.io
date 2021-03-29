/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { pokemonListPageReducer } from "../containers/PokemonListPage/reducer"
import { myPokemonReducer } from "../containers/MyPokemonsPage/reducer"

export default history =>
  combineReducers({
    router: connectRouter(history),
    pokemonListPageReducer: pokemonListPageReducer,
    myPokemonReducer: myPokemonReducer,
  });

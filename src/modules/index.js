/* eslint-disable */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { myPokemonReducer } from "../containers/MyPokemonsPage/reducer"

export default history =>
  combineReducers({
    router: connectRouter(history),
    myPokemonReducer: myPokemonReducer,
  });

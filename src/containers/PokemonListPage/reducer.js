import {
    FETCH_POKEMONS,
    FETCH_POKEMONS_SUCCESS,
    FETCH_POKEMONS_FAILED,
} from './constants'

const initialState = {
    pokemons: {},
    isLoading: false,
    isError: false,
}

export function pokemonListPageReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_POKEMONS:
        return {
          ...state,
          isLoading: true
        }
      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          pokemons: action.payload.data
        };
      case FETCH_POKEMONS_FAILED:
        return {
          isError: true,
          isLoading: false,
        }
      default:
        return state;
    }
  }
  

  
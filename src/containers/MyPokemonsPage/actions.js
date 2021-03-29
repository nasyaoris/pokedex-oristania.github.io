export const CATCH_POKEMON = 'CATCH_POKEMON'
export const FETCH_MY_POKEMON = 'FETCH_MY_POKEMON'
export const SET_POKEMON_LIST = 'SET_POKEMON_LIST'
export const RELEASE_POKEMON = 'RELEASE_POKEMON'


export const catchPokemon = pokemon => {
    return dispatch => {
      dispatch({ type: CATCH_POKEMON, payload: pokemon })
  };
}
  
export const fetchMyPokemons = () => {
    return dispatch => {
        if (!localStorage.getItem('myPokemonList')) {
            dispatch({ type: SET_POKEMON_LIST });
        } 
        const pokemons = localStorage.getItem('myPokemonList');
        dispatch({ type: FETCH_MY_POKEMON, payload: JSON.parse(pokemons) });
    };
  };



  export const releasePokemon = id => {
    return dispatch => {
      try {
        return dispatch({ type: RELEASE_POKEMON, payload: id });
      } catch (err) {
        console.log(err);
      };
    };
  };
  
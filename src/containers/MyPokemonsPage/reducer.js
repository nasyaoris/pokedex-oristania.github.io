
import {
    CATCH_POKEMON,
    FETCH_MY_POKEMON,
    SET_POKEMON_LIST,
    RELEASE_POKEMON,
} from './actions'

const initialState = {
    myPokemonList: [],
    isLoading: true,
    isError: false,
    error: null
};

export const myPokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATCH_POKEMON:
            const pokemons = JSON.parse(localStorage.getItem('myPokemonList'))
            let res = [...pokemons, action.payload];
            localStorage.setItem('myPokemonList', JSON.stringify(res));
            return { ...state, myPokemonList: res, isLoading: false };
        case FETCH_MY_POKEMON:
            return { ...state, myPokemonList: action.payload, isLoading: false };
        case SET_POKEMON_LIST:
            localStorage.setItem('myPokemonList', '');
            return { ...state, myPokemonList: [], isLoading: false };
        case RELEASE_POKEMON:
            let newArr = state.myPokemonList?.filter(e => e.nickname !== action.payload);
            localStorage.setItem('myPokemonList', JSON.stringify(newArr));
            return { ...state, myPokemonList: newArr, isLoading: false };
        default:
            return state;
    };
};

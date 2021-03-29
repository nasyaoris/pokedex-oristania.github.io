import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"

import PokemonCard from './components/PokemonCard'
import { 
  fetchMyPokemons,
  releasePokemon,
} from "./actions"

import { MyPokemonListContainer } from './style'


function MyPokemonListPage(props) {

  useEffect(() => {
    if (!localStorage.getItem('myPokemonList')) {
      localStorage.setItem('myPokemonList', JSON.stringify([]));
    } 
    props.fetchMyPokemons()
  }, [props.fetchMyPokemons])

  return (
    <MyPokemonListContainer>
      {
        props.isLoading && <div>Loading...</div>
      }
      <h1>My Pokedex</h1>
      <div className="container">
        <div className="list">
        {
            props.myPokemonList?.map(el => {
             return <PokemonCard pokemon={el} onDelete={() => props.releasePokemon(el.nickname)} />
            })
          }
        </div>
      </div>
    </MyPokemonListContainer>
  )
}

MyPokemonListPage.propTypes = {
  myPokemonList: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isLoading: PropTypes.bool,
  fetchMyPokemons: PropTypes.func,
  releasePokemon: PropTypes.func

}

function mapStateToProps(state) {
  return {
    myPokemonList: state.myPokemonReducer.myPokemonList,
    isLoading: state.myPokemonReducer.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMyPokemons: () => dispatch(fetchMyPokemons()),
    releasePokemon: (id) => dispatch(releasePokemon(id)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPokemonListPage);


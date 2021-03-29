import React, { useEffect, useState } from "react";
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
    props.fetchMyPokemons()
    console.info(props.myPokemonList)
  }, [])
  return (
    <MyPokemonListContainer>
      <div className="container">
          {
            props.myPokemonList?.map(el => {
             return <PokemonCard pokemon={el} onDelete={() => props.releasePokemon(el.data.id)} />
            })
          }
      </div>
    </MyPokemonListContainer>
  )
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


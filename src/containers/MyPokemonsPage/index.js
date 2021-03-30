import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"

import PokemonCard from './components/PokemonCard'
import { 
  fetchMyPokemons,
  releasePokemon,
} from "./actions"

import { MyPokemonListContainer } from './style'


function MyPokemonListPage({
  myPokemonList,
  isLoading,
  fetchMyPokemons,
  releasePokemon
}) {

  const routeChange = (id) => {
    let path = `/detail/1/${id}`;
    window.location.href = path
  }

  useEffect(() => {
    if (!localStorage.getItem('myPokemonList')) {
      localStorage.setItem('myPokemonList', JSON.stringify([]));
    } 
    fetchMyPokemons()
  }, [fetchMyPokemons])

  return (
    <MyPokemonListContainer>
      {
        isLoading && <div>Loading...</div>
      }
      <h1>My Pokedex</h1>
      <div className="container">
        <div className="list">
        {
            myPokemonList?.map((el, idx) => {
             return <PokemonCard pokemon={el} onDelete={() => releasePokemon(el.nickname)} onClick={() => routeChange(el.data.name)} key={idx} />
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


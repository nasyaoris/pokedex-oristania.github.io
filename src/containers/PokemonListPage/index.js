import React, { useState } from "react";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router";
import randomColor from "randomcolor";

import PokemonCard from './components/PokemonCard'
import Pagination from './components/Pagination'
import { PokemonListContainer } from './style'
import { GET_POKEMONS } from './actions'


function PokemonListPage(props) {
  const { page } = useParams()
  const [currentPage, setCurrentPage] = useState(page ? page : 1);
  const routeChange = (id) => {
    let path = `/detail/${currentPage}/${id}`;
    window.location.href = path
  }

  const gqlVariables = {
    limit: 1000,
    offset: 0,
  };
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <PokemonListContainer>
      <div className="container">
          <Pagination
            title=""
            emptyText="There's no Pokedex"
            isLoading={loading}
            currentPage={currentPage}
            setCurrentPage={(int) => setCurrentPage(int)}
          >
          {
            data.pokemons.results.map((el, idx) => {
            let color = randomColor()
             return <PokemonCard pokemon={el} onClick={() => routeChange(el.name)} color={color} key={idx} />
            })
          }
          </Pagination>
      </div>
    </PokemonListContainer>
  )
}

export default PokemonListPage;
